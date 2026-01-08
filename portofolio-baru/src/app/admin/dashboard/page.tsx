"use client";

import { useRouter } from "next/navigation";
import { FaSignOutAlt, FaHome } from "react-icons/fa";
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

        {/* Dashboard Content */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <p className="text-zinc-400 text-center py-20">
            Dashboard admin akan segera tersedia. Fitur manajemen konten sedang dalam pengembangan.
          </p>
        </div>
      </div>
    </div>
  );
}

