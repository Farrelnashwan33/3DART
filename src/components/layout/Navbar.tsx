"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Box, Sparkles, LayoutDashboard, Compass, CreditCard, Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Base";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CartModal from "../ui/CartModal";

export default function Navbar() {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full border border-slate-200 shadow-xl backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan via-accent-indigo to-accent-purple rounded-xl flex items-center justify-center shadow-lg shadow-accent-cyan/20 group-hover:scale-110 transition-transform">
              <Box className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Toko3DArt <span className="text-accent-indigo">Custom</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#gallery" icon={Compass}>Produk</NavLink>
            <NavLink href="#pricing" icon={CreditCard}>Sizing</NavLink>
            <NavLink href="#packaging" icon={Box}>Packaging</NavLink>
            <NavLink href="#quality" icon={Sparkles}>Kualitas</NavLink>
            <NavLink href="#order" icon={ShoppingCart}>Cara Order</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-cyan text-black text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-slate-600 hover:text-slate-900 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <Menu size={24} />
            </button>
            <Button variant="secondary" className="hidden md:flex py-2 px-6">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white z-[60] shadow-2xl flex flex-col md:hidden border-l border-slate-100"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <span className="font-bold text-slate-900">Menu Navigasi</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
                <Link 
                  href="#gallery" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-accent-indigo transition-colors"
                >
                  <Compass className="text-accent-cyan" size={22} />
                  <span className="font-semibold text-lg">Produk</span>
                </Link>
                <Link 
                  href="#pricing" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-accent-indigo transition-colors"
                >
                  <CreditCard className="text-accent-indigo" size={22} />
                  <span className="font-semibold text-lg">Sizing</span>
                </Link>
                <Link 
                  href="#packaging" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-accent-indigo transition-colors"
                >
                  <Box className="text-accent-purple" size={22} />
                  <span className="font-semibold text-lg">Packaging</span>
                </Link>
                <Link 
                  href="#quality" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-accent-indigo transition-colors"
                >
                  <Sparkles className="text-emerald-500" size={22} />
                  <span className="font-semibold text-lg">Kualitas</span>
                </Link>
                <Link 
                  href="#order" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-accent-indigo transition-colors"
                >
                  <ShoppingCart className="text-orange-500" size={22} />
                  <span className="font-semibold text-lg">Cara Order</span>
                </Link>
              </div>

              <div className="p-6 border-t border-slate-100">
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open("https://id.shp.ee/6Zb8HdEg", "_blank");
                  }}
                  variant="primary" 
                  className="w-full justify-center py-4 text-center rounded-xl"
                >
                  Hubungi di Shopee
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

function NavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: any }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group relative"
    >
      <Icon size={18} className="group-hover:text-accent-cyan transition-colors" />
      <span className="font-medium">{children}</span>
      <motion.div 
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all group-hover:w-full"
        layoutId="underline"
      />
    </Link>
  );
}
