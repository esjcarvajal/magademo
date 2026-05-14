import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import exploracionImage from "@/assets/exploracion-clinica.png";
import laminas1 from "@/assets/casos-clinicos-laminas-1.png";
import laminas2 from "@/assets/casos-clinicos-laminas-2.png";
import laminas3 from "@/assets/casos-clinicos-laminas-3.png";
import {
  Stethoscope,
  ClipboardCheck,
  Search,
  FileText,
  BookOpen,
  Eye,
  Hand,
  Wind,
  FlaskConical,
  Camera,
  Presentation,
  Clock,
  BookMarked,
  Layers,
} from "lucide-react";

const laminasGrupoA = [
  { n: 1, label: "Portada", content: "Título · Alumno · Tutor" },
  { n: 2, label: "Reporte del caso", content: "Datos personales · Motivo de consulta · Enfermedad actual" },
  { n: 3, label: "Reporte del caso", content: "Antecedentes personales · Antecedentes familiares" },
  { n: 4, label: "Examen extrabucal", content: "Fotos de frente y ambos perfiles" },
  { n: 5, label: "Examen intrabucal A", content: "Fotos de la lesión — motivo de consulta" },
  { n: 6, label: "Examen intrabucal B", content: "Fotos de otros hallazgos clínicos" },
];

const laminasGrupoB = [
  { n: 7, label: "Reporte del caso", content: "Diagnóstico(s) provisional(es) · Diagnósticos diferenciales" },
  { n: 8, label: "Reporte del caso", content: "Métodos de diagnóstico utilizados · Fotos de radiografías y procedimientos" },
  { n: 9, label: "Reporte del caso", content: "Diagnóstico(s) definitivo(s) · Plan de tratamiento" },
  { n: 10, label: "Reporte del caso", content: "Pronóstico · Evolución (fotos antes-después)" },
  { n: 11, label: "Introducción · Literatura", content: "Etiopatogenia · Epidemiología (edad y género)" },
  { n: 12, label: "Discusión · Literatura", content: "Características clínicas, radiográficas y microscópicas" },
  { n: 13, label: "Discusión · Literatura", content: "Semejanzas y diferencias con lo reportado por otros autores" },
  { n: 14, label: "Discusión · Literatura", content: "Métodos de diagnóstico y tratamientos recomendados" },
  { n: 15, label: "Conclusiones", content: "Aspectos relevantes del caso y su importancia para el odontólogo" },
  { n: 16, label: "Recomendaciones", content: "Reflexión final del caso clínico" },
  { n: 17, label: "Artículos científicos", content: "Captura del artículo: revista, título, autores y resumen" },
];

