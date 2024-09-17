import { CallToAction } from "@/components/layout/CallToAction";
import Faq from "@/components/layout/Faq";
import { Hero } from "@/components/layout/Hero";
import { Mission } from "@/components/layout/Mission";
import { Partners } from "@/components/layout/Partners";
import { Testimony } from "@/components/layout/Testimony";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Mission />
      <CallToAction />
      <Testimony />
      <Faq />
    </main>
  );
}
