import Logo from "./logo";
import { api } from "~/trpc/server";
import { WhatsappIcon } from "./whatsapp-icon";
import { TiktokIcon } from "./tiktok-icon";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default async function Footer() {
  const categories_one = await api.article.getCategories.query();
  const categories_two = await api.article.getSubCategories.query();
  return (
    <footer className="container my-12 grid grid-cols-4">
      <Logo iconSize={48} fontSize="text-xl" />
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
      <div className="col-span-4 mx-auto mt-8 flex space-x-4">
        <Link href="https://wa.me/+573188621924" target="_blank">
          <WhatsappIcon width="2rem" height="2rem" />
        </Link>
        <Link href="https://www.tiktok.com/" target="_blank">
          <TiktokIcon width="2rem" height="2rem" />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Instagram className="h-[2rem] w-[2rem]" />
        </Link>
        <Link href="https://www.facebook.com/" target="_blank">
          <Facebook className="h-[2rem] w-[2rem]" />
        </Link>
      </div>
    </footer>
  );
}
