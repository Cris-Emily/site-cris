"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E8DCD0]/40 bg-[#F9F6F3]/80 backdrop-blur-xl py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* Parte Superior: Logo e Redes Sociais */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          
          {/* Logo - Estilo igual à Navbar */}
          <a href="#" className="font-serif text-2xl md:text-3xl tracking-tighter text-[#1A1A1A] flex items-center gap-1 group">
            Cris <span className="italic font-light text-[#C4A484] group-hover:text-[#1A1A1A] transition-colors duration-500">Emily</span>
          </a>

          {/* Redes Sociais - Com efeito de linha da Navbar */}
          <div className="flex items-center gap-8">
            <a 
              href="https://www.instagram.com/crissantospimentel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative text-[10px] uppercase tracking-[0.25em] font-sans text-[#1A1A1A] hover:text-[#C4A484] transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>Instagram</span>
              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#C4A484] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            
            <a 
              href="https://www.tiktok.com/@crissantospimentel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative text-[10px] uppercase tracking-[0.25em] font-sans text-[#1A1A1A] hover:text-[#C4A484] transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              <span>Tiktok</span>
              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#C4A484] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Parte Inferior: Centralizada (Copyright e Créditos) */}
        <div className="flex flex-col items-center gap-2 text-center border-t border-[#E8DCD0]/20 pt-6 w-full">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#A1A1A1]">
          </p>
          
          <a 
            href="https://egemporiodigital.com.br/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col items-center"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-[#A1A1A1] mb-1">Criado por</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A4A4A] group-hover:text-[#1A1A1A] transition-colors duration-300">
              EG Empório <span className="text-[#C4A484]">Digital</span>
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}