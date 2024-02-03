import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <section className="mt-20 flex space-x-14 px-14">
      <div className="my-auto space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Productos para Perros en Colombia - Artículos para Todas las Razas y
          Tamaños
        </h1>
        <p className="text-foreground/70">
          Bienvenido a nuestra tienda en línea de productos para perros en
          Colombia. Ofrecemos una variedad de artículos de calidad para todas
          las razas y tamaños. Encuentra lo que tu mascota necesita en nuestra
          tienda hoy
        </p>
        <div>
          <Link href="/store">
            <Button size="lg" className="font-bold">
              Comprar ya
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-[700px]">
        <Image
          src="/hero-image.jpg"
          alt="hero_image"
          fill
          className="rounded-md shadow-md shadow-card-foreground/20"
          sizes="(max-width: 700px) 100vw, 33vw"
          priority
        />
      </div>
    </section>
  );
}
