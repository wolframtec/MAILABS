"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Handshake, Globe, Accessibility } from "lucide-react";

const socialAreas = [
  {
    icon: Users,
    title: "Diversity & Inclusion",
    description: "Promoting a diverse workforce and inclusive workplace culture",
    initiatives: ["Equal opportunity hiring", "Diversity training programs", "Employee resource groups"],
  },
  {
    icon: GraduationCap,
    title: "Talent Development",
    description: "Investing in continuous learning and professional growth",
    initiatives: ["Leadership development", "Skills training", "Mentorship programs"],
  },
  {
    icon: Heart,
    title: "Employee Wellbeing",
    description: "Supporting physical and mental health of our employees",
    initiatives: ["Flexible work arrangements", "Health benefits", "Wellness programs"],
  },
  {
    icon: Globe,
    title: "Community Engagement",
    description: "Contributing positively to the communities we serve",
    initiatives: ["Volunteer programs", "Local partnerships", "Educational support"],
  },
];

export default function SocialPage() {
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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Social</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Social Responsibility</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Empowering our people and supporting the communities where we operate 
              through responsible business practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Policy */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="w-12 h-12 text-[#c9a961]" />
              <Handshake className="w-12 h-12 text-[#c9a961]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Our Commitment</h2>
            <p className="text-[#666666]">
              We believe that our people are our greatest asset. We are committed to creating 
              a supportive, inclusive workplace where everyone can thrive and contribute to 
              our shared success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Areas */}
      <section className="py-16 bg-[#f8f8f8] flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Focus Areas</h2>
            <p className="text-[#666666]">Key areas of our social responsibility efforts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {socialAreas.map((area) => (
              <Card key={area.title} className="border border-[#e5e5e5]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1a2b4c] mb-2">{area.title}</h3>
                      <p className="text-sm text-[#666666] mb-4">{area.description}</p>
                      <ul className="space-y-1">
                        {area.initiatives.map((initiative) => (
                          <li key={initiative} className="flex items-center gap-2 text-sm text-[#666666]">
                            <span className="w-1.5 h-1.5 bg-[#c9a961] rounded-full"></span>
                            {initiative}
                          </li>
                        ))}
                      </ul>
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
