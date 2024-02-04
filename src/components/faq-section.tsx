import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el envío de los productos?",
    answer:
      "Nuestros envíos suelen tardar entre 3 y 5 días hábiles, dependiendo de la ubicación del cliente. Ofrecemos seguimiento en línea para que puedas saber exactamente cuándo llegará tu pedido.",
  },
  {
    question:
      "¿Qué hago si el producto que recibí está dañado o no es el que pedí?",
    answer:
      "Si recibes un producto dañado o incorrecto, por favor ponte en contacto con nuestro servicio al cliente a través de (correo electrónico o número de teléfono). Nos aseguraremos de reemplazar el producto o emitir un reembolso completo lo más pronto posible.",
  },
  {
    question: "¿Los productos son seguros para mi mascota?",
    answer:
      "Absolutamente, todos nuestros productos son evaluados exhaustivamente para garantizar su seguridad. Trabajamos con proveedores de confianza y nos adherimos a las regulaciones de seguridad para mascotas.",
  },
];

export default function FaqSection() {
  return (
    <section className="space-y-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Preguntas Frecuentes
      </h2>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="mx-auto max-w-screen-sm"
      >
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="ml-2">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
