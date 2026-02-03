"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Scope of Application",
    content: [
      "These Terms of Service apply to all services provided by M&A Research Institute Inc. (hereinafter referred to as 'the Company').",
      "By using our services, you agree to be bound by these terms.",
      "These terms may be updated from time to time, and continued use constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "2. Service Description",
    content: [
      "The Company provides M&A advisory and intermediary services to business owners and investors.",
      "Our services include business valuation, buyer/seller matching, due diligence support, and transaction coordination.",
      "Specific service details will be outlined in separate engagement agreements.",
    ],
  },
  {
    title: "3. Fee Structure",
    content: [
      "Our services operate on a performance-based fee structure as detailed on our Fee Structure page.",
      "No retainer fees or monthly fees are charged for our standard M&A advisory services.",
      "Success fees are payable upon successful completion of a transaction.",
      "All fees are subject to applicable consumption tax.",
    ],
  },
  {
    title: "4. Confidentiality",
    content: [
      "All information shared with the Company will be treated as confidential.",
      "We implement appropriate security measures to protect client information.",
      "Confidential information will not be disclosed to third parties without consent, except as required by law.",
    ],
  },
  {
    title: "5. Client Obligations",
    content: [
      "Clients must provide accurate and complete information about their business.",
      "Clients must promptly notify the Company of any material changes to their business.",
      "Clients must act in good faith throughout the M&A process.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "The Company's liability is limited to the extent permitted by applicable law.",
      "We do not guarantee the successful completion of any transaction.",
      "Clients are responsible for their own due diligence and decision-making.",
    ],
  },
  {
    title: "7. Termination",
    content: [
      "Either party may terminate the engagement with written notice.",
      "Termination does not affect obligations accrued prior to termination.",
      "Confidentiality obligations survive termination.",
    ],
  },
  {
    title: "8. Governing Law",
    content: [
      "These terms are governed by the laws of Japan.",
      "Any disputes shall be subject to the exclusive jurisdiction of the Tokyo District Court.",
    ],
  },
];

export default function TermsPage() {
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
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-white/70">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                Please read these Terms of Service carefully before using our services. 
                By accessing or using our services, you agree to be bound by these terms.
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
                For questions about these Terms of Service, please contact us at info@ma-site.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
