"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users, Building2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  {
    label: "Seller fees until closing",
    value: "¥0",
    description: "No fees charged until M&A contract is closed",
  },
  {
    label: "M&A closing in as little as",
    value: "43",
    suffix: " days",
    description: "Speedy closing with experienced professionals",
  },
  {
    label: "Annual Inquiries",
    value: "5,000+",
    description: "Prioritizing business owners' needs",
  },
];

const valuePropositions = [
  {
    id: "fee_structure",
    title: "Success-based fee system",
    content: "No retainer fee, interim fee, or monthly fees. Success fee calculated based on transfer price, not total asset amount.",
    link: "/en/fee",
    icon: TrendingUp,
  },
  {
    id: "credibility",
    title: "Tokyo Stock Exchange listed credibility",
    content: "Powerful M&A support from experienced advisers with excellent performance track record.",
    link: "/en/member",
    icon: Building2,
  },
  {
    id: "speed",
    title: "Fast & efficient process",
    content: "Streamlined procedures and experienced team enable rapid deal closure while maintaining quality.",
    link: "/en/list",
    icon: Shield,
  },
  {
    id: "support",
    title: "Dedicated adviser support",
    content: "Each client receives personalized attention from experienced M&A professionals throughout the process.",
    link: "/en/contact",
    icon: Users,
  },
];

const trustBadges = [
  { name: "Tokyo Stock Exchange", subtitle: "Standard Market Listed" },
  { name: "JMRO", subtitle: "Research Certified" },
  { name: "METI", subtitle: "Ministry Certified" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2b4c] via-[#1a2b4c] to-[#2a3b5c] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#c9a961]/20 text-[#c9a961] rounded-full text-sm font-semibold border border-[#c9a961]/30">
                Tokyo Stock Exchange Listed
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              The Only Listed M&A Intermediary operating on a{" "}
              <span className="text-[#c9a961]">completely performance-based</span>{" "}
              fee system
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl"
            >
              No retainer fees. No monthly fees. No interim fees. 
              We only succeed when you succeed.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-[#c9a961] hover:bg-[#b59851] text-[#1a2b4c] font-semibold px-8"
                asChild
              >
                <Link href="/en/contact">
                  Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8"
                asChild
              >
                <Link href="/en/fee">View Fee Structure</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center md:text-left"
                >
                  <p className="text-sm text-white/60 mb-2">{stat.label}</p>
                  <p className="text-4xl lg:text-5xl font-bold text-[#c9a961] mb-2">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                    />
                  </p>
                  <p className="text-sm text-white/70">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-4">
              Four reasons to choose M&A Research Institute
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              We provide comprehensive M&A support backed by our unique business model and experienced team
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {valuePropositions.map((prop, index) => (
              <motion.div key={prop.id} variants={fadeInUp}>
                <Card className="h-full border border-[#e5e5e5] hover:border-[#c9a961] hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a961] transition-colors">
                        <prop.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1a2b4c] mb-2">
                          {prop.title}
                        </h3>
                        <p className="text-[#666666] mb-4">
                          {prop.content}
                        </p>
                        <Link 
                          href={prop.link}
                          className="inline-flex items-center text-[#c9a961] font-semibold hover:text-[#b59851] transition-colors"
                        >
                          Learn more
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-2">Trusted & Certified</h2>
            <p className="text-[#666666]">Recognized by leading financial institutions</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 text-center border border-[#e5e5e5] hover:border-[#c9a961] transition-colors"
              >
                <div className="w-16 h-16 bg-[#1a2b4c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="font-bold text-[#1a2b4c] mb-1">{badge.name}</h3>
                <p className="text-sm text-[#666666]">{badge.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a2b4c]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to explore your M&A options?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experienced advisers. No obligations, no fees until we close your deal.
            </p>
            <Button 
              size="lg"
              className="bg-[#c9a961] hover:bg-[#b59851] text-[#1a2b4c] font-semibold px-10"
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
