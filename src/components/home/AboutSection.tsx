import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";
import logoSquare from "@/assets/logo-mg-square.png";
export const AboutSection = () => {
  const credentials = [{
    icon: Award,
    title: "16 Años",
    description: "De experiencia profesional"
  }, {
    icon: BookOpen,
    title: "Docente UC",
    description: "11 años en Patología Bucal"
  }, {
    icon: Users,
    title: "Miles",
    description: "De pacientes satisfechos"
  }];
  return <section className="healthcare-section">
      <div className="healthcare-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image/Logo Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-bl from-accent/20 to-primary/10 rounded-3xl blur-xl" />
              <div className="relative bg-card rounded-3xl p-12 shadow-card flex items-center justify-center">
                <img alt="Dra. María Gabriela Castro - Odontólogo" className="w-full h-auto object-contain" src="/lovable-uploads/4cc5171b-8f7f-4b54-bfc9-cb46b9af8ce2.png" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {credentials.map((cred, index) => {
              const IconComponent = cred.icon;
              return <div key={index} className="bg-card rounded-xl p-4 shadow-soft text-center">
                    <IconComponent className="h-6 w-6 text-accent mx-auto mb-2" />
                    <p className="font-serif font-bold text-foreground">{cred.title}</p>
                    <p className="text-xs text-muted-foreground">{cred.description}</p>
                  </div>;
            })}
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Sobre Mí
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Dra. María Gabriela Castro
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Soy odontóloga egresada de la Universidad de Carabobo con más de 16 años 
              de experiencia en el ejercicio profesional. Mi pasión por la odontología 
              me ha llevado a especializarme en diversas áreas para ofrecer una atención 
              integral a mis pacientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Durante 11 años tuve el honor de ser docente de <strong>Patología Bucal</strong> en 
              la Facultad de Odontología de la Universidad de Carabobo, lo que me permitió 
              desarrollar un profundo conocimiento en el diagnóstico de lesiones y 
              enfermedades de la cavidad oral.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Mi compromiso es brindarte una atención personalizada, explicándote cada 
              procedimiento y asegurándome de que te sientas cómodo y seguro en cada visita.
            </p>

            <Link to="/sobre-mi">
              <Button className="healthcare-btn-primary">
                Conoce más sobre mí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};