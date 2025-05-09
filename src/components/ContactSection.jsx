import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-green-400" />,
    title: "Email",
    detail: "support@neurobot.ai",
    note: "Our friendly team is here to help.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-green-400" />,
    title: "Office",
    detail: "123 Innovation Street, San Francisco, CA 94107",
    note: "Come say hello at our headquarters.",
  },
  {
    icon: <Phone className="w-6 h-6 text-green-400" />,
    title: "Phone",
    detail: "+1 (555) 123-4567",
    note: "Mon–Fri from 8am to 5pm PST.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data via API
    console.log("Submit", form);
  };

  return (
    <div className="bg-[#212121] max-w-8xl mx-auto">
      <div
        className="
    bg-[#212121] max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-gray-400 mb-6">
            Have questions about NeuroBot? Our team is here to help you.
          </p>

          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg p-4 flex items-start"
              >
                <div className="p-2 bg-gray-900 rounded-full mr-4">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {info.title}
                  </h3>
                  <p className="text-green-400">{info.detail}</p>
                  <p className="text-gray-400 text-sm mt-1">{info.note}</p>
                </div>
              </div>
            ))}

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Business Hours
              </h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span>9:00 AM – 5:00 PM PST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM – 2:00 PM PST</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-200 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-gray-900 text-gray-200 placeholder-gray-500 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-gray-900 text-gray-200 placeholder-gray-500 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-1" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 text-gray-200 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Partnerships</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-200 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-gray-900 text-gray-200 placeholder-gray-500 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#10b981] hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
