// Services data based on GMB description
import { Sparkles, Heart, Stethoscope, Scissors, Search, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  benefits: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: "limpieza-dental",
    slug: "limpieza-dental",
    title: "Limpieza Dental",
    shortDescription: "Mantén tus dientes y encías saludables con limpiezas profesionales regulares.",
    fullDescription: `La limpieza dental profesional es fundamental para mantener una óptima salud bucal. En nuestra consulta utilizamos técnicas modernas y equipos de última generación para eliminar el sarro y la placa bacteriana que se acumula en zonas de difícil acceso.

Una limpieza dental regular ayuda a prevenir enfermedades periodontales, caries y otros problemas bucales. Recomendamos realizar este procedimiento cada 6 meses para mantener una sonrisa saludable y brillante.

El procedimiento incluye la eliminación de cálculo dental, pulido de las superficies dentales y aplicación de flúor para fortalecer el esmalte.`,
    icon: Sparkles,
    benefits: [
      "Prevención de enfermedades de las encías",
      "Eliminación de manchas superficiales",
      "Detección temprana de problemas dentales",
      "Aliento más fresco",
      "Sonrisa más brillante"
    ],
    seoTitle: "Limpieza Dental en Naguanagua | Dra. María Gabriela Castro",
    seoDescription: "Limpieza dental profesional en Naguanagua, Valencia. 16 años de experiencia. Prevención de caries y enfermedades periodontales. Agenda tu cita."
  },
  {
    id: "diseno-sonrisa",
    slug: "diseno-de-sonrisa",
    title: "Diseño de Sonrisa",
    shortDescription: "Transforma tu sonrisa con tratamientos estéticos personalizados.",
    fullDescription: `El diseño de sonrisa es un tratamiento integral que combina diferentes procedimientos para lograr la sonrisa perfecta adaptada a las características faciales de cada paciente.

Utilizamos tecnología digital para planificar cada caso, mostrándote previamente cómo lucirá tu nueva sonrisa. El tratamiento puede incluir blanqueamiento, carillas, coronas y otros procedimientos según tus necesidades.

Con 16 años de experiencia, la Dra. María Gabriela Castro te guiará en cada paso del proceso para lograr resultados naturales y armoniosos.`,
    icon: Heart,
    benefits: [
      "Resultados personalizados",
      "Previsualización digital del resultado",
      "Mejora de la autoestima",
      "Corrección de imperfecciones",
      "Tratamientos mínimamente invasivos"
    ],
    seoTitle: "Diseño de Sonrisa en Naguanagua | Estética Dental Valencia",
    seoDescription: "Diseño de sonrisa personalizado en Naguanagua. Transforma tu sonrisa con la Dra. María Gabriela Castro. Resultados naturales garantizados."
  },
  {
    id: "endodoncia",
    slug: "endodoncia",
    title: "Endodoncia",
    shortDescription: "Tratamiento de conductos para salvar dientes con infección o daño pulpar.",
    fullDescription: `La endodoncia, también conocida como tratamiento de conducto, es un procedimiento que permite salvar dientes que de otra manera tendrían que ser extraídos debido a infección o daño en la pulpa dental.

El procedimiento consiste en remover el tejido pulpar infectado o dañado, limpiar y desinfectar los conductos radiculares, y sellarlos para prevenir futuras infecciones.

Con técnicas modernas y anestesia adecuada, el tratamiento es prácticamente indoloro, permitiendo conservar tu diente natural y mantener la función masticatoria.`,
    icon: Stethoscope,
    benefits: [
      "Conservación del diente natural",
      "Alivio del dolor dental",
      "Procedimiento prácticamente indoloro",
      "Alta tasa de éxito",
      "Prevención de complicaciones mayores"
    ],
    seoTitle: "Endodoncia en Naguanagua | Tratamiento de Conducto Valencia",
    seoDescription: "Endodoncia profesional en Naguanagua. Tratamiento de conducto sin dolor. Salvamos tu diente natural. Dra. María Gabriela Castro."
  },
  {
    id: "cirugia-cordales",
    slug: "cirugia-dental-cordales",
    title: "Cirugía Dental (Cordales)",
    shortDescription: "Extracción segura de muelas del juicio y cirugías orales menores.",
    fullDescription: `Las muelas del juicio o cordales pueden causar diversos problemas cuando no tienen espacio suficiente para erupcionar correctamente. Esto puede provocar dolor, infecciones, daño a dientes adyacentes y otros problemas.

La cirugía de cordales se realiza bajo anestesia local, garantizando un procedimiento sin dolor. Contamos con experiencia en casos simples y complejos, incluyendo muelas impactadas.

El postoperatorio incluye indicaciones detalladas y seguimiento para asegurar una recuperación rápida y sin complicaciones.`,
    icon: Scissors,
    benefits: [
      "Procedimiento ambulatorio",
      "Anestesia local efectiva",
      "Prevención de complicaciones futuras",
      "Seguimiento postoperatorio",
      "Recuperación guiada"
    ],
    seoTitle: "Extracción de Cordales en Naguanagua | Cirugía Dental Valencia",
    seoDescription: "Extracción de muelas del juicio en Naguanagua. Cirugía oral segura con la Dra. María Gabriela Castro. 16 años de experiencia."
  },
  {
    id: "patologia-bucal",
    slug: "patologia-bucal",
    title: "Patología Bucal",
    shortDescription: "Diagnóstico especializado de lesiones y enfermedades de la cavidad oral.",
    fullDescription: `La patología bucal es la especialidad dedicada al estudio, diagnóstico y tratamiento de las enfermedades que afectan la cavidad oral y estructuras adyacentes.

Como docente de Patología Bucal en la Universidad de Carabobo durante 11 años, la Dra. María Gabriela Castro cuenta con amplia experiencia en el diagnóstico de lesiones de la mucosa oral, quistes, tumores benignos y otras patologías.

La detección temprana es clave para el tratamiento exitoso de cualquier condición. Realizamos exámenes completos y, cuando es necesario, biopsias para diagnóstico definitivo.`,
    icon: Search,
    benefits: [
      "Diagnóstico especializado",
      "Experiencia docente universitaria",
      "Detección temprana de lesiones",
      "Biopsias cuando es necesario",
      "Tratamiento integral"
    ],
    seoTitle: "Patología Bucal en Naguanagua | Especialista Valencia",
    seoDescription: "Diagnóstico de patología bucal en Naguanagua. Docente UC con 11 años de experiencia. Detección temprana de lesiones orales."
  },
  {
    id: "emergencias",
    slug: "emergencias-dentales",
    title: "Emergencias Dentales",
    shortDescription: "Atención inmediata para urgencias dentales y dolor agudo.",
    fullDescription: `Las emergencias dentales requieren atención inmediata para aliviar el dolor y prevenir complicaciones mayores. Atendemos casos de dolor dental agudo, traumatismos, abscesos, dientes fracturados y otras urgencias.

Entendemos que el dolor dental puede ser muy intenso y afectar significativamente tu calidad de vida. Por eso ofrecemos espacios para atender emergencias lo más pronto posible.

Contáctanos inmediatamente si presentas dolor intenso, hinchazón facial, sangrado persistente o traumatismo dental.`,
    icon: AlertTriangle,
    benefits: [
      "Atención prioritaria",
      "Alivio rápido del dolor",
      "Diagnóstico inmediato",
      "Tratamiento de urgencia",
      "Seguimiento posterior"
    ],
    seoTitle: "Emergencias Dentales en Naguanagua | Urgencias Odontológicas",
    seoDescription: "Atención de emergencias dentales en Naguanagua. Dolor dental, traumatismos, abscesos. Contacto inmediato: 0414-4402838."
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};