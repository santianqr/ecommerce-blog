import Logo from "./logo";
import { WhatsappIcon } from "./whatsapp-icon";
import { TiktokIcon } from "./tiktok-icon";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { api } from "~/trpc/server";
import { unstable_noStore as noStore } from "next/cache";

export default async function Footer() {
  noStore();
  const categories_one = await api.article.getCategories.query();
  const categories_two = await api.article.getSubCategories.query();
  return (
    <footer className="container my-10 grid grid-cols-2 justify-items-center gap-y-2 text-sm sm:grid-cols-4 sm:gap-y-1">
      <div className="col-span-2 my-auto sm:col-span-1">
        <Logo iconSize={48} fontSize="text-xl" />
      </div>
      <div>
        <p className="font-semibold">Categorias 1</p>
        {categories_one.map((category, index) => (
          <p key={index} className="ml-1">
            {category.category_one}
          </p>
        ))}
      </div>
      <div>
        <p className="font-semibold">Categorias 2</p>
        {categories_two.map((category, index) => (
          <p key={index} className="ml-1">
            {category.category_two}
          </p>
        ))}
      </div>
      <div className="col-span-2 sm:col-span-1">
        <p className="font-semibold">Contacto</p>
        <div className="ml-1">
          <p>Calle 137 #55 - 32</p>
          <p>318XXXXXXX</p>
          <p>318XXXXXXX</p>
          <p>user@gmail.com</p>
        </div>
      </div>
      <div className="col-span-2 mx-auto mt-2 flex space-x-4 sm:col-span-4">
        <Link href="https://wa.me/+573188621924" target="_blank">
          <WhatsappIcon width="2rem" height="2rem" />
          <span className="sr-only">Whatsapp</span>
        </Link>
        <Link href="https://www.tiktok.com/" target="_blank">
          <TiktokIcon width="2rem" height="2rem" />
          <span className="sr-only">TikTok</span>
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Instagram className="h-[2rem] w-[2rem]" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href="https://www.facebook.com/" target="_blank">
          <Facebook className="h-[2rem] w-[2rem]" />
          <span className="sr-only">Facebook</span>
        </Link>
      </div>

      <p className="col-span-2 mx-auto sm:col-span-4">
        <span>®</span> Todos los derechos reservados
      </p>
    </footer>
  );
}
