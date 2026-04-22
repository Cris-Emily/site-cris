"use client";
import { motion } from "framer-motion";

export default function Hero() {
  // Configuração de transição suave para reutilizar
  const transition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="relative min-h-screen pt-28 pb-16 px-6 overflow-hidden bg-[#FFFFFF] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        
        {/* Imagem Assimétrica - Lado Direito (Agora aparece primeiro no Mobile) */}
        <div className="order-first lg:order-last lg:col-span-5 relative h-[65vh] lg:h-[750px] w-full mt-8 lg:mt-0 group">
          <motion.div 
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute inset-0 bg-[#F9F6F3] overflow-hidden shadow-2xl relative"
          >
            <motion.img 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              src="/images/hero-cris.jpg" 
              alt="Cris Emily - Estrategista Visual e Content Creator In Loco" 
              className="w-full h-full object-cover transition-all duration-1000"
            />
            
            {/* Texto sobre a imagem (Estilo Capa de Revista) - Aparece bem no Mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#E8DCD0] font-sans mb-1">
                Criadora de Conteúdo in Loco
              </span>
              <h2 className="text-3xl font-serif text-white tracking-wide">
                Cris <span className="italic font-light">Emily</span>
              </h2>
            </div>
          </motion.div>
          
          {/* Elemento Decorativo (Atrás da imagem) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 w-32 h-32 lg:w-40 lg:h-40 bg-[#F9F6F3] -z-10" 
          />
        </div>

        {/* Texto de Impacto - Lado Esquerdo (Agora fica embaixo da foto no Mobile) */}
        <div className="order-last lg:order-first lg:col-span-7 z-10 lg:pr-10 mt-12 lg:mt-0">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:inline-block text-[11px] font-bold uppercase tracking-[0.4em] text-[#C4A484] mb-6 font-sans"
          >
            Estratégia e Criação de Conteúdo
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[85px] font-serif leading-[1.05] lg:leading-[0.95] mb-6 lg:mb-10 tracking-tighter text-[#1A1A1A]"
          >
            Elevando o <br />
            <span className="italic text-[#C4A484] font-normal">DNA estético</span> <br />
            da sua marca.
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="max-w-lg text-sm sm:text-base lg:text-lg text-[#4A4A4A] font-sans leading-relaxed mb-10"
          >
            Posicionamento digital premium para nichos de luxo, moda e tecnologia. Planejamento, captação in loco e edição refinada para marcas que exigem excelência visual e alta conversão.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a href="https://wa.me/5511951647264?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20aumentar%20minhas%20vendas%20com%20cria%C3%A7%C3%A3o%20de%20conte%C3%BAdos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center group relative px-10 py-5 border border-[#1A1A1A] overflow-hidden transition-all duration-500 hover:border-[#1A1A1A] bg-transparent cursor-pointer">
              <div className="absolute inset-0 w-0 bg-[#1A1A1A] transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.25em] font-sans text-[#1A1A1A] group-hover:text-white transition-colors duration-500">
                Iniciar Projeto
              </span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}