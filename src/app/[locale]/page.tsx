import { unstable_setRequestLocale } from "next-intl/server";

import { CallToAction } from "@/components/layout/CallToAction";
import Faq from "@/components/layout/Faq";
import { Hero } from "@/components/layout/Hero";
import { Mission } from "@/components/layout/Mission";
import { Partners } from "@/components/layout/Partners";
import { Testimony } from "@/components/layout/Testimony";

import { IntlProps } from "@/types/intl";
import FindUs from "@/components/layout/FindUs";

export default function Home({ params: { locale } }: IntlProps) {
  unstable_setRequestLocale(locale);
  return (
    <main className="bg-gradient-to-b from-base-200 from-75% to-primary">
      <Hero />
      <Partners />
      <Mission />
      <Testimony />
      <Faq />
      <FindUs />
      <CallToAction />
    </main>
  );
}
