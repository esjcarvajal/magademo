import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";

const MedicinaOdontologia = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs
            items={[
              { label: "Estudiantes", href: "/estudiantes" },
              { label: "Medicina en Odontología" },
            ]}
          />

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Medicina en Odontología
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Este libro está diseñado para contribuir con la formación integral de los 
                estudiantes de odontología, proporcionando conocimientos esenciales sobre 
                medicina aplicada a la práctica odontológica. Una herramienta indispensable 
                para el diagnóstico y manejo de pacientes con condiciones sistémicas.
              </p>
              <a href="/downloads/medicina-en-odontologia.pdf" download>
                <Button className="healthcare-btn-primary gap-2">
                  <Download className="h-4 w-4" />
                  Descargar PDF
                </Button>
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-muted/50 px-4 py-3 border-b border-border">
                <p className="text-sm text-muted-foreground">Vista previa del documento</p>
              </div>
              <div className="aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/10]">
                <iframe
                  src="/downloads/medicina-en-odontologia.pdf"
                  className="w-full h-full"
                  title="Medicina en Odontología - PDF"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MedicinaOdontologia;
