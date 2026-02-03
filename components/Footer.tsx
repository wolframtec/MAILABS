"use client";

import Link from "next/link";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "M&A Advisory", href: "/en/" },
    { label: "Fee Structure", href: "/en/fee" },
    { label: "Success Cases", href: "/en/list" },
    { label: "Team", href: "/en/member" },
  ],
  company: [
    { label: "About Holdings", href: "/en/holdings" },
    { label: "Sustainability", href: "/en/holdings/sustainability" },
    { label: "Investor Relations", href: "/en/holdings/ir" },
    { label: "Contact Us", href: "/en/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/en/rule" },
    { label: "Privacy Policy", href: "/en/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a2b4c] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <span className="text-[#1a2b4c] font-bold text-sm">M&A</span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">M&A Research</p>
                <p className="text-xs text-white/80 leading-tight">Institute Inc.</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-6">
              Tokyo Stock Exchange listed M&A intermediary operating on a completely performance-based fee system.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Building2 className="w-4 h-4 text-[#c9a961]" />
                <span>TSE Listed</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-[#c9a961]" />
                <span>+81-3-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-[#c9a961]" />
                <span>info@ma-site.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#c9a961] mt-0.5" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-[#c9a961] font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#c9a961] font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="text-[#c9a961] font-semibold mb-4">Certifications</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-xs text-white/60 mb-1">Tokyo Stock Exchange</p>
                <p className="text-sm font-semibold">Standard Market Listed</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-xs text-white/60 mb-1">JMRO Member</p>
                <p className="text-sm font-semibold">Japan M&A Research Organization</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-xs text-white/60 mb-1">METI Registered</p>
                <p className="text-sm font-semibold">Ministry Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} M&A Research Institute Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
