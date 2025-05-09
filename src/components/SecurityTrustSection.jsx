import React from "react";
import {
  Lock,
  ShieldCheck,
  Users,
  ActivityIcon,
  Hospital,
  Globe,
  ShieldUser,
} from "lucide-react";

const features = [
  {
    icon: <Lock size={24} className="text-blue-500" />,
    title: "End-to-End Encryption",
    description:
      "AES-256 encryption for all legal documents and communications.",
  },
  {
    icon: <ShieldCheck size={24} className="text-purple-500" />,
    title: "Compliance Certified",
    description: "SOC 2 Type II, GDPR, HIPAA, and bar association standards.",
  },
  {
    icon: <Users size={24} className="text-green-500" />,
    title: "Granular Access Controls",
    description: "Role-based permissions with matter-level security isolation.",
  },
  {
    icon: <ActivityIcon size={24} className="text-yellow-500" />,
    title: "Audit Logging",
    description:
      "Detailed activity tracking for all document access and changes.",
  },
];

const certifications = [
  { label: "SOC2", icon: <ShieldCheck className="w-8 h-8 text-blue-500" /> },
  { label: "GDPR", icon: <Lock className="w-8 h-8 text-purple-500" /> },
  { label: "HIPAA", icon: <Hospital className="w-8 h-8 text-red-500" /> },
  { label: "ISO27001", icon: <Globe className="w-8 h-8 text-teal-400" /> },
  { label: "CJIS", icon: <ShieldUser className="w-8 h-8 text-yellow-400" /> },
];

const SecurityTrustSection = () => (
  <section className="bg-gray-900 text-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold">Legal-Grade Security &amp; Trust</h2>
      <p className="mt-2 text-sm text-gray-300 max-w-2xl mx-auto">
        Protecting sensitive client data with enterprise-grade security measures
        designed specifically for legal professionals.
      </p>
    </div>

    <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Left Image Card */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img
          src="/assets/security.png"
          alt="Security Dashboard"
          className="w-full h-50 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-2 text-xs text-gray-100">
          All documents protected with bank-level security and attorney-client
          privilege safeguards
        </div>
      </div>

      {/* Right Feature List */}
      <div className="space-y-4">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="flex items-center bg-gray-800 rounded-lg p-5 space-x-4"
          >
            <div className="flex-shrink-0">{f.icon}</div>
            <div>
              <h3 className="text-sm font-bold text-gray-100">{f.title}</h3>
              <p className="mt-1 text-xs text-gray-300">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Certifications */}
    <div className="max-w-7xl mx-auto px-2 mt-12 text-center">
      <p className="text-xs text-gray-400 tracking-wider uppercase">
        Trusted Compliance Certifications
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-4">
        {certifications.map((c, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-24 h-20 bg-gray-800 border border-gray-600 rounded-lg"
          >
            {c.icon}
            <span className="mt-1 text-white text-sm font-semibold">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SecurityTrustSection;
