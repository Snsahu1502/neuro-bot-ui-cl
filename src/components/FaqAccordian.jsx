import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What makes NeuroBot different from other AI writing assistants?",
    answer:
      "NeuroBot combines advanced natural language processing with domain-specific knowledge to provide more accurate and context-aware suggestions than generic writing tools.",
  },
  {
    question: "How does NeuroBot ensure the quality of its outputs?",
    answer:
      "NeuroBot employs rigorous quality checks, including grammar validation, style consistency, and optional human review layers to maintain high standards for all generated content.",
  },
  {
    question: "Can NeuroBot help with academic writing?",
    answer:
      "Yes, NeuroBot offers specialized features for academic writing such as citation formatting, research summarization, and adherence to style guides like APA and MLA.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#111827] text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Get answers about NeuroBot's advanced capabilities
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg">
              <button
                className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
                onClick={() => toggleIndex(index)}
              >
                <span className="text-left font-medium">{item.question}</span>
                <span className="text-gray-400">
                  {openIndex === index ? <X size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-200">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">Still have questions?</p>
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
