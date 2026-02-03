"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sun, Droplets, Wind, Recycle, Zap } from "lucide-react";

const initiatives = [
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Implementing LED lighting and energy-efficient HVAC systems in all offices",
    target: "Reduce energy consumption by 20% by 2025",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    description: "Comprehensive recycling program and paperless office initiatives",
    target: "Achieve 90% recycling rate by 2024",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Transitioning to renewable energy sources for office operations",
    target: "50% renewable energy by 2026",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Water-efficient fixtures and awareness campaigns",
    target: "Reduce water usage by 15%",
  },
];

export default function EnvironmentPage() {
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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Environment</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Environmental Initiatives</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Committed to reducing our environmental footprint and promoting 
              sustainable business practices across our operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Policy */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Leaf className="w-16 h-16 text-[#c9a961] mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Environmental Policy</h2>
            <p className="text-[#666666]">
              We recognize the importance of environmental protection and are committed to 
              minimizing our environmental impact. Our operations prioritize energy efficiency, 
              waste reduction, and responsible resource use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 bg-[#f8f8f8] flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Our Initiatives</h2>
            <p className="text-[#666666]">Key environmental programs and targets</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {initiatives.map((item) => (
              <Card key={item.title} className="border border-[#e5e5e5]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a2b4c] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#666666] mb-3">{item.description}</p>
                      <div className="inline-block bg-[#c9a961]/20 px-3 py-1 rounded text-sm text-[#1a2b4c] font-medium">
                        Target: {item.target}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
