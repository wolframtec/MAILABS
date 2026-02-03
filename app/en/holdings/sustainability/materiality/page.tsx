"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe, TrendingUp, Users, Leaf, Lightbulb } from "lucide-react";

const materialityItems = [
  {
    id: "trust",
    title: "Trust & Integrity",
    description: "Maintaining stakeholder trust through ethical business practices and transparent operations",
    sdg: "SDG 16: Peace, Justice and Strong Institutions",
    icon: Lightbulb,
  },
  {
    id: "growth",
    title: "Sustainable Growth",
    description: "Creating long-term value for shareholders while contributing to economic development",
    sdg: "SDG 8: Decent Work and Economic Growth",
    icon: TrendingUp,
  },
  {
    id: "talent",
    title: "Talent Development",
    description: "Investing in our people through training, diversity, and inclusive workplace culture",
    sdg: "SDG 4: Quality Education",
    icon: Users,
  },
  {
    id: "environment",
    title: "Environmental Responsibility",
    description: "Minimizing our environmental footprint and promoting sustainable business practices",
    sdg: "SDG 13: Climate Action",
    icon: Leaf,
  },
  {
    id: "community",
    title: "Community Engagement",
    description: "Contributing positively to the communities where we operate",
    sdg: "SDG 17: Partnerships for the Goals",
    icon: Globe,
  },
];

const sdgColors: Record<string, string> = {
  "SDG 4": "bg-[#c5192d]",
  "SDG 8": "bg-[#a21942]",
  "SDG 13": "bg-[#3f7e44]",
  "SDG 16": "bg-[#00689d]",
  "SDG 17": "bg-[#19486a]",
};

export default function MaterialityPage() {
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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Materiality</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">SDGs / Materiality</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Our materiality framework identifies key sustainability issues 
              that align with our business strategy and stakeholder expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materiality Matrix */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Materiality Matrix</h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              We have identified five key material issues through stakeholder engagement 
              and business impact assessment, aligned with the UN Sustainable Development Goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {materialityItems.map((item, index) => (
              <Card key={item.id} className="h-full border border-[#e5e5e5] hover:border-[#c9a961] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#1a2b4c] rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2b4c] mb-2">{item.title}</h3>
                  <p className="text-[#666666] text-sm mb-4">{item.description}</p>
                  <div className={`inline-block px-3 py-1 rounded text-white text-xs font-semibold ${sdgColors[item.sdg.split(":")[0]] || "bg-[#1a2b4c]"}`}>
                    {item.sdg}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Policy */}
      <section className="py-16 bg-[#f8f8f8] flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-[#c9a961]" />
                  <h2 className="text-2xl font-bold text-[#1a2b4c]">Sustainability Policy</h2>
                </div>
                <div className="space-y-4 text-[#666666]">
                  <p>
                    M&A Research Institute Holdings is committed to contributing to the achievement 
                    of the United Nations Sustainable Development Goals (SDGs) through our business activities.
                  </p>
                  <p>
                    We recognize that sustainable business practices are essential for long-term 
                    corporate value creation. Our sustainability initiatives focus on:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a961] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Promoting ethical M&A practices that benefit all stakeholders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a961] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Supporting business succession and continuity in local communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a961] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Developing talent and providing quality employment opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a961] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Minimizing our environmental impact through responsible operations</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
