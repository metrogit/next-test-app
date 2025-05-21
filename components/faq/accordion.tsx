"use client";
import { useState } from "react";

interface FaqData {
  question: string;
  answer: string;
}

const Accordion = ({ faqData }: { faqData: FaqData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-4xl px-4 mx-auto rounded-md">
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        <button
          className="flex items-center justify-between w-full p-5 font-medium text-right text-gray-900 focus:outline-none"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          <span className="text-base font-semibold">{faqData.question}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-5 border-t border-gray-200">
            <p className="text-gray-700">{faqData.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
