"use server";

import { HONEYPOT_FIELD } from "./honeypot";
import {
  detailsTable,
  emailLayout,
  escapeHtml,
  listId,
  sendEmail,
  teamRecipients,
  upsertContact,
} from "./brevo";

export type FormState = {
  success: boolean;
  message: string;
} | null;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type Lead = {
  formLabel: string;
  email: string;
  fullName: string;
  suspectedSpam: boolean;
  listId: number | undefined;
  teamSubject: string;
  details: [string, string | null | undefined][];
  autoReply: { subject: string; html: string };
};

/**
 * Deliver a lead through Brevo:
 *  1. email the team the full submission (reply-to = the submitter),
 *  2. save the submitter as a Brevo contact in the form's list,
 *  3. send the submitter a confirmation email.
 *
 * The lead counts as delivered if step 1 OR step 2 succeeds — either way it
 * is recorded somewhere the team can see it. The confirmation email never
 * affects the result.
 *
 * A tripped honeypot is advisory only (see lib/honeypot.ts): the team still
 * gets the email, flagged in the subject, but the contact is not added to the
 * list and no confirmation is sent, so bots can't use the form to make us
 * email arbitrary addresses.
 */
async function deliverLead(lead: Lead): Promise<boolean> {
  const flag = lead.suspectedSpam ? "[Possible spam] " : "";
  const teamHtml = emailLayout(
    (lead.suspectedSpam
      ? `<p style="font-family:Arial,sans-serif;color:#b45309"><strong>Flagged as possible spam</strong> (hidden anti-spam field was filled). Check before following up.</p>`
      : "") +
    detailsTable([
      ...lead.details,
      ["Submitted", new Date().toISOString()],
    ])
  );

  const [notified, saved] = await Promise.all([
    sendEmail({
      to: teamRecipients(),
      subject: `${flag}${lead.teamSubject}`,
      html: teamHtml,
      replyTo: { email: lead.email, name: lead.fullName },
      label: `${lead.formLabel} team notification`,
    }),
    lead.suspectedSpam
      ? Promise.resolve(false)
      : upsertContact(lead.email, lead.fullName, lead.listId),
  ]);

  if (!lead.suspectedSpam) {
    await sendEmail({
      to: [{ email: lead.email, name: lead.fullName }],
      subject: lead.autoReply.subject,
      html: lead.autoReply.html,
      label: `${lead.formLabel} confirmation`,
    });
  }

  if (!notified && !saved) {
    console.error(`${lead.formLabel}: lead NOT delivered to Brevo.`, {
      email: lead.email,
    });
    return false;
  }
  return true;
}

function confirmationHtml(firstName: string, body: string): string {
  return emailLayout(`<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#1f2937">
<p>Hi ${escapeHtml(firstName)},</p>
${body}
<p>Kind regards,<br>The MoleScan team<br><a href="https://molescan.uk">molescan.uk</a></p>
</div>`);
}

export async function submitDemoRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const suspectedSpam = Boolean(formData.get(HONEYPOT_FIELD));
  if (suspectedSpam) {
    console.warn(
      "Demo request honeypot tripped; forwarding flagged as suspected spam."
    );
  }

  const fullName = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const organisation = formData.get("organisation") as string;
  const role = formData.get("role") as string;
  const message = formData.get("message") as string;
  const sourcePage = formData.get("source_page") as string;

  if (!fullName || !email || !organisation || !role) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  if (!isValidEmail(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const firstName = fullName.trim().split(/\s+/)[0];
  const sent = await deliverLead({
    formLabel: "Demo request",
    email,
    fullName,
    suspectedSpam,
    listId: listId(process.env.BREVO_DEMO_LIST_ID),
    teamSubject: `New demo request: ${fullName} (${organisation})`,
    details: [
      ["Form", "Request a Demo / Early Access"],
      ["Name", fullName],
      ["Email", email],
      ["Phone", phone],
      ["Organisation", organisation],
      ["Role", role],
      ["Message", message],
      ["Page", sourcePage],
    ],
    autoReply: {
      subject: "Thanks for your interest in MoleScan",
      html: confirmationHtml(
        firstName,
        `<p>Thank you for requesting early access to MoleScan. We've received your details and a member of our team will be in touch within 24 hours to arrange a demo.</p>
<p>If you have any questions in the meantime, just reply to this email.</p>`
      ),
    },
  });

  if (!sent) {
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }

  return {
    success: true,
    message: "Thank you. We'll be in touch within 24 hours.",
  };
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const suspectedSpam = Boolean(formData.get(HONEYPOT_FIELD));
  if (suspectedSpam) {
    console.warn(
      "Contact honeypot tripped; forwarding flagged as suspected spam."
    );
  }

  const fullName = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!fullName || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  if (!isValidEmail(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const firstName = fullName.trim().split(/\s+/)[0];
  const sent = await deliverLead({
    formLabel: "Contact",
    email,
    fullName,
    suspectedSpam,
    listId: listId(process.env.BREVO_CONTACT_LIST_ID),
    teamSubject: `New contact message: ${subject}`,
    details: [
      ["Form", "Contact"],
      ["Name", fullName],
      ["Email", email],
      ["Subject", subject],
      ["Message", message],
    ],
    autoReply: {
      subject: "We've received your message",
      html: confirmationHtml(
        firstName,
        `<p>Thank you for getting in touch with MoleScan. We've received your message and will get back to you shortly.</p>
<p>If you need to add anything, just reply to this email.</p>`
      ),
    },
  });

  if (!sent) {
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }

  return {
    success: true,
    message: "Thank you for your message. We'll get back to you shortly.",
  };
}
