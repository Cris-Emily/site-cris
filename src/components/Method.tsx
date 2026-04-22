"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Method() {
  const containerRef = useRef(null);
  
  // Controle de Scroll para o efeito Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Movimento da imagem: começa 50px abaixo e termina 50px acima do eixo original
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="metodo" className="py-24 md:py-32 bg-[#F9F6F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* TEXTO - Lado Esquerdo (No Mobile vai para baixo) */}
          <div className="lg:col-span-6 z-20 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", layout: { duration: 0.3 } }}
              style={{ willChange: "transform, opacity" }} // Força o uso da GPU
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C4A484] block mb-6 font-sans">
                Estratégia de Posicionamento
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-[80px] font-serif leading-[1] mb-12 tracking-tighter text-[#1A1A1A]">
                O Método <br />
                <span className="italic text-[#C4A484] font-normal">Cris Emily</span>
              </h2>
              
              <div className="space-y-10">
                <div className="group border-l-2 border-[#E8DCD0] pl-6 hover:border-[#C4A484] transition-all duration-500">
                  <h4 className="text-[12px] font-bold uppercase tracking-[0.25em] font-sans mb-3 text-[#1A1A1A] group-hover:text-[#C4A484] transition-colors">
                    01. Captação In Loco
                  </h4>
                  <p className="text-[#4A4A4A] font-sans leading-relaxed max-w-sm text-sm md:text-base">
                    Presença direta na sua loja física ou evento. Captamos a essência do seu espaço e dos seus produtos com a agilidade que o algoritmo exige.
                  </p>
                </div>

                <div className="group border-l-2 border-[#E8DCD0] pl-6 hover:border-[#C4A484] transition-all duration-500">
                  <h4 className="text-[12px] font-bold uppercase tracking-[0.25em] font-sans mb-3 text-[#1A1A1A] group-hover:text-[#C4A484] transition-colors">
                    02. Direção de Arte e Luxo
                  </h4>
                  <p className="text-[#4A4A4A] font-sans leading-relaxed max-w-sm text-sm md:text-base">
                    Não é apenas vídeo, é direção visual. Transformamos suas peças em objetos de desejo através de iluminação editorial e enquadramento premium.
                  </p>
                </div>

                <div className="group border-l-2 border-[#E8DCD0] pl-6 hover:border-[#C4A484] transition-all duration-500">
                  <h4 className="text-[12px] font-bold uppercase tracking-[0.25em] font-sans mb-3 text-[#1A1A1A] group-hover:text-[#C4A484] transition-colors">
                    03. Retenção e Conversão
                  </h4>
                  <p className="text-[#4A4A4A] font-sans leading-relaxed max-w-sm text-sm md:text-base">
                    Edição dinâmica projetada para manter o olhar preso na tela. Conteúdo focado em atrair um público altamente qualificado e transformá-lo em clientes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* IMAGEM - Lado Direito (No Mobile aparece Primeiro) */}
          <div className="lg:col-span-6 relative order-1 lg:order-2 h-[500px] md:h-[650px] lg:h-[750px] w-full mt-6 lg:mt-0">
            <motion.div 
              style={{ y }} // Aplica o Parallax
              className="w-full h-full relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full shadow-2xl overflow-hidden"
              >
                <img 
                  src="/images/method-cris.jpg" 
                  alt="Bastidores de Direção de Arte e Gravação - Cris Emily" 
                  className="w-full h-full object-cover transition-all duration-1000"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x800/E8DCD0/1A1A1A?text=method-cris.jpg+not+found";
                  }}
                />
              </motion.div>
              
              {/* Moldura de fundo deslocada */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border border-[#C4A484]/40 -z-10" />
            </motion.div>
            
            {/* Box flutuante com frase de impacto */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -bottom-6 left-2 md:-bottom-10 md:-left-12 bg-white p-6 md:p-8 shadow-2xl max-w-[280px] md:max-w-[320px] z-30 border border-[#F9F6F3]"
            >
              <p className="font-serif italic text-lg md:text-2xl leading-snug text-[#1A1A1A]">
                "Estética que atrai, <br/><span className="text-[#C4A484] font-normal">estratégia que converte.</span>"
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}