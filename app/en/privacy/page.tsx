"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal information: name, contact details, position, company information",
      "Business information: company financials, operations, ownership structure",
      "Transaction information: deal preferences, requirements, timeline",
      "Technical information: IP address, browser type, access logs",
    ],
  },
  {
    title: "2. How We Use Information",
    content: [
      "To provide M&A advisory and intermediary services",
      "To match sellers with potential buyers or vice versa",
      "To communicate about potential transactions and opportunities",
      "To comply with legal and regulatory requirements",
      "To improve our services and customer experience",
    ],
  },
  {
    title: "3. Information Sharing",
    content: [
      "We do not sell personal information to third parties.",
      "Information may be shared with potential transaction counterparties with consent.",
      "Information may be disclosed to service providers who assist our operations.",
      "Information may be disclosed when required by law or to protect our rights.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement appropriate technical and organizational security measures.",
      "Access to personal information is restricted to authorized personnel.",
      "Regular security assessments and updates are conducted.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "Personal information is retained as long as necessary for service provision.",
      "Information may be retained longer if required by law or for legitimate business purposes.",
      "Clients may request deletion of their information subject to legal obligations.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Right to access your personal information",
      "Right to correct inaccurate information",
      "Right to request deletion of your information",
      "Right to object to certain processing activities",
      "Right to data portability where applicable",
    ],
  },
  {
    title: "7. Cookies and Tracking",
    content: [
      "Our website uses cookies to improve user experience.",
      "You can control cookie preferences through your browser settings.",
      "Analytics tools may be used to understand website usage patterns.",
    ],
  },
  {
    title: "8. Contact Us",
    content: [
      "For privacy-related inquiries, please contact our Data Protection Officer.",
      "Email: privacy@ma-site.com",
      "Address: M&A Research Institute Inc., Tokyo, Japan",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-[#1a2b4c] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/70">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white flex-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-slate max-w-none"
          >
            <div className="bg-[#f8f8f8] p-6 rounded-lg mb-8">
              <p className="text-[#666666] mb-0">
                M&A Research Institute Inc. is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your personal information.
              </p>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold text-[#1a2b4c] mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[#666666] ml-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
              <p className="text-sm text-[#666666]">
                For any questions about this Privacy Policy, please contact us at privacy@ma-site.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
