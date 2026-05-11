import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/ui/AIAssistant";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Vision3D AI | Turn Imagination Into 3D Reality",
  description: "Create stunning 3D art from text prompts with our advanced AI generator. Explore community creations and export your own 3D masterpieces.",
  keywords: ["AI Art", "3D Generator", "Vision3D", "Futuristic Design", "Digital Art"],
  openGraph: {
    title: "Vision3D AI | Turn Imagination Into 3D Reality",
    description: "The world's first AI-powered 3D art generator.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0F172A] text-white">
        <Navbar />
        {children}
        <AIAssistant />
        <Footer />
      </body>
    </html>
  );
}
