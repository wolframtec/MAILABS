"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Sparkles, Percent, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const feeComparison = [
  {
    feeType: "Retainer Fee",
    maResearchInstitute: { value: "Free", icon: Check },
    typicalCompetitors: { value: "Charged", icon: X },
  },
  {
    feeType: "Interim Fees",
    maResearchInstitute: { value: "Free", icon: Check },
    typicalCompetitors: { value: "Charged", icon: X },
  },
  {
    feeType: "Monthly Fees",
    maResearchInstitute: { value: "Free", icon: Check },
    typicalCompetitors: { value: "Charged", icon: X },
  },
  {
    feeType: "Success Fee Base",
    maResearchInstitute: { value: "Transfer Price", icon: Check, highlight: true },
    typicalCompetitors: { value: "Total Assets", icon: X },
  },
  {
    feeType: "Advisory Period",
    maResearchInstitute: { value: "No Limit", icon: Check },
    typicalCompetitors: { value: "Time Limited", icon: X },
  },
];

const successFeeTiers = [
  { range: "Under 100M yen", rate: "5%", example: "5M yen on 100M yen deal" },
  { range: "100M - 500M yen", rate: "4%", example: "16M yen on 400M yen deal" },
  { range: "500M - 1B yen", rate: "3%", example: "22.5M yen on 750M yen deal" },
  { range: "1B - 5B yen", rate: "2%", example: "60M yen on 3B yen deal" },
  { range: "Over 5B yen", rate: "Custom", example: "Negotiable based on complexity" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function FeePage() {
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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Pricing</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Fee Structure</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Completely performance-based. No hidden costs, no upfront fees. 
              We only succeed when you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Value Props */}
      <section className="bg-[#c9a961] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-[#1a2b4c]" />
              <div className="text-left">
                <p className="font-bold text-[#1a2b4c]">Zero Upfront Costs</p>
                <p className="text-sm text-[#1a2b4c]/80">No retainer or monthly fees</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
              <Percent className="w-8 h-8 text-[#1a2b4c]" />
              <div className="text-left">
                <p className="font-bold text-[#1a2b4c]">Success-Based Only</p>
                <p className="text-sm text-[#1a2b4c]/80">Pay only when deal closes</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
              <Calculator className="w-8 h-8 text-[#1a2b4c]" />
              <div className="text-left">
                <p className="font-bold text-[#1a2b4c]">Fair Calculation</p>
                <p className="text-sm text-[#1a2b4c]/80">Based on transfer price</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fee Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a2b4c] mb-4">Fee Comparison</h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              See how our completely performance-based model compares to traditional M&A advisory firms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-[#e5e5e5]">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#1a2b4c] text-white">
                      <th className="px-6 py-4 text-left font-semibold">Fee Type</th>
                      <th className="px-6 py-4 text-center font-semibold bg-[#c9a961] text-[#1a2b4c]">
                        M&A Research Institute
                      </th>
                      <th className="px-6 py-4 text-center font-semibold bg-[#666666]">
                        Typical Competitors
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeComparison.map((row, index) => (
                      <tr key={row.feeType} className={index % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"}>
                        <td className="px-6 py-4 font-medium text-[#1a2b4c]">{row.feeType}</td>
                        <td className="px-6 py-4 text-center bg-[#c9a961]/5">
                          <div className="flex items-center justify-center gap-2">
                            <row.maResearchInstitute.icon className={`w-5 h-5 ${row.maResearchInstitute.icon === Check ? 'text-green-600' : 'text-red-500'}`} />
                            <span className={row.maResearchInstitute.highlight ? "font-bold text-[#c9a961]" : "text-[#333333]"}>
                              {row.maResearchInstitute.value}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <row.typicalCompetitors.icon className={`w-5 h-5 ${row.typicalCompetitors.icon === Check ? 'text-green-600' : 'text-red-500'}`} />
                            <span className="text-[#666666]">{row.typicalCompetitors.value}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Fee Structure */}
      <section className="py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a2b4c] mb-4">Success Fee Structure</h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Our success fees are calculated based on the final transfer price, 
              with a tiered structure that benefits larger transactions.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {successFeeTiers.map((tier, index) => (
              <motion.div key={tier.range} variants={fadeInUp}>
                <Card className={`h-full border-2 ${index === 0 ? 'border-[#c9a961]' : 'border-[#e5e5e5]'} hover:border-[#c9a961] transition-colors`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-[#666666]">Deal Size</span>
                      {index === 0 && (
                        <Badge className="bg-[#c9a961] text-[#1a2b4c]">Most Common</Badge>
                      )}
                    </div>
                    <p className="text-lg font-bold text-[#1a2b4c] mb-2">{tier.range}</p>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold text-[#c9a961]">{tier.rate}</span>
                      <span className="text-[#666666]">success fee</span>
                    </div>
                    <p className="text-sm text-[#666666] bg-white p-3 rounded-lg border border-[#e5e5e5]">
                      Example: {tier.example}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 bg-[#1a2b4c] rounded-lg text-white"
          >
            <h3 className="font-bold text-lg mb-2">Important Notes</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Success fee is calculated based on the final transfer price, not total asset value</li>
              <li>• Minimum success fee may apply for transactions under 50 million yen</li>
              <li>• Buyer fees may also apply depending on the transaction structure</li>
              <li>• All fees are subject to consumption tax</li>
              <li>• Custom fee structures available for complex or large-scale transactions</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#1a2b4c] to-[#2a3b5c] rounded-2xl p-8 lg:p-12 text-center text-white"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to discuss your M&A needs?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experienced advisers. 
              Learn more about how our performance-based fee structure can work for you.
            </p>
            <Button 
              size="lg"
              className="bg-[#c9a961] hover:bg-[#b59851] text-[#1a2b4c] font-semibold px-8"
              asChild
            >
              <Link href="/en/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
