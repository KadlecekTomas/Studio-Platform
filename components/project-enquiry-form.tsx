"use client";

import { FormEvent } from "react";

export function ProjectEnquiryForm() {
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Nový projekt — ${String(form.get("company") || "Studio Platform")}`);
    const body = encodeURIComponent([
      `Jméno: ${form.get("name")}`,
      `E-mail: ${form.get("email")}`,
      `Organizace: ${form.get("company")}`,
      `Typ problému: ${form.get("problemType")}`,
      `Rozpočet: ${form.get("budget")}`,
      `Časování: ${form.get("timing")}`,
      "",
      "Situace:",
      String(form.get("context") || ""),
    ].join("\n"));

    window.location.href = `mailto:hello@studioplatform.cz?subject=${subject}&body=${body}`;
  }

  return (
    <form className="enquiry-form" onSubmit={submitEnquiry}>
      <div className="field-grid">
        <label>Jméno<input name="name" autoComplete="name" required /></label>
        <label>Pracovní e-mail<input name="email" type="email" autoComplete="email" required /></label>
        <label>Organizace<input name="company" autoComplete="organization" required /></label>
        <label>Co vás nejvíc brzdí?
          <select name="problemType" required defaultValue="">
            <option value="" disabled>Vyberte oblast</option>
            <option>Ruční a roztříštěný provoz</option>
            <option>Starý nebo nespolehlivý systém</option>
            <option>Nový klientský portál / interní aplikace</option>
            <option>Discovery a návrh řešení</option>
            <option>Jiná provozní výzva</option>
          </select>
        </label>
        <label>Orientační rozpočet
          <select name="budget" required defaultValue="">
            <option value="" disabled>Vyberte rozsah</option>
            <option>Do 100 000 Kč</option>
            <option>100 000–250 000 Kč</option>
            <option>250 000–500 000 Kč</option>
            <option>500 000 Kč a více</option>
            <option>Nejdřív potřebuji určit rozsah</option>
          </select>
        </label>
        <label>Kdy chcete začít?
          <select name="timing" required defaultValue="">
            <option value="" disabled>Vyberte časování</option>
            <option>Co nejdříve</option>
            <option>Do 1–3 měsíců</option>
            <option>Do 3–6 měsíců</option>
            <option>Zatím mapujeme možnosti</option>
          </select>
        </label>
      </div>
      <label>Popište současný proces a problém<textarea name="context" rows={8} required placeholder="Co dnes lidé dělají ručně, kde vznikají chyby a jaký výsledek potřebujete?" /></label>
      <div className="form-submit">
        <p>Odeslání otevře váš e-mailový klient s předvyplněnou zprávou. Data se na webu neukládají.</p>
        <button className="button button-primary" type="submit">Připravit poptávku ↗</button>
      </div>
    </form>
  );
}
