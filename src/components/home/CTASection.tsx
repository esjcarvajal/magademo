import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
export const CTASection = () => {
  const phoneNumber = "584144402838";
  const message = encodeURIComponent("Hola Dra. María Gabriela, me gustaría agendar una cita.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-healthcare-navy" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <div className="healthcare-container relative z-10">
        <div className="text-center max-w-3xl mx-auto bg-secondary-foreground">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para transformar tu sonrisa?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Agenda tu cita hoy y da el primer paso hacia una sonrisa más saludable 
            y brillante. Te esperamos en nuestro consultorio en Naguanagua.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-accent hover:bg-healthcare-turquoise-dark text-primary font-semibold h-14 px-8 text-base shadow-accent">
                Agendar Cita Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+584144402838">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base">
                <Phone className="mr-2 h-5 w-5" />
                0414-4402838
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white h-14 px-8 text-base">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};