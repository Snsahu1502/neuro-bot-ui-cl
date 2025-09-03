import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

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
      "Drafting legal documents is faster and more accurate thanks to NeuroBot's smart suggestions and templates.",
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
      "NeuroBot's citation features and summarization tools are game changers for academic writing. Highly recommended!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const buttonVariants = {
    hover: { 
      scale: 1.1, 
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      className="bg-gradient-to-br from-[#212121] via-[#2a2a2a] to-[#1a1a1a] text-gray-100 py-20 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 mr-2 text-green-400 fill-current" />
            <span className="text-sm font-medium text-green-400">Customer Reviews</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300">
            Trusted by thousands of professionals worldwide
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Left Arrow */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/50 rounded-full text-white shadow-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/50 rounded-full text-white shadow-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Testimonial Cards Container */}
          <div className="relative h-80 flex items-center justify-center mx-16">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-gradient-to-br from-gray-800 via-gray-750 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full mx-4 relative overflow-hidden">
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 right-6 w-12 h-12 text-green-400/20" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex mb-6 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-gray-200 text-center mb-8 leading-relaxed italic">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center">
                      <motion.img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full mr-4 border-2 border-green-400/30"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="text-left">
                        <p className="text-lg font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-green-400 font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 pointer-events-none"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-green-400 to-blue-400 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="flex justify-center mt-8">
            <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-blue-400"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
