"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const inquiryTypes = [
  { value: "ma-consultation", label: "M&A Consultation" },
  { value: "general", label: "General Inquiry" },
  { value: "buyer", label: "Buyer Registration" },
  { value: "seller", label: "Seller Registration" },
  { value: "partnership", label: "Business Partnership" },
  { value: "media", label: "Media Inquiry" },
];

export default function ContactPage() {
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
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Get in touch with our team for a free consultation or any inquiries about our services.
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
                  <h2 className="text-2xl font-bold text-[#1a2b4c] mb-6">Send us a message</h2>
                  
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-[#1a2b4c] mb-2">Thank you!</h3>
                      <p className="text-[#666666]">
                        Your message has been received. We will get back to you within 1-2 business days.
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
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your company" />
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
                        Submit Inquiry
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
                <h2 className="text-2xl font-bold text-[#1a2b4c] mb-6">Contact Information</h2>
                <p className="text-[#666666] mb-8">
                  Our team is available to assist you with any questions about our M&A services.
                </p>
              </div>

              <div className="space-y-4">
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
                      <p className="font-semibold text-[#1a2b4c]">info@ma-site.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#e5e5e5]">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666]">Address</p>
                      <p className="font-semibold text-[#1a2b4c]">Tokyo, Japan</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#e5e5e5]">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a2b4c] rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666]">Business Hours</p>
                      <p className="font-semibold text-[#1a2b4c]">Mon - Fri: 9:00 - 18:00 JST</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-[#f8f8f8] p-6 rounded-lg">
                <h3 className="font-bold text-[#1a2b4c] mb-3">Free Consultation</h3>
                <p className="text-sm text-[#666666] mb-4">
                  Schedule a free, no-obligation consultation with our M&A advisers.
                </p>
                <p className="text-sm text-[#666666]">
                  <span className="font-semibold">Note:</span> All consultations are confidential 
                  and there are no upfront fees.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
