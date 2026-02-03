"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Building2, CheckCircle, FileText } from "lucide-react";

const inquiryTypes = [
  { value: "financial", label: "Financial Results" },
  { value: "stock", label: "Stock Information" },
  { value: "dividend", label: "Dividend Information" },
  { value: "report", label: "Annual Report" },
  { value: "meeting", label: "General Meeting of Shareholders" },
  { value: "other", label: "Other IR Inquiry" },
];

const investorTypes = [
  { value: "individual", label: "Individual Investor" },
  { value: "institutional", label: "Institutional Investor" },
  { value: "analyst", label: "Securities Analyst" },
  { value: "media", label: "Media" },
  { value: "other", label: "Other" },
];

export default function IRContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">IR Contact</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              For investor-related inquiries, please use the form below or contact our IR department directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-[#e5e5e5]">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-[#1a2b4c] mb-6">IR Inquiry Form</h2>
                  
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-[#1a2b4c] mb-2">Thank you!</h3>
                      <p className="text-[#666666]">
                        Your inquiry has been received. Our IR team will respond within 2-3 business days.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Smith" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization *</Label>
                        <Input id="organization" placeholder="Company or institution name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="investorType">Investor Type *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select investor type" />
                          </SelectTrigger>
                          <SelectContent>
                            {investorTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+81-XXX-XXXX" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your inquiry..." 
                          rows={5}
                          required 
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-[#c9a961] hover:bg-[#b59851] text-[#1a2b4c] font-semibold"
                      >
                        Submit IR Inquiry
                      </Button>
                      
                      <p className="text-xs text-[#666666] text-center">
                        By submitting this form, you agree to our{" "}
                        <a href="/en/privacy" className="text-[#c9a961] hover:underline">Privacy Policy</a>
                        .
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#1a2b4c] mb-6">IR Department</h2>
                <p className="text-[#666666] mb-8">
                  Our Investor Relations team is dedicated to providing timely and accurate information 
                  to shareholders and potential investors.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border-[#e5e5e5]">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666]">Department</p>
                      <p className="font-semibold text-[#1a2b4c]">Investor Relations</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#e5e5e5]">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666]">Phone</p>
                      <p className="font-semibold text-[#1a2b4c]">+81-3-XXXX-XXXX</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#e5e5e5]">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666]">Email</p>
                      <p className="font-semibold text-[#1a2b4c]">ir@ma-site.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#e5e5e5]">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666]">Response Time</p>
                      <p className="font-semibold text-[#1a2b4c]">2-3 Business Days</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-[#f8f8f8] p-6 rounded-lg">
                <h3 className="font-bold text-[#1a2b4c] mb-3">Important Notice</h3>
                <p className="text-sm text-[#666666]">
                  Please note that we cannot answer questions regarding stock price forecasts, 
                  investment recommendations, or material non-public information. For stock 
                  trading-related inquiries, please contact your securities company.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
