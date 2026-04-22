"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-[#FFFFFF] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#F9F6F3] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Texto do CTA */}
            <div className="p-10 md:p-20 z-10 order-last lg:order-first">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C4A484] block mb-6 font-sans"
              >
                Exclusividade Presencial
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1] text-[#1A1A1A]"
              >
                Pronta para elevar o <br /> 
                <span className="italic text-[#C4A484] font-normal">nível de desejo</span> <br /> 
                da sua marca?
              </motion.h2>
              <p className="text-[#4A4A4A] font-sans text-sm md:text-base mb-10 max-w-sm leading-relaxed">
                Para garantir um nível de excelência editorial e imersão total em cada produção, a agenda de <strong className="font-semibold text-[#1A1A1A]">Content Creator In Loco</strong> atende um número rigorosamente limitado de marcas por mês.
              </p>
              
              <motion.a 
                href="https://wa.me/5511951647264?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20aumentar%20minhas%20vendas%20com%20cria%C3%A7%C3%A3o%20de%20conte%C3%BAdos"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-[#1A1A1A] text-white px-8 py-5 md:px-10 md:py-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] font-sans hover:bg-[#C4A484] transition-colors duration-500 text-center w-full sm:w-auto"
              >
                Verificar Disponibilidade
              </motion.a>
            </div>

            {/* Imagem de Fechamento (Primeiro no Mobile) */}
            <div className="relative h-[450px] md:h-[600px] overflow-hidden order-first lg:order-last">
              <motion.img 
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                src="/images/cta-cris.jpg" 
                alt="Agendar Consultoria com Cris Emily" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x800/E8DCD0/1A1A1A?text=Contato+Cris+Emily";
                }}
              />
              <div className="absolute inset-0 bg-[#C4A484]/10 mix-blend-multiply" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}