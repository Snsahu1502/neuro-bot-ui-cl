import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Content Creator",
    avatar: "/assets/p1.jpg",
    quote:
      "NeuroBot has revolutionized my writing process. It's like having an AI assistant that understands exactly what I need.",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    avatar: "/assets/p2.jpg",
    quote:
      "Our team's productivity increased by 40% after implementing NeuroBot for content creation.",
  },
  {
    name: "James Miller",
    role: "Content Strategist",
    avatar: "/assets/p3.jpg",
    quote:
      "NeuroBot has completely transformed the way we handle SEO blogs. It's like having a full writing team at your fingertips.",
  },
  {
    name: "Priya Sharma",
    role: "Legal Consultant",
    avatar: "/assets/p4.jpg",
    quote:
      "Drafting legal documents is faster and more accurate thanks to NeuroBot’s smart suggestions and templates.",
  },
  {
    name: "Daniel Lee",
    role: "Technical Writer",
    avatar: "/assets/p1.jpg",
    quote:
      "With NeuroBot, complex documentation now feels like a breeze. It's intuitive and context-aware like no other tool.",
  },
  {
    name: "Maria Gonzales",
    role: "Academic Researcher",
    avatar: "/assets/p2.jpg",
    quote:
      "NeuroBot’s citation features and summarization tools are game changers for academic writing. Highly recommended!",
  },
  {
    name: "James Miller",
    role: "Content Strategist",
    avatar: "/assets/p3.jpg",
    quote:
      "NeuroBot has completely transformed the way we handle SEO blogs. It's like having a full writing team at your fingertips.",
  },
  {
    name: "Priya Sharma",
    role: "Legal Consultant",
    avatar: "/assets/p3.jpg",
    quote:
      "Drafting legal documents is faster and more accurate thanks to NeuroBot’s smart suggestions and templates.",
  },
  {
    name: "Daniel Lee",
    role: "Technical Writer",
    avatar: "/assets/p4.jpg",
    quote:
      "With NeuroBot, complex documentation now feels like a breeze. It's intuitive and context-aware like no other tool.",
  },
  {
    name: "Maria Gonzales",
    role: "Academic Researcher",
    avatar: "/assets/p1.jpg",
    quote:
      "NeuroBot’s citation features and summarization tools are game changers for academic writing. Highly recommended!",
  },
];

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
    },
  },
};

const TestimonialsSection = () => (
  <section className="bg-[#212121] text-gray-100 py-16 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center mb-8">
      <h2 className="text-3xl font-bold">What Our Users Say</h2>
      <p className="mt-2 text-sm text-gray-300">
        Trusted by thousands of users worldwide
      </p>
    </div>

    <div className="relative">
      <motion.div
        className="flex space-x-6 will-change-transform"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg p-6 flex-shrink-2"
            style={{ minWidth: "300px" }}
          >
            <div className="flex items-center mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="text-left">
                <p className="text-base font-semibold text-white">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-300">“{t.quote}”</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
