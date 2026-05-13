"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Ruler, Package, Image as ImageIcon, MessageCircle, Truck } from "lucide-react";
import { Card } from "./Base";

const steps = [
  {
    title: "Pilih Ukuran",
    description: "Tentukan dimensi (10-25cm) yang Anda inginkan.",
    icon: Ruler,
    color: "bg-blue-500"
  },
  {
    title: "Pilih Packaging",
    description: "Pilih Blind Box atau Akrilik Premium.",
    icon: Package,
    color: "bg-purple-500"
  },
  {
    title: "Kirim Referensi",
    description: "Kirim gambar/pose karakter di chat Shopee.",
    icon: ImageIcon,
    color: "bg-orange-500"
  },
  {
    title: "Konfirmasi Model",
    description: "Cek & konfirmasi detail model sebelum diprint.",
    icon: MessageCircle,
    color: "bg-emerald-500"
  },
  {
    title: "Proses & Kirim",
    description: "Barang diproses & langsung dikirim ke alamatmu. 🎁",
    icon: Truck,
    color: "bg-accent-indigo"
  }
];

export default function OrderGuide() {
  return (
    <section id="order" className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <ShoppingCart size={14} className="text-orange-400" />
            Shopee Guide
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
            🛒 Cara Order di <span className="text-orange-500">Shopee</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Ikuti langkah mudah berikut untuk memesan 3D Print Custom favoritmu.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-accent-indigo opacity-20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center shadow-lg shadow-black/20 mb-8 relative group`}>
                    <div className="absolute -inset-2 bg-white opacity-0 group-hover:opacity-10 rounded-[2.5rem] transition-all" />
                    <step.icon size={32} className="text-white" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center font-black text-sm border-4 border-slate-900">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto">
            <ShoppingCart size={20} />
            Buka Toko di Shopee
          </button>
          <p className="text-slate-500 text-xs mt-6 uppercase tracking-widest font-bold">Fast Response • Terpercaya • Rating 4.9/5</p>
        </motion.div>
      </div>
    </section>
  );
}
