import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <section className="flex space-x-14 px-14">
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
        <Button size="lg" className="font-bold">
          Comprar ya
        </Button>
      </div>

      <div className="relative aspect-square w-full max-w-[700px]">
        <Image
          src="/hero-image.jpg"
          alt=""
          fill
          className="rounded-md shadow-md shadow-card-foreground/40"
          sizes="(max-width: 700px) 100vw, 33vw"
          priority
        />
      </div>
    </section>
  );
}
