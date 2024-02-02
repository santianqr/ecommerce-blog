import Logo from "./logo";
import { api } from "~/trpc/server";
import { WhatsappIcon } from "./whatsapp-icon";
import { TiktokIcon } from "./tiktok-icon";

export default async function Footer() {
  const categories_one = await api.article.getCategories.query();
  const categories_two = await api.article.getSubCategories.query();
  return (
    <footer className="container mt-20 grid grid-cols-4">
      <Logo />
      <div>
        Categories:
        {categories_one.map((category, index) => (
          <p key={index}>{category.category_one}</p>
        ))}
      </div>
      <div>
        Sub categories:
        {categories_two.map((category, index) => (
          <p key={index}>{category.category_two}</p>
        ))}
      </div>
      <div>Contact us:</div>
      <div className="col-span-4">
        <WhatsappIcon />
        <TiktokIcon />
      </div>
    </footer>
  );
}
