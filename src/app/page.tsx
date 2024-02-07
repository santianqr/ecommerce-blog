import FaqSection from "~/components/faq-section";
import FPSection from "~/components/featured-products-section";
import HeroSection from "~/components/hero-section";
import SocialSection from "~/components/social-section";

export default function Home() {
  return (
    <main className="container space-y-20">
      <HeroSection />
      <FPSection />
      <SocialSection />
      <FaqSection />
    </main>
  );
}
