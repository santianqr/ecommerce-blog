import { Bone } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import { Instagram, Facebook } from "lucide-react";
import { TikTok } from "./tiktok-icon";

export default function Header() {
  return (
    <header className="sticky z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex">
          <div className="flex">
            <Bone />
            <span>Huellitas</span>
          </div>

          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/store">Tienda</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
        <div>
          <nav>
            <Button variant="outline" size="icon">
              <Instagram />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
            <Button variant="outline" size="icon">
              <TikTok />
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
