import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/Navbar";
import { WppToast } from "@/components/ui/WppToast";
import { Footer } from "@/components/layout/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StonePlus - Concrete Design",
  description:
    "Indústria especializada em Cimentícios, Bordas de Piscina, Revestimentos e Pedras Naturais.",
};

export function generateStaticParams() {
  return [{ locale: "pt-br" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
}) {
  let messages;

  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html className="scroll-smooth overflow-x-hidden" lang={locale}>
      <body className={openSans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <WppToast />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