const consejos = [
  {
    title: "Lámina 1 — Portada",
    items: [
      "El título de la presentación será simplemente \"Caso Clínico\". No se debe revelar el diagnóstico en la primera diapositiva.",
      "El suspenso genera atención y expectativa en la audiencia.",
      "Incluir nombres del/los autor(es) y la sección.",
      "No olvidar los logos de la universidad y la facultad.",
    ],
  },
  {
    title: "Lámina 2 — Datos del paciente",
    items: [
      "La identidad del paciente no se revela en ningún momento.",
      "Omitir nombre completo, números de teléfono y cualquier dato identificable.",
      "Solo incluir los datos relevantes para el caso clínico.",
    ],
  },
  {
    title: "Lámina 3 — Antecedentes y enfermedad actual",
    items: [
      "El motivo de consulta debe referirse a la patología específica, no a la consulta general.",
      "La historia de la enfermedad actual debe estar en relación directa con la patología bucal documentada.",
      "Los antecedentes personales y familiares incluidos deben tener relevancia directa con la patología.",
      "Esto exige un interrogatorio y una anamnesis correctos y completos.",
    ],
  },
  {
    title: "Lámina 4 — Examen extrabucal (fotos)",
    items: [
      "Las fotografías deben ser de buena calidad técnica.",
      "Proteger la identidad del paciente: cubrir ojos con una cinta u óvalos.",
      "El paciente no debe usar zarcillos ni lentes; el cabello debe estar recogido detrás de las orejas.",
      "Posicionar al paciente correctamente antes de tomar las fotos.",
    ],
  },
  {
    title: "Láminas 5 y 6 — Examen intrabucal (fotos)",
    items: [
      "Utilizar separadores bucales, abreboca, espejos intrabucales, paletas y todo el instrumental necesario.",
      "Tomar las fotografías con calma y precisión, con la ayuda del compañero de guardia.",
    ],
  },
  {
    title: "Lámina 7 — Diagnóstico provisional y diferencial",
    items: [
      "El diagnóstico es provisional porque aún no se tienen los resultados de los exámenes; puede diferir del definitivo.",
      "Los diagnósticos diferenciales son aquellos que reúnen características similares al provisional.",
      "Las características clínicas y las referencias bibliográficas son fundamentales para su elección.",
    ],
  },
  {
    title: "Lámina 8 — Métodos de diagnóstico y procedimientos",
    items: [
      "Cada procedimiento (biopsia, citología, radiografía, punción, etc.) debe ir acompañado de su fecha y fotografía.",
      "Cuidar la identidad del paciente en las fotos.",
      "Solo incluir imágenes relevantes al caso y de calidad fotográfica.",
    ],
  },
  {
    title: "Lámina 9 — Diagnóstico definitivo y plan de tratamiento",
    items: [
      "El diagnóstico debe incluir el nombre o los nombres actuales utilizados para la patología.",
      "El plan de tratamiento debe especificar dosis, tipo de tratamiento y detalles de forma completa.",
    ],
  },
  {
    title: "Lámina 10 — Pronóstico y evolución",
    items: [
      "Las fotos de evolución deben estar identificadas con fecha e indicar si son posoperatorias o de control.",
      "Reflexionar sobre el pronóstico en relación con el paciente, la patología, los cuidados requeridos y el tratamiento aplicado.",
    ],
  },
  {
    title: "Láminas 11 y 12 — Introducción y discusión basadas en literatura",
    items: [
      "Explicar la patología de forma concisa: etiopatogenia, epidemiología, características clínicas, radiográficas y microscópicas.",
      "Apoyarse en bibliografía y artículos científicos.",
      "Usar cortes histológicos y citar la fuente de cada imagen utilizada.",
    ],
  },
  {
    title: "Láminas 13 y 14 — Discusión comparativa",
    items: [
      "La bibliografía clásica puede no reflejar el abordaje más actualizado; los artículos científicos son la fuente más vigente.",
      "Al consultar varios autores se encontrarán distintos modos de abordaje para una misma patología.",
      "Reflejar todas las perspectivas, incluyendo propuestas nuevas, aunque no hayan sido aplicadas en el caso presentado.",
    ],
  },
  {
    title: "Láminas 15 y 16 — Conclusiones y recomendaciones",
    items: [
      "Deben recoger las vivencias del caso: puntos fuertes y débiles durante su abordaje.",
      "Son una de las secciones más importantes de la presentación.",
    ],
  },
  {
    title: "Lámina 17 — Artículos científicos",
    items: [
      "Presentar una captura o imagen del artículo, dejando visible nombre de la revista, título, autores y resumen.",
    ],
  },
];

