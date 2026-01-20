"use client";

import { FaUser, FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaLaptop, FaBuilding } from "react-icons/fa";

export default function About() {
  // Data Dummy Karier
  const careerData = [
    {
      id: 1,
      title: "Backend Golang Developer",
      company: "PT. Affan Technology Indonesia (Parto.id)",
      location: "Jambi, Indonesia",
      duration: "Jul 2025 - Sep 2025",
      months: "2 Months",
      type: "Internship",
      workType: "Onsite",
      logo: "🟢", // Placeholder untuk logo
    },
    {
      id: 2,
      title: "Frontend Web Developer",
      company: "PT. Eltran Indonesia",
      location: "Bandung, Indonesia",
      duration: "May 2025 - Nov 2025",
      months: "6 Months",
      type: "Internship",
      workType: "Remote",
      logo: "🔵", // Placeholder untuk logo
    },
  ];

  // Data Dummy Pendidikan
  const educationData = [
    {
      id: 1,
      institution: "Universitas Jambi",
      degree: "Bachelor's degree",
      major: "Information Systems",
      degreeCode: "(S.Kom)",
      duration: "2022 - 2026",
      location: "Jambi, Indonesia ID",
      logo: "🎓", // Placeholder untuk logo
    },
  ];

  return (
    <div className="min-h-screen py-20 max-w-7xl mx-auto px-4">
      
      {/* Bagian Tentang */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <FaUser className="text-emerald-500" /> Tentang
          </h2>
          <p className="text-zinc-500 text-lg">Perkenalan singkat tentang siapa saya.</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
          <p className="text-zinc-300 leading-relaxed text-l mb-4">
            Salam hangat,
          </p>
          <p className="text-zinc-300 leading-relaxed text-l mb-4">
            Saya <span className="text-emerald-400 font-semibold">Davian Putra Swardana</span>, seorang mahasiswa Sistem Informasi di Universitas Jambi dan seorang Fullstack Developer yang memiliki passion dalam membangun produk software yang impactful.
          </p>
          <p className="text-zinc-300 leading-relaxed text-l mb-4">
            Dalam pengembangan web, saya menggunakan teknologi modern seperti Next.js, TypeScript, dan Tailwind CSS untuk frontend, serta Golang untuk backend development. Untuk aplikasi mobile, saya mengembangkan aplikasi Android native menggunakan Kotlin.
          </p>
          <p className="text-zinc-300 leading-relaxed text-l mb-4">
            Saya percaya bahwa pengembangan software yang baik adalah tentang menciptakan solusi yang user-friendly dengan performa tinggi. Saya selalu fokus pada efisiensi dan kejelasan, baik dalam interface yang intuitif maupun dalam backend services yang robust.
          </p>
          <p className="text-zinc-300 leading-relaxed text-l mb-4">
            Sebagai seorang fast learner, saya senang bekerja dalam lingkungan yang dinamis dan menantang. Saya percaya bahwa komunikasi yang baik dan sinergi tim adalah kunci kesuksesan dalam pengembangan software.
          </p>
          <p className="text-zinc-300 leading-relaxed text-l">
            Pengalaman saya telah membentuk kemampuan teknis, analitis, dan leadership saya. Saya selalu bersemangat untuk bekerja dalam tim, belajar dari orang lain, dan berkontribusi pada proyek-proyek yang impactful.
          </p>
        </div>
      </section>

      {/* Bagian Karier */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <FaBriefcase className="text-emerald-500" /> Karier
          </h2>
          <p className="text-zinc-500 text-l">Perjalanan profesional saya.</p>
        </div>

        <div className="space-y-6">
          {careerData.map((career) => (
            <div
              key={career.id}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-2xl">
                    {career.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {career.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <FaBuilding className="text-emerald-500" />
                      <span>{career.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-zinc-400">
                      <FaMapMarkerAlt className="text-emerald-500" />
                      <span>{career.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-zinc-400">
                      <FaCalendarAlt className="text-emerald-500" />
                      <span>{career.duration}</span>
                      <span className="text-zinc-600">•</span>
                      <span>{career.months}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                        {career.type}
                      </span>
                      <div className="flex items-center gap-2 text-zinc-400">
                        {career.workType === "Remote" ? (
                          <FaLaptop className="text-emerald-500" />
                        ) : (
                          <FaBuilding className="text-emerald-500" />
                        )}
                        <span>{career.workType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Button Tampilkan Tanggung Jawab */}
                  <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium flex items-center gap-1">
                    &gt; Tampilkan tanggung jawab
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Pendidikan */}
      <section>
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <FaGraduationCap className="text-emerald-500" /> Pendidikan
          </h2>
          <p className="text-zinc-500 text-l">Perjalanan pendidikan saya.</p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-3xl">
                    {edu.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {edu.institution}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-zinc-400 text-lg">
                      {edu.degree} • {edu.major}, {edu.degreeCode}
                    </p>
                    
                    <div className="flex items-center gap-2 text-zinc-400">
                      <FaCalendarAlt className="text-emerald-500" />
                      <span>{edu.duration}</span>
                      <span className="text-zinc-600">•</span>
                      <FaMapMarkerAlt className="text-emerald-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
