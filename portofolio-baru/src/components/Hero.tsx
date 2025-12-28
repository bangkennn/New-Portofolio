import Link from "next/link";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    // Ubah padding atas (pt) agar tidak terlalu turun
    <section className="max-w-4xl mx-auto pt-12 pb-16 px-4">
      
      {/* 1. Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-medium mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for Freelance & Fulltime
      </div>

      {/* 2. Judul Utama */}
      {/* UKURAN FONT DIKECILKAN: text-4xl di HP, text-6xl di Laptop (sebelumnya 7xl) */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Satria Bahari</span> <br />
        <span className="text-zinc-500">Fullstack Developer.</span>
      </h1>

      {/* 3. Deskripsi */}
      <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10">
        Passionate and seasoned Software Engineer with a strong focus on frontend development. Proficient in TypeScript and well-versed in all aspects of web technologies.
      </p>

      {/* 4. Tombol */}
      <div className="flex flex-wrap gap-4">
        <Link 
          href="/projects" 
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/20 text-sm md:text-base"
        >
          View Project <FaArrowRight />
        </Link>
        
        <button className="px-6 py-3 bg-zinc-900 text-zinc-300 font-bold rounded-full border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
          Contact Me <FaDownload size={14} />
        </button>
      </div>

    </section>
  );
};

export default Hero;