"use client";

import { useActionState } from "react";
import { submitDemoRequest, type FormState } from "@/lib/actions";
import Button from "@/components/ui/Button";

interface DemoFormProps {
  sourcePage?: string;
}

const roleOptions = [
  "GP",
  "Dermatologist",
  "Clinic Manager",
  "NHS Commissioner",
  "ICB Lead",
  "Pharmacist",
  "Other",
];

export default function DemoForm({ sourcePage = "request-demo" }: DemoFormProps) {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitDemoRequest,
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
      <input type="hidden" name="source_page" value={sourcePage} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="full_name"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Organisation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Your Role <span className="text-red-500">*</span>
        </label>
        <select
          id="role"
          name="role"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition bg-white"
        >
          <option value="">Select your role</option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition resize-none"
        />
      </div>

      {state && !state.success && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{state.message}</p>
        </div>
      )}

      <Button type="submit" variant="primary" disabled={isPending}>
        {isPending ? "Submitting..." : "Request Demo"}
      </Button>

      <p className="text-sm text-brand-text/50">
        No obligation. We&apos;ll be in touch within 24 hours.
      </p>
    </form>
  );
}
