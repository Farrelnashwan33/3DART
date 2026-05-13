"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye, Check } from "lucide-react";
import { Card } from "./Base";
import { useCart } from "@/context/CartContext";

const artworks = [
  { id: 1, title: "Cyberpunk Samurai", style: "3D Figure", author: "@farrel_n", likes: "1.5k", price: 150, image: "/foto/art1.png" },
  { id: 2, title: "Neon Drifter", style: "Action Figure", author: "@farrel_n", likes: "856", price: 85, image: "/foto/art2.png" },
  { id: 3, title: "Mecha Guardian", style: "3D Figure", author: "@farrel_n", likes: "2.4k", price: 210, image: "/foto/art3.png" },
  { id: 4, title: "Void Walker", style: "Anime", author: "@farrel_n", likes: "3.1k", price: 120, image: "/foto/art4.png" },
  { id: 5, title: "Digital Bloom", style: "Realistic", author: "@farrel_n", likes: "642", price: 95, image: "/foto/art5.png" },
  { id: 6, title: "Astral Entity", style: "Abstract", author: "@farrel_n", likes: "1.5k", price: 180, image: "/foto/art6.png" },
  { id: 7, title: "Techno Relic", style: "Artifact", author: "@farrel_n", likes: "1.2k", price: 300, image: "/foto/art7.png" },
];


export default function Gallery() {
  const { addToCart } = useCart();

  return (
    <section id="gallery" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4"
            >
              <SparklesIcon size={12} className="text-accent-indigo" />
              Latest Works
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter"
            >
              Koleksi <span className="text-gradient">Produk</span> Kami
            </motion.h2>
            <p className="text-slate-500 text-lg max-w-2xl font-light">Eksplorasi hasil cetak 3D custom dari berbagai karakter populer dengan kualitas premium.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-xl border border-slate-100 text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-slate-900 hover:bg-slate-50 transition-all shadow-sm">Trending</button>
            <button className="px-8 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">All Products</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group p-0 border-slate-100 hover:border-accent-indigo/20 bg-white shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 overflow-hidden">
                <div className="aspect-[3/4] bg-slate-50 relative overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                    {art.style}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <ActionButton icon={Eye} />
                    <ActionButton icon={Heart} />
                    <ActionButton 
                      icon={ShoppingCart} 
                      onClick={() => addToCart({ id: art.id, title: art.title, price: art.price, image: art.image })} 
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-accent-indigo transition-colors tracking-tight">{art.title}</h3>
                    <div className="text-xl font-black text-accent-indigo tracking-tighter">${art.price}</div>
                  </div>
                  
                  <div className="flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                          <Check size={12} className="text-emerald-500" />
                       </div>
                       <span>Ready to Print</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart size={14} className="text-rose-500 fill-rose-500" />
                      <span>{art.likes}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionButton({ icon: Icon, onClick }: { icon: any, onClick?: () => void }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="w-14 h-14 rounded-2xl bg-white text-slate-900 hover:bg-accent-indigo hover:text-white transition-all flex items-center justify-center shadow-2xl"
    >
      <Icon size={24} />
    </motion.button>
  );
}

function SparklesIcon({ className, size = 24 }: { className?: string, size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  );
}
