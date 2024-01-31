import SectionDivider from "~/components/section-divider";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="container flex flex-col px-2 sm:max-w-screen-2xl">
      <SectionDivider />
      <section>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Productos para Perros en Colombia - Artículos para Todas las Razas y
          Tamaños
        </h1>
        <p>
          Bienvenido a nuestra tienda en línea de productos para perros en
          Colombia. Ofrecemos una variedad de artículos de calidad para todas
          las razas y tamaños. Encuentra lo que tu mascota necesita en nuestra
          tienda hoy
        </p>
        <Image src="/hero-image.jpg" alt="" width={100} height={100} />
      </section>
    </main>
  );
}
