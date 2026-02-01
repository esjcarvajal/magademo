import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Award, BookOpen, Users, Heart, GraduationCap, CheckCircle } from "lucide-react";
import logoSquare from "@/assets/logo-mg-square.png";

const SobreMi = () => {
  const credentials = [
    "Odontóloga egresada de la Universidad de Carabobo",
    "16 años de experiencia profesional",
    "Docente de Patología Bucal en la UC por 11 años",
    "Especialista en diagnóstico de lesiones orales",
    "Formación continua en técnicas modernas",
    "Miembro activo de sociedades odontológicas"
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs items={[{ label: "Sobre Mí" }]} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Conoce a tu Odontólogo
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Dra. María Gabriela Castro
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Odontólogo en Naguanagua con más de 16 años de experiencia, 
                comprometida con brindar atención de calidad y un trato humano 
                a cada uno de mis pacientes.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-3xl blur-xl" />
                <div className="relative bg-card rounded-3xl p-10 shadow-card">
                  <img 
                    src={logoSquare} 
                    alt="Dra. María Gabriela Castro" 
                    className="w-48 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="healthcare-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, value: "16+", label: "Años de experiencia" },
              { icon: GraduationCap, value: "11", label: "Años como docente" },
              { icon: Users, value: "1000+", label: "Pacientes atendidos" },
              { icon: Heart, value: "100%", label: "Compromiso" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-primary-foreground">
                  <IconComponent className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="font-serif text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Biography */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Mi Trayectoria Profesional
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Mi pasión por la odontología comenzó desde muy joven. Después de 
                  graduarme de la Facultad de Odontología de la Universidad de Carabobo, 
                  decidí dedicar mi carrera a ayudar a las personas a lograr y mantener 
                  una sonrisa saludable.
                </p>
                <p>
                  Durante 11 años tuve el privilegio de ser <strong>docente de Patología Bucal</strong> en 
                  mi alma mater, la Universidad de Carabobo. Esta experiencia no solo 
                  me permitió formar a nuevos profesionales, sino que también profundizó 
                  mi conocimiento en el diagnóstico de lesiones y enfermedades de la 
                  cavidad oral.
                </p>
                <p>
                  Esta formación académica me ha dado una perspectiva única para identificar 
                  y tratar condiciones que a menudo pasan desapercibidas, brindando a mis 
                  pacientes un nivel de atención que va más allá del tratamiento convencional.
                </p>
                <p>
                  Mi consultorio en <strong>Naguanagua, Valencia</strong> está equipado con tecnología 
                  moderna y un ambiente diseñado para que te sientas cómodo y relajado 
                  durante tu visita.
                </p>
              </div>
            </div>

            {/* Credentials & Philosophy */}
            <div>
              <div className="bg-secondary/50 rounded-2xl p-8 mb-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-accent" />
                  Formación y Credenciales
                </h3>
                <ul className="space-y-4">
                  {credentials.map((credential, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/10 rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Mi Filosofía
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Creo firmemente que cada paciente es único y merece un plan de 
                  tratamiento personalizado. Mi enfoque se basa en:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">Escuchar y entender tus necesidades</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">Explicar cada procedimiento con claridad</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">Ofrecer tratamientos conservadores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">Mantener los más altos estándares de higiene</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreMi;