"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Eye, Check, X } from "lucide-react";
import { useState } from "react";
import { Card } from "./Base";
import { useCart } from "@/context/CartContext";

export const artworks = [
  { id: 1, title: "Cyberpunk Samurai", style: "3D Figure", author: "@farrel_n", likes: "1.5k", price: 150, image: "/foto/art1.png" },
  { id: 2, title: "Neon Drifter", style: "Action Figure", author: "@farrel_n", likes: "856", price: 85, image: "/foto/art2.png" },
  { id: 3, title: "Mecha Guardian", style: "3D Figure", author: "@farrel_n", likes: "2.4k", price: 210, image: "/foto/art3.png" },
  { id: 4, title: "Void Walker", style: "Anime", author: "@farrel_n", likes: "3.1k", price: 120, image: "/foto/art4.png" },
  { id: 5, title: "Digital Bloom", style: "Realistic", author: "@farrel_n", likes: "642", price: 95, image: "/foto/art5.png" },
  { id: 6, title: "Astral Entity", style: "Abstract", author: "@farrel_n", likes: "1.5k", price: 180, image: "/foto/art6.png" },
  { id: 7, title: "Techno Relic", style: "Artifact", author: "@farrel_n", likes: "1.2k", price: 300, image: "/foto/art7.png" },
];

export default function Gallery() {
  const { addToCart, searchQuery } = useCart();
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  const toggleLike = (id: number) => {
    setLikedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const parseLikes = (likesStr: string): number => {
    if (likesStr.endsWith("k")) {
      return parseFloat(likesStr.replace("k", "")) * 1000;
    }
    return parseInt(likesStr, 10);
  };

  const formatLikes = (num: number): string => {
    return num.toLocaleString("id-ID");
  };

  const filteredArtworks = artworks.filter((art) => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.style.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="gallery" className="py-16 px-4 md:py-32 md:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
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
              className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter"
            >
              Koleksi <span className="text-gradient">Produk</span> Kami
            </motion.h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl font-light">Eksplorasi hasil cetak 3D custom dari berbagai karakter populer dengan kualitas premium.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-4 w-full md:w-auto">
            <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-xl border border-slate-100 text-slate-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:text-slate-900 hover:bg-slate-50 transition-all shadow-sm cursor-pointer">Trending</button>
            <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-xl bg-slate-900 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 cursor-pointer">All Products</button>
          </div>
        </div>

        {filteredArtworks.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="text-xl font-bold text-slate-800">Tidak ada produk ditemukan</h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">Kami tidak dapat menemukan produk cetak 3D dengan nama "{searchQuery}". Coba gunakan kata kunci lain.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArtworks.map((art, index) => (
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
                      <ActionButton 
                        icon={Eye} 
                        onClick={() => setSelectedArtwork(art)}
                      />
                      <ActionButton 
                        icon={Heart} 
                        onClick={() => toggleLike(art.id)}
                        isLiked={likedIds.includes(art.id)}
                      />
                      <ActionButton 
                        icon={ShoppingCart} 
                        onClick={() => window.open("https://id.shp.ee/6Zb8HdEg", "_blank")} 
                      />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-accent-indigo transition-colors tracking-tight mb-4">{art.title}</h3>
                    <button 
                      onClick={() => window.open("https://id.shp.ee/6Zb8HdEg", "_blank")}
                      className="w-full mb-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <ShoppingCart size={14} />
                      Order di Shopee
                    </button>
                    
                    <div className="flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                            <Check size={12} className="text-emerald-500" />
                         </div>
                         <span>Ready to Print</span>
                      </div>
                      <button 
                        onClick={() => toggleLike(art.id)}
                        className="flex items-center gap-1.5 hover:scale-105 transition-all text-slate-400 hover:text-rose-500 cursor-pointer"
                      >
                        <Heart 
                          size={14} 
                          className={`transition-colors ${likedIds.includes(art.id) ? "text-rose-500 fill-rose-500" : "text-rose-500"}`} 
                        />
                        <span>{formatLikes(likedIds.includes(art.id) ? parseLikes(art.likes) + 1 : parseLikes(art.likes))}</span>
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col border border-slate-100 max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent-indigo bg-accent-indigo/10 px-2.5 py-1 rounded-full">
                    {selectedArtwork.style}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2">{selectedArtwork.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedArtwork(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
                <div className="aspect-[4/3] bg-slate-50 rounded-2xl flex items-center justify-center p-6 border border-slate-100/50 relative">
                  <img 
                    src={selectedArtwork.image} 
                    alt={selectedArtwork.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                  <button
                    onClick={() => toggleLike(selectedArtwork.id)}
                    className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md text-slate-600 hover:text-rose-500 rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center"
                  >
                    <Heart 
                      size={20} 
                      className={likedIds.includes(selectedArtwork.id) ? "text-rose-500 fill-rose-500" : "text-rose-500"} 
                    />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-4">
                    <span className="text-slate-400 font-medium">Author / Designer</span>
                    <span className="text-slate-800 font-bold">{selectedArtwork.author}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-4">
                    <span className="text-slate-400 font-medium">Likes</span>
                    <span className="text-slate-800 font-bold flex items-center gap-1">
                      <Heart size={14} className="text-rose-500 fill-rose-500" />
                      {formatLikes(likedIds.includes(selectedArtwork.id) ? parseLikes(selectedArtwork.likes) + 1 : parseLikes(selectedArtwork.likes))}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-4">
                    <span className="text-slate-400 font-medium">Status</span>
                    <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Ready to Print (3D Resin)
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-800 text-sm">Deskripsi Produk:</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      Figur cetak 3D premium dengan detail tinggi. Diproduksi menggunakan printer 3D tipe SLA/Resin resolusi tinggi untuk menjamin detail karakter sangat presisi, kokoh, dan siap dipajang atau dicat (ready-to-paint). Cocok untuk koleksi pribadi atau hadiah spesial.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-100 flex gap-3 bg-slate-50/50">
                <button
                  onClick={() => {
                    addToCart({
                      id: selectedArtwork.id,
                      title: selectedArtwork.title,
                      price: selectedArtwork.price,
                      image: selectedArtwork.image
                    });
                    setSelectedArtwork(null);
                  }}
                  className="flex-1 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                >
                  Tambah ke Keranjang
                </button>
                <button
                  onClick={() => window.open("https://id.shp.ee/6Zb8HdEg", "_blank")}
                  className="flex-1 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
                >
                  <ShoppingCart size={14} />
                  Order di Shopee
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ActionButton({ icon: Icon, onClick, isLiked }: { icon: any, onClick?: () => void, isLiked?: boolean }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`w-14 h-14 rounded-2xl transition-all flex items-center justify-center shadow-2xl cursor-pointer ${
        isLiked 
          ? "bg-rose-500 text-white hover:bg-rose-600" 
          : "bg-white text-slate-900 hover:bg-accent-indigo hover:text-white"
      }`}
    >
      <Icon size={24} className={isLiked ? "fill-white" : ""} />
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
