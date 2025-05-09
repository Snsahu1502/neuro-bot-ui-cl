import React from "react";

const steps = [
  {
    number: "1",
    title: "Document Upload",
    description: "Securely upload your legal documents in seconds",
  },
  {
    number: "2",
    title: "AI Analysis",
    description: "Our advanced algorithms review and process your documents",
  },
  {
    number: "3",
    title: "Expert Insights",
    description: "Receive comprehensive legal analysis and recommendations",
  },
];

const ProcessWorks = () => (
  <section className="bg-gray-900 text-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold">How LegalAssist Works</h2>
      <p className="mt-2 text-sm text-gray-300">
        Transform your legal workflow in just a few simple steps
      </p>
    </div>

    <div className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-800">
            <span className="text-lg font-semibold text-white">
              {step.number}
            </span>
          </div>
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <p className="text-sm text-gray-300 max-w-xs">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProcessWorks;
