import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BookOpen, ExternalLink, Library, Search, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const LibrosPatologia = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs
            items={[
              { label: "Estudiantes", href: "/estudiantes" },
              { label: "Libros de Patología Bucal" },
            ]}
          />

          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Library className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Libros de Patología Bucal
              </h1>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-foreground italic m-0">
                  No existen profesionales buenos o malos, existen profesionales carentes de conocimientos 
                  que los hacen deficientes a la hora de atender a los pacientes. Es tu prioridad como 
                  futuro profesional ir adoptando cada día conocimientos que te hagan crecer. Por eso es 
                  importante contar con un conjunto de herramientas sencillas.
                </p>
              </div>

              <p className="text-muted-foreground">
                Debes ser capaz de buscar el conocimiento. Rompe los paradigmas del aprendizaje vertical 
                en donde los conocimientos llegaban a ti siempre, debes ir en busca de ellos. Para eso 
                debes saber en dónde buscar información que te permita aprender.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                <Search className="h-6 w-6 text-accent" />
                ¿Dónde buscar información para estudiar Patología Bucal?
              </h2>

              <p className="text-muted-foreground">
                Esta información debe ser de calidad, llena de veracidad, de carácter científico, 
                constantemente actualizada. Por eso debes consultar: <strong>Libros, Revistas Científicas, 
                herramientas de búsqueda.</strong>
              </p>

              <p className="text-muted-foreground">
                Busca información en libros científicos, olvida las guías de fotocopiadora, puesto que estas 
                te brindarán el mínimo de información, pueden contener errores, no permiten desarrollar tus 
                potencialidades de análisis y síntesis.
              </p>

              <p className="text-muted-foreground">
                Opta por las publicaciones en revistas científicas y no publicaciones de sitios de internet 
                debidamente verificados o aprobados por tu tutor. Las revistas científicas cuentan con la 
                información más actualizada en cuanto a las enfermedades, patologías, tratamientos, 
                clasificaciones, complicaciones, etc., con un tono científico y no empírico.
              </p>

              <p className="text-muted-foreground">
                Por su parte algunos sitios web usan información no veraz de corte poco profesional con 
                tratamientos que en todos los casos no son los mejores y para quien se está formando se 
                necesita lo mejor de lo mejor.
              </p>

              <p className="text-muted-foreground">
                Emplea herramientas de búsqueda como <strong>Google Académico</strong>, que te permitirá 
                realizar búsquedas en base a revistas o portales científicos así como libros de la web.
              </p>

              {/* Resources Cards */}
              <h3 className="text-xl font-bold text-foreground mt-12 mb-6">
                Portales gratuitos para leer revistas científicas:
              </h3>

              <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <ExternalLink className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">PubMed</h4>
                      <p className="text-sm text-muted-foreground">
                        Base de datos gratuita de la Biblioteca Nacional de Medicina de EE.UU., 
                        con más de 35 millones de citas y resúmenes de artículos científicos en 
                        biomedicina y salud.
                      </p>
                    </div>
                  </div>
                </a>

                <a 
                  href="http://www.sciencemag.org/topic/infectious-disease" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <ExternalLink className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Science Magazine</h4>
                      <p className="text-sm text-muted-foreground">
                        Fundada en 1999, publicada por la Asociación Americana para Estudios 
                        Avanzados de las Ciencias. Navega, lee publicaciones e interactúa con 
                        otros profesionales.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <p className="text-muted-foreground">
                Este es solo un ejemplo de las múltiples opciones a tu disposición. Busca información 
                en la <strong>Biblioteca de Ciencias de la Salud</strong> en donde existe un recuento 
                de revistas como la ODOUS, Acta Odontológica, SCIELO, Rev Venez Invest Odont IADR, entre otras.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-accent" />
                Educa y agudiza tu visión
              </h2>

              <p className="text-muted-foreground">
                Cuando cuentes con los conocimientos, reconocer las patologías será cuestión de entrenar 
                tu agudeza visual. Para ello debes observar en los libros y publicaciones las características 
                visuales de las patologías para que sea muy sencillo reconocerlas.
              </p>

              {/* Bibliography */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-accent" />
                Bibliografía Recomendada para Patología Bucal
              </h2>

              <p className="text-muted-foreground mb-6">
                Te dejaré parte de la bibliografía recomendada por la asignatura:
              </p>

              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>Ceccotti-Sforza, 2006, <em>El Diagnóstico en Clínica Estomatológica</em>.</li>
                <li>Giglio M., Nicolosi, L. <em>Semiología en la Práctica de la Odontología</em>. McGraw Hill Interamericana. 2000</li>
                <li>Miret Omar: <em>Semiología de la Mucosa Bucal</em>. Universidad de Carabobo. Ediciones del Rectorado.</li>
                <li>Papa, R, Durand, M y Sanabria A. (1996) <em>El interrogatorio o anamnesis</em>. Ed. Disminlimed.</li>
                <li>Regezi-Sciubba, 2000, <em>Patología Bucal</em>. Mc Graw Hill Interamericana</li>
                <li>Sapp, J., Eversole, L., Wysocki, G. <em>Patología oral y Maxilofacial Contemporánea</em>. Harcourt-Brace.</li>
                <li>Surós, J. Surós, A: <em>Semiología Médica y Técnica Exploratoria</em>. Editorial Salvat.</li>
              </ol>

              {/* CTA Links */}
              <div className="bg-card border border-border rounded-2xl p-8 mt-12 not-prose">
                <p className="text-foreground mb-4">
                  Accede haciendo clic sobre este título a{" "}
                  <Link to="/estudiantes/medicina-odontologia" className="text-accent hover:underline font-medium">
                    Libro de Medicina aplicada a la Odontología
                  </Link>.
                </p>
                <p className="text-muted-foreground mb-6">
                  Este libro servirá como guía para el estudio de las enfermedades sistémicas aplicadas 
                  a la odontología, en especial a la asignatura de patología bucal y a la atención de los pacientes.
                </p>
                <p className="text-foreground mb-4">
                  Si te preguntas: <em>¿Cómo lograr ser bueno en la patología bucal?</em> te dejaré un 
                  enlace para Dropbox para que puedas descargar algunos libros de Patología:
                </p>
                <a 
                  href="https://www.dropbox.com/scl/fo/6lupz80du0ruq1vn15p20/AA_Yy2mD6dgZqZkOcWA_o6k?rlkey=3inzcywbwmxus1u5pnlapnhs2&e=1&st=7p6b1wfx&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline font-semibold text-lg"
                >
                  LIBROS DE PATOLOGÍA BUCAL
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LibrosPatologia;
