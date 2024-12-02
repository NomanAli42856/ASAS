import React, { useState } from 'react';
import FAQItem from './FAQItems';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqItems = [
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, Tailwind CSS, and modern JavaScript."
    },
    {
      question: "Do you offer support?",
      answer: "Yes, we provide 24/7 customer support for all our services."
    },
    {
      question: "How can I get started?",
      answer: "Contact us through the form below and we'll get back to you within 24 hours."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isActive={activeAccordion === index}
              onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;