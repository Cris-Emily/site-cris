"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  { 
    id: "01", 
    title: "Gravação In Loco", 
    category: "Produção Premium", 
    desc: "Presença estratégica na sua marca para captar a essência real do luxo em movimento.",
    img: "/images/service-1.jpg",
    effect: "fade-up",
    buttonText: "Descobrir a Experiência",
    seoContent: "A gravação in loco é uma imersão no universo da sua marca. Utilizamos equipamentos de alta fidelidade e direção de arte focada no nicho premium, garantindo que cada textura, brilho e detalhe do seu produto seja capturado com perfeição. É a transformação da sua loja física em um verdadeiro set de filmagem editorial, otimizado para gerar autoridade no Instagram e TikTok."
  },
  { 
    id: "02", 
    title: "Edição Estratégica", 
    category: "Storytelling Visual", 
    desc: "Transformando frames em narrativas magnéticas que prendem a atenção nos primeiros segundos.",
    img: "/images/service-2.jpg",
    effect: "slide-right",
    buttonText: "Entender a Dinâmica",
    seoContent: "A retenção é a moeda mais valiosa do digital. Nossa edição não é apenas cortes sincronizados com música; aplicamos gatilhos visuais, ganchos (hooks) nos primeiros 3 segundos e uma colorimetria impecável (Color Grading). O resultado são Reels e TikToks desenhados pelo viés do algoritmo, mas com a sofisticação que o seu cliente de alto padrão exige."
  },
  { 
    id: "03", 
    title: "Lives & Provadores", 
    category: "Social Real Time", 
    desc: "Conexão direta e sofisticada com seu público, elevando o desejo de compra imediato.",
    img: "/images/service-3.jpg",
    effect: "slide-left",
    buttonText: "Ver Lógica de Vendas",
    seoContent: "O formato 'Shopstreaming' (Vendas ao vivo) é o motor de caixa rápido para marcas de moda. Roteirizamos e conduzimos provadores e transmissões ao vivo focados em escassez e exclusividade. Mostramos o caimento, a qualidade e os bastidores de forma orgânica, quebrando objeções de compra em tempo real."
  },
  { 
    id: "04", 
    title: "Gestão de Estética", 
    category: "Curadoria Visual", 
    desc: "Alinhamento de feed e identidade visual para que cada pixel transmita exclusividade.",
    img: "/images/service-4.jpg",
    effect: "zoom-in",
    buttonText: "Explorar a Curadoria",
    seoContent: "Um perfil confuso desvaloriza o seu produto. Atuamos como diretores criativos do seu grid, organizando a paleta de cores, as capas dos vídeos e o respiro visual entre os posts. Uma curadoria estética bem feita aumenta a percepção de valor, permitindo que sua marca cobre o preço justo sem resistência do cliente."
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const variants = {
    "fade-up": {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
    },
    "slide-left": {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
    },
    "zoom-in": {
      initial: { opacity: 0, scale: 1.1 },
      whileInView: { opacity: 1, scale: 1 },
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicos" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C4A484] block mb-4 font-sans">
            Experiência e Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">
            Serviços <span className="italic text-[#C4A484] font-normal">Sob Medida</span>
          </h2>
        </motion.div>

        <div className="space-y-32 md:space-y-40">
          {services.map((service, index) => (
            <motion.div 
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-20`}
            >
              {/* Bloco de Imagem */}
              <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-square relative overflow-hidden bg-[#F9F6F3]">
                <motion.div
                  variants={variants[service.effect as keyof typeof variants]}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img 
                    src={service.img} 
                    alt={`Serviço de ${service.title} - Cris Emily`} 
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x800/E8DCD0/1A1A1A?text=Foto+Cris+Emily";
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 border border-[#C4A484]/20 pointer-events-none" />
              </div>

              {/* Bloco de Texto */}
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col items-start"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C4A484] mb-6 font-sans">
                  {service.id} // {service.category}
                </span>
                <h3 className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1] text-[#1A1A1A]">
                  {service.title.split(' ')[0]} <br />
                  <span className="italic font-normal text-[#C4A484]">
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
                <p className="text-[#4A4A4A] font-sans text-base md:text-lg leading-relaxed max-w-md mb-8">
                  {service.desc}
                </p>
                
                {/* Botão de Expansão (Accordion) */}
                <motion.button 
                  onClick={() => toggleExpand(service.id)}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.25em] font-sans text-[#1A1A1A] group cursor-pointer focus:outline-none"
                >
                  {expandedId === service.id ? "Ocultar Detalhes" : service.buttonText} 
                  <span className={`h-[1px] bg-[#1A1A1A] transition-all duration-300 ${expandedId === service.id ? "w-12" : "w-6 group-hover:w-12"}`} />
                </motion.button>

                {/* Conteúdo SEO Expansível */}
                <AnimatePresence>
                  {expandedId === service.id && (
                    <motion.div
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden w-full max-w-md"
                    >
                      <p className="pt-6 mt-6 text-sm md:text-base text-[#4A4A4A] font-sans leading-relaxed border-t border-[#E8DCD0]">
                        {service.seoContent}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}