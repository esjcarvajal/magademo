import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { StudentPasswordGate } from "@/components/StudentPasswordGate";
import { temas, TemaSection } from "@/data/temas";
import { AlertTriangle, Info, ShieldAlert } from "lucide-react";

const SectionRenderer = ({ section }: { section: TemaSection }) => {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 pb-3 border-b border-border">
          {section.content}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
          {section.content}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-foreground/85 leading-relaxed mb-4 font-sans">
          {section.content}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-3 mb-6 ml-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/85 font-sans">
              <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto mb-6 rounded-xl border border-border">
          <table className="w-full text-sm font-sans">
            {section.headers && (
              <thead>
                <tr className="bg-primary/5">
                  {section.headers.map((h, i) => (
                    <th
                      key={i}
                      className="text-left px-4 py-3 font-semibold text-foreground border-b border-border"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {section.rows?.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 text-foreground/85 border-b border-border/50"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "alert": {
      const variants = {
        warning: {
          bg: "bg-destructive/5",
          border: "border-destructive/20",
          text: "text-foreground",
          icon: <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />,
        },
        info: {
          bg: "bg-accent/5",
          border: "border-accent/30",
          text: "text-foreground",
          icon: <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />,
        },
        danger: {
          bg: "bg-destructive/10",
          border: "border-destructive/30",
          text: "text-foreground",
          icon: <ShieldAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />,
        },
      };
      const v = variants[section.variant || "info"];
      return (
        <div className={`${v.bg} ${v.border} border rounded-xl p-5 mb-6 flex gap-3`}>
          {v.icon}
          <p className={`${v.text} text-sm leading-relaxed font-sans`}>
            {section.content}
          </p>
        </div>
      );
    }
    case "divider":
      return <hr className="my-8 border-border" />;
    default:
      return null;
  }
};

const TemaDetalleContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const tema = temas.find((t) => t.slug === slug);

  if (!tema) {
    return <Navigate to="/estudiantes/temas" replace />;
  }

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs
            items={[
              { label: "Estudiantes", href: "/estudiantes" },
              { label: "Temas", href: "/estudiantes/temas" },
              { label: `Tema ${tema.number}` },
            ]}
          />

          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-sans font-medium mb-4">
                Tema {tema.number}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {tema.title}
              </h1>
              <p className="text-lg text-muted-foreground font-sans">
                {tema.excerpt}
              </p>
            </div>

            {/* Content */}
            <div>
              {tema.sections.map((section, i) => (
                <SectionRenderer key={i} section={section} />
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

const TemaDetalle = () => {
  return (
    <StudentPasswordGate
      title="Temas de Clase"
      description="Los temas de clase son contenido exclusivo para estudiantes de Patología Bucal. Ingresa la contraseña proporcionada por tu profesor para acceder."
    >
      <TemaDetalleContent />
    </StudentPasswordGate>
  );
};

export default TemaDetalle;
