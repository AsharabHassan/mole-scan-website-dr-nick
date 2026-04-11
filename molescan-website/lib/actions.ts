"use server";

import { getSupabaseServer } from "./supabase-server";

export type FormState = {
  success: boolean;
  message: string;
} | null;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

  return {
    success: true,
    message: "Thank you for your message. We'll get back to you shortly.",
  };
}
