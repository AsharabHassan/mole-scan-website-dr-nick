"use client";

import { useState } from "react";

export interface AccordionItemData {
  question: string;
  answer: string;
  intro?: string;
  bullets?: string[];
  outro?: string;
}

interface AccordionItemProps extends AccordionItemData {
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, intro, bullets, outro, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className={`border-b border-gray-200 transition-colors duration-300 ${
        isOpen ? "border-l-2 border-l-brand-teal pl-4" : "border-l-2 border-l-transparent pl-4"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg font-semibold transition-colors duration-200 ${
            isOpen ? "text-brand-teal" : "text-brand-deep-blue group-hover:text-brand-teal"
          }`}
        >
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-brand-teal/10 rotate-180" : "bg-gray-100 group-hover:bg-brand-teal/10"
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors duration-200 ${
              isOpen ? "text-brand-teal" : "text-gray-500"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out-expo ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-brand-text/80 leading-relaxed pb-5 space-y-3">
            {bullets && bullets.length > 0 ? (
              <>
                {intro && <p>{intro}</p>}
                <ul className="list-disc pl-5 space-y-1.5 marker:text-brand-teal">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {outro && <p>{outro}</p>}
              </>
            ) : (
              <p>{answer}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: AccordionItemData[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          intro={item.intro}
          bullets={item.bullets}
          outro={item.outro}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
