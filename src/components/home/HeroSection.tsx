import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, GraduationCap, Clock } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-healthcare-turquoise-light/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="healthcare-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-primary text-primary-foreground">
              <Award className="h-4 w-4" />
              Dra. Maria Gabriela Castro
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">Una <span className="text-accent">Sonrisa sana   </span> ​sana embellece tu rostro                
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Consulta Odontológica en Naguanagua con más de 16 años de experiencia.    
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Docente UC</p>
                  <p className="text-xs text-muted-foreground">11 años</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Atención</p>
                  <p className="text-xs text-muted-foreground">Lun - Sab</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button className="healthcare-btn-primary text-base h-12 px-8">
                  Agendar Cita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/servicios">
                <Button variant="outline" className="healthcare-btn-secondary text-base h-12 px-8">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-3xl blur-2xl" />
              <img alt="Consultorio dental moderno de la Dra. María Gabriela Castro" className="relative rounded-3xl shadow-elevated object-cover w-full h-[500px]" src="/lovable-uploads/8bd0be7d-f3e4-4eca-97e2-bbd2b101c63f.png" />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                    16+
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Años de</p>
                    <p className="text-muted-foreground text-sm">Experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};