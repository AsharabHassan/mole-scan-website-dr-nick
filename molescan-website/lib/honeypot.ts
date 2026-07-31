/**
 * Shared honeypot config for the contact and demo forms.
 *
 * The field used to be named "website". Browsers and password managers treat
 * that as a real field and autofill it even though it is off-screen and marked
 * autoComplete="off" — which tripped the bot check and silently discarded real
 * leads before they ever reached the GHL webhook. The name below is deliberately
 * meaningless to autofill heuristics, and the props opt out of every major
 * password manager.
 */
export const HONEYPOT_FIELD = "ms_hp";

export const HONEYPOT_INPUT_PROPS = {
  type: "text",
  tabIndex: -1,
  autoComplete: "off",
  "data-1p-ignore": "true",
  "data-lpignore": "true",
  "data-bwignore": "true",
  "data-form-type": "other",
} as const;
