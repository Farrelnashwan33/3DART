"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Wand2, History, Layers } from "lucide-react";
import { useState } from "react";
import { Button, Card } from "./Base";
import ModelViewer, { ModelStyle } from "../3d/ModelViewer";
import Scene from "../3d/Scene";
import { useCart } from "@/context/CartContext";

const styles: ModelStyle[] = [
  "Anime 3D", "Pixar style", "Cyberpunk", "Realistic", 
  "Stylized cartoon", "Low poly", "Fantasy", "Sci-fi", 
  "Cute chibi", "Islamic art style"
];

export default function Hero() {
  const { setActiveTab } = useCart();
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
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-6 bg-white overflow-hidden isolate">
      {/* Background is handled by Scene component */}
      <Scene>
        <ModelViewer style={selectedStyle} isGenerating={isGenerating} />
      </Scene>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="space-y-6 sm:space-y-10 flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs sm:text-sm font-bold uppercase tracking-widest"
          >
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span>Premium 3D Printing Service</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] sm:leading-[1.1] tracking-tight px-2 sm:px-0"
          >
            ✨ 3D Print <span className="text-gradient">Custom</span> — Wujudkan Karakter Favoritmu!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto px-4 sm:px-0"
          >
            Tinggal kirim referensi pose/karakter, kami buatkan versi 3D-nya dengan detail rapi & berkualitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-6 sm:px-0"
          >
            <Button 
              onClick={() => window.open("https://id.shp.ee/6Zb8HdEg", "_blank")}
              variant="primary" 
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-base sm:text-lg group"
            >
              Order di Shopee
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
            </Button>
            <Button 
              onClick={() => setActiveTab("produk")}
              variant="outline" 
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-base sm:text-lg border-slate-200"
            >
              Lihat Katalog
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 pt-8 sm:pt-10 border-t border-slate-100 justify-center w-full"
          >
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-slate-900">100%</div>
              <div className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Detail Presisi</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-slate-900">Custom</div>
              <div className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Bebas Request</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-slate-900">Fast</div>
              <div className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Proses Cepat</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Cards */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-7xl mx-auto h-full relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute top-1/4 right-0 flex flex-col gap-4 pointer-events-auto"
          >
             <Card className="w-56 py-4 px-6 border-slate-200 bg-white/80 backdrop-blur-md shadow-xl shadow-slate-200/20">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Live Preview</span>
                </div>
                 <div className="text-xs text-slate-500 font-medium">Menyiapkan Detail Presisi...</div>
              </Card>
              
              <Card className="w-56 py-4 px-6 border-slate-200 bg-white/80 backdrop-blur-md shadow-xl shadow-slate-200/20">
                <div className="flex items-center gap-3 mb-2 text-accent-cyan">
                   <Layers size={18} />
                   <span className="text-xs font-bold uppercase tracking-wider">Detail Produk</span>
                </div>
                <div className="space-y-3">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent-cyan" />
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-accent-purple" />
                  </div>
                </div>
             </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-1/4 left-0 pointer-events-auto"
          >
             <div className="flex items-center gap-4 glass p-4 rounded-2xl border-slate-200 shadow-xl shadow-slate-200/20 bg-white/80 backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-accent-indigo flex items-center justify-center">
                   <History size={24} className="text-white" />
                </div>
                <div className="text-sm">
                   <div className="text-slate-900 font-bold text-base">Koleksi Terbaru</div>
                   <div className="text-slate-400 font-medium">Model siap dicetak</div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
