"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  FileText, 
  Calendar, 
  Mail, 
  ChevronRight,
  BarChart3,
  Newspaper,
  Presentation,
  Phone
} from "lucide-react";

const irMenuItems = [
  {
    title: "Message from CEO",
    description: "A message from our Chief Executive Officer",
    icon: Mail,
    href: "#",
  },
  {
    title: "IR News",
    description: "Latest investor relations announcements",
    icon: Newspaper,
    href: "#",
  },
  {
    title: "Financial Highlights",
    description: "Key financial performance indicators",
    icon: BarChart3,
    href: "#",
  },
  {
    title: "IR Library",
    description: "Presentations, transcripts, and reports",
    icon: Presentation,
    href: "#",
  },
  {
    title: "IR Calendar",
    description: "Upcoming events and announcements",
    icon: Calendar,
    href: "#",
  },
  {
    title: "Stock Overview",
    description: "Stock price and trading information",
    icon: TrendingUp,
    href: "#",
  },
];

const stockInfo = {
  symbol: "XXXX",
  exchange: "Tokyo Stock Exchange (Standard)",
  sector: "Financial Services",
  fiscalYear: "April 1 - March 31",
};

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

export default function IRPage() {
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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Investor Relations</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Investor Relations</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Information for shareholders and potential investors. 
              Committed to transparency and timely disclosure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stock Info Bar */}
      <section className="bg-[#c9a961] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-xs text-[#1a2b4c]/80 mb-1">Stock Code</p>
              <p className="text-2xl font-bold text-[#1a2b4c]">{stockInfo.symbol}</p>
            </div>
            <div>
              <p className="text-xs text-[#1a2b4c]/80 mb-1">Exchange</p>
              <p className="text-sm font-bold text-[#1a2b4c]">TSE Standard</p>
            </div>
            <div>
              <p className="text-xs text-[#1a2b4c]/80 mb-1">Sector</p>
              <p className="text-sm font-bold text-[#1a2b4c]">{stockInfo.sector}</p>
            </div>
            <div>
              <p className="text-xs text-[#1a2b4c]/80 mb-1">Fiscal Year</p>
              <p className="text-sm font-bold text-[#1a2b4c]">{stockInfo.fiscalYear}</p>
            </div>
          </div>
        </div>
      </section>

      {/* IR Menu */}
      <section className="py-16 bg-white flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {irMenuItems.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="h-full border border-[#e5e5e5] hover:border-[#c9a961] hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a961] transition-colors">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#1a2b4c] mb-1 group-hover:text-[#c9a961] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#666666] mb-3">{item.description}</p>
                        <span className="inline-flex items-center text-[#c9a961] text-sm font-medium">
                          View
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a2b4c] rounded-2xl p-8 lg:p-12 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">IR Contact</h2>
                <p className="text-white/70 mb-6">
                  For investor-related inquiries, please contact our IR department.
                  We aim to respond within 2-3 business days.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#c9a961]" />
                    <span className="text-white/80">ir@ma-site.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#c9a961]" />
                    <span className="text-white/80">+81-3-XXXX-XXXX (IR Department)</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Button 
                  size="lg"
                  className="bg-[#c9a961] hover:bg-[#b59851] text-[#1a2b4c] font-semibold"
                  asChild
                >
                  <Link href="/en/holdings/ir/contact">
                    Contact IR Team
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
