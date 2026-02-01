import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export const ServicesSection = () => {
  return (
    <section className="healthcare-section bg-secondary/30">
      <div className="healthcare-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Atención Odontológica Integral
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de servicios para cuidar tu salud bucal 
            con las técnicas más modernas y un trato personalizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={`/servicios/${service.slug}`}
                className="group healthcare-card hover:border-accent/30 border border-transparent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary-foreground transition-colors duration-300">
                    <IconComponent className="h-7 w-7 text-accent group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {service.shortDescription}
                  </p>
                  
                  <div className="flex items-center text-accent font-medium text-sm">
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};