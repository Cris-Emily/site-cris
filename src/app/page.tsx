// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Method from "@/components/Method";
import ContactCTA from "@/components/ContactCTA"; // Vamos criar esse agora
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Method />
      <Services />
      <Brands /> {/* Faltava essa linha aqui! */}
      <ContactCTA /> {/* O gran finale */}
      <Footer />
    </main>
  );
}