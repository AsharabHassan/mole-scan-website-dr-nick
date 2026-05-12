"use server";

import { getSupabaseServer } from "./supabase-server";

export type FormState = {
  success: boolean;
  message: string;
} | null;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendToGHL(payload: Record<string, unknown>): Promise<void> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("GHL_WEBHOOK_URL not set; skipping webhook send.");
    return;
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
      console.error(`GHL webhook returned ${response.status}: ${body}`);
    }
  } catch (err) {
    console.error("GHL webhook failed:", err);
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

  const supabase = getSupabaseServer();

  const { error } = await supabase.from("demo_requests").insert({
    full_name: fullName,
    email,
    phone: phone || null,
    organisation,
    role,
    message: message || null,
    source_page: sourcePage || null,
  });

  if (error) {
    console.error("Demo request submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }

  await sendToGHL({
    source_form: "demo_request",
    submitted_at: new Date().toISOString(),
    full_name: fullName,
    email,
    phone: phone || null,
    organisation,
    role,
    message: message || null,
    source_page: sourcePage || null,
  });

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

  const supabase = getSupabaseServer();

  const { error } = await supabase.from("contact_submissions").insert({
    full_name: fullName,
    email,
    subject,
    message,
  });

  if (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }

  await sendToGHL({
    source_form: "contact",
    submitted_at: new Date().toISOString(),
    full_name: fullName,
    email,
    subject,
    message,
  });

  return {
    success: true,
    message: "Thank you for your message. We'll get back to you shortly.",
  };
}
