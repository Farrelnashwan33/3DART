"use client";

import { motion } from "framer-motion";
import { Box, Layers, Package, Star } from "lucide-react";
import { Card } from "./Base";
import { useCart } from "@/context/CartContext";

export const packagingOptions = [
  {
    id: "blindbox",
    name: "Kardus Blind Box",
    description: "Simple, aman, & aesthetic. Memberikan sensasi unboxing yang seru layaknya koleksi mainan ternama.",
    icon: Box,
    features: ["Bahan karton tebal", "Desain eksklusif", "Aman untuk pengiriman", "Sangat ekonomis"],
    badge: "Most Choice"
  },
  {
    id: "acrylic",
    name: "Kotak Akrilik Premium",
    description: "Elegan & sangat cocok untuk display permanen. Menjaga kualitas cat dari debu dan kotoran.",
    icon: Layers,
    features: ["Bening kristal", "Tahan debu (Dustproof)", "Sangat elegan", "Siap pajang"],
    badge: "Premium"
  }
];

export default function Packaging() {
  const { searchQuery } = useCart();

  const filteredOptions = packagingOptions.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    option.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    option.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="packaging" className="py-16 px-4 md:py-24 md:px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm"
          >
            <Package size={14} className="text-accent-indigo" />
            Packaging Options
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter">
            📦 Pilihan <span className="text-gradient">Packaging</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Lengkapi koleksimu dengan pilihan packaging yang aman dan meningkatkan nilai estetika.
          </p>
        </div>

        {filteredOptions.length === 0 ? (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto relative z-10">
            <div className="text-4xl">🔍</div>
            <h3 className="text-xl font-bold text-slate-900">Tidak ada packaging ditemukan</h3>
            <p className="text-slate-500 text-sm font-light">Kami tidak dapat menemukan pilihan packaging dengan kriteria "{searchQuery}". Coba gunakan kata kunci lain.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 sm:p-10 border-slate-200 hover:border-accent-cyan/30 transition-all duration-500 bg-white group h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-accent-indigo group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <option.icon size={32} />
                      </div>
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        option.id === 'acrylic' ? 'bg-accent-purple/10 text-accent-purple' : 'bg-accent-cyan/10 text-accent-cyan'
                      }`}>
                        {option.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{option.name}</h3>
                    <p className="text-slate-500 mb-8 font-light leading-relaxed">
                      {option.description}
                    </p>
                    
                    <div className="space-y-3 mt-auto pt-8 border-t border-slate-50">
                      {option.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
