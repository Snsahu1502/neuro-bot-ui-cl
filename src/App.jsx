import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NeuroBotHeader from "./components/NeuroBotHeader";
import FAQAccordion from "./components/FaqAccordian";
import ContactSection from "./components/ContactSection";
import CtaBanner from "./components/Ctabanner";
import FooterComponent from "./components/FooterComponent";
import SecurityTrustSection from "./components/SecurityTrustSection";
import ProcessWorks from "./components/ProcessWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import FeatuSection from "./components/FeatuSection";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="overflow-x-hidden"
    >
      <div id="chat">
        <NeuroBotHeader />
      </div>
      
      <div id="features">
        <FeatuSection />
      </div>

      {/* <SecurityTrustSection /> */}
      <ProcessWorks />
      <TestimonialsSection />

      <div id="faq">
        <FAQAccordion />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
      
      <CtaBanner />
      <FooterComponent />
    </motion.div>
  );
}

export default App;
