import HeroSection from "~/components/hero-section";
import SectionDivider from "~/components/section-divider";

export default async function Home() {
  return (
    <main className="container space-y-20">
      <HeroSection />
      <section>featured products</section>
      <section>recomended products</section>
      <section>social proof</section>
      <section>faq</section>
    </main>
  );
}
