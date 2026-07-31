/**
 * Shared honeypot config for the contact and demo forms.
 *
 * A filled honeypot is only ever a *hint*. It never blocks a submission — see
 * lib/actions.ts, which forwards the lead to GHL flagged as suspected_spam.
 * Autofill has twice defeated attempts to make this signal trustworthy (first
 * as a field named "website", then as "ms_hp" with password-manager opt-outs),
 * so the value is treated as advisory and GHL does the filtering.
 *
 * readOnly is the load-bearing part: browsers and password managers do not
 * autofill a readonly input, while a bot POSTing directly is unaffected by it.
 */
export const HONEYPOT_FIELD = "ms_hp";

export const HONEYPOT_INPUT_PROPS = {
  type: "text",
  tabIndex: -1,
  readOnly: true,
  autoComplete: "off",
  "data-1p-ignore": "true",
  "data-lpignore": "true",
  "data-bwignore": "true",
  "data-form-type": "other",
} as const;
