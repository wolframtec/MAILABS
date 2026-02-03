"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Leaf, Users, Globe, ChevronRight, Target, Shield, Heart } from "lucide-react";

const sustainabilityAreas = [
  {
    id: "governance",
    title: "Governance",
    description: "Corporate governance, compliance policies, and risk management frameworks",
    icon: Scale,
    path: "/en/holdings/sustainability/governance",
  },
  {
    id: "materiality",
    title: "SDGs / Materiality",
    description: "Sustainability policy, ESG initiatives, and materiality identification",
    icon: Target,
    path: "/en/holdings/sustainability/materiality",
  },
  {
    id: "environment",
    title: "Environment",
    description: "Environmental initiatives and carbon footprint reduction efforts",
    icon: Leaf,
    path: "/en/holdings/sustainability/environment",
  },
  {
    id: "social",
    title: "Social",
    description: "Social responsibility, diversity, and community engagement",
    icon: Heart,
    path: "/en/holdings/sustainability/social",
  },
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

export default function SustainabilityPage() {
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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">ESG</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Sustainability Initiatives</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Committed to sustainable growth and responsible business practices 
              that create long-term value for all stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Policy Statement */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-6">Our Sustainability Policy</h2>
            <blockquote className="text-xl text-[#666666] italic border-l-4 border-[#c9a961] pl-6 text-left mb-8">
              &ldquo;We believe that sustainable business practices are essential for long-term success. 
              Our commitment to ESG principles guides our operations and strategic decisions, 
              ensuring we create value for our clients, employees, shareholders, and society.&rdquo;
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-[#f8f8f8] rounded-lg">
                <Globe className="w-10 h-10 text-[#c9a961] mx-auto mb-3" />
                <h3 className="font-bold text-[#1a2b4c] mb-2">Environmental</h3>
                <p className="text-sm text-[#666666]">Minimizing our environmental impact</p>
              </div>
              <div className="p-6 bg-[#f8f8f8] rounded-lg">
                <Users className="w-10 h-10 text-[#c9a961] mx-auto mb-3" />
                <h3 className="font-bold text-[#1a2b4c] mb-2">Social</h3>
                <p className="text-sm text-[#666666]">Supporting our people and communities</p>
              </div>
              <div className="p-6 bg-[#f8f8f8] rounded-lg">
                <Shield className="w-10 h-10 text-[#c9a961] mx-auto mb-3" />
                <h3 className="font-bold text-[#1a2b4c] mb-2">Governance</h3>
                <p className="text-sm text-[#666666]">Upholding the highest standards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 bg-[#f8f8f8] flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Explore Our Initiatives</h2>
            <p className="text-[#666666]">Learn more about our sustainability efforts across key areas</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {sustainabilityAreas.map((area) => (
              <motion.div key={area.id} variants={fadeInUp}>
                <Link href={area.path}>
                  <Card className="h-full border border-[#e5e5e5] hover:border-[#c9a961] hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-[#1a2b4c] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a961] transition-colors">
                          <area.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a2b4c] mb-2 group-hover:text-[#c9a961] transition-colors">
                            {area.title}
                          </h3>
                          <p className="text-[#666666] mb-3">
                            {area.description}
                          </p>
                          <span className="inline-flex items-center text-[#c9a961] font-semibold text-sm">
                            Learn more
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
