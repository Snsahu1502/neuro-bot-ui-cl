import { Lock, ShieldAlert, UserCheck, FileSearch, Server } from "lucide-react";

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description:
      "AES-256 encryption for all legal documents and communications.",
    icon: <Lock className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Compliance Certified",
    description: "SOC 2 Type II, GDPR, HIPAA, and bar association standards.",
    icon: <ShieldAlert className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Granular Access Controls",
    description: "Role-based permissions with matter-level security isolation.",
    icon: <UserCheck className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Audit Logging",
    description:
      "Detailed activity tracking for all document access and changes.",
    icon: <FileSearch className="h-8 w-8 text-teal-400" />,
  },
  {
    title: "Trusted Compliance Certifications",
    description: "Including SOC2, GDPR, HIPAA, ISO27001, and CJIS.",
    icon: <Server className="h-8 w-8 text-yellow-500" />,
  },
];

export default function SecuritySection() {
  return (
    <div className="bg-[#0B1120] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Legal-Grade Security & Trust
        </h2>
        <p className="text-lg mb-12">
          Protecting sensitive client data with enterprise-grade security
          measures designed specifically for legal professionals.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#1C2431] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
