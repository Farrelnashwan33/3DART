"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Wand2, History, Layers } from "lucide-react";
import { useState } from "react";
import { Button, Card } from "./Base";
import ModelViewer, { ModelStyle } from "../3d/ModelViewer";
import Scene from "../3d/Scene";

const styles: ModelStyle[] = [
  "Anime 3D", "Pixar style", "Cyberpunk", "Realistic", 
  "Stylized cartoon", "Low poly", "Fantasy", "Sci-fi", 
  "Cute chibi", "Islamic art style"
];

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<ModelStyle>("Cyberpunk");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10" />
      <Scene>
        <ModelViewer style={selectedStyle} isGenerating={isGenerating} />
      </Scene>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-sm font-bold uppercase tracking-widest"
          >
            <Sparkles size={16} />
            <span>Premium 3D Printing Service</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight"
          >
            ✨ 3D Print <span className="text-gradient">Custom</span> — Wujudkan Karakter Favoritmu!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-xl leading-relaxed"
          >
            Tinggal kirim referensi pose/karakter, kami buatkan versi 3D-nya dengan detail rapi & berkualitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary" className="px-10 py-5 rounded-2xl text-lg group">
              Order di Shopee
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" className="px-10 py-5 rounded-2xl text-lg border-slate-200">
              Lihat Katalog
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-10 pt-8 border-t border-slate-100"
          >
            <div>
              <div className="text-2xl font-black text-slate-900">100%</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Detail Presisi</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">Custom</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Bebas Request</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">Fast</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Proses Cepat</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:block relative"
        >
          {/* This area is controlled by the Scene background, but we can add UI overlays here */}
          <div className="absolute top-0 right-0 p-6 flex flex-col gap-4">
             <Card className="w-48 py-4 px-6 border-slate-200 bg-white/80 shadow-lg shadow-slate-200/20">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Live Preview</span>
                </div>
                 <div className="text-xs text-slate-500">Menyiapkan Detail Presisi...</div>
              </Card>
              
              <Card className="w-48 py-4 px-6 border-slate-200 bg-white/80 shadow-lg shadow-slate-200/20">
                <div className="flex items-center gap-3 mb-2 text-accent-cyan">
                   <Layers size={16} />
                   <span className="text-xs font-bold uppercase tracking-wider">Detail Produk</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent-cyan" />
                  </div>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-accent-purple" />
                  </div>
                </div>
             </Card>
          </div>
          
          <div className="absolute bottom-0 right-0 p-6">
             <div className="flex items-center gap-3 glass p-3 rounded-2xl border-slate-200 shadow-lg shadow-slate-200/20">
                <div className="w-10 h-10 rounded-full bg-accent-indigo flex items-center justify-center">
                  <History size={20} className="text-white" />
                </div>
                <div className="text-sm">
                   <div className="text-slate-900 font-bold">Koleksi Terbaru</div>
                   <div className="text-slate-400">Model siap dicetak</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
