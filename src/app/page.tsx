import FaqSection from "~/components/faq-section";
import FPSection from "~/components/featured-products-section";
import HeroSection from "~/components/hero-section";
import SocialSection from "~/components/social-section";
import Footer from "~/components/footer";
import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const categories_one = await api.article.getCategories.query();
  const categories_two = await api.article.getSubCategories.query();
  return (
    <main className="container space-y-20">
      <HeroSection />
      <FPSection />
      <SocialSection />
      <FaqSection />
      <Footer
              categories_one={categories_one}
              categories_two={categories_two}
            />
    </main>
  );
}
