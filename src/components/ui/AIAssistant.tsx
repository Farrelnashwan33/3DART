"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";
import { Card } from "./Base";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80"
          >
            <Card className="p-0 border-slate-200 shadow-2xl bg-white overflow-hidden">
              <div className="bg-slate-900 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-indigo/20 flex items-center justify-center border border-white/10">
                    <Bot size={18} className="text-white animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-sm">Vision Support</span>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Online</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
              
              <div className="p-4 space-y-4 max-h-80 overflow-y-auto custom-scrollbar bg-slate-50">
                <div className="bg-white rounded-2xl rounded-tl-none p-3 text-sm text-slate-600 shadow-sm border border-slate-100">
                  Halo! Ada yang bisa kami bantu mengenai pesanan 3D Custom Anda?
                </div>
                <div className="bg-accent-indigo/10 rounded-2xl rounded-tr-none p-3 text-sm text-slate-700 ml-8 border border-accent-indigo/20">
                  Berapa lama proses pengerjaan untuk ukuran 15cm?
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none p-3 text-sm text-slate-600 shadow-sm border border-slate-100">
                  Untuk ukuran 15cm biasanya memakan waktu 3-5 hari kerja tergantung kerumitan pose. 😊
                </div>
              </div>
              
              <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ketik pesan..." 
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-900 outline-none focus:border-accent-indigo transition-colors"
                />
                <button className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors">
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
        className="w-16 h-16 rounded-[2rem] bg-slate-900 flex items-center justify-center shadow-2xl relative group"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-accent-indigo animate-ping opacity-10 group-hover:opacity-20" />
        <MessageSquare size={28} className="text-white" />
      </motion.button>
    </div>
  );
}
