import React from "react";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-white text-xl font-bold">NeuroBot</h3>
            <p className="mt-2 text-gray-400">AI-powered writing assistant</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white text-lg font-semibold">Product</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white text-lg font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-lg font-semibold">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 NeuroBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
