import { FaTrophy } from "react-icons/fa";

export default function Achievement() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-zinc-900 border-2 border-emerald-500/20 flex items-center justify-center">
            <FaTrophy className="text-4xl text-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Under Maintenance
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
          Halaman Achievement sedang dalam pengembangan. 
          <br />
          Mohon kembali lagi nanti!
        </p>

        {/* Decorative Elements */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.4s]"></div>
        </div>
      </div>
    </div>
  );
}

