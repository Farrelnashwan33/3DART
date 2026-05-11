"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, History, Heart, Settings, Plus, Download } from "lucide-react";
import { Card, Button } from "@/components/ui/Base";

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-white mb-2"
          >
            Welcome back, <span className="text-gradient">Farrel</span>
          </motion.h1>
          <p className="text-white/40">Manage your 3D creations and generation history.</p>
        </div>
        <Button variant="primary" icon={Plus}>Create New</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={History} label="My Generations" />
          <SidebarItem icon={Heart} label="Favorites" />
          <SidebarItem icon={Settings} label="Account Settings" />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="Total Generations" value="124" />
            <StatCard label="Favorites" value="48" />
            <StatCard label="Cloud Storage" value="2.4 GB" />
          </div>

          {/* Recent Activity */}
          <Card className="border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Recent Creations</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-cyan/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                      <LayoutDashboard size={24} className="text-white/20" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Cyberpunk Tower #{i}</div>
                      <div className="text-white/40 text-sm">Generated 2 days ago • Style: Cyberpunk</div>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-accent-cyan text-white hover:text-black transition-all">
                      <Download size={18} />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-accent-purple text-white transition-all">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active ? "bg-accent-indigo text-white neon-shadow-purple" : "text-white/40 hover:text-white hover:bg-white/5"
    }`}>
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );
}

function StatCard({ label, value }: { label: string, value: string }) {
  return (
    <Card className="border-white/5 text-center">
      <div className="text-white/40 text-sm mb-2">{label}</div>
      <div className="text-3xl font-bold text-white">{value}</div>
    </Card>
  );
}
