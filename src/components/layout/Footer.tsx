"use client";

import { Box, Send, Code, Camera, Video, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

const socialIcons = [
  { icon: Send, href: "#" },
  { icon: Camera, href: "#" },
  { icon: Video, href: "#" },
  { icon: Code, href: "#" },
  { icon: Briefcase, href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent-indigo/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-xl flex items-center justify-center neon-shadow-cyan">
              <Box className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-white">Vision<span className="text-accent-cyan">3D</span> AI</span>
          </Link>
          <p className="text-white/40 leading-relaxed">
            Revolutionizing 3D creation with artificial intelligence. Turn your words into interactive masterpieces.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center text-white/50 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4">
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">3D Viewer</FooterLink>
            <FooterLink href="#">API Access</FooterLink>
            <FooterLink href="#">Style Presets</FooterLink>
            <FooterLink href="#">Integrations</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-4">
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">Tutorials</FooterLink>
            <FooterLink href="#">Showcase</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Discord Community</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-white/40 text-sm mb-4">Stay updated with the latest AI features.</p>
          <div className="glass p-1 rounded-full flex items-center border-white/5 overflow-hidden">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-none outline-none px-4 py-2 text-sm text-white flex-1"
            />
            <button className="w-10 h-10 rounded-full bg-accent-indigo flex items-center justify-center text-white hover:bg-accent-indigo/80">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
        <p>© 2026 Vision3D AI. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
          <Link href="#" className="hover:text-white">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/40 hover:text-white transition-colors">{children}</Link>
    </li>
  );
}
