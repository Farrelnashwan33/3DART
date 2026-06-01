"use client";

import Hero from "@/components/ui/Hero";
import Gallery from "@/components/ui/Gallery";
import Pricing from "@/components/ui/Pricing";
import Packaging from "@/components/ui/Packaging";
import QualityFeatures from "@/components/ui/QualityFeatures";
import OrderGuide from "@/components/ui/OrderGuide";
import SearchResults from "@/components/ui/SearchResults";
import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const { activeTab, searchQuery } = useCart();

  const renderContent = () => {
    if (searchQuery.trim() !== "") {
      return <SearchResults />;
    }

    switch (activeTab) {
      case "overview":
        return <Hero />;
      case "produk":
        return <Gallery />;
      case "sizing":
        return <Pricing />;
      case "packaging":
        return <Packaging />;
      case "kualitas":
        return <QualityFeatures />;
      case "order":
        return <OrderGuide />;
      default:
        return <Hero />;
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={searchQuery.trim() !== "" ? "search-view" : activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
