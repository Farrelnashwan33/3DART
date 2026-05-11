"use client";

import { motion } from "framer-motion";
import { Heart, Download, Share2, Eye } from "lucide-react";
import { Card } from "./Base";

const artworks = [
  { id: 1, title: "Neon Samurai", style: "Cyberpunk", author: "@neo_vibe", likes: "1.2k" },
  { id: 2, title: "Floating Castle", style: "Fantasy", author: "@dreamer", likes: "856" },
  { id: 3, title: "Mecha Unit 04", style: "Sci-fi", author: "@tech_art", likes: "2.4k" },
  { id: 4, title: "Chibi Dragon", style: "Cute chibi", author: "@kawaii_3d", likes: "3.1k" },
  { id: 5, title: "Abstract Flow", style: "Realistic", author: "@minimal", likes: "642" },
  { id: 6, title: "Zen Garden", style: "Islamic art style", author: "@serenity", likes: "1.5k" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Community <span className="text-gradient">Showcase</span>
            </motion.h2>
            <p className="text-white/60 text-lg">Explore the most stunning 3D creations from our global community.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all">Trending</button>
            <button className="px-6 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all">Recent</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group p-0 border-white/5 hover:border-accent-cyan/30 bg-white/[0.02]">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] relative overflow-hidden flex items-center justify-center">
                  {/* Placeholder for 3D Thumbnail - in a real app this would be an image or a mini R3F scene */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                       <SparklesIcon className="w-12 h-12 text-white/20 mb-2 mx-auto" />
                       <span className="text-white/20 font-mono text-xs uppercase tracking-widest">{art.style}</span>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <ActionButton icon={Eye} />
                    <ActionButton icon={Heart} />
                    <ActionButton icon={Download} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">{art.title}</h3>
                    <span className="text-xs bg-accent-indigo/20 text-accent-indigo px-2 py-1 rounded-md">{art.style}</span>
                  </div>
                  <div className="flex justify-between items-center text-white/50 text-sm">
                    <span>{art.author}</span>
                    <div className="flex items-center gap-1">
                      <Heart size={14} className="text-accent-purple" />
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

function ActionButton({ icon: Icon }: { icon: any }) {
  return (
    <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent-cyan text-white hover:text-black transition-all flex items-center justify-center backdrop-blur-md">
      <Icon size={20} />
    </button>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  );
}
