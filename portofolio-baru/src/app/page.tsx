import Hero from "@/components/Hero";
import Skills from "@/components/Skills"; // <--- Import Skills

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills /> {/* <--- Pasang di sini */}
    </div>
  );
}