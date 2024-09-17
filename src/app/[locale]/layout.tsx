import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header } from "@/components/layout/Header";
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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html data-theme="customtheme" lang={locale}>
      <body className={openSans.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
