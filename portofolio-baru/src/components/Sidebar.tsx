import Link from 'next/link';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  return (
    // UBAH WARNA: bg-black (hitam pekat) dan border-zinc-800 (abu gelap)
    <aside className="w-64 h-screen fixed left-0 top-0 bg-black border-r border-zinc-800 text-white p-6 flex flex-col z-50">
      
      {/* Profil */}
      <div className="flex flex-col items-center mb-10">
        {/* Lingkaran Foto */}
        <div className="w-28 h-28 rounded-full bg-zinc-900 mb-5 border-2 border-emerald-500 overflow-hidden relative flex items-center justify-center shadow-lg shadow-emerald-500/10">
             <span className="text-2xl font-bold text-zinc-600">IMG</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">Davian Putra</h2>
        <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-sm text-zinc-400">Web Developer</p>
        </div>
      </div>

      {/* Menu Navigasi */}
      <nav className="flex-1 w-full">
        <ul className="space-y-2">
          <NavItem href="/" icon={<FaHome />} label="Home" />
          <NavItem href="/about" icon={<FaUser />} label="About" />
          <NavItem href="/projects" icon={<FaBriefcase />} label="Projects" />
          <NavItem href="/contact" icon={<FaEnvelope />} label="Contact" />
        </ul>
      </nav>

      {/* Sosial Media */}
      <div className="mt-auto">
        <p className="text-xs text-zinc-600 mb-3 text-center uppercase tracking-widest font-semibold">Socials</p>
        <div className="flex gap-5 text-xl text-zinc-500 justify-center">
          <a href="#" className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"><FaGithub /></a>
          <a href="#" className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"><FaLinkedin /></a>
        </div>
      </div>
    </aside>
  );
};

// Item Menu dengan warna hover yang lebih halus
const NavItem = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <li>
      <Link href={href} className="flex items-center gap-4 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-emerald-400 transition-all duration-300 group">
        <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>
        <span className="font-medium text-sm tracking-wide">{label}</span>
      </Link>
    </li>
  );
};

export default Sidebar;