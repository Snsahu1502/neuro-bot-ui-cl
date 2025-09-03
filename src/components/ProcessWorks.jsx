import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Upload, Brain, FileCheck, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Document Upload",
    description: "Securely upload your legal documents in seconds with drag-and-drop functionality",
    icon: <Upload className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    number: "2",
    title: "AI Analysis",
    description: "Our advanced algorithms review and process your documents using state-of-the-art NLP",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  },
  {
    number: "3",
    title: "Expert Insights",
    description: "Receive comprehensive legal analysis and actionable recommendations instantly",
    icon: <FileCheck className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  }
];

const ProcessWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.8
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-[#1f2937] to-gray-900 text-gray-100 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Simple Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
            How LegalAssist Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your legal workflow in just three simple steps with our intelligent AI-powered platform
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <svg className="w-full h-8" viewBox="0 0 800 40" fill="none">
              <motion.path
                d="M 100 20 Q 400 20 700 20"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                variants={lineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                {/* Step Card */}
                <div className={`relative bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border ${step.borderColor} hover:border-opacity-80 transition-all duration-500 w-full max-w-sm mb-6`}>
                  {/* Background glow */}
                  <div className={`absolute inset-0 ${step.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Step number badge */}
                  <motion.div 
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {step.number}
                  </motion.div>

                  <div className="relative z-10 pt-4">
                    {/* Icon */}
                    <motion.div 
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-4 shadow-lg`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <span className="text-white">{step.icon}</span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out rounded-2xl"></div>
                </div>

                {/* Arrow for mobile */}
                {idx < steps.length - 1 && (
                  <motion.div 
                    className="md:hidden mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                  >
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold text-white shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessWorks;
