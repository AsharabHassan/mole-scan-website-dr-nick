"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("molescan-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem("molescan-cookie-consent", "accepted");
    setVisible(false);
  }

  function acceptEssential() {
    localStorage.setItem("molescan-cookie-consent", "essential-only");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-brand-text/80 flex-grow">
          We use cookies to improve your experience on our website. Essential
          cookies are required for the site to function. Analytics cookies help
          us understand how you use our site.{" "}
          <a
            href="/cookie-policy"
            className="text-brand-teal hover:text-brand-deep-teal underline"
          >
            Learn more
          </a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={acceptEssential}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm bg-brand-teal text-white rounded-lg hover:bg-brand-soft-teal transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
