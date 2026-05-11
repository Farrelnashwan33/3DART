"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, ShieldCheck } from "lucide-react";
import { Card, Button } from "./Base";

const plans = [
  {
    name: "Starter",
    price: "Free",
    icon: Zap,
    features: ["10 Generations / month", "Standard 3D styles", "Web viewer access", "Community support"],
    color: "accent-cyan"
  },
  {
    name: "Pro",
    price: "$29",
    icon: Crown,
    features: ["Unlimited Generations", "All 3D styles + custom", "4K image renders", "Priority generation", "Commercial license"],
    color: "accent-indigo",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    icon: ShieldCheck,
    features: ["Custom API access", "Dedicated GPU queue", "Full 3D model exports", "Team collaboration", "24/7 VIP support"],
    color: "accent-purple"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Choose Your <span className="text-gradient">Vision</span>
        </motion.h2>
        <p className="text-slate-600 text-lg">Simple, transparent pricing for every creator.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`h-full border-slate-200 relative flex flex-col shadow-lg shadow-slate-200/20 ${plan.popular ? 'border-accent-indigo/50 bg-accent-indigo/[0.03] scale-105' : 'bg-white'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-indigo text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest neon-shadow-purple">
                  Most Popular
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-xl bg-${plan.color}/20 flex items-center justify-center mb-6`}>
                <plan.icon className={`text-${plan.color}`} size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-slate-400">/month</span>}
              </div>
              
              <ul className="space-y-4 mb-10 flex-1 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-600">
                    <Check size={18} className="text-accent-cyan shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "primary" : "glass"} 
                className="w-full"
              >
                {plan.name === "Starter" ? "Get Started" : "Upgrade to " + plan.name}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
