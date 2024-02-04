import FaqSection from "~/components/faq-section";
import HeroSection from "~/components/hero-section";

export default async function Home() {
  return (
    <main className="container space-y-20">
      <HeroSection />
      <section>featured products</section>
      <section>recomended products</section>
      <section>social proof</section>
      <FaqSection />
      
    </main>
  );
}
