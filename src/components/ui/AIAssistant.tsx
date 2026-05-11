"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";
import { Card } from "./Base";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80"
          >
            <Card className="p-4 border-accent-cyan/30 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <Bot size={18} className="text-accent-cyan animate-pulse" />
                  </div>
                  <span className="font-bold text-white">Vision AI</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 text-sm text-white/80">
                  Hello! I'm your AI assistant. Need help creating the perfect 3D prompt?
                </div>
                <div className="bg-accent-indigo/20 rounded-2xl rounded-tr-none p-3 text-sm text-white/80 ml-8 border border-accent-indigo/30">
                  Try "Cyberpunk skyscraper with neon vines" for a stunning result!
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask me anything..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white outline-none focus:border-accent-cyan transition-colors"
                />
                <button className="w-10 h-10 rounded-full bg-accent-cyan flex items-center justify-center text-black">
                  <Sparkles size={18} />
                </button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-indigo flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)] relative group"
      >
        <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-20 group-hover:opacity-40" />
        <MessageSquare size={28} className="text-white" />
      </motion.button>
    </div>
  );
}
