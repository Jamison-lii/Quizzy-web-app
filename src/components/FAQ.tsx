"use client";

import { useState } from "react";

interface Question {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: Question[];
}

const FAQ = ({ faqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggle(index)}
          >
            <h3>{faq.question}</h3>
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>

          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
