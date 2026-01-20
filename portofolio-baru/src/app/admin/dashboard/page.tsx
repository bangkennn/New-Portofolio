"use client";

import { useRouter } from "next/navigation";
import { FaSignOutAlt, FaHome, FaTools } from "react-icons/fa";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Implementasi logout
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-zinc-400">Kelola konten portfolio Anda</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2"
            >
              <FaHome /> Kembali ke Home
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors flex items-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* Under Maintenance Content */}
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-2 border-emerald-500/20 flex items-center justify-center">
                <FaTools className="text-4xl text-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Under Maintenance
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Dashboard admin sedang dalam pengembangan. 
              <br />
              Fitur manajemen konten akan segera tersedia!
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.4s]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



