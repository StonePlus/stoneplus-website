import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale, getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StonePlus - Concrete Design",
  description:
    "Indústria especializada em Cimentícios, Bordas de Piscina, Revestimentos e Pedras Naturais.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
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
