"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "Pimenta Rosa", logo: "/logos/brand-1.png" },
  { name: "Óticas Hadassah", logo: "/logos/brand-2.png" },
  { name: "Benit", logo: "/logos/brand-3.png" },
  { name: "Zapacell", logo: "/logos/brand-4.png" },
  { name: "Mattwear", logo: "/logos/brand-5.png" },
];

// Duplicamos a lista para o loop ser perfeito
const doubleBrands = [...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <section className="py-24 bg-white border-y border-nude-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-nude-350 block mb-4">
          Trusted By
        </span>
        <h2 className="text-2xl font-serif italic text-gray-800">Marcas que confiam na nossa estética</h2>
      </div>

      <div className="relative flex items-center overflow-hidden">
        {/* Carrossel Infinito */}
        <motion.div
          className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20, // Ajuste aqui: menor = mais rápido, maior = mais lento
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubleBrands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-8 min-w-[250px] md:min-w-[350px]"
            >
              {/* Container da Logo - Imagem expandida 100% dentro do card */}
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#F9F6F3] rounded-full overflow-hidden shadow-sm border border-nude-100/50">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Texto da Marca - Mais forte para acompanhar o tamanho da logo */}
              <span className="font-serif text-2xl md:text-3xl text-[#1A1A1A] tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradientes laterais para suavizar o corte da tela */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}