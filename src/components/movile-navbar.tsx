import { Home, Store, NotebookText, User } from "lucide-react";
import Link from "next/link";

export default function MovileNavbar() {
  return (
    <nav className="container fixed inset-x-0 bottom-0 flex w-screen justify-between border-b border-border/40 bg-background py-1 sm:hidden">
      <Link
        href="/"
        className="hover:rounded-md hover:bg-foreground/5"
        title="Inicio"
      >
        <Home size={48} />
      </Link>
      <Link
        href="/store"
        className="hover:rounded-md hover:bg-foreground/5"
        title="Tienda"
      >
        <Store size={48} />
      </Link>
      <Link
        href="/blog"
        className="hover:rounded-md hover:bg-foreground/5"
        title="Blog"
      >
        <NotebookText size={48} />
      </Link>
      <div
        className="cursor-pointer hover:rounded-md hover:bg-foreground/5"
        title="Inicio"
      >
        <User size={48} />
      </div>
    </nav>
  );
}
