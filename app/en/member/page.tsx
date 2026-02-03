"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User, GraduationCap, Building } from "lucide-react";

const executives = [
  {
    name: "Toshiki Moriya",
    title: "Executive Officer & Executive General Manager, Corporate Information Dept",
    specialties: ["Manufacturing", "Services", "Information and Telecommunications", "Commerce"],
    background: "Doshisha University Economics, Nomura Securities",
    bio: "Mr. Moriya brings extensive experience in corporate finance and M&A advisory from his tenure at Nomura Securities. He has successfully led numerous cross-border transactions and specializes in helping manufacturing and technology companies achieve their strategic goals through M&A.",
    deals: 150,
  },
  {
    name: "Taisuke Mori",
    title: "Executive Officer & Executive General Manager, Corporate Information Dept",
    specialties: ["Construction", "Manufacturing", "Real Estate", "Wholesale", "Retail"],
    background: "Waseda University Faculty of Law, SMBC Nikko Securities",
    bio: "With a strong legal background from Waseda University and investment banking experience at SMBC Nikko Securities, Mr. Mori provides comprehensive M&A solutions for clients in traditional industries. His expertise in real estate and construction M&A has been instrumental in closing complex deals.",
    deals: 120,
  },
  {
    name: "Hiroki Kawashima",
    title: "Executive Officer & Executive General Manager, Accounting Alliance Dept",
    specialties: ["Medical Corporations", "Temporary Staffing", "Real Estate"],
    background: "Kyoto University, Bank of Mitsubishi UFJ",
    bio: "Mr. Kawashima combines his deep understanding of accounting and finance from Kyoto University with practical banking experience at Bank of Mitsubishi UFJ. He specializes in regulated industries and has developed particular expertise in medical corporation M&A.",
    deals: 98,
  },
  {
    name: "Kenji Yamamoto",
    title: "Senior Managing Director, M&A Advisory Division",
    specialties: ["Technology", "Software", "IT Services", "E-commerce"],
    background: "University of Tokyo, Goldman Sachs Japan",
    bio: "Mr. Yamamoto brings Wall Street expertise to Japanese M&A, having worked at Goldman Sachs Japan before joining M&A Research Institute. He is a leading expert in technology sector transactions and has advised on some of Japan's most significant tech M&A deals.",
    deals: 200,
  },
  {
    name: "Yuki Tanaka",
    title: "Managing Director, International Business Dept",
    specialties: ["Cross-border M&A", "Food & Beverage", "Consumer Goods"],
    background: "Keio University, Morgan Stanley",
    bio: "Ms. Tanaka leads our international business initiatives, leveraging her experience at Morgan Stanley to facilitate cross-border transactions. She has extensive networks throughout Asia and has successfully closed numerous deals between Japanese and overseas companies.",
    deals: 85,
  },
  {
    name: "Shinji Kobayashi",
    title: "Managing Director, Corporate Solutions Dept",
    specialties: ["Automotive", "Machinery", "Industrial Equipment"],
    background: "Hitotsubashi University, JPMorgan",
    bio: "Mr. Kobayashi specializes in industrial sector M&A, bringing together his academic background from Hitotsubashi University and investment banking experience at JPMorgan. He has deep industry knowledge in automotive and machinery sectors.",
    deals: 110,
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

export default function TeamPage() {
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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Our Team</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Team Introduction</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Meet our experienced advisers who bring decades of combined experience in M&A advisory, 
              investment banking, and corporate finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-[#c9a961] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-[#1a2b4c]">50+</p>
              <p className="text-[#1a2b4c]/80 text-sm">Advisers</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-[#1a2b4c]">750+</p>
              <p className="text-[#1a2b4c]/80 text-sm">Deals Closed</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-[#1a2b4c]">20+</p>
              <p className="text-[#1a2b4c]/80 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-[#1a2b4c]">15</p>
              <p className="text-[#1a2b4c]/80 text-sm">Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Profiles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {executives.map((executive, index) => (
              <motion.div key={executive.name} variants={fadeInUp}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="h-full cursor-pointer border border-[#e5e5e5] hover:border-[#c9a961] hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        {/* Avatar */}
                        <div className="w-24 h-24 bg-gradient-to-br from-[#1a2b4c] to-[#2a3b5c] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                          <User className="w-12 h-12 text-white/80" />
                        </div>
                        
                        {/* Info */}
                        <div className="text-center">
                          <h3 className="text-lg font-bold text-[#1a2b4c] mb-1">
                            {executive.name}
                          </h3>
                          <p className="text-sm text-[#c9a961] font-medium mb-3">
                            {executive.title}
                          </p>
                          
                          {/* Specialties */}
                          <div className="flex flex-wrap justify-center gap-1 mb-4">
                            {executive.specialties.slice(0, 3).map((specialty) => (
                              <Badge 
                                key={specialty} 
                                variant="secondary"
                                className="bg-[#f5f5f5] text-[#666666] text-xs"
                              >
                                {specialty}
                              </Badge>
                            ))}
                            {executive.specialties.length > 3 && (
                              <Badge 
                                variant="secondary"
                                className="bg-[#f5f5f5] text-[#666666] text-xs"
                              >
                                +{executive.specialties.length - 3}
                              </Badge>
                            )}
                          </div>
                          
                          {/* Background */}
                          <div className="flex items-center justify-center gap-4 text-xs text-[#666666]">
                            <span className="flex items-center gap-1">
                              <GraduationCap className="w-3 h-3" />
                              {executive.background.split(",")[0]}
                            </span>
                            <span className="flex items-center gap-1">
                              <Building className="w-3 h-3" />
                              {executive.deals}+ deals
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#1a2b4c]">
                        {executive.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-[#c9a961] font-medium mb-4">{executive.title}</p>
                      
                      <div className="w-20 h-20 bg-gradient-to-br from-[#1a2b4c] to-[#2a3b5c] rounded-full flex items-center justify-center mb-4">
                        <User className="w-10 h-10 text-white/80" />
                      </div>
                      
                      <p className="text-[#666666] mb-4">{executive.bio}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-[#1a2b4c] mb-2">Specialties</p>
                          <div className="flex flex-wrap gap-2">
                            {executive.specialties.map((specialty) => (
                              <Badge 
                                key={specialty}
                                className="bg-[#1a2b4c] text-white"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-[#1a2b4c] mb-1">Background</p>
                          <p className="text-sm text-[#666666]">{executive.background}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-[#1a2b4c] mb-1">Deals Closed</p>
                          <p className="text-sm text-[#666666]">{executive.deals}+ successful transactions</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Join Our Team</h2>
            <p className="text-[#666666] mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented professionals with experience in M&A, investment banking, 
              or corporate finance to join our growing team.
            </p>
            <a 
              href="mailto:careers@ma-site.com"
              className="inline-flex items-center px-6 py-3 bg-[#1a2b4c] text-white font-semibold rounded-md hover:bg-[#2a3b5c] transition-colors"
            >
              View Career Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
