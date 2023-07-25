import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { WppToast } from "@/components/ui/WppToast";
import { Footer } from "@/components/layout/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StonePlus - Concrete Design",
  description:
    "Indústria especializada em Cimentícios, Bordas de Piscina, Revestimentos e Pedras Naturais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth overflow-x-hidden" lang="pt-br">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <WppToast />
        <Footer />
      </body>
    </html>
  );
}
