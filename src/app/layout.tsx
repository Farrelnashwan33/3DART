import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/ui/AIAssistant";
import { CartProvider } from "@/context/CartContext";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <CartProvider>
          <div className="min-h-screen flex bg-slate-50">
            <Navbar />
            <div className="flex-1 flex flex-col min-w-0 md:pl-64 pt-16 pb-20 md:pb-0">
              {children}
              <Footer />
            </div>
          </div>
          <AIAssistant />
        </CartProvider>
      </body>
    </html>
  );
}
