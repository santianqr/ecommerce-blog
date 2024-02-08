import Link from "next/link";
import NavSections from "./nav-sections";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import { Instagram, Facebook, CircleUserRound, Search } from "lucide-react";
import { TiktokIcon } from "./tiktok-icon";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getServerAuthSession } from "~/server/auth";
import Logo from "./logo";
import { unstable_noStore as noStore } from "next/cache";

export default async function Header() {
  noStore();
  const session = await getServerAuthSession();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <div className="flex w-full items-center justify-between sm:w-8">
          <Logo />
          <NavSections />
        </div>
        <div className="flex items-center">
          <Button
            variant="outline"
            className="mr-0 text-foreground/60 sm:mr-2"
            size="sm"
          >
            <p className="hidden sm:block">Buscar articulos</p>
            <p className="block sm:hidden">Buscar</p>
            <Search className="m-0 sm:ml-4" />
          </Button>

          <nav className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              id="instagram"
            >
              <Link href="https://www.instagram.com/" target="_blank">
                <Instagram className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              id="facebook"
            >
              <Link href="https://www.facebook.com/" target="_blank">
                <Facebook className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Link href="https://www.tiktok.com/" target="_blank" id="tiktok">
                <TiktokIcon />
                <span className="sr-only">Tik Tok</span>
              </Link>
            </Button>
            <ModeToggle />
            {session ? (
              <Avatar className="ml-2 hidden h-[2rem] w-[2rem] sm:block">
                <AvatarImage
                  src="https://github.com/santianqr.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <CircleUserRound className="ml-2 hidden sm:block" />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
