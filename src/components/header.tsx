import Link from "next/link";
import NavSections from "./nav-sections";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import {
  Instagram,
  Facebook,
  Bone,
  CircleUserRound,
  Search,
  Menu,
} from "lucide-react";
import { TikTok } from "./tiktok-icon";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getServerAuthSession } from "~/server/auth";

export default async function Header() {
  const session = await getServerAuthSession();
  return (
    <header className="sticky z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-2 sm:max-w-screen-2xl ">
        <div className="flex w-full items-center justify-between sm:w-8">
          <Menu className="block sm:hidden" />
          <Button
            variant="outline"
            className="m-0 flex text-foreground/60 sm:mr-4 sm:hidden"
            size="sm"
          >
            <Search />
          </Button>
          <Link href="/" className="m-0 flex items-center space-x-2 sm:mr-6">
            <Bone />
            <span className="font-bold">Huellitas</span>
          </Link>
          <NavSections />
        </div>
        <div className="flex items-center">
          <Button
            variant="outline"
            className="mr-4 hidden text-foreground/60 sm:flex"
            size="sm"
          >
            <p className="hidden sm:block">Buscar articulos</p>
            <Search className="m-0 sm:ml-4" />
          </Button>

          <nav className="flex items-center">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Link href="https://www.instagram.com/" target="_blank">
                <Instagram className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Link href="https://www.facebook.com/" target="_blank">
                <Facebook className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Link href="https://www.tiktok.com/" target="_blank">
                <TikTok />
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
