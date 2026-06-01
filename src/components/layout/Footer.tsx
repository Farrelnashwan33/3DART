"use client";

import { Box, Send, Code, Camera, Video, Briefcase, Mail, ExternalLink, Globe, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Base";

// Custom Brand Icons (since lucide-react v1.0 removed them)
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const footerLinks = {
  main: [
    { name: "Showcase", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "API Docs", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ]
};

const socialIcons = [
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: GithubIcon, href: "#", label: "Github" },
  { icon: LinkedinIcon, href: "#", label: "Linkedin" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 pt-32 pb-16 overflow-hidden">
      {/* Background with Slanted Top */}
      <div className="absolute inset-0 bg-[#020617] -z-20" />
      <div 
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0F172A] to-transparent -z-10" 
        style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0 100%)" }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Massive Brand Header */}
        <div className="relative mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] lg:text-[10rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/2 opacity-20 select-none absolute -top-20 left-0 w-full text-center lg:text-left"
          >
            TOKO3DART
          </motion.h2>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl space-y-6">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-cyan via-accent-indigo to-accent-purple rounded-2xl flex items-center justify-center neon-shadow-purple rotate-3 group-hover:rotate-12 transition-transform duration-500">
                  <Box className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">Toko3DArt <span className="text-accent-indigo">Costum</span></h3>
                  <p className="text-accent-indigo/60 text-xs font-mono uppercase tracking-widest">3D Printing Studio // HQ</p>
                </div>
              </Link>
              <p className="text-white/40 text-xl leading-relaxed font-light">
                Mewujudkan imajinasimu ke dunia nyata. Jasa custom 3D print berkualitas tinggi dengan detail presisi untuk koleksi dan hadiah spesial.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="glass" className="border-white/5 hover:border-accent-indigo/30 px-8 py-4 text-lg">
                Hubungi Admin
              </Button>
              <Button 
                onClick={() => window.open("https://id.shp.ee/6Zb8HdEg", "_blank")}
                variant="primary" 
                className="px-8 py-4 text-lg group"
              >
                Order di Shopee
                <Zap size={20} className="fill-white group-hover:animate-bounce" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/5 pt-16 mb-24">
          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Globe size={14} className="text-accent-indigo" />
                Layanan
              </h4>
              <ul className="space-y-4">
                <li><Link href="#gallery" className="text-white/40 hover:text-white transition-all">Katalog Produk</Link></li>
                <li><Link href="#pricing" className="text-white/40 hover:text-white transition-all">Custom Size</Link></li>
                <li><Link href="#packaging" className="text-white/40 hover:text-white transition-all">Packaging</Link></li>
                <li><Link href="#order" className="text-white/40 hover:text-white transition-all">Cara Order</Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Shield size={14} className="text-accent-purple" />
                Support
              </h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/40 hover:text-white transition-all">Status Pesanan</Link></li>
                <li><Link href="#" className="text-white/40 hover:text-white transition-all">Komplain & Retur</Link></li>
                <li><Link href="#" className="text-white/40 hover:text-white transition-all">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="text-white/40 hover:text-white transition-all">Kebijakan Privasi</Link></li>
              </ul>
            </div>
            <div className="space-y-8 col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Connect</h4>
              <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter / Action Area */}
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-indigo/20 to-accent-purple/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div className="relative glass rounded-[2.5rem] p-10 border-white/10 overflow-hidden bg-white/2">
                <div className="absolute top-0 right-0 p-8">
                  <Mail size={40} className="text-white/5 -rotate-12" />
                </div>
                
                <h4 className="text-3xl font-bold text-white mb-4">Wujudkan Imajinasimu</h4>
                <p className="text-white/40 mb-8 max-w-md font-light leading-relaxed">
                  Dapatkan inspirasi produk 3D custom terbaru dan promo eksklusif langsung di email Anda.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input 
                      type="email" 
                      placeholder="Alamat email Anda" 
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-indigo/50 focus:ring-4 focus:ring-accent-indigo/5 transition-all"
                    />
                  </div>
                  <Button variant="primary" className="rounded-2xl px-10 shadow-xl shadow-accent-indigo/20">
                    Gabung
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <div className="flex items-center gap-6">
            <p className="text-white/20 text-sm">© 2026 TOKO3DART COSTUM // ALL RIGHTS RESERVED</p>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-tighter">Studio Online</span>
            </div>
          </div>
          
          <div className="flex gap-8 items-center">
            <Link href="#" className="text-white/20 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="#" className="text-white/20 hover:text-white text-xs uppercase tracking-widest transition-colors">Terms</Link>
            <div className="flex items-center gap-2 text-white/20 hover:text-white cursor-help transition-colors">
              <span className="text-[10px] font-mono">EST: 2026</span>
              <Globe size={12} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
