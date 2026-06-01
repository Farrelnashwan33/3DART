import Hero from "@/components/ui/Hero";
import Gallery from "@/components/ui/Gallery";
import Pricing from "@/components/ui/Pricing";
import Packaging from "@/components/ui/Packaging";
import QualityFeatures from "@/components/ui/QualityFeatures";
import OrderGuide from "@/components/ui/OrderGuide";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Gallery />
      <Pricing />
      <Packaging />
      <QualityFeatures />
      <OrderGuide />
    </main>
  );
}
