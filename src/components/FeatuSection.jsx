import {
  BookOpen,
  FileText,
  ClipboardList,
  ShieldCheck,
  Scale,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Document Analysis",
    description:
      "Automatically review and analyze legal documents for key clauses and risks.",
    icon: <FileText className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Case Research",
    description:
      "Quickly find relevant case law and precedents with AI-powered search.",
    icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Contract Automation",
    description: "Generate and customize legal contracts with smart templates.",
    icon: <ClipboardList className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Compliance Check",
    description:
      "Ensure documents meet current regulatory requirements automatically.",
    icon: <ShieldCheck className="h-8 w-8 text-teal-400" />,
  },
  {
    title: "Legal Drafting",
    description:
      "Create precise legal documents with AI-assisted drafting tools.",
    icon: <Scale className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Client Intake",
    description:
      "Streamline client onboarding with automated forms and analysis.",
    icon: <Users className="h-8 w-8 text-pink-500" />,
  },
];

export default function FeatuSection() {
  return (
    <div className="bg-[#0B1120] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
        <p className="text-lg mb-12">
          NeuroBot offers a comprehensive suite of tools to enhance your writing
          experience
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
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
