import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import NotFound from "./NotFound";

const ServicioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const IconComponent = service.icon;
  const otherServices = services.filter(s => s.id !== service.id).slice(0, 3);

  const phoneNumber = "584144402838";
  const message = encodeURIComponent(`Hola Dra. María Gabriela, me gustaría información sobre ${service.title}.`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs 
            items={[
              { label: "Servicios", href: "/servicios" },
              { label: service.title }
            ]} 
          />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <IconComponent className="h-10 w-10 text-accent" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                Agenda tu cita ahora
              </h3>
              <div className="space-y-4">
                <Link to="/contacto">
                  <Button className="healthcare-btn-primary w-full">
                    Agendar Cita Online
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
                <a href="tel:+584144402838">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-5 w-5" />
                    0414-4402838
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {service.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-12 bg-accent/5 rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Beneficios
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-secondary/50 rounded-2xl p-6 sticky top-28">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  Otros Servicios
                </h3>
                <div className="space-y-3">
                  {otherServices.map((otherService) => {
                    const OtherIcon = otherService.icon;
                    return (
                      <Link
                        key={otherService.id}
                        to={`/servicios/${otherService.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-background transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                          <OtherIcon className="h-5 w-5 text-accent group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {otherService.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link 
                  to="/servicios" 
                  className="flex items-center justify-center text-accent font-medium mt-6 hover:underline"
                >
                  Ver todos los servicios
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicioDetalle;