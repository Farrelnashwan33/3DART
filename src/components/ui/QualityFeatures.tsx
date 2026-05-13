"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Target, Palette, Zap, Clock } from "lucide-react";
import { Card } from "./Base";

const features = [
  {
    title: "Hasil Rapi & Detail",
    description: "Permukaan halus dengan detail tajam yang menjaga estetika karakter Anda.",
    icon: CheckCircle2,
    points: ["Permukaan halus", "Warna sesuai referensi", "Proporsi presisi"]
  },
  {
    title: "Kualitas Terjamin",
    description: "Material berkualitas tinggi yang kuat dan tahan lama untuk jangka panjang.",
    icon: ShieldCheck,
    points: ["Material sangat kuat", "Hasil cetak presisi", "Tahan lama (indoor)"]
  },
  {
    title: "Akurasi Tinggi",
    description: "Setiap lekukan dan detail dibuat seakurat mungkin sesuai dengan model asli.",
    icon: Target,
    points: ["Skala akurat", "Detail mikro terjaga", "Modeling profesional"]
  }
];

export default function QualityFeatures() {
  return (
    <section id="quality" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              <ShieldCheck size={14} />
              Quality Assurance
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              💎 Kualitas <span className="text-gradient">Terjamin</span> & Detail Sempurna
            </h2>
            <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed">
              Kami menggabungkan teknologi 3D printing terkini dengan sentuhan tangan ahli untuk menghasilkan produk yang memuaskan kolektor.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-indigo/10 flex items-center justify-center text-accent-indigo shrink-0">
                     <Palette size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Custom Paint & Finish</h4>
                     <p className="text-slate-500 text-sm">Warna diaplikasikan secara rapi dan sesuai dengan skema referensi yang Anda berikan.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shrink-0">
                     <Zap size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Material Premium</h4>
                     <p className="text-slate-500 text-sm">Menggunakan material resin pilihan yang tidak hanya kuat tapi juga mampu menangkap detail terkecil.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 border-slate-100 hover:border-accent-indigo/20 bg-slate-50/50 hover:bg-white transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent-indigo">
                      <feature.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm mb-6 font-light">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.points.map((point) => (
                      <span key={point} className="px-3 py-1 rounded-full bg-white border border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        {point}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
