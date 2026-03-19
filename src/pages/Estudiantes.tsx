import { useState } from "react";
import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, FileText, Lock } from "lucide-react";
import { useStudentAuth } from "@/contexts/StudentAuthContext";

const downloadableFiles = [
  {
    id: 1,
    title: "Manual para Atención de Pacientes con Alteraciones Sistémicas",
    description: "Guía completa para el manejo clínico de pacientes en el Área de Patología Bucal",
    file: "/downloads/manual-atencion-pacientes-alteraciones-sistemicas.pdf",
  },
  {
    id: 2,
    title: "Consentimiento Informado",
    description: "Formato oficial de consentimiento informado de la Facultad",
    file: "/downloads/consentimiento-informado-facultad.pdf",
  },
  {
    id: 3,
    title: "Materiales para Biopsia y Cultivo",
    description: "Lista de materiales necesarios para procedimientos de biopsia y cultivo",
    file: "/downloads/materiales-biopsia-cultivo.pdf",
  },
  {
    id: 4,
    title: "Formato Historia Clínica",
    description: "Plantilla oficial para el registro de historias clínicas",
    file: "/downloads/formato-historia-clinica.pdf",
  },
];

const Estudiantes = () => {
  const { isAuthenticated, authenticate } = useStudentAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authenticate(password)) {
      setError("");
    } else {
      setError("Contraseña incorrecta. Intenta de nuevo.");
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <section className="py-16 md:py-24">
          <div className="healthcare-container">
            <div className="max-w-md mx-auto text-center">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-accent" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-4">
                  Área de Estudiantes
                </h1>
                <p className="text-muted-foreground mb-6">
                  Esta sección contiene recursos exclusivos para estudiantes de Patología Bucal. 
                  Ingresa la contraseña proporcionada por tu profesor para acceder.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="password"
                    placeholder="Ingresa la contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-center"
                  />
                  {error && (
                    <p className="text-destructive text-sm">{error}</p>
                  )}
                  <Button type="submit" className="w-full healthcare-btn-primary">
                    Acceder
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs
            items={[{ label: "Estudiantes" }]}
          />

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Recursos para Estudiantes
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bienvenido al área de recursos exclusivos para los estudiantes de Patología Bucal 
                de la Facultad de Odontología de la Universidad de Carabobo. Aquí encontrarás 
                materiales esenciales para tu formación académica y práctica clínica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {downloadableFiles.map((file) => (
                <div
                  key={file.id}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {file.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {file.description}
                      </p>
                      <a href={file.file} download>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Descargar
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Estudiantes;
