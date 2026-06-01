"use client";

import { motion } from "framer-motion";
import { Box, Sparkles, LayoutDashboard, Compass, CreditCard, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Base";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CartModal from "../ui/CartModal";

export default function Navbar() {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full border border-slate-200 shadow-xl backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan via-accent-indigo to-accent-purple rounded-xl flex items-center justify-center shadow-lg shadow-accent-cyan/20 group-hover:scale-110 transition-transform">
              <Box className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Toko3DArt <span className="text-accent-indigo">Costum</span>
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
            <button className="md:hidden text-slate-600 hover:text-slate-900">
              <Menu size={24} />
            </button>
            <Button variant="secondary" className="hidden md:flex py-2 px-6">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
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
