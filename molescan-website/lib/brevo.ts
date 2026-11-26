/**
 * Minimal Brevo (formerly Sendinblue) REST client for the website forms.
 *
 * Server-only: it reads BREVO_API_KEY, which must never reach the browser.
 * Import it only from server code (lib/actions.ts).
 * Each call returns true/false and logs failures instead of throwing, so the
 * form actions can decide what counts as a lost lead.
 */

const BREVO_API = "https://api.brevo.com/v3";

type Recipient = { email: string; name?: string };

function apiKey(): string | undefined {
  const key = process.env.BREVO_API_KEY;
  if (!key) console.error("BREVO_API_KEY is not set; cannot reach Brevo.");
  return key;
}

async function brevoPost(
  path: string,
  body: unknown,
  label: string
): Promise<boolean> {
  const key = apiKey();
  if (!key) return false;
  try {
    const response = await fetch(`${BREVO_API}${path}`, {
      method: "POST",
      headers: {
        "api-key": key,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error(`Brevo ${label} returned ${response.status}: ${text}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`Brevo ${label} failed:`, err);
    return false;
  }
}

function sender(): Recipient | undefined {
  const email = process.env.BREVO_SENDER_EMAIL;
  if (!email) {
    console.error("BREVO_SENDER_EMAIL is not set; cannot send email.");
    return undefined;
  }
  return { email, name: process.env.BREVO_SENDER_NAME || "MoleScan" };
}

/** Comma-separated BREVO_NOTIFY_EMAILS -> recipient list. */
export function teamRecipients(): Recipient[] {
  return (process.env.BREVO_NOTIFY_EMAILS || "")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean)
    .map((email) => ({ email }));
}

/** Parse a list ID env var; returns undefined when unset or not a number. */
export function listId(envValue: string | undefined): number | undefined {
  const id = Number(envValue);
  return Number.isInteger(id) && id > 0 ? id : undefined;
}

/**
 * Create the contact, or update it if the email already exists, and add it
 * to the given list. Only Brevo's built-in FIRSTNAME/LASTNAME attributes are
 * sent: unknown custom attributes make Brevo reject the whole request.
 */
export async function upsertContact(
  email: string,
  fullName: string,
  list: number | undefined
): Promise<boolean> {
  const [first, ...rest] = fullName.trim().split(/\s+/);
  return brevoPost(
    "/contacts",
    {
      email,
      attributes: { FIRSTNAME: first || "", LASTNAME: rest.join(" ") },
      ...(list ? { listIds: [list] } : {}),
      updateEnabled: true,
    },
    "contact upsert"
  );
}

export async function sendEmail(opts: {
  to: Recipient[];
  subject: string;
  html: string;
  replyTo?: Recipient;
  label: string;
}): Promise<boolean> {
  const from = sender();
  if (!from) return false;
  if (opts.to.length === 0) {
    console.error(`Brevo ${opts.label}: no recipients configured.`);
    return false;
  }
  return brevoPost(
    "/smtp/email",
    {
      sender: from,
      to: opts.to,
      subject: opts.subject,
      htmlContent: opts.html,
      ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
    },
    opts.label
  );
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.uk").replace(/\/$/, "");

/**
 * Wrap email content in the MoleScan header (logo + wordmark).
 * The logo must be an absolute public URL: email clients can't load relative
 * paths. It is served from public/images/molescan-email-logo.png (128px,
 * shown at 56px for retina screens).
 */
export function emailLayout(inner: string): string {
  return `<div style="font-family:Arial,sans-serif;max-width:600px">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;border-collapse:collapse">
<tr>
<td style="padding:0 12px 0 0;vertical-align:middle"><a href="${SITE_URL}"><img src="${SITE_URL}/images/molescan-email-logo.png" width="56" height="56" alt="MoleScan" style="display:block;border:0;width:56px;height:56px"></a></td>
<td style="vertical-align:middle;font-family:Arial,sans-serif;font-size:22px;font-weight:700;color:#26308f">MoleScan</td>
</tr>
</table>
${inner}
</div>`;
}

/** Render label/value rows as a simple HTML table for the team email. */
export function detailsTable(rows: [string, string | null | undefined][]): string {
  const body = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">${escapeHtml(k)}</td>` +
        `<td style="padding:4px 0;white-space:pre-wrap">${escapeHtml(v as string)}</td></tr>`
    )
    .join("");
  return `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${body}</table>`;
}
