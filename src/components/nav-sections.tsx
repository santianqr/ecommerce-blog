"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavSections() {
  const pathname = usePathname();

  return (
    <nav className="sm:flex items-center gap-6 text-sm hidden">
      <Link
        href="/"
        className={`transition-colors hover:text-foreground/80  ${pathname === "/" ? "text-foreground" : "text-foreground/60"}`}
      >
        Inicio
      </Link>
      <Link
        href="/store"
        className={`transition-colors hover:text-foreground/80  ${pathname === "/store" ? "text-foreground" : "text-foreground/60"}`}
      >
        Tienda
      </Link>
      <Link
        href="/blog"
        className={`transition-colors hover:text-foreground/80  ${pathname === "/blog" ? "text-foreground" : "text-foreground/60"}`}
      >
        Blog
      </Link>
    </nav>
  );
}
