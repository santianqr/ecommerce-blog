import Link from "next/link";
import NavSections from "./nav-sections";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import { Instagram, Facebook, Bone, CircleUserRound } from "lucide-react";
import { TikTok } from "./tiktok-icon";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getServerAuthSession } from "~/server/auth";

export default async function Header() {
  const session = await getServerAuthSession();
  return (
    <header className="sticky z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between ">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bone />
            <span className="font-bold">Huellitas</span>
          </Link>
          <NavSections />
        </div>

        <nav className="flex items-center">
          <Button variant="ghost" size="icon">
            <Link href="https://www.instagram.com/" target="_blank">
              <Instagram className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="https://www.facebook.com/" target="_blank">
              <Facebook className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="https://www.tiktok.com/" target="_blank">
              <TikTok />
            </Link>
          </Button>
          <ModeToggle />
          {session ? (
            <Avatar className="h-[2rem] w-[2rem]">
              <AvatarImage src="https://github.com/santianqr.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <CircleUserRound className="ml-2" />
          )}
        </nav>
      </div>
    </header>
  );
}
