"use client";

import { motion } from "framer-motion";
import { Box, Sparkles, LayoutDashboard, Compass, CreditCard, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./Base";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full border border-white/5 shadow-2xl backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-xl flex items-center justify-center neon-shadow-cyan group-hover:scale-110 transition-transform">
            <Box className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Vision<span className="text-accent-cyan">3D</span> AI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#features" icon={Sparkles}>Features</NavLink>
          <NavLink href="#gallery" icon={Compass}>Gallery</NavLink>
          <NavLink href="#pricing" icon={CreditCard}>Pricing</NavLink>
          <NavLink href="/dashboard" icon={LayoutDashboard}>Dashboard</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden text-white/70 hover:text-white">
            <Menu size={24} />
          </button>
          <Button variant="secondary" className="hidden md:flex py-2 px-6">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: any }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group relative"
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
