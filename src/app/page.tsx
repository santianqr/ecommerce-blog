import HeroSection from "~/components/hero-section";
import SectionDivider from "~/components/section-divider";

export default async function Home() {
  return (
    <main className="container flex flex-col px-2 sm:max-w-screen-2xl">
      <SectionDivider />
      <HeroSection />
      <SectionDivider />
      <section>featured products</section>
      <SectionDivider />
      <section>recomended products</section>
      <SectionDivider />
      <section>social proof</section>
      <SectionDivider />
      <section>faq</section>
    </main>
  );
}
