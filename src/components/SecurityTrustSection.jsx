import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Lock,
  ShieldCheck,
  Users,
  Activity,
  Hospital,
  Globe,
  ShieldUser,
  CheckCircle,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: <Lock size={28} />,
    title: "End-to-End Encryption",
    description: "AES-256 encryption for all legal documents and communications with zero-knowledge architecture.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Compliance Certified",
    description: "SOC 2 Type II, GDPR, HIPAA, and bar association standards with continuous monitoring.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    icon: <Users size={28} />,
    title: "Granular Access Controls",
    description: "Role-based permissions with matter-level security isolation and multi-factor authentication.",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    icon: <Activity size={28} />,
    title: "Audit Logging",
    description: "Detailed activity tracking for all document access and changes with immutable audit trails.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20"
  }
];

const certifications = [
  { 
    label: "SOC2", 
    icon: <ShieldCheck className="w-10 h-10" />, 
    color: "text-blue-400",
    description: "Security & Compliance"
  },
  { 
    label: "GDPR", 
    icon: <Lock className="w-10 h-10" />, 
    color: "text-purple-400",
    description: "Data Protection"
  },
  { 
    label: "HIPAA", 
    icon: <Hospital className="w-10 h-10" />, 
    color: "text-red-400",
    description: "Healthcare Security"
  },
  { 
    label: "ISO27001", 
    icon: <Globe className="w-10 h-10" />, 
    color: "text-teal-400",
    description: "Information Security"
  },
  { 
    label: "CJIS", 
    icon: <ShieldUser className="w-10 h-10" />, 
    color: "text-yellow-400",
    description: "Criminal Justice"
  }
];

const SecurityTrustSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [certRef, certInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const certVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-[#1a1f2e] to-gray-900 text-gray-100 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm font-medium text-green-400">Enterprise-Grade Security</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
            Legal-Grade Security & Trust
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Protecting sensitive client data with enterprise-grade security measures designed specifically for legal professionals and regulated industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" ref={ref}>
          {/* Left Image Card */}
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 z-10"></div>
              <img
                src="/assets/security.png"
                alt="Security Dashboard"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-medium">Bank-Level Security</span>
                </div>
                <p className="text-gray-200 text-sm">
                  All documents protected with military-grade encryption and attorney-client privilege safeguards
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Feature List */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group flex items-start bg-gradient-to-r from-gray-800 to-gray-800/50 rounded-xl p-6 border ${feature.borderColor} hover:border-opacity-60 transition-all duration-500 cursor-pointer`}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className={`flex-shrink-0 p-3 rounded-xl ${feature.bgColor} mr-4`}>
                  <span className={feature.color}>{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div 
          className="text-center"
          ref={certRef}
          initial={{ opacity: 0, y: 50 }}
          animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <p className="text-sm text-gray-400 tracking-wider uppercase mb-2">
              Trusted Compliance Certifications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={certVariants}
                initial="hidden"
                animate={certInView ? "visible" : "hidden"}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center justify-center w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 hover:border-opacity-80 rounded-xl transition-all duration-500 cursor-pointer"
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <span className={`${cert.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </span>
                <span className="text-white text-sm font-bold mb-1">{cert.label}</span>
                <span className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                  {cert.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityTrustSection;
