import React from "react";
import NeuroBotHeader from "./components/NeuroBotHeader";
import FeatureSection from "./components/SecurityTrustSection";
import FAQAccordion from "./components/FaqAccordian";
import ContactSection from "./components/ContactSection";
import CtaBanner from "./components/Ctabanner";
import FooterComponent from "./components/FooterComponent";
import SecurityTrustSection from "./components/SecurityTrustSection";
import ProcessWorks from "./components/ProcessWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import FeatuSection from "./components/FeatuSection";

function App() {
  return (
    <div>
      <div id="chat">
        <NeuroBotHeader />
      </div>
      <div id="features">
        <FeatuSection />
      </div>

      <FeatureSection />
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
    </div>
  );
}

export default App;
