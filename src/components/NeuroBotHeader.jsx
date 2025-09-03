import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight, Play } from "lucide-react";

const NeuroBotHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  const featureBoxVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" }
    }
  };

  const navigationItems = [
    { label: "Chat", id: "chat" },
    { label: "Features", id: "features" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#212121] via-[#2a2a2a] to-[#1a1a1a] text-white font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Enhanced Fixed Navbar */}
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#212121]/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-4">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              NeuroBot
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id, item.id === 'chat' ? 0 : 80)}
                className="relative text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.1 * index, duration: 0.5 }
                }}
              >
                {item.label}
                <motion.div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#212121]/95 backdrop-blur-md border-t border-gray-800/50"
            >
              <div className="px-6 py-4 space-y-3">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id, 80)}
                    className="block w-full text-left text-gray-300 hover:text-green-400 py-2 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.1 * index }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <div className="relative pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm font-medium text-green-400">AI-Powered Legal Assistant</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Legal Practice with{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                LexTech Pro empowers legal professionals with cutting-edge tools for
                document analysis, case research, and contract automation – all in
                one secure platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button 
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Features
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Enhanced Feature Box */}
            <motion.div 
              variants={featureBoxVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1a2332] via-[#243447] to-[#0f1419] p-8 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="space-y-6">
                    {[
                      { icon: "⚡", text: "Instant AI-powered responses", color: "text-green-400" },
                      { icon: "📄", text: "Automated document analysis", color: "text-blue-400" },
                      { icon: "🔍", text: "Intelligent case research", color: "text-purple-400" }
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <span className="text-2xl">{feature.icon}</span>
                        <p className="text-gray-200 font-medium">{feature.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="flex justify-center mt-8"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-6xl">🧠</span>
                  </motion.div>

                  <div className="mt-6 text-center">
                    <span className="text-sm text-gray-400">Powered by:</span>
                    <p className="text-green-400 font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      Neural Processing Engine
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuroBotHeader;
