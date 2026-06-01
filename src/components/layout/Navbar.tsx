"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Box, Sparkles, LayoutDashboard, Compass, CreditCard, Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Base";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CartModal from "../ui/CartModal";

export default function Navbar() {
  const { totalItems, activeTab, setActiveTab, searchQuery, setSearchQuery } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Left Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 fixed left-0 top-0 h-screen bg-[#070b13] border-r border-slate-800/40 z-50 text-slate-300 p-6 justify-between">
        <div className="space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group px-2">
            <div className="w-9 h-9 bg-gradient-to-br from-accent-cyan via-accent-indigo to-accent-purple rounded-lg flex items-center justify-center shadow-lg shadow-accent-cyan/20 group-hover:scale-105 transition-transform">
              <Box className="text-white" size={20} />
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Toko3DArt <span className="text-accent-indigo">Custom</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 mb-3">Workspace</div>
            <SidebarLink tab="overview" icon={LayoutDashboard}>Ringkasan</SidebarLink>
            <SidebarLink tab="produk" icon={Compass}>Produk</SidebarLink>
            <SidebarLink tab="sizing" icon={CreditCard}>Perekat</SidebarLink>
            <SidebarLink tab="packaging" icon={Box}>Kemasan</SidebarLink>
            <SidebarLink tab="kualitas" icon={Sparkles}>Kualitas</SidebarLink>
            <SidebarLink tab="order" icon={ShoppingCart}>Cara Order</SidebarLink>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="space-y-4 pt-4 border-t border-slate-800/40">
          <div className="flex items-center gap-2.5 px-2.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Studio Online</span>
          </div>
          <button
            onClick={() => window.open("https://id.shp.ee/6Zb8HdEg", "_blank")}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
          >
            <ShoppingCart size={14} />
            Buka Shopee
          </button>
        </div>
      </aside>

      {/* Topbar for both Mobile and Desktop */}
      <header className="fixed top-0 right-0 left-0 md:left-64 h-16 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/60 py-3.5 px-4 md:px-8 flex items-center justify-between">
        {/* Left Side: Mobile Logo & Desktop Breadcrumbs / Search Mockup */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
          {/* Mobile Logo */}
          <Link href="/" className="flex md:hidden items-center gap-1.5 group shrink-0">
            <div className="w-7 h-7 bg-gradient-to-br from-accent-cyan via-accent-indigo to-accent-purple rounded-lg flex items-center justify-center">
              <Box className="text-white" size={14} />
            </div>
            <span className="font-bold text-slate-900 tracking-tight text-xs sm:text-sm">
              Toko3DArt <span className="text-accent-indigo hidden sm:inline">Custom</span>
            </span>
          </Link>
          
          {/* Desktop Search / Breadcrumb Mockup */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>workspace</span>
            <span>/</span>
            <span className="text-slate-600 font-bold">studio-{activeTab}</span>
          </div>
          
          {/* Active Search Input */}
          <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-lg px-2 py-1.5 ml-2 md:ml-6 w-28 sm:w-40 md:w-64 text-slate-400 text-xs focus-within:border-accent-indigo focus-within:ring-2 focus-within:ring-accent-indigo/10 transition-all">
            <span className="text-[10px]">🔍</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari model atau pose..." 
              className="bg-transparent border-none outline-none w-full text-slate-700 placeholder-slate-400 text-[10px] sm:text-xs truncate"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="text-slate-400 hover:text-slate-600 cursor-pointer shrink-0"
              >
                <X size={10} />
              </button>
            )}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          {/* Cart Icon */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-1.5 sm:p-2 text-slate-600 hover:text-slate-900 transition-colors bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/60 cursor-pointer"
          >
            <ShoppingCart size={16} className="sm:w-5 sm:h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accent-cyan text-black text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </button>

          {/* Shopee Button on Desktop */}
          <button
            onClick={() => window.open("https://id.shp.ee/6Zb8HdEg", "_blank")}
            className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <ShoppingCart size={14} />
            Shop on Shopee
          </button>
        </div>
      </header>

      {/* Bottom Navigation Bar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[calc(4rem+env(safe-area-inset-bottom,0px))] bg-white/80 backdrop-blur-lg border-t border-slate-200/60 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 px-2 flex items-center justify-around pb-[env(safe-area-inset-bottom,0px)]">
        <BottomTabLink tab="overview" icon={LayoutDashboard}>Ringkasan</BottomTabLink>
        <BottomTabLink tab="produk" icon={Compass}>Produk</BottomTabLink>
        <BottomTabLink tab="sizing" icon={CreditCard}>Perekat</BottomTabLink>
        <BottomTabLink tab="packaging" icon={Box}>Kemasan</BottomTabLink>
        <BottomTabLink tab="kualitas" icon={Sparkles}>Kualitas</BottomTabLink>
        <BottomTabLink tab="order" icon={ShoppingCart}>Cara Order</BottomTabLink>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

function SidebarLink({ tab, children, icon: Icon }: { tab: string; children: React.ReactNode; icon: any }) {
  const { activeTab, setActiveTab, setSearchQuery } = useCart();
  const isActive = activeTab === tab;

  return (
    <button 
      onClick={() => {
        setActiveTab(tab);
        setSearchQuery("");
      }}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group font-semibold text-sm cursor-pointer ${
        isActive 
          ? "bg-white/10 text-white shadow-md shadow-black/10 border border-white/5" 
          : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
      }`}
    >
      <Icon size={18} className={`transition-colors ${isActive ? "text-accent-cyan" : "text-slate-500 group-hover:text-accent-cyan"}`} />
      <span>{children}</span>
    </button>
  );
}

function BottomTabLink({ 
  tab, 
  children, 
  icon: Icon
}: { 
  tab: string; 
  children: React.ReactNode; 
  icon: any;
}) {
  const { activeTab, setActiveTab, setSearchQuery } = useCart();
  const isActive = activeTab === tab;

  return (
    <button 
      onClick={() => {
        setActiveTab(tab);
        setSearchQuery("");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative px-3 py-1 rounded-full overflow-hidden flex items-center justify-center">
          {isActive && (
            <motion.div
              layoutId="bottomActiveIndicator"
              className="absolute inset-0 bg-accent-indigo/10 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
          <Icon size={18} className={`relative z-10 transition-colors duration-300 ${isActive ? "text-accent-indigo" : "text-slate-400"}`} />
        </div>
        <span className={`text-[9px] font-black tracking-tight mt-1 transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-400"}`}>
          {children}
        </span>
      </div>
    </button>
  );
}
