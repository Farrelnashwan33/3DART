"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Eye, Check, ArrowRight, Sparkles, X } from "lucide-react";
import { Card, Button } from "./Base";
import { useCart } from "@/context/CartContext";
import { artworks } from "./Gallery";
import { plans } from "./Pricing";
import { packagingOptions } from "./Packaging";
import { features } from "./QualityFeatures";
import { steps } from "./OrderGuide";

export default function SearchResults() {
  const { searchQuery, setSearchQuery, setActiveTab, addToCart } = useCart();
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const query = searchQuery.trim().toLowerCase();

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

  // Filter all data sources
  const matchedArtworks = artworks.filter((art) =>
    art.title.toLowerCase().includes(query) ||
    art.style.toLowerCase().includes(query)
  );

  const matchedPlans = plans.filter((plan) =>
    plan.name.toLowerCase().includes(query) ||
    plan.price.toLowerCase().includes(query) ||
    plan.features.some((f) => f.toLowerCase().includes(query))
  );

  const matchedPackaging = packagingOptions.filter((opt) =>
    opt.name.toLowerCase().includes(query) ||
    opt.description.toLowerCase().includes(query) ||
    opt.features.some((f) => f.toLowerCase().includes(query))
  );

  const matchedFeatures = features.filter((feat) =>
    feat.title.toLowerCase().includes(query) ||
    feat.description.toLowerCase().includes(query) ||
    feat.points.some((p) => p.toLowerCase().includes(query))
  );

  const matchedSteps = steps.filter((step) =>
    step.title.toLowerCase().includes(query) ||
    step.description.toLowerCase().includes(query)
  );

  const totalMatches =
    matchedArtworks.length +
    matchedPlans.length +
    matchedPackaging.length +
    matchedFeatures.length +
    matchedSteps.length;

  const navigateToTab = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery(""); // Clear search to show full page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-16 px-4 md:py-24 md:px-8 max-w-7xl mx-auto relative min-h-screen bg-slate-50/50">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">
          🔍 Search Results
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
          Hasil Pencarian untuk <span className="text-gradient">"{searchQuery}"</span>
        </h2>
        <p className="text-slate-500 text-sm font-light">
          Menampilkan {totalMatches} kecocokan di semua halaman.
        </p>
      </div>

      {totalMatches === 0 ? (
        <div className="py-24 text-center bg-white rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-100 flex flex-col items-center justify-center space-y-6">
          <div className="text-6xl animate-bounce">🔍</div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900">Tidak ada hasil ditemukan</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto px-4">
              Kami tidak dapat menemukan apa pun yang cocok dengan kata kunci Anda. Silakan coba kata kunci lain atau periksa ejaan Anda.
            </p>
          </div>
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            Bersihkan Pencarian
          </Button>
        </div>
      ) : (
        <div className="space-y-16">
          {/* Section: Produk (Gallery) */}
          {matchedArtworks.length > 0 && (
            <section className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
                  Katalog Produk ({matchedArtworks.length})
                </h3>
                <button
                  onClick={() => navigateToTab("produk")}
                  className="text-xs font-bold text-accent-indigo hover:text-accent-indigo/80 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Buka Halaman Produk <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {matchedArtworks.map((art) => (
                  <Card key={art.id} className="group p-0 border-slate-200/60 hover:border-accent-indigo/20 bg-white shadow-lg transition-all overflow-hidden">
                    <div className="aspect-[3/4] bg-slate-50 relative overflow-hidden flex items-center justify-center p-4">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                        {art.style}
                      </div>
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
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
                    <div className="p-6">
                      <h4 className="text-xl font-black text-slate-900 group-hover:text-accent-indigo transition-colors mb-4">{art.title}</h4>
                      <button
                        onClick={() => window.open("https://id.shp.ee/6Zb8HdEg", "_blank")}
                        className="w-full mb-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                      >
                        <ShoppingCart size={14} />
                        Order di Shopee
                      </button>
                      <div className="flex justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-widest pt-4 border-t border-slate-100">
                        <span>Ready to Print</span>
                        <button 
                          onClick={() => toggleLike(art.id)}
                          className="flex items-center gap-1 hover:scale-105 transition-all text-slate-400 hover:text-rose-500 cursor-pointer"
                        >
                          <Heart 
                            size={12} 
                            className={`text-rose-500 transition-colors ${likedIds.includes(art.id) ? "fill-rose-500" : ""}`} 
                          /> 
                          <span>{formatLikes(likedIds.includes(art.id) ? parseLikes(art.likes) + 1 : parseLikes(art.likes))}</span>
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Section: Ukuran (Pricing) */}
          {matchedPlans.length > 0 && (
            <section className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-indigo" />
                  Pilihan Ukuran ({matchedPlans.length})
                </h3>
                <button
                  onClick={() => navigateToTab("sizing")}
                  className="text-xs font-bold text-accent-indigo hover:text-accent-indigo/80 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Buka Halaman Sizing <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {matchedPlans.map((plan) => {
                  const colorClass =
                    plan.color === "accent-cyan" ? "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5" :
                    plan.color === "accent-indigo" ? "text-accent-indigo border-accent-indigo/20 bg-accent-indigo/5" :
                    "text-accent-purple border-accent-purple/20 bg-accent-purple/5";

                  return (
                    <Card key={plan.name} className="h-full border-[1.5px] border-slate-200/60 p-6 relative flex flex-col transition-all bg-white overflow-visible group hover:translate-y-[-5px]">
                      {plan.popular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-indigo to-accent-purple text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                          Best Seller
                        </div>
                      )}
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className={`w-12 h-12 rounded-xl border ${colorClass} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}>
                          <plan.icon size={24} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{plan.name}</div>
                          <div className="text-2xl font-black text-slate-900 tracking-tight">{plan.price}</div>
                        </div>
                      </div>
                      <ul className="space-y-3 flex-1">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-slate-500 text-left">
                            <div className="w-4.5 h-4.5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={10} className="text-accent-indigo" />
                            </div>
                            <span className="text-[11px] font-medium leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}

          {/* Section: Packaging */}
          {matchedPackaging.length > 0 && (
            <section className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-purple" />
                  Pilihan Packaging ({matchedPackaging.length})
                </h3>
                <button
                  onClick={() => navigateToTab("packaging")}
                  className="text-xs font-bold text-accent-indigo hover:text-accent-indigo/80 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Buka Halaman Packaging <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {matchedPackaging.map((option) => (
                  <Card key={option.id} className="p-8 border-slate-200 hover:border-accent-cyan/30 transition-all bg-white group h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-accent-indigo group-hover:scale-105 transition-transform">
                          <option.icon size={28} />
                        </div>
                        <span className={`px-3.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                          option.id === 'acrylic' ? 'bg-accent-purple/10 text-accent-purple' : 'bg-accent-cyan/10 text-accent-cyan'
                        }`}>
                          {option.badge}
                        </span>
                      </div>
                      <h4 className="text-xl font-black text-slate-900 mb-3">{option.name}</h4>
                      <p className="text-slate-500 text-sm mb-6 font-light leading-relaxed">{option.description}</p>
                      <div className="space-y-2 mt-auto pt-6 border-t border-slate-50">
                        {option.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2.5 text-xs text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Section: Kualitas */}
          {matchedFeatures.length > 0 && (
            <section className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Kualitas & Keunggulan ({matchedFeatures.length})
                </h3>
                <button
                  onClick={() => navigateToTab("kualitas")}
                  className="text-xs font-bold text-accent-indigo hover:text-accent-indigo/80 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Buka Halaman Kualitas <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {matchedFeatures.map((feature) => (
                  <Card key={feature.title} className="p-6 border-slate-200 bg-white hover:border-accent-indigo/20 transition-all">
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 shadow-sm flex items-center justify-center text-accent-indigo">
                        <feature.icon size={18} />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                    </div>
                    <p className="text-slate-500 text-xs mb-4 font-light leading-relaxed">{feature.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {feature.points.map((point) => (
                        <span key={point} className="px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[9px] font-bold uppercase tracking-wider">
                          {point}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Section: Cara Order */}
          {matchedSteps.length > 0 && (
            <section className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  Panduan Cara Order ({matchedSteps.length})
                </h3>
                <button
                  onClick={() => navigateToTab("order")}
                  className="text-xs font-bold text-accent-indigo hover:text-accent-indigo/80 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Buka Halaman Cara Order <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {matchedSteps.map((step) => (
                  <Card key={step.title} className="p-6 border-slate-200 bg-white hover:border-accent-indigo/20 transition-all flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-sm mb-4 relative`}>
                      <step.icon size={26} className="text-white" />
                    </div>
                    <h4 className="text-base font-bold mb-2 text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">{step.description}</p>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

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
    </div>
  );
}

function ActionButton({ icon: Icon, onClick, isLiked }: { icon: any; onClick?: () => void; isLiked?: boolean }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`w-12 h-12 rounded-xl transition-all flex items-center justify-center shadow-lg cursor-pointer ${
        isLiked 
          ? "bg-rose-500 text-white hover:bg-rose-600" 
          : "bg-white text-slate-900 hover:bg-accent-indigo hover:text-white"
      }`}
    >
      <Icon size={20} className={isLiked ? "fill-white" : ""} />
    </motion.button>
  );
}
