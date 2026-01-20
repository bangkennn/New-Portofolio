"use client";

import { useState } from "react";
import { FaEnvelope, FaArrowRight, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail, SiTiktok } from "react-icons/si";

// Data Social Media Cards
const socialCards = [
  {
    id: 1,
    title: "Tetap Terhubung",
    description: "Hubungi saya via email untuk pertanyaan atau kolaborasi.",
    buttonText: "Pergi ke Gmail",
    url: "mailto:your.email@gmail.com",
    icon: SiGmail,
    gradient: "from-red-500 to-red-600",
    bgColor: "bg-gradient-to-br from-red-500/20 to-red-600/20",
  },
  {
    id: 2,
    title: "Ikuti Perjalanan Saya",
    description: "Ikuti perjalanan kreatif saya.",
    buttonText: "Pergi ke Instagram",
    url: "https://instagram.com",
    icon: FaInstagram,
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "Mari Terhubung",
    description: "Terhubung secara profesional dengan saya.",
    buttonText: "Pergi ke Linkedin",
    url: "https://linkedin.com",
    icon: FaLinkedin,
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
  },
  {
    id: 4,
    title: "Ikut Seru-seruan",
    description: "Tonton konten yang seru dan menarik.",
    buttonText: "Pergi ke Tiktok",
    url: "https://tiktok.com",
    icon: SiTiktok,
    gradient: "from-zinc-800 to-zinc-900",
    bgColor: "bg-zinc-900/50",
  },
  {
    id: 5,
    title: "Jelajahi Kode",
    description: "Lihat karya open-source saya.",
    buttonText: "Pergi ke Github",
    url: "https://github.com",
    icon: FaGithub,
    gradient: "from-zinc-800 to-zinc-900",
    bgColor: "bg-zinc-900/50",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 max-w-7xl mx-auto px-4">
      
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <FaEnvelope className="text-emerald-500" /> Kontak
        </h2>
        <p className="text-zinc-500 text-l">Mari kita terhubung</p>
      </div>

      {/* Social Media Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Temukan saya di media sosial
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`relative group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 ${card.bgColor} min-h-[200px]`}
              >
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 group/btn w-1/2"
                  >
                    {card.buttonText}
                    <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Background gradient orb effect */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <div className={`w-full h-full ${card.gradient} rounded-full blur-3xl animate-pulse`}></div>
                </div>
                
                {/* Icon dengan floating animation dan neon glow */}
                <div className="absolute bottom-4 right-4 group-hover:bottom-6 group-hover:right-6 transition-all duration-300">
                  <div className="relative">
                    {/* Outer glow rings */}
                    <div className={`absolute inset-0 ${card.gradient} rounded-2xl blur-xl opacity-60 group-hover:opacity-80 animate-pulse`} style={{ transform: 'scale(1.5)' }}></div>
                    <div className={`absolute inset-0 ${card.gradient} rounded-xl blur-md opacity-40 group-hover:opacity-60`} style={{ transform: 'scale(1.2)' }}></div>
                    
                    {/* Main icon container dengan gradient border */}
                    <div className="relative w-14 h-14 group-hover:w-16 group-hover:h-16 transition-all duration-300">
                      <div className={`absolute inset-0 ${card.gradient} rounded-xl p-[2px]`}>
                        <div className="w-full h-full bg-zinc-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                          <IconComponent className="text-2xl text-white group-hover:text-3xl transition-all duration-300 drop-shadow-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">
          Atau kirim saya pesan
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
              placeholder="Your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            Send Email
            <FaArrowRight />
          </button>
        </form>
      </div>

    </div>
  );
}