const ExploracionClinica = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs
            items={[
              { label: "Estudiantes", href: "/estudiantes" },
              { label: "Exploración Clínica" },
            ]}
          />

          <div className="max-w-4xl mx-auto">
            {/* Hero with Featured Image */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img
                  src={exploracionImage}
                  alt="Objetivos de la exploración clínica - Profesional dental realizando examen"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                Objetivos de la Exploración Clínica
              </h1>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* Objectives Section */}
              <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Evaluar el estado de salud</h3>
                      <p className="text-sm text-muted-foreground">
                        Identificación de cualquier anomalía en los dientes, las encías, la mucosa yugal, 
                        la lengua, el piso de la boca y el paladar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Detectar signos y síntomas</h3>
                      <p className="text-sm text-muted-foreground">
                        Revelar signos tempranos de caries, enfermedades periodontales, infecciones, 
                        cáncer bucal y trastornos temporomandibulares.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Establecer un diagnóstico</h3>
                      <p className="text-sm text-muted-foreground">
                        En conjunto con la historia clínica y otros exámenes complementarios, 
                        permite establecer un diagnóstico preciso.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Planificar el tratamiento</h3>
                      <p className="text-sm text-muted-foreground">
                        El diagnóstico obtenido sirve de base para planificar el tratamiento 
                        adecuado para cada paciente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instrumental */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Instrumental necesario para el examen clínico
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Espejo bucal:</strong> Permite inspeccionar las áreas de difícil acceso de la cavidad bucal.</li>
                <li><strong>Bajalengua:</strong> Ayuda a separar la lengua del paladar para visualizar mejor la mucosa del piso de la boca.</li>
                <li><strong>Sonda periodontal:</strong> Se utiliza para evaluar el estado de las encías y detectar bolsas periodontales.</li>
                <li><strong>Aguja:</strong> Se utiliza para realizar punciones en caso de ser necesario.</li>
                <li><strong>Bisturí:</strong> Se utiliza para realizar incisiones en caso de ser necesario.</li>
                <li><strong>Bulbo de goma:</strong> Se utiliza para aspirar líquido o pus de lesiones.</li>
                <li><strong>Vidrio o lámina transparente:</strong> Se utiliza para realizar diascopia.</li>
                <li><strong>Cámara fotográfica:</strong> Se utiliza para documentar los hallazgos.</li>
                <li><strong>Separadores bucales:</strong> Permite retraer los tejidos para la correcta evaluación y registro fotográfico.</li>
              </ul>

              {/* Pasos de la exploración */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Pasos de la exploración clínica
              </h2>

              {/* Inspección */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6 not-prose">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Inspección</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  La inspección es el primer paso en la evaluación física. Se realiza mediante 
                  la observación visual total o parcial del cuerpo, examinando estructuras orales 
                  en busca de cambios de color, textura, inflamación o lesiones.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong>Iluminación:</strong> Fuente de luz adecuada (lámparas frontales, de mano o luz natural).</li>
                  <li><strong>Simetría:</strong> Comparar ambos lados para detectar asimetrías.</li>
                  <li><strong>Color:</strong> Observar mucosas (rosa pálido), encías (rosa coral), lengua (rojo rosado).</li>
                  <li><strong>Textura:</strong> Palpar superficies para evaluar textura normal (lisa, húmeda, firme).</li>
                  <li><strong>Lesiones:</strong> Buscar úlceras, manchas, placas, nódulos o verrugas.</li>
                </ul>
              </div>

              {/* Palpación */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6 not-prose">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Hand className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Palpación</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Técnica fundamental para evaluar el estado de los tejidos corporales mediante el tacto.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong>Palpación bimanual:</strong> Una mano en el exterior y otra en el interior para mayor precisión.</li>
                  <li><strong>Ganglios linfáticos:</strong> Palpar ganglios del cuello y debajo de la mandíbula.</li>
                </ul>
              </div>

              {/* Olfacción */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6 not-prose">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Wind className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Olfacción</h3>
                </div>
                <p className="text-muted-foreground">
                  Evaluar el olor oral del paciente. El olor normal es neutro o ligeramente a menta. 
                  La halitosis puede indicar higiene deficiente o enfermedad periodontal. Olores fétidos 
                  pueden indicar faringitis crónica, amigdalitis o abscesos respiratorios.
                </p>
              </div>

              {/* Pruebas especiales */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6 not-prose">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <FlaskConical className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Pruebas especiales</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong>Punción:</strong> Obtener muestra de líquido o pus con asepsia estricta.</li>
                  <li><strong>Exploración con sonda:</strong> Buscar irregularidades o bolsas periodontales.</li>
                  <li><strong>Bulbo-aspiración:</strong> Aspirar líquido o pus de lesiones.</li>
                  <li><strong>Diascopia:</strong> Evaluar el color de lesiones submucosas mediante presión con vidrio.</li>
                  <li><strong>Fotografía:</strong> Documentar hallazgos y evolución de lesiones.</li>
                </ul>
              </div>

              {/* Orden del examen */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Examen clínico: Orden de evaluación
              </h2>

              <p className="text-muted-foreground mb-4">
                Realizar un examen metódico siguiendo un orden específico:
              </p>

              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                <li>Labios</li>
                <li>Mucosa yugal</li>
                <li>Lengua</li>
                <li>Piso de boca</li>
                <li>Paladar duro y blando</li>
                <li>Istmo de las fauces</li>
                <li>Encías</li>
              </ol>

              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-foreground font-medium m-0">
                  Conocer lo normal es esencial para identificar lo patológico.
                </p>
              </div>

              {/* Registro de hallazgos */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                <Camera className="h-6 w-6 text-accent" />
                Registro de los hallazgos clínicos
              </h2>

              <p className="text-muted-foreground">
                Los hallazgos deben registrarse en la historia clínica del paciente con una descripción 
                detallada de cada hallazgo: ubicación, tamaño, forma, color y textura. También se deben 
                registrar las pruebas especiales realizadas.
              </p>

              {/* Aplicaciones */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Aplicaciones de la exploración clínica
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Diagnóstico de enfermedades orales:</strong> Caries, enfermedades periodontales, infecciones, cáncer oral y trastornos temporomandibulares.</li>
                <li><strong>Planificación del tratamiento:</strong> Base para planificar el tratamiento adecuado.</li>
                <li><strong>Seguimiento del tratamiento:</strong> Evaluar progreso y eficacia.</li>
                <li><strong>Investigación:</strong> Estudiar prevalencia y desarrollar nuevos métodos.</li>
              </ul>

              {/* Importancia */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Importancia de la exploración clínica
              </h2>

              <p className="text-muted-foreground">
                La exploración clínica es parte esencial del examen odontológico, permite detectar 
                enfermedades en sus primeras etapas, aumentando las posibilidades de un tratamiento 
                exitoso. Además, es una herramienta valiosa para la promoción de la salud bucal, 
                identificando factores de riesgo y educando a los pacientes sobre prevención.
              </p>

              {/* Recomendaciones */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Recomendaciones para una exploración adecuada
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Establecer buena relación con el paciente:</strong> Que se sienta cómodo y colabore.</li>
                <li><strong>Historia clínica completa:</strong> Antecedentes médicos, odontológicos, hábitos de higiene, consumo de cigarrillo, vape, tabaco, alcohol.</li>
                <li><strong>Inspección cuidadosa:</strong> Todas las estructuras con luz adecuada.</li>
                <li><strong>Palpación cuidadosa:</strong> Estructuras bucales y ganglios linfáticos.</li>
                <li><strong>Pruebas especiales si es necesario:</strong> Punción, sonda, diascopia, citología, cultivo, biopsia.</li>
                <li><strong>Registro claro y preciso:</strong> Documentar todos los hallazgos.</li>
              </ul>

              {/* Anatomía específica sections */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-accent" />
                Examen Clínico de la Mucosa Bucal
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Límites de la mucosa bucal</h3>
              <p className="text-muted-foreground">
                Se extiende desde los límites de la mucosa labial por delante hasta el velo del paladar 
                por detrás, y desde la línea media del paladar duro hasta la zona retromolar por los lados.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Anatomía de la mucosa bucal</h3>
              <p className="text-muted-foreground">
                Superficie lisa, rosa pálido y húmeda. Firmemente adherida al periostio con rica red vascular. 
                Se pueden observar:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Conductos salivales:</strong> Orificios de conductos menores y el conducto de Stenon cerca del segundo molar superior.</li>
                <li><strong>Papilas:</strong> Filiformes (cónicas) y fungiformes (redondas con yemas gustativas).</li>
                <li><strong>Frenillos:</strong> Pliegues que unen lengua al piso y labios al maxilar.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Hallazgos Normales</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Color:</strong> Rosa pálido</li>
                <li><strong>Textura:</strong> Lisa y húmeda</li>
                <li><strong>Consistencia:</strong> Suave y elástica</li>
                <li><strong>Vascularización:</strong> Red visible pero no prominente</li>
                <li><strong>Ausencia de lesiones:</strong> Sin ulceraciones, vesículas, petequias, nódulos ni tumores</li>
              </ul>

              {/* Labios */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Examen Clínico de los Labios
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Histología de los Labios</h3>
              <p className="text-muted-foreground mb-4">
                Los labios se dividen en tres zonas:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Porción Cutánea:</strong> Superior desde el subtabique nasal; inferior hasta el surco mento-labial.</li>
                <li><strong>Porción Semimucosa (Bermellón):</strong> La parte roja, transición entre piel y mucosa. Puede presentar Gránulos de Fordyce.</li>
                <li><strong>Porción Mucosa:</strong> Interna, rosada, húmeda, con red vascular definida y orificios de glándulas salivales.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Clasificación por localización</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Mucosa de Revestimiento:</strong> Labial, yugal, surcos vestibulares, mucosa alveolar, cara ventral de lengua, piso de boca, paladar blando.</li>
                <li><strong>Mucosa Masticatoria (Fibromucosa):</strong> Encías y paladar duro.</li>
                <li><strong>Mucosa Sensorial:</strong> Dorso lingual.</li>
              </ul>

              {/* Lengua */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Examen Clínico de la Lengua
              </h2>

              <p className="text-muted-foreground mb-4">
                La lengua ocupa todo el espacio circunscrito por los rebordes alveodentarios en reposo.
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li><strong>V lingual:</strong> 9-11 papilas caliciformes con vértice hacia la faringe.</li>
                <li><strong>Dorso:</strong> Aspecto aterciopelado por papilas filiformes.</li>
                <li><strong>Papilas fungiformes:</strong> Cerca del borde y punta.</li>
                <li><strong>Papilas foliadas:</strong> Tercio posterior del borde lingual.</li>
                <li><strong>Cara ventral:</strong> Rosa claro, lisa, con frenillo lingual y vasos raninos.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La lengua y el gusto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Dulce:</strong> Punta de la lengua (papilas fungiformes)</li>
                <li><strong>Salado:</strong> Borde lateral y cuerpo</li>
                <li><strong>Amargo:</strong> Tercio medio posterior (papilas caliciformes)</li>
                <li><strong>Ácido:</strong> Áreas laterales (papilas foliadas)</li>
              </ul>

              {/* Piso de boca */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Examen Clínico del Piso de Boca
              </h2>

              <p className="text-muted-foreground mb-4">
                Forma de herradura con concavidad hacia arriba. La porción anterior y media es triangular.
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Mucosa sublingual:</strong> Fina, rosada, flexible y vascularizada.</li>
                <li><strong>Frenillo lingual:</strong> En la línea media.</li>
                <li><strong>Carúnculas salivales:</strong> A cada lado del frenillo, desembocadura del conducto de Wharton.</li>
                <li><strong>Conductos de Rivinus:</strong> Orificios pequeños hacia los costados.</li>
              </ul>

              {/* Paladar */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Examen Clínico del Paladar
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Paladar Duro</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Color rosa pálido con rafe palatino medio.</li>
                <li><strong>Papila palatina (incisiva):</strong> Detrás de incisivos centrales.</li>
                <li><strong>Rugosidades palatinas:</strong> Apoyo para desmenuzamiento del bolo alimenticio.</li>
                <li>Abundantes glándulas salivales en tercio medio y posterior.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Paladar Blando</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Más rosado que el duro, brillante y liso.</li>
                <li><strong>Úvula:</strong> En la línea media.</li>
                <li><strong>Pilares:</strong> Forman el lecho de las amígdalas palatinas.</li>
                <li><strong>Amígdalas palatinas:</strong> Superficie mamelonada con criptas amigdalinas.</li>
              </ul>

              {/* Encías */}
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Examen Clínico de las Encías
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Encía Libre y Adherida</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Encía libre:</strong> Desde el borde del cuello dentario hasta la ranura gingival. Lisa, brillante, más rojiza.</li>
                <li><strong>Encía adherida:</strong> Entre la ranura gingival y el límite mucogingival. Rosada, punteado en cáscara de naranja.</li>
                <li><strong>Encía papilar:</strong> Papilas interdentarias entre los dientes.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Características de una encía sana</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Color:</strong> Rosado</li>
                <li><strong>Contorno marginal:</strong> Fino y puntiagudo</li>
                <li><strong>Textura:</strong> Similar a cáscara de naranja</li>
                <li><strong>Consistencia:</strong> Firme</li>
                <li><strong>Surco gingival:</strong> Superficial (1-2 mm)</li>
              </ul>

              <p className="text-muted-foreground mt-4">
                Un surco gingival mayor indica una bolsa periodontal, manifestación de enfermedad periodontal.
              </p>
            </div>

            {/* ===================================================== */}
            {/* CASOS CLÍNICOS - Esquema de presentación              */}
            {/* ===================================================== */}
            <div className="mt-20 pt-12 border-t border-border">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  <Presentation className="h-4 w-4" />
                  Recurso para estudiantes
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Esquema para la Presentación de Casos Clínicos
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Para la presentación de los casos clínicos es importante llevar una secuencia lógica,
                  lo que permite el aprovechamiento óptimo de los recursos, el tiempo y los conocimientos.
                  En total son <strong>17 láminas</strong> que cubren tanto la historia clínica general
                  como la historia clínica de patología bucal.
                </p>
              </div>

              {/* Stats destacados */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 not-prose">
                <div className="bg-card border border-border rounded-xl p-5 text-center">
                  <Layers className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">17</div>
                  <div className="text-sm text-muted-foreground">Láminas</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 text-center">
                  <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">10 min</div>
                  <div className="text-sm text-muted-foreground">Tiempo máximo</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 text-center">
                  <BookMarked className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">Artículos científicos</div>
                </div>
              </div>

              {/* Grupo A */}
              <div className="mb-12 not-prose">
                <div className="mb-6">
                  <span className="inline-block text-xs font-semibold tracking-wider text-accent uppercase mb-2">
                    Reporte del caso
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Grupo A — Historia Clínica del Paciente
                  </h3>
                  <p className="text-muted-foreground">
                    Láminas 1 a 6. Introducción al paciente y la patología. Aún no se revela el diagnóstico.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {laminasGrupoA.map((l) => (
                    <div
                      key={l.n}
                      className="bg-card border-2 border-accent/30 rounded-xl p-5 hover:border-accent transition-colors"
                    >
                      <div className="text-xs font-bold text-accent tracking-wider mb-1">
                        LÁMINA {l.n}
                      </div>
                      <div className="font-semibold text-foreground mb-2">{l.label}</div>
                      <p className="text-sm text-muted-foreground">{l.content}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden border border-border bg-card">
                  <img
                    src={laminas1}
                    alt="Secuencia de láminas 1 a 6 del esquema de casos clínicos"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Grupo B */}
              <div className="mb-12 not-prose">
                <div className="mb-6">
                  <span className="inline-block text-xs font-semibold tracking-wider text-accent uppercase mb-2">
                    Reporte · Discusión · Conclusiones
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Grupo B — Análisis Clínico y Revisión de Literatura
                  </h3>
                  <p className="text-muted-foreground">
                    Láminas 7 a 17. Diagnóstico, tratamiento, literatura científica y conclusiones.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {laminasGrupoB.map((l) => (
                    <div
                      key={l.n}
                      className="bg-card border-2 border-accent/30 rounded-xl p-5 hover:border-accent transition-colors"
                    >
                      <div className="text-xs font-bold text-accent tracking-wider mb-1">
                        LÁMINA {l.n}
                      </div>
                      <div className="font-semibold text-foreground mb-2">{l.label}</div>
                      <p className="text-sm text-muted-foreground">{l.content}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-border bg-card">
                    <img
                      src={laminas2}
                      alt="Secuencia de láminas 7 a 12 del esquema de casos clínicos"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-border bg-card">
                    <img
                      src={laminas3}
                      alt="Secuencia de láminas 13 a 17 del esquema de casos clínicos"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Consejos por lámina - Accordion */}
              <div className="mb-12 not-prose">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Consejos por lámina
                </h3>
                <p className="text-muted-foreground mb-6">
                  Recomendaciones específicas para preparar cada diapositiva con rigor académico.
                </p>
                <Accordion type="single" collapsible className="bg-card border border-border rounded-xl px-2">
                  {consejos.map((c, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                      <AccordionTrigger className="px-4 text-left font-semibold text-foreground hover:text-accent">
                        {c.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        <ul className="space-y-2 text-muted-foreground">
                          {c.items.map((it, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Normas oficiales */}
              <div className="bg-healthcare-navy text-healthcare-cream rounded-2xl p-8 md:p-10 not-prose">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-healthcare-turquoise">
                  Normas oficiales de presentación
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      ¿Para qué sirve la presentación de casos clínicos?
                    </h4>
                    <ul className="space-y-2 text-healthcare-cream/90">
                      <li>• Adquirir conocimientos de los pacientes atendidos y de los casos de los compañeros.</li>
                      <li>• Actualizarse en el manejo de nuevos casos, planes de tratamiento y abordaje quirúrgico.</li>
                      <li>• Plasmar los contenidos teóricos en la práctica clínica.</li>
                      <li>• Respetar al paciente como ente bio-psico-social con estricta confidencialidad.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-healthcare-turquoise pl-4 italic text-healthcare-cream/90">
                    Este esquema es una guía orientativa que puede variar según cada caso. Es fundamental
                    reunirse con el tutor previo a la presentación, ya que cada docente puede tener
                    consideraciones específicas para el caso asignado.
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-white">Formato de la presentación</h4>
                      <ul className="space-y-2 text-healthcare-cream/90 text-sm">
                        <li><strong className="text-white">Fondo:</strong> Negro o azul marino</li>
                        <li><strong className="text-white">Texto:</strong> Amarillo o blanco</li>
                        <li><strong className="text-white">Animaciones:</strong> Evitar las que resten seriedad</li>
                        <li><strong className="text-white">Tiempo máximo:</strong> 10 minutos</li>
                        <li><strong className="text-white">Texto:</strong> El mínimo posible; apoyarse en esquemas e imágenes</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-white">Fuentes bibliográficas</h4>
                      <ul className="space-y-2 text-healthcare-cream/90 text-sm">
                        <li><strong className="text-white">Mínimo:</strong> 5 artículos científicos</li>
                        <li><strong className="text-white">Antigüedad máxima:</strong> 5 años</li>
                      </ul>
                      <p className="mt-3 text-healthcare-cream/80 text-sm">
                        <strong className="text-white">Recomendadas:</strong> ODOUS CIENTÍFICA (UC), Ciencia Odontológica (LUZ),
                        Acta Odontológica Venezolana (UCV), Acta Bioclínica (ULA), LILACS, SCIELO,
                        SCIENCEDIRECT, BIREME, PUBMED, TRIP.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Formato de referencias bibliográficas</h4>
                    <p className="text-healthcare-cream/90 text-sm mb-2">
                      Normas del Comité de Editores de Revistas Médicas (Vancouver):
                    </p>
                    <code className="block bg-black/30 rounded-lg p-3 text-healthcare-turquoise text-xs md:text-sm mb-3">
                      Apellido N. Título del artículo. Abreviatura de la revista. Año; Volumen(Número): Páginas.
                    </code>
                    <p className="text-healthcare-cream/80 text-sm italic">
                      Ejemplo: Iatta R, Napoli Ch, Borghi E, Montagna MT. Rare mycoses of the oral cavity:
                      a literature epidemiologic review. <em>Oral Surg Oral Med Oral Pathol Oral Radiol Endod</em>.
                      2009; 108(5): 647-655.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Evaluación</h4>
                    <p className="text-healthcare-cream/90 text-sm">
                      La evaluación no se limita a los conocimientos demostrados durante la presentación.
                      Se evaluará también el proceso completo: análisis del caso, investigación, manejo del
                      paciente y todo el recorrido clínico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExploracionClinica;
