"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Serviços", href: "#servicos" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-[#E8DCD0]/40 bg-[#F9F6F3]/80 backdrop-blur-xl transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-3xl md:text-4xl tracking-tighter text-[#1A1A1A] flex items-center gap-1 group">
          Cris <span className="italic font-light text-[#C4A484] group-hover:text-[#1A1A1A] transition-colors duration-500">Emily</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.25em] font-sans text-[#1A1A1A] hover:text-[#C4A484] transition-colors duration-300 group py-2"
            >
              {link.name}
              {/* Animação da linha no Hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A484] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#1A1A1A] hover:text-[#C4A484] transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={30} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-24 left-0 w-full bg-[#F9F6F3]/95 backdrop-blur-xl border-b border-[#E8DCD0]/50 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif tracking-wide text-[#1A1A1A] border-b border-[#E8DCD0]/50 pb-4 flex justify-between items-center hover:text-[#C4A484] transition-colors"
            >
              {link.name}
              <span className="text-sm font-sans text-[#C4A484] opacity-50">+</span>
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}