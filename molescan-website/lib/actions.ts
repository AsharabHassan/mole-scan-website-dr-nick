"use server";

export type FormState = {
  success: boolean;
  message: string;
} | null;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendToGHL(
  webhookUrl: string | undefined,
  payload: Record<string, unknown>,
  formLabel: string
): Promise<boolean> {
  if (!webhookUrl) {
    console.error(`${formLabel} webhook URL is not set; cannot submit form.`);
    return false;
  }
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error(
        `${formLabel} webhook returned ${response.status}: ${body}`
      );
      return false;
    }
    return true;
  } catch (err) {
    console.error(`${formLabel} webhook failed:`, err);
    return false;
  }
}

export async function submitDemoRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    // Silently reject bot submissions
    return { success: true, message: "Thank you." };
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

  const sent = await sendToGHL(
    process.env.GHL_DEMO_WEBHOOK_URL,
    {
      source_form: "demo_request",
      submitted_at: new Date().toISOString(),
      full_name: fullName,
      email,
      phone: phone || null,
      organisation,
      role,
      message: message || null,
      source_page: sourcePage || null,
    },
    "Demo request"
  );

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
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    // Silently reject bot submissions
    return { success: true, message: "Thank you." };
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

  const contactWebhookUrl =
    process.env.GHL_CONTACT_WEBHOOK_URL || process.env.GHL_WEBHOOK_URL;
  const sent = await sendToGHL(
    contactWebhookUrl,
    {
      source_form: "contact",
      submitted_at: new Date().toISOString(),
      full_name: fullName,
      email,
      subject,
      message,
    },
    "Contact"
  );

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
