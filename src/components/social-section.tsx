import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";

const people = [
  {
    image: "/foto_testimonio_1.jpg",
    name: "Juan Perez",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum hic? Placeat voluptates natus possimus ducimus.",
  },
  {
    image: "/foto_testimonio_2.jpg",
    name: "Maria Perez",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum hic? Placeat voluptates natus possimus ducimus.",
  },
  {
    image: "/foto_testimonio_3.jpg",
    name: "Jose Perez",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum hic? Placeat voluptates natus possimus ducimus.",
  },
  {
    image: "/foto_testimonio_4.jpg",
    name: "Josefina Perez",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum hic? Placeat voluptates natus possimus ducimus.",
  },
  {
    image: "/foto_testimonio_5.jpg",
    name: "Juanita Perez",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum hic? Placeat voluptates natus possimus ducimus.",
  },
  {
    image: "/foto_testimonio_6.jpg",
    name: "Juan Perez",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum hic? Placeat voluptates natus possimus ducimus.",
  },
  {
    image: "/foto_testimonio_7.jpg",
    name: "Juan Perez",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum hic? Placeat voluptates natus possimus ducimus.",
  },
];

export default function SocialSection() {
  return (
    <section className="space-y-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Que dicen de nosotros
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto w-full max-w-xs sm:max-w-lg md:max-w-2xl"
      >
        <CarouselContent>
          {people.map((person, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex flex-col space-y-2 p-6">
                    <span className="text-4xl font-bold">❝</span>
                    <p className="text-xs">{person.text}</p>
                    <div className="flex items-center space-x-1">
                      <div className="mt-2">
                        <Image
                          src={person.image}
                          alt={person.image}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        {person.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
