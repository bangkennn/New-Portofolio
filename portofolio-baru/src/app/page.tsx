import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import BentoGrid from "@/components/BentoGrid"; // <--- Import BentoGrid

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <Skills />
      {/* Ganti Projects biasa dengan BentoGrid yang keren */}
      <BentoGrid /> 
    </div>
  );
}