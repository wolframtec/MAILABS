"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scale, Shield, FileCheck, AlertTriangle, Lock, BookOpen } from "lucide-react";

const governanceItems = [
  {
    id: "compliance",
    title: "Compliance Policies",
    icon: Scale,
    content: "We maintain comprehensive compliance policies that ensure adherence to all applicable laws and regulations. Our compliance framework covers anti-corruption, fair competition, data protection, and financial reporting standards. Regular training sessions ensure all employees understand and follow these policies."
  },
  {
    id: "anti-bribery",
    title: "Anti-Bribery Stance",
    icon: Shield,
    content: "We have a zero-tolerance policy for bribery and corruption. All employees, directors, and business partners are required to adhere to our anti-bribery policy. We conduct due diligence on all business relationships and maintain detailed records of transactions to ensure transparency."
  },
  {
    id: "risk-management",
    title: "Risk Management Framework",
    icon: AlertTriangle,
    content: "Our enterprise risk management framework identifies, assesses, and mitigates risks across all business operations. We maintain robust internal controls and regularly review our risk exposure. The Board of Directors oversees the risk management process and ensures adequate resources are allocated."
  },
  {
    id: "whistleblower",
    title: "Whistleblower System",
    icon: FileCheck,
    content: "We operate a confidential whistleblower system that allows employees and stakeholders to report concerns about misconduct or violations. Reports can be made anonymously, and we ensure protection against retaliation for those who report in good faith. All reports are investigated promptly and thoroughly."
  },
  {
    id: "information-security",
    title: "Information Security Policy",
    icon: Lock,
    content: "Information security is critical to our operations. We implement industry-standard security measures to protect client data, proprietary information, and system infrastructure. Regular security audits, employee training, and incident response procedures ensure we maintain the highest security standards."
  },
  {
    id: "board-structure",
    title: "Board Structure",
    icon: BookOpen,
    content: "Our Board comprises a mix of executive and independent directors, ensuring balanced oversight. Independent directors provide objective perspectives on strategic decisions and risk management. The Board meets regularly to review performance, approve major decisions, and ensure accountability."
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function GovernancePage() {
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
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-[#c9a961]"></span>
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Governance</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Corporate Governance</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Upholding the highest standards of corporate governance to ensure 
              transparency, accountability, and sustainable value creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Our Governance Approach</h2>
              <p className="text-[#666666] mb-4">
                As a Tokyo Stock Exchange listed company, we are committed to maintaining the highest 
                standards of corporate governance. Our governance framework is designed to ensure 
                transparent decision-making, effective risk management, and accountability to all stakeholders.
              </p>
              <p className="text-[#666666]">
                We continuously review and enhance our governance practices to align with evolving 
                regulatory requirements and best practices in corporate governance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-[#f8f8f8] border-0">
                <CardContent className="p-6 text-center">
                  <Scale className="w-10 h-10 text-[#c9a961] mx-auto mb-3" />
                  <p className="font-bold text-[#1a2b4c]">Transparency</p>
                </CardContent>
              </Card>
              <Card className="bg-[#f8f8f8] border-0">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 text-[#c9a961] mx-auto mb-3" />
                  <p className="font-bold text-[#1a2b4c]">Accountability</p>
                </CardContent>
              </Card>
              <Card className="bg-[#f8f8f8] border-0">
                <CardContent className="p-6 text-center">
                  <Lock className="w-10 h-10 text-[#c9a961] mx-auto mb-3" />
                  <p className="font-bold text-[#1a2b4c]">Integrity</p>
                </CardContent>
              </Card>
              <Card className="bg-[#f8f8f8] border-0">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-10 h-10 text-[#c9a961] mx-auto mb-3" />
                  <p className="font-bold text-[#1a2b4c]">Compliance</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governance Details */}
      <section className="py-16 bg-[#f8f8f8] flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-8">Governance Framework</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {governanceItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="bg-white rounded-lg border border-[#e5e5e5] px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-[#1a2b4c] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-[#1a2b4c]">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pl-14">
                    <p className="text-[#666666]">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
