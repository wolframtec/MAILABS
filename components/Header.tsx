"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/en/" },
  { label: "Team", href: "/en/member" },
  { label: "Cases", href: "/en/list" },
  { label: "Fee Structure", href: "/en/fee" },
  { label: "Holdings", href: "/en/holdings" },
  { label: "Sustainability", href: "/en/holdings/sustainability" },
  { label: "IR", href: "/en/holdings/ir" },
  { label: "Contact", href: "/en/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/en/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1a2b4c] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M&A</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[#1a2b4c] font-bold text-sm leading-tight">M&A Research</p>
              <p className="text-[#1a2b4c] text-xs leading-tight">Institute</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[#333333] hover:text-[#1a2b4c] hover:bg-[#f5f5f5] rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#333333] hover:text-[#1a2b4c] hover:bg-[#f5f5f5] rounded-md transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">EN</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-[#e5e5e5] py-1"
                  >
                    <button className="w-full px-4 py-2 text-sm text-left text-[#1a2b4c] bg-[#f5f5f5] font-medium">
                      English
                    </button>
                    <button className="w-full px-4 py-2 text-sm text-left text-[#333333] hover:bg-[#f5f5f5]">
                      日本語
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Button 
              className="hidden sm:flex bg-[#c9a961] hover:bg-[#b59851] text-[#1a2b4c] font-semibold"
              asChild
            >
              <Link href="/en/contact">Free Consultation</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#333333] hover:text-[#1a2b4c] hover:bg-[#f5f5f5] rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#e5e5e5]"
          >
            <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[#333333] hover:text-[#1a2b4c] hover:bg-[#f5f5f5] rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  className="w-full bg-[#c9a961] hover:bg-[#b59851] text-[#1a2b4c] font-semibold"
                  asChild
                >
                  <Link href="/en/contact" onClick={() => setMobileMenuOpen(false)}>
                    Free Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
