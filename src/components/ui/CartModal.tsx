"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "./Base";

export default function CartModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { items, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-slate-900 border-l border-white/10 z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-accent-cyan" size={24} />
                <h2 className="text-2xl font-bold">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={40} className="text-slate-600" />
                  </div>
                  <h3 className="text-xl font-medium">Your cart is empty</h3>
                  <p className="text-slate-400">Looks like you haven't added anything to your cart yet.</p>
                  <Button variant="secondary" onClick={onClose} className="mt-4">
                    Start Shopping
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg truncate group-hover:text-accent-cyan transition-colors">{item.title}</h4>
                      <p className="text-slate-400 text-sm">Quantity: {item.quantity}</p>
                      <p className="text-accent-cyan font-bold mt-1">${item.price}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-500 hover:text-red-400 transition-colors self-start"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-slate-900/50 backdrop-blur-md space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-slate-400">Total Amount:</span>
                  <span className="text-3xl font-bold text-white">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <button 
                    onClick={clearCart}
                    className="py-3 px-6 rounded-full border border-white/10 hover:bg-white/5 transition-all text-slate-400"
                  >
                    Clear Cart
                  </button>
                  <Button variant="secondary" className="w-full">
                    Checkout <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
