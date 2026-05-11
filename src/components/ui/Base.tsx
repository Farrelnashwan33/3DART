"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Button({
  children,
  className,
  variant = "primary",
  icon: Icon,
  ...props
}: Omit<HTMLMotionProps<"button">, "children"> & {
  variant?: "primary" | "secondary" | "glass" | "ghost";
  icon?: LucideIcon;
  children?: React.ReactNode;
}) {
  const variants = {
    primary: "bg-accent-indigo hover:bg-accent-indigo/80 text-white neon-shadow-purple",
    secondary: "bg-accent-cyan hover:bg-accent-cyan/80 text-black neon-shadow-cyan",
    glass: "glass hover:bg-white/10 text-white",
    ghost: "bg-transparent hover:bg-white/5 text-white/70 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  );
}

export function Card({ children, className, glow = false }: { children: React.ReactNode; className?: string; glow?: boolean }) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:border-white/20",
        glow && "hover:neon-shadow-cyan",
        className
      )}
    >
      {children}
    </div>
  );
}
