import "./globals.css";

import { IntlProps } from "@/types/intl";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import {
  unstable_setRequestLocale,
  getMessages,
  getTranslations,
} from "next-intl/server";
import { routing } from "@/i18n/routing";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: IntlProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "MetaDate" });

  return {
    title: {
      default: t("title"),
    },
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: IntlProps["params"];
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
