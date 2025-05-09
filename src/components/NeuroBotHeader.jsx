import React from "react";

const NeuroBotHeader = () => {
  const scrollToSection = (id, offset) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[70vh] bg-[#212121] text-white font-serif pt-[72px]">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#212121] border-b border-gray-800 flex justify-between items-center px-8 py-4">
        <div className="text-xl font-bold text-white">NeuroBot</div>
        <div className="flex space-x-6 text-base">
          <button
            onClick={() => scrollToSection("chat", 0)}
            className="hover:text-green-400"
          >
            Chat
          </button>
          <button
            onClick={() => scrollToSection("features", 0)}
            className="hover:text-green-400"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("faq", 60)}
            className="hover:text-green-400"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("contact", 60)}
            className="hover:text-green-400"
          >
            Contact Us
          </button>
          <div className="text-lg">👤</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">
            Transform Your Legal Practice with{" "}
            <span className="text-green-400">AI</span>
          </h1>
          <p className="mt-4 text-base text-gray-300">
            LexTech Pro empowers legal professionals with cutting-edge tools for
            document analysis, case research, and contract automation – all in
            one secure platform.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md font-semibold text-sm">
              Request Demo
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-800 px-5 py-2 rounded-md font-semibold text-sm">
              Explore Features
            </button>
          </div>
        </div>

        {/* Feature Box */}
        <div className="mt-10 md:mt-0 bg-gradient-to-br from-[#131e30] to-[#0b0f1c] p-6 rounded-xl shadow-lg w-full max-w-md">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-green-400 text-xl">⚡</span>
              <p className="text-base">Instant AI-powered responses</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-400 text-xl">📄</span>
              <p className="text-base">Automated document analysis</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-400 text-xl">🔍</span>
              <p className="text-base">Intelligent case research</p>
            </div>
            <div className="flex justify-center mt-4">
              <span className="text-5xl text-green-400">🧠</span>
            </div>
          </div>
          <div className="mt-4 text-right text-xs text-gray-400">
            <span>Powered by:</span>
            <p className="text-green-400">Neural Processing Engine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuroBotHeader;
