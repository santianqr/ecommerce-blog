import Logo from "./logo";
import { WhatsappIcon } from "./whatsapp-icon";
import { TiktokIcon } from "./tiktok-icon";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

type CategoryOne = {
  category_one: string;
};

type CategoryTwo = {
  category_two: string;
};

type FooterProps = {
  categories_one: CategoryOne[];
  categories_two: CategoryTwo[];
};

export default function Footer({
  categories_one,
  categories_two,
}: FooterProps) {
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

      <p className="col-span-2 mx-auto sm:col-span-4">
        <span>®</span> Todos los derechos reservados
      </p>
    </footer>
  );
}
