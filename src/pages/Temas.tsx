import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { StudentPasswordGate } from "@/components/StudentPasswordGate";
import { temas } from "@/data/temas";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TemasContent = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs
            items={[
              { label: "Estudiantes", href: "/estudiantes" },
              { label: "Temas" },
            ]}
          />

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Temas de Clase
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Material académico de Patología Bucal organizado por temas. 
                Cada tema incluye definiciones, clasificaciones, características clínicas e histopatológicas, 
                diagnósticos diferenciales y tratamientos actualizados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {temas.map((tema) => (
                <Link
                  key={tema.slug}
                  to={`/estudiantes/temas/${tema.slug}`}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <span className="text-lg font-bold text-accent font-sans">
                          {tema.number}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {tema.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {tema.excerpt}
                        </p>
                        <Button variant="outline" size="sm" className="gap-2 group-hover:border-accent group-hover:text-accent transition-colors">
                          Leer tema
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Temas = () => {
  return (
    <StudentPasswordGate
      title="Temas de Clase"
      description="Los temas de clase son contenido exclusivo para estudiantes de Patología Bucal. Ingresa la contraseña proporcionada por tu profesor para acceder."
    >
      <TemasContent />
    </StudentPasswordGate>
  );
};

export default Temas;
