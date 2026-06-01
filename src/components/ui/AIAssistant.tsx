"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageSquare, Sparkles, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Card } from "./Base";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Saya Vision AI. Ada yang bisa saya bantu mengenai pesanan 3D Custom Anda hari ini?",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Panggil API Route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [...messages, { role: "user", content: userMessage }] 
        }),
      });

      const data = await response.json();
      
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Maaf, sepertinya ada gangguan koneksi. Bisa coba lagi?" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] sm:w-96"
          >
            <Card className="p-0 border-slate-200 shadow-2xl bg-white overflow-hidden flex flex-col h-[500px]">
              {/* Header */}
              <div className="bg-slate-900 p-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-accent-indigo/20 flex items-center justify-center border border-white/10">
                      <Bot size={20} className="text-white" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-sm">Vision Support AI</span>
                    <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-widest">Active Now</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/50 hover:text-white transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Chat Area */}
              <div 
                ref={scrollRef}
                className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar bg-slate-50"
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 text-sm shadow-sm ${
                        msg.role === "user"
                          ? "bg-slate-900 text-white rounded-2xl rounded-tr-none"
                          : "bg-white text-slate-700 rounded-2xl rounded-tl-none border border-slate-100"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input Area */}
              <form 
                onSubmit={handleSendMessage}
                className="p-4 bg-white border-t border-slate-100 flex gap-2 items-center"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tanya sesuatu..." 
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-900 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
                >
                  {isLoading ? <Sparkles size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center shadow-2xl relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-indigo to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <MessageSquare size={28} className="text-white" />
        )}
      </motion.button>
    </div>
  );
}
