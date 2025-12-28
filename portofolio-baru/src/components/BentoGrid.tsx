"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { FaLaptopCode, FaUser, FaTools, FaTrophy, FaComments, FaLayerGroup } from "react-icons/fa";

// --- DATA GAMBAR UNTUK STACK (ABOUT ME) ---
const stackImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format", // Formal
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format", // Coding
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format", // Traveling
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"  // Casual
];

// ============================================================================
// KOMPONEN UTAMA: BENTO GRID
// ============================================================================
const BentoGrid = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold text-white flex items-center gap-3">
          <FaLayerGroup className="text-emerald-500" /> Featured Sections
        </h2>
        <p className="text-zinc-500 mt-2 text-lg">Explore everything I've crafted, contributed, and accomplished.</p>
      </div>

      {/* GRID UTAMA (4 Kolom) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* 1. PROJECTS SHOWCASE (UPDATED DESIGN) */}
        <SpotlightCard className="md:col-span-2 md:row-span-2 bg-zinc-900/50 group overflow-hidden">
          <div className="relative z-20 h-full flex flex-col justify-between p-6">
            <div>
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 border border-zinc-700 text-emerald-400 text-xl">
                 <FaLaptopCode />
              </div>
              <h3 className="text-2xl font-bold text-white">Projects Showcase</h3>
              <p className="text-zinc-400 mt-2 max-w-[250px]">Kumpulan aplikasi nyata yang saya buat untuk memecahkan masalah.</p>
            </div>

            {/* 👇 UPDATED MOCKUP (3 LAYER, NO TEXT) 👇 */}
            <div className="absolute right-[-20px] bottom-[20px] flex flex-col gap-4 rotate-[-12deg] group-hover:rotate-[-5deg] group-hover:scale-105 transition-all duration-500 ease-out opacity-80 group-hover:opacity-100">
               
               {/* Kotak 1 (Paling Atas/Belakang - BARU) */}
               <div className="w-52 h-24 bg-zinc-800 border border-zinc-700/50 rounded-lg shadow-2xl translate-x-12 opacity-60"></div>
               
               {/* Kotak 2 (Tengah) */}
               <div className="w-52 h-24 bg-zinc-900 border border-zinc-700/50 rounded-lg shadow-2xl translate-x-6 opacity-80"></div>
               
               {/* Kotak 3 (Paling Bawah/Depan - Tanpa Teks) */}
               <div className="w-52 h-24 bg-zinc-950 border border-emerald-500/20 rounded-lg shadow-2xl z-10"></div>
            
            </div>
          </div>
        </SpotlightCard>

        {/* 2. ABOUT ME (STACK - TETAP SAMA) */}
        <SpotlightCard className="md:col-span-1 md:row-span-2 bg-zinc-900/50 p-6 flex flex-col items-center justify-between overflow-hidden">
           <div className="text-center relative z-20 mb-2">
             <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-3 mx-auto border border-zinc-700 text-blue-400 text-xl">
                 <FaUser />
             </div>
             <h3 className="text-lg font-bold text-white">About Me</h3>
             <p className="text-xs text-zinc-500 mt-1">Who I am.</p>
           </div>
           
           <div className="relative z-20 w-full flex-1 flex items-center justify-center mt-10">
              <div style={{ width: 150, height: 180, position: 'relative' }}>
                <Stack
                    randomRotation={true} 
                    sensitivity={180}
                    sendToBackOnClick={true}
                    cards={stackImages.map((src, i) => (
                    <img 
                        key={i} 
                        src={src} 
                        alt={`stack-${i}`} 
                        className="w-full h-full object-cover rounded-2xl pointer-events-none border-2 border-white/10 shadow-black/50 shadow-xl"
                    />
                    ))}
                />
              </div>
           </div>
        </SpotlightCard>

        {/* 3. SKILLS & TOOLS */}
        <SpotlightCard className="md:col-span-1 md:row-span-2 bg-zinc-900/50 p-6 flex flex-col">
            <div className="text-center mb-6 relative z-20">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 mx-auto border border-zinc-700 text-orange-400 text-xl">
                    <FaTools />
                </div>
                <h3 className="text-lg font-bold text-white">Stack</h3>
                <p className="text-xs text-zinc-500 mt-1">Tools I use.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-auto relative z-20">
               <SkillBadge name="React" color="text-blue-400" />
               <SkillBadge name="Next" color="text-white" />
               <SkillBadge name="TS" color="text-blue-600" />
               <SkillBadge name="Tailwind" color="text-cyan-400" />
            </div>
        </SpotlightCard>

        {/* 4. ACHIEVEMENTS */}
        <SpotlightCard className="md:col-span-1 bg-zinc-900/50 p-6 flex flex-col justify-center">
            <div className="relative z-20">
              <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-3 border border-zinc-700 text-yellow-400">
                  <FaTrophy />
              </div>
              <h3 className="font-bold text-white text-lg">Achievements</h3>
              <p className="text-xs text-zinc-500 mt-1">Milestones & Awards.</p>
            </div>
        </SpotlightCard>

        {/* 5. CHAT ROOM */}
        <SpotlightCard className="md:col-span-1 bg-zinc-900/50 p-4 flex flex-col justify-between">
             <div className="relative z-20 h-full flex flex-col justify-between">
                <div className="flex flex-col gap-2 text-[10px]">
                    <div className="bg-zinc-800 text-zinc-300 p-2 rounded-lg rounded-tl-none self-start max-w-[80%]">
                        Open for work?
                    </div>
                    <div className="bg-emerald-600 text-white p-2 rounded-lg rounded-tr-none self-end max-w-[80%]">
                        Yes! Let's talk.
                    </div>
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-sm mt-2">
                    <FaComments className="text-emerald-500" /> Chat Room
                </div>
             </div>
        </SpotlightCard>

        {/* 6. SERVICES */}
        <SpotlightCard className="md:col-span-2 bg-zinc-900/50 p-6 flex flex-col justify-center relative group overflow-hidden">
             <div className="z-20 relative">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 border border-zinc-700 text-purple-400 text-xl">
                    <FaLayerGroup />
                </div>
                <h3 className="font-bold text-white text-2xl">Services</h3>
                <p className="text-sm text-zinc-400 mt-2 max-w-xs">Fullstack Development, UI/UX Design, and Performance Optimization.</p>
             </div>
             <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right opacity-20 group-hover:opacity-50 transition-opacity duration-500 z-10 pointer-events-none">
                <h4 className="text-4xl font-black text-white blur-[2px] group-hover:blur-0 transition-all">WEB</h4>
                <h4 className="text-4xl font-black text-white blur-[2px] group-hover:blur-0 transition-all delay-75">APP</h4>
             </div>
        </SpotlightCard>

      </div>
    </section>
  );
};


