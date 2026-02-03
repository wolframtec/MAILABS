"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, Shield, FileText, TrendingUp, Award } from "lucide-react";

const companyHistory = [
  { year: "2015", event: "M&A Research Institute Inc. founded in Tokyo" },
  { year: "2017", event: "Expanded services to include cross-border M&A" },
  { year: "2019", event: "Reached 100 successful deal closures" },
  { year: "2021", event: "Listed on Tokyo Stock Exchange Mothers Market" },
  { year: "2022", event: "Upgraded to Tokyo Stock Exchange Standard Market" },
  { year: "2023", event: "Launched sustainability initiatives" },
  { year: "2024", event: "Expanded operations to Southeast Asia" },
];

const groupCompanies = [
  {
    name: "M&A Research Institute Inc.",
    description: "Core M&A advisory and intermediary services",
    employees: "200+",
    established: "2015",
  },
  {
    name: "M&A Research Institute Holdings Inc.",
    description: "Holding company for group management",
    employees: "20",
    established: "2021",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function HoldingsPage() {
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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Corporate</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">M&A Research Institute Holdings</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Tokyo Stock Exchange listed holding company managing the M&A Research Institute Group,
              committed to excellence in corporate governance and sustainable business practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-[#c9a961] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#1a2b4c]">TSE</p>
              <p className="text-[#1a2b4c]/80 text-sm">Standard Market</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1a2b4c]">750+</p>
              <p className="text-[#1a2b4c]/80 text-sm">Deals Closed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1a2b4c]">200+</p>
              <p className="text-[#1a2b4c]/80 text-sm">Employees</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1a2b4c]">9+</p>
              <p className="text-[#1a2b4c]/80 text-sm">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 lg:py-24 bg-white flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start mb-8 bg-[#f8f8f8] p-1">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-[#1a2b4c]">Overview</TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-white data-[state=active]:text-[#1a2b4c]">History</TabsTrigger>
              <TabsTrigger value="governance" className="data-[state=active]:bg-white data-[state=active]:text-[#1a2b4c]">Governance</TabsTrigger>
              <TabsTrigger value="companies" className="data-[state=active]:bg-white data-[state=active]:text-[#1a2b4c]">Group Companies</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#1a2b4c] mb-4">Company Overview</h2>
                  <p className="text-[#666666] mb-6">
                    M&A Research Institute Holdings Inc. is the holding company of the M&A Research Institute Group, 
                    a leading M&A advisory firm in Japan. We are listed on the Tokyo Stock Exchange Standard Market 
                    and operate with a commitment to transparency, corporate governance, and sustainable value creation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-[#c9a961] mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#1a2b4c]">Corporate Name</p>
                        <p className="text-[#666666] text-sm">M&A Research Institute Holdings Inc.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#c9a961] mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#1a2b4c]">Listing</p>
                        <p className="text-[#666666] text-sm">Tokyo Stock Exchange Standard Market</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[#c9a961] mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#1a2b4c]">Employees</p>
                        <p className="text-[#666666] text-sm">220+ (Consolidated)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#c9a961] mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#1a2b4c]">Certifications</p>
                        <p className="text-[#666666] text-sm">JMRO, METI Registered</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8f8f8] rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1a2b4c] mb-6">Corporate Philosophy</h3>
                  <blockquote className="text-lg text-[#666666] italic border-l-4 border-[#c9a961] pl-6 mb-6">
                    &ldquo;To be the most trusted M&A partner for business owners, 
                    delivering value through professional expertise and ethical practices.&rdquo;
                  </blockquote>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-[#e5e5e5]">
                      <p className="font-semibold text-[#1a2b4c] mb-1">Mission</p>
                      <p className="text-sm text-[#666666]">
                        Empower business owners to achieve their strategic goals through professional M&A advisory services.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-[#e5e5e5]">
                      <p className="font-semibold text-[#1a2b4c] mb-1">Vision</p>
                      <p className="text-sm text-[#666666]">
                        Become Asia&apos;s leading M&A advisory group, known for excellence and integrity.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-[#e5e5e5]">
                      <p className="font-semibold text-[#1a2b4c] mb-1">Values</p>
                      <p className="text-sm text-[#666666]">
                        Integrity, Professionalism, Innovation, and Client Success.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="history">
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-[#1a2b4c] mb-8">Company History</h2>
                <div className="relative border-l-2 border-[#c9a961] ml-4 space-y-8">
                  {companyHistory.map((item, index) => (
                    <div key={item.year} className="relative pl-8">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#c9a961] rounded-full" />
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-2xl font-bold text-[#c9a961] w-20">{item.year}</span>
                        <span className="text-[#666666]">{item.event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="governance">
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-8 h-8 text-[#c9a961]" />
                      <h3 className="text-xl font-bold text-[#1a2b4c]">Corporate Ethics</h3>
                    </div>
                    <p className="text-[#666666] text-sm">
                      We maintain the highest standards of corporate ethics and compliance. 
                      Our code of conduct ensures that all employees act with integrity and 
                      in the best interests of our clients.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-8 h-8 text-[#c9a961]" />
                      <h3 className="text-xl font-bold text-[#1a2b4c]">Internal Control</h3>
                    </div>
                    <p className="text-[#666666] text-sm">
                      Robust internal control systems ensure compliance with regulations 
                      and maintain the quality of our services. Regular audits and 
                      reviews are conducted to uphold standards.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-8 h-8 text-[#c9a961]" />
                      <h3 className="text-xl font-bold text-[#1a2b4c]">Risk Management</h3>
                    </div>
                    <p className="text-[#666666] text-sm">
                      Comprehensive risk management framework identifies, assesses, and 
                      mitigates risks across our operations. We maintain contingency plans 
                      for various business scenarios.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-[#c9a961]" />
                      <h3 className="text-xl font-bold text-[#1a2b4c]">Board Structure</h3>
                    </div>
                    <p className="text-[#666666] text-sm">
                      Our board comprises experienced professionals with diverse backgrounds. 
                      Independent directors ensure objective oversight and strategic guidance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="companies">
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {groupCompanies.map((company) => (
                  <Card key={company.name} className="border-[#e5e5e5] hover:border-[#c9a961] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1a2b4c]">{company.name}</h3>
                          <p className="text-sm text-[#666666]">{company.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-[#f8f8f8] p-3 rounded">
                          <p className="text-[#666666]">Established</p>
                          <p className="font-semibold text-[#1a2b4c]">{company.established}</p>
                        </div>
                        <div className="bg-[#f8f8f8] p-3 rounded">
                          <p className="text-[#666666]">Employees</p>
                          <p className="font-semibold text-[#1a2b4c]">{company.employees}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
