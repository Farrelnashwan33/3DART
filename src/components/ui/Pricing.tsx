"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, ShieldCheck, Sparkles, Layers, Ruler } from "lucide-react";
import { Card, Button } from "./Base";
import { useCart } from "@/context/CartContext";

export const plans = [
  {
    name: "Mini",
    price: "10 cm",
    icon: Zap,
    features: ["Ukuran mini & lucu", "Detail tetap terjaga", "Cocok untuk gantungan/pajangan kecil", "Material resin berkualitas"],
    color: "accent-cyan"
  },
  {
    name: "Gift",
    price: "12 cm",
    icon: Sparkles,
    features: ["Ukuran pas buat hadiah", "Detail lebih terlihat", "Proporsi presisi", "Ringan & kokoh"],
    color: "accent-indigo"
  },
  {
    name: "Best Seller",
    price: "15 cm",
    icon: Crown,
    features: ["Ukuran paling favorit", "Detail sangat tajam", "Ideal untuk koleksi meja", "Finishing halus"],
    color: "accent-purple",
    popular: true
  },
  {
    name: "Large",
    price: "20 cm",
    icon: Layers,
    features: ["Lebih besar & keren", "Visual standout", "Detail profesional", "Sangat kokoh"],
    color: "accent-cyan"
  },
  {
    name: "Premium",
    price: "25 cm",
    icon: ShieldCheck,
    features: ["Premium & standout", "Ukuran maksimal", "Detail tingkat tinggi", "Pajangan utama (Centerpiece)"],
    color: "accent-indigo"
  }
];

export default function Pricing() {
  const { searchQuery } = useCart();

  const filteredPlans = plans.filter((plan) =>
    plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plan.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plan.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="pricing" className="py-16 px-4 md:py-32 md:px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 sm:mb-8"
        >
          <Ruler size={14} className="text-accent-indigo" />
          Size Selection
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-4 sm:mb-8 tracking-tighter"
        >
          📏 Lima Pilihan <span className="text-gradient">Ukuran</span>
        </motion.h2>
        <p className="text-slate-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Pilih ukuran yang paling sesuai dengan kebutuhan koleksi atau hadiahmu.
        </p>
      </div>

      {filteredPlans.length === 0 ? (
        <div className="py-20 text-center space-y-4 max-w-md mx-auto relative z-10">
          <div className="text-4xl">🔍</div>
          <h3 className="text-xl font-bold text-slate-800">Tidak ada ukuran ditemukan</h3>
          <p className="text-slate-500 text-sm font-light">Kami tidak dapat menemukan pilihan ukuran dengan kriteria "{searchQuery}". Coba gunakan kata kunci lain.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[90rem] mx-auto relative z-10">
          {filteredPlans.map((plan, index) => {
            const colorClass = 
              plan.color === "accent-cyan" ? "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5" :
              plan.color === "accent-indigo" ? "text-accent-indigo border-accent-indigo/20 bg-accent-indigo/5" :
              "text-accent-purple border-accent-purple/20 bg-accent-purple/5";
              
            const borderColor = 
              plan.popular ? "border-accent-indigo/30 shadow-2xl shadow-accent-indigo/10" : "border-slate-100";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card 
                  className={`h-full border-[1.5px] p-6 relative flex flex-col transition-all duration-700 hover:translate-y-[-10px] group bg-white overflow-visible ${borderColor}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-indigo to-accent-purple text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent-indigo/30">
                      Best Seller
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className={`w-14 h-14 rounded-2xl border ${colorClass} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                      <plan.icon size={28} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{plan.name}</div>
                      <div className="text-3xl font-black text-slate-900 tracking-tighter">{plan.price}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-500 group/item text-left">
                        <div className="w-5 h-5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-accent-indigo" />
                        </div>
                        <span className="text-xs font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
      <div className="mt-16 text-center">
         <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Pilih ukuran sesuai kebutuhanmu!</p>
      </div>
    </section>
  );
}
