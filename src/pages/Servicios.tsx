import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Servicios = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs items={[{ label: "Servicios" }]} />
          
          <div className="max-w-3xl mt-8">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Nuestros Servicios
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Atención Odontológica Integral
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ofrecemos una amplia gama de servicios para cuidar tu salud bucal. 
              Con 16 años de experiencia, garantizamos tratamientos de calidad 
              con las técnicas más modernas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/servicios/${service.slug}`}
                  className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-transparent hover:border-accent/20"
                >
                  <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-accent group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center text-accent font-medium text-sm">
                        Ver más detalles
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;