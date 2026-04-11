"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("molescan-cookie-consent");
    if (!consent) {
      // Slight delay for entrance animation
      const timer = setTimeout(() => {
        setVisible(true);
        // Trigger mount animation
        requestAnimationFrame(() => setMounted(true));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem("molescan-cookie-consent", "accepted");
    setMounted(false);
    setTimeout(() => setVisible(false), 300);
  }

  function acceptEssential() {
    localStorage.setItem("molescan-cookie-consent", "essential-only");
    setMounted(false);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
        <div className="max-w-content mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
          <p className="text-sm text-brand-text/80 flex-grow leading-relaxed">
            We use cookies to improve your experience on our website. Essential
            cookies are required for the site to function. Analytics cookies help
            us understand how you use our site.{" "}
            <a
              href="/cookie-policy"
              className="text-brand-teal hover:text-brand-deep-teal underline underline-offset-2 transition-colors duration-200"
            >
              Learn more
            </a>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={acceptEssential}
              className="px-5 py-2.5 text-sm font-medium border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2.5 text-sm font-medium bg-brand-teal text-white rounded-xl hover:bg-brand-deep-teal transition-all duration-200 active:scale-95"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
