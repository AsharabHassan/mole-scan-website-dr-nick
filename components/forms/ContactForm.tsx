"use client";

import { useActionState } from "react";
import { submitContactForm, type FormState } from "@/lib/actions";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitContactForm,
    null
  );

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-green-800 font-semibold text-lg">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact_full_name"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact_full_name"
            name="full_name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="contact_email"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact_email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="contact_message"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact_message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition resize-none"
        />
      </div>

      {state && !state.success && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{state.message}</p>
        </div>
      )}

      <Button type="submit" variant="primary" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
