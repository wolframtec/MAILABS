"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cases, industries, regions, type Case } from "@/lib/data/cases";
import { Building2, MapPin, TrendingUp, DollarSign, Calendar, Filter, X } from "lucide-react";

function parsePrice(price: string): number {
  if (price === "ASK") return 0;
  const match = price.match(/([\d.]+)\s*billion/i);
  if (match) return parseFloat(match[1]) * 1000;
  const matchMillion = price.match(/([\d.]+)\s*million/i);
  if (matchMillion) return parseFloat(matchMillion[1]);
  return 0;
}

function parseSales(sales: string): number {
  const match = sales.match(/([\d.]+)\s*billion/i);
  if (match) return parseFloat(match[1]) * 1000;
  const matchMillion = sales.match(/([\d.]+)\s*million/i);
  if (matchMillion) return parseFloat(matchMillion[1]);
  return 0;
}

export default function CasesPage() {
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");

  const filteredCases = useMemo(() => {
    return cases.filter((c: Case) => {
      const industryMatch = industryFilter === "all" || c.industry === industryFilter;
      const regionMatch = regionFilter === "all" || c.region === regionFilter;
      
      let sizeMatch = true;
      if (sizeFilter !== "all") {
        const priceValue = parsePrice(c.price);
        switch (sizeFilter) {
          case "small": sizeMatch = priceValue > 0 && priceValue < 500; break;
          case "medium": sizeMatch = priceValue >= 500 && priceValue < 1000; break;
          case "large": sizeMatch = priceValue >= 1000 && priceValue < 3000; break;
          case "xlarge": sizeMatch = priceValue >= 3000; break;
        }
      }
      
      return industryMatch && regionMatch && sizeMatch;
    });
  }, [industryFilter, regionFilter, sizeFilter]);

  const clearFilters = () => {
    setIndustryFilter("all");
    setRegionFilter("all");
    setSizeFilter("all");
  };

  const hasActiveFilters = industryFilter !== "all" || regionFilter !== "all" || sizeFilter !== "all";

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
              <span className="text-[#c9a961] font-semibold uppercase tracking-wider text-sm">Portfolio</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">M&A Cases</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Explore our successful M&A transactions across various industries and regions. 
              Each case represents our commitment to delivering value for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#c9a961] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl font-bold text-[#1a2b4c]">{cases.length}+</p>
              <p className="text-[#1a2b4c]/80 text-sm">Published Cases</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1a2b4c]">{industries.length}</p>
              <p className="text-[#1a2b4c]/80 text-sm">Industries</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1a2b4c]">{regions.length}</p>
              <p className="text-[#1a2b4c]/80 text-sm">Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-[#e5e5e5] py-6 sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex items-center gap-2 text-[#1a2b4c] font-semibold">
              <Filter className="w-4 h-4" />
              <span>Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-3 flex-1">
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-[180px] border-[#e5e5e5]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger className="w-[180px] border-[#e5e5e5]">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sizeFilter} onValueChange={setSizeFilter}>
                <SelectTrigger className="w-[180px] border-[#e5e5e5]">
                  <SelectValue placeholder="Deal Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="small">Under 500M yen</SelectItem>
                  <SelectItem value="medium">500M - 1B yen</SelectItem>
                  <SelectItem value="large">1B - 3B yen</SelectItem>
                  <SelectItem value="xlarge">Over 3B yen</SelectItem>
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-[#666666] hover:text-[#1a2b4c]"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>

            <div className="text-sm text-[#666666]">
              Showing {filteredCases.length} of {cases.length} cases
            </div>
          </div>
        </div>
      </section>

      {/* Case Listings */}
      <section className="py-12 lg:py-16 bg-[#f8f8f8] flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredCases.length > 0 ? (
              <motion.div
                key="cases"
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCases.map((caseItem) => (
                  <motion.div key={caseItem.id} variants={fadeInUp} layout>
                    <Card className="h-full border border-[#e5e5e5] hover:border-[#c9a961] hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <CardContent className="p-0">
                        {/* Image Placeholder */}
                        <div className="h-48 bg-gradient-to-br from-[#1a2b4c] to-[#2a3b5c] flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                          }} />
                          <div className="text-center text-white relative z-10">
                            <p className="text-5xl font-bold text-[#c9a961]">#{caseItem.id}</p>
                            <p className="text-sm text-white/70 mt-1">Project ID</p>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          {/* Industry Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className="bg-[#1a2b4c] text-white text-xs">
                              {caseItem.industry}
                            </Badge>
                            {caseItem.subIndustry && (
                              <Badge variant="secondary" className="bg-[#f5f5f5] text-[#666666] text-xs">
                                {caseItem.subIndustry}
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-[#c9a961] border-[#c9a961] text-xs">
                              <MapPin className="w-3 h-3 mr-1" />
                              {caseItem.region}
                            </Badge>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-lg font-bold text-[#1a2b4c] mb-3 line-clamp-2 group-hover:text-[#c9a961] transition-colors">
                            {caseItem.title}
                          </h3>
                          
                          {/* Description */}
                          {caseItem.description && (
                            <p className="text-sm text-[#666666] mb-4 line-clamp-2">
                              {caseItem.description}
                            </p>
                          )}
                          
                          {/* Financials */}
                          <div className="space-y-2 pt-4 border-t border-[#e5e5e5]">
                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center text-[#666666]">
                                <TrendingUp className="w-4 h-4 mr-2 text-[#c9a961]" />
                                Sales
                              </span>
                              <span className="font-medium text-[#1a2b4c]">{caseItem.sales}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center text-[#666666]">
                                <Building2 className="w-4 h-4 mr-2 text-[#c9a961]" />
                                Operating Profit
                              </span>
                              <span className="font-medium text-[#1a2b4c]">{caseItem.profit}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center text-[#666666]">
                                <DollarSign className="w-4 h-4 mr-2 text-[#c9a961]" />
                                Asking Price
                              </span>
                              <span className="font-bold text-[#c9a961]">{caseItem.price}</span>
                            </div>
                          </div>
                          
                          {/* Date */}
                          <div className="flex items-center text-xs text-[#666666] mt-4 pt-3 border-t border-[#e5e5e5]">
                            <Calendar className="w-3 h-3 mr-1" />
                            Published: {caseItem.date}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2b4c] mb-2">No cases found</h3>
                <p className="text-[#666666] mb-4">Try adjusting your filters to see more results.</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
