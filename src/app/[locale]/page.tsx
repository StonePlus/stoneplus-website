import { unstable_setRequestLocale } from "next-intl/server";
import { IntlProps } from "@/types/intl";

import { CallToAction } from "@/components/layout/CallToAction";
import Faq from "@/components/layout/Faq";
import { Hero } from "@/components/layout/Hero";
import { Mission } from "@/components/layout/Mission";
import { Partners } from "@/components/layout/Partners";
import { Testimony } from "@/components/layout/Testimony";
import GradientDotBg from "@/components/ui/GradientDotBg";
import WhatsAppToast from "@/components/ui/WhatsAppToast";

import FindUs from "@/components/layout/FindUs";

export default function Home({ params: { locale } }: IntlProps) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <Hero />
      <Partners />
      <GradientDotBg>
        <Mission />
        <Testimony />
        <Faq />
      </GradientDotBg>
      <FindUs />
      <CallToAction />

      <WhatsAppToast />
    </main>
  );
}
