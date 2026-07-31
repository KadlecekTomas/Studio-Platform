import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const previewRoutes = [
  { name: "homepage-en", path: "/", heading: /Less chaos/i },
  { name: "homepage-cs", path: "/cs", heading: /Méně chaosu/i },
  { name: "services-en-entry", path: "/services", heading: /Kupujete/i },
  { name: "services-cs-entry", path: "/cs/sluzby", heading: /Kupujete/i },
  { name: "services-legacy", path: "/sluzby", heading: /Kupujete/i },
  { name: "discovery-sprint", path: "/sluzby/discovery-sprint", heading: /Discovery/i },
  { name: "core-build", path: "/sluzby/core-build", heading: /Core/i },
  { name: "growth-retainer", path: "/sluzby/growth-retainer", heading: /Growth/i },
  { name: "ck-pragotour-en", path: "/case-studies/ck-pragotour", heading: /Pragotour/i },
  { name: "ck-pragotour-cs", path: "/cs/pripadove-studie/ck-pragotour", heading: /Pragotour/i },
  { name: "contact-en-entry", path: "/contact", heading: /Nejdřív/i },
  { name: "contact-cs-entry", path: "/cs/kontakt", heading: /Nejdřív/i },
  { name: "contact-legacy", path: "/kontakt", heading: /Nejdřív/i },
] as const;

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

for (const route of previewRoutes) {
  test(`${route.name} renders without overflow and produces a preview`, async ({ page }, testInfo) => {
    const response = await page.goto(route.path, { waitUntil: "networkidle" });

    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("h1")).toContainText(route.heading);
    await expect(page.locator("main")).toBeVisible();

    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(horizontalOverflow, "page must not overflow horizontally").toBeFalsy();

    const screenshotDir = path.join("visual-previews", testInfo.project.name);
    await mkdir(screenshotDir, { recursive: true });
    await page.screenshot({
      path: path.join(screenshotDir, `${route.name}.png`),
      fullPage: true,
      animations: "disabled",
    });
  });
}

test("English homepage exposes localised navigation and switches to Czech", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const navigation = page.getByRole("navigation", { name: /primary navigation/i });
  await expect(navigation).toBeVisible();
  await expect(navigation.locator('a[href="/services"]')).toHaveCount(1);
  await expect(navigation.locator('a[href="/contact"]')).toHaveCount(1);

  const switcher = page.getByRole("link", { name: /switch language to Czech/i });
  await expect(switcher).toBeVisible();
  await expect(switcher).toHaveAttribute("href", "/cs");
  await switcher.click();

  await expect(page).toHaveURL(/\/cs$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Méně chaosu/i);
});

test("Czech homepage exposes localised navigation and switches to English", async ({ page }) => {
  await page.goto("/cs", { waitUntil: "networkidle" });

  const navigation = page.getByRole("navigation", { name: /hlavní navigace/i });
  await expect(navigation).toBeVisible();
  await expect(navigation.locator('a[href="/cs/sluzby"]')).toHaveCount(1);
  await expect(navigation.locator('a[href="/cs/kontakt"]')).toHaveCount(1);

  const switcher = page.getByRole("link", { name: /přepnout jazyk do angličtiny/i });
  await expect(switcher).toBeVisible();
  await expect(switcher).toHaveAttribute("href", "/");
  await switcher.click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Less chaos/i);
});

test("homepage variants publish canonical and alternate language metadata", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/$/);
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", /\/$/);
  await expect(page.locator('link[rel="alternate"][hreflang="cs"]')).toHaveAttribute("href", /\/cs$/);

  await page.goto("/cs", { waitUntil: "networkidle" });
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/cs$/);
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", /\/$/);
  await expect(page.locator('link[rel="alternate"][hreflang="cs"]')).toHaveAttribute("href", /\/cs$/);
});

test("English homepage proof and enquiry CTAs resolve", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: /explore the case study/i }).click();
  await expect(page).toHaveURL(/\/case-studies\/ck-pragotour$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Pragotour/i);

  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: /start a discovery sprint/i }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Nejdřív/i);
});

test("Czech homepage proof and enquiry CTAs resolve", async ({ page }) => {
  await page.goto("/cs", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: /prozkoumat případovou studii/i }).click();
  await expect(page).toHaveURL(/\/cs\/pripadove-studie\/ck-pragotour$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Pragotour/i);

  await page.goto("/cs", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: /začít discovery sprint/i }).click();
  await expect(page).toHaveURL(/\/cs\/kontakt$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Nejdřív/i);
});

test("service journey connects overview detail and enquiry", async ({ page }) => {
  await page.goto("/sluzby", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: /detail služby/i }).first().click();
  await expect(page).toHaveURL(/\/sluzby\/discovery-sprint$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Discovery/i);

  await page.getByRole("link", { name: /probrat discovery sprint/i }).click();
  await expect(page).toHaveURL(/\/kontakt\?source=discovery-sprint/);
});

test("all contact entry points expose essential fields", async ({ page }) => {
  for (const contactPath of ["/kontakt", "/contact", "/cs/kontakt"]) {
    const response = await page.goto(contactPath, { waitUntil: "networkidle" });
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByLabel(/jméno/i)).toBeVisible();
    await expect(page.getByLabel(/e-mail/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /připravit poptávku/i })).toBeVisible();
  }
});

test("primary interactive elements expose visible keyboard focus", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toBeVisible();
  await expect(page.locator(":focus")).toHaveAttribute("href", "/");
});
