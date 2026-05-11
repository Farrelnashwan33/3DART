import Hero from "@/components/ui/Hero";
import Gallery from "@/components/ui/Gallery";
import Pricing from "@/components/ui/Pricing";
import { Sparkles, Zap, Shield, Cpu, Cloud, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/Base";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Next-Gen <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-slate-600 text-lg">Powered by advanced neural architectures for 3D generation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Cpu} 
              title="Real-time Rendering" 
              description="High-fidelity 3D renders generated in seconds with path-tracing technology."
              color="text-accent-cyan"
            />
            <FeatureCard 
              icon={Sparkles} 
              title="Style Morphing" 
              description="Seamlessly transition between Anime, Cyberpunk, and Realistic styles."
              color="text-accent-purple"
            />
            <FeatureCard 
              icon={Zap} 
              title="AI Prompt Tuning" 
              description="Our LLM automatically enhances your prompts for the best 3D results."
              color="text-accent-indigo"
            />
            <FeatureCard 
              icon={Cloud} 
              title="Cloud Export" 
              description="Export models to GLTF, OBJ, and FBX for any game engine or 3D software."
              color="text-accent-cyan"
            />
            <FeatureCard 
              icon={Shield} 
              title="Ownership" 
              description="Full commercial rights to every single 3D model you generate."
              color="text-accent-purple"
            />
            <FeatureCard 
              icon={Smartphone} 
              title="AR Ready" 
              description="Instantly view your creations in augmented reality on any mobile device."
              color="text-accent-indigo"
            />
          </div>
        </div>
      </section>

      <Gallery />
      <Pricing />
    </main>
  );
}

function FeatureCard({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) {
  return (
    <Card className="hover:scale-105 transition-transform duration-300 border-slate-200 shadow-lg shadow-slate-200/20">
      <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 ${color}`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </Card>
  );
}
