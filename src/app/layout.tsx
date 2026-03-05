import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stj. Dkt. Sema Aydın | Dil ve Konuşma Terapisti",
  description: "Anadolu Üniversitesi - Sağlıklı İletişim ve Güvenli Yutma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-[#FAFBFC] text-slate-700 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        
        {/* Değişen sayfa içerikleri sadece bu main etiketinin içine gelecek */}
        <main className="pt-24 flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}