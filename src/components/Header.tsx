"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Quem Somos", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Processo", href: "#process" },
    { name: "Preços", href: "#pricing" },
    { name: "Dúvidas", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm py-3" : "bg-white/95 py-5"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Mock */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <div>
            <h1 className="font-extrabold text-xl text-slate-800 leading-none">Coopstar<span className="text-[var(--color-primary)]">Express</span></h1>
            <p className="text-[0.65rem] text-slate-500 uppercase tracking-widest">Serviços de Moto Frete</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          
          <a href="#contact" className="hidden lg:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
            <Phone className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-slate-700">(11) 5052-3563</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden glass border-t border-slate-100 absolute w-full"
        >
          <div className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">
                {link.name}
              </a>
            ))}
            <div className="border-t border-slate-200 mt-2 pt-4">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-3 rounded-lg font-semibold">
                <Phone className="w-5 h-5" />
                (11) 5052-3563
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