// ============================================================================
// 🔥 LOGIC STACK (Last Index = Top Card) 🔥
// ============================================================================

// 1. CARD ROTATE
interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_event: any, info: PanInfo) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

// 2. STACK COMPONENT
interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cards: React.ReactNode[];
}

const Stack = ({ 
    randomRotation = false, 
    sensitivity = 200, 
    cards = [], 
    sendToBackOnClick = false
}: StackProps) => {
  const [stack, setStack] = useState<{ id: number; content: React.ReactNode }[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index, content })));
    }
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.findIndex((card) => card.id === id);
      if (index < 0) return prev;
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card); 
      return newStack;
    });
  };

  if (!isMounted) return <div className="w-full h-full bg-zinc-800 rounded-2xl animate-pulse" />;

  return (
    <div className="relative w-full h-full" style={{ perspective: 600 }}>
      {stack.map((card, index) => {
        const isTop = index === stack.length - 1; 
        const reverseIndex = stack.length - 1 - index;
        const randomRotate = randomRotation ? (index % 2 === 0 ? 7 : 14) : 0;

        return (
          <motion.div
            key={card.id}
            className="absolute inset-0 w-full h-full rounded-2xl"
            style={{ 
                zIndex: index, 
                transformOrigin: '50% 100%'
            }} 
            animate={{
                scale: 1 - reverseIndex * 0.05,
                y: reverseIndex * -10,
                rotateZ: isTop ? 0 : randomRotate,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
             {isTop ? (
                 <CardRotate onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
                    <div 
                        className="w-full h-full rounded-2xl overflow-hidden bg-zinc-900 cursor-grab"
                        onClick={() => sendToBackOnClick && sendToBack(card.id)}
                    >
                        {card.content}
                    </div>
                 </CardRotate>
             ) : (
                 <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-900 relative">
                    {card.content}
                 </div>
             )}
          </motion.div>
        );
      })}
    </div>
  );
};

// --- SPOTLIGHT CARD ---
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-3xl border border-zinc-800 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{ opacity, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)` }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
};

// --- SKILL BADGE ---
const SkillBadge = ({ name, color }: { name: string; color: string }) => (
    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg py-2 px-3 flex items-center justify-center text-xs font-bold text-zinc-300 backdrop-blur-sm">
        <span className={`mr-2 text-xs ${color}`}>●</span> {name}
    </div>
);

export default BentoGrid;