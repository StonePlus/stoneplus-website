import Hero from "@/components/layout/Hero";
import Partners from "@/components/layout/Partners";
import GradientDotBg from "@/components/ui/GradientDotBg";
import Mission from "@/components/layout/Mission";
import Testimony from "@/components/layout/Testimony";
import Faq from "@/components/layout/Faq";
import FindUs from "@/components/layout/FindUs";
import CallToAction from "@/components/layout/CallToAction";
import WhatsAppToast from "@/components/ui/WhatsAppToast";

export default function Home() {
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
