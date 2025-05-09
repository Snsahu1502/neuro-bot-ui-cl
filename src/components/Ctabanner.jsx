import React from "react";

export default function CTASection() {
  return (
    <section className="bg-[rgb(16,185,129)] text-white py-10 text-center">
      <h2 className="text-4xl md:text-3xl font-bold mb-4">
        Ready to Transform Your Writing?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Join thousands of users who are already enhancing their writing with NeuroBot
      </p>
      <button className="bg-white text-[#12b886] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Get Started for Free
      </button>
    </section>
  );
}
