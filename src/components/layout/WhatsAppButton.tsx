import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "584144402838";
  const message = encodeURIComponent("Hola Dra. María Gabriela, me gustaría agendar una cita.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
};