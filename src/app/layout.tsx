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
  title: "Toko3DArt Costum | Custom 3D Printing Service",
  description: "Jasa custom 3D print berkualitas tinggi dengan detail presisi untuk koleksi dan hadiah spesial.",
  keywords: ["3D Printing", "Custom 3D Art", "Toko3DArt", "Digital Fabrication"],
  openGraph: {
    title: "Toko3DArt Costum | Custom 3D Printing Service",
    description: "Jasa custom 3D print berkualitas tinggi dengan detail presisi.",
    images: ["/og-image.png"],
  },
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <CartProvider>
          <Navbar />
          {children}
          <AIAssistant />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
