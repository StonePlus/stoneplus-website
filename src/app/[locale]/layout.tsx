import "./globals.css";
import { Open_Sans } from "next/font/google";

import { IntlProps } from "@/types/intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export async function generateMetadata({ params }: IntlProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MetaDate" });

  return {
    title: {
      default: t("title"),
    },
    description: t("description"),
    icons: {
      icon: ["/images/icons/favicon.ico?v=4"],
      apple: ["images/icons/apple-touch-icon.png?v=4"],
      shortcut: ["/images/icons/apple-touch-icon.png"],
    },
    openGraph: {
      type: "website",
      url: `https://stoneplus.com.br/`,
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/images/banner.png",
          width: 800,
          height: 600,
          alt: t("title"),
        },
        {
          url: "/images/whatsapp-banner.png",
          width: 400,
          height: 400,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      url: `https://stoneplus.com.br/`,
      title: t("title"),
      description: t("description"),
      image: "/images/banner.png",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
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
