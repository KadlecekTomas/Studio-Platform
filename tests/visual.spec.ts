import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const routes = [
  { name: "homepage", path: "/", heading: /Méně chaosu/i },
  { name: "services", path: "/sluzby", heading: /Kupujete/i },
  { name: "discovery-sprint", path: "/sluzby/discovery-sprint", heading: /Discovery/i },
  { name: "core-build", path: "/sluzby/core-build", heading: /Core/i },
  { name: "growth-retainer", path: "/sluzby/growth-retainer", heading: /Growth/i },
  { name: "ck-pragotour", path: "/case-studies/ck-pragotour", heading: /Pragotour/i },
  { name: "kontakt", path: "/kontakt", heading: /Nejdřív/i },
] as const;

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

for (const route of routes) {
  test(`${route.name} renders and produces a full-page preview`, async ({ page }, testInfo) => {
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

test("primary navigation connects proof and enquiry", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: /case study/i }).first().click();
  await expect(page).toHaveURL(/\/case-studies\/ck-pragotour$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Pragotour/i);

  await page.getByRole("link", { name: /probrat projekt/i }).first().click();
  await expect(page).toHaveURL(/\/kontakt/);
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

test("contact form exposes its essential fields", async ({ page }) => {
  await page.goto("/kontakt", { waitUntil: "networkidle" });

  await expect(page.getByLabel(/jméno/i)).toBeVisible();
  await expect(page.getByLabel(/e-mail/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /připravit poptávku/i })).toBeVisible();
});
