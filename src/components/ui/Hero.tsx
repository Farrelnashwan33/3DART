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
    <section className="relative min-h-screen pt-32 pb-20 px-6">
      <Scene>
        <ModelViewer style={selectedStyle} isGenerating={isGenerating} />
      </Scene>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium"
          >
            <Sparkles size={16} />
            <span>Turn Imagination Into 3D Reality</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-slate-950 leading-tight"
          >
            Create <span className="text-gradient">Stunning</span> 3D Art with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-xl"
          >
            The world's first AI-powered 3D art generator. Create stylized characters, 
            environments, and objects in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="glass p-2 rounded-[2rem] flex flex-col md:flex-row items-center gap-2 max-w-2xl border-slate-200 shadow-2xl shadow-slate-200/50">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your 3D masterpiece..."
                className="w-full bg-transparent border-none outline-none px-6 py-3 text-slate-900 text-lg placeholder:text-slate-400"
              />
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                variant="primary" 
                className="w-full md:w-auto h-14 px-8 rounded-[1.5rem]"
                icon={isGenerating ? Wand2 : ArrowRight}
              >
                {isGenerating ? "Generating..." : "Generate"}
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-slate-400 text-sm py-1.5 px-3">Quick Styles:</span>
              {styles.slice(0, 4).map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedStyle === style 
                      ? "bg-accent-cyan text-black" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {style}
                </button>
              ))}
              <button className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 text-sm">More Styles...</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-12 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">10M+</div>
              <div className="text-slate-400 text-sm">Arts Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">50k+</div>
              <div className="text-slate-400 text-sm">Active Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">99%</div>
              <div className="text-slate-400 text-sm">Satisfaction</div>
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
                <div className="text-xs text-slate-500">Rendering in 4K Path-Tracing Mode...</div>
             </Card>
             
             <Card className="w-48 py-4 px-6 border-slate-200 bg-white/80 shadow-lg shadow-slate-200/20">
                <div className="flex items-center gap-3 mb-2 text-accent-cyan">
                   <Layers size={16} />
                   <span className="text-xs font-bold uppercase tracking-wider">Parameters</span>
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
                  <History size={20} className="text-slate-900" />
                </div>
                <div className="text-sm">
                   <div className="text-slate-900 font-bold">Recent History</div>
                   <div className="text-slate-400">5 models saved today</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
