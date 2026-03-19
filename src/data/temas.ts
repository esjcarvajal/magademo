export interface TemaSection {
  type: "heading" | "subheading" | "paragraph" | "list" | "table" | "alert" | "divider";
  content?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  variant?: "warning" | "info" | "danger";
}

export interface Tema {
  slug: string;
  title: string;
  excerpt: string;
  number: number;
  sections: TemaSection[];
}

export const temas: Tema[] = [
  {
    slug: "neoplasias-nomenclatura-y-clasificacion",
    title: "Neoplasias: Nomenclatura y Clasificación",
    excerpt: "Clasificación y nomenclatura de neoplasias según su origen: epitelial, mesenquimal, vascular, nervioso y muscular. Sustentado en artículos científicos 2023–2025.",
    number: 4,
    sections: [
      { type: "heading", content: "1. Introducción: Neoplasias — Definición y Nomenclatura" },
      { type: "subheading", content: "1.1 Definición de Neoplasia" },
      { type: "paragraph", content: "Una neoplasia (del griego neo = nuevo; plasma = formación) se define como una proliferación celular anormal, autónoma y relativamente autoperpetuante, que ocurre como consecuencia de alteraciones genéticas adquiridas o heredadas, independiente de los mecanismos normales de control del crecimiento. Según la Organización Mundial de la Salud (OMS, 2022) y evidencia reciente, las neoplasias representan un desequilibrio entre la proliferación celular y la muerte celular programada (apoptosis), resultando en una masa tisular que persiste y frecuentemente crece aunque el estímulo inicial haya desaparecido." },
      { type: "paragraph", content: "En el contexto de la Patología Bucal, las neoplasias de cabeza y cuello representan aproximadamente el 5-10% de todos los tumores a nivel mundial, con una incidencia creciente asociada a factores como infección por VPH, tabaquismo, alcohol y predisposición genética. El odontólogo juega un papel primordial en la detección temprana, derivación oportuna y manejo integral del paciente oncológico." },

      { type: "heading", content: "2. Neoplasias de Origen Epitelial" },
      { type: "paragraph", content: "Las neoplasias epiteliales bucales derivan de los distintos tipos de epitelio que revisten la cavidad oral: el epitelio escamoso estratificado (mucosa oral, encía, paladar) y el epitelio glandular de las glándulas salivales mayores y menores. Son las neoplasias más frecuentes en la cavidad bucal, representando más del 90% de todos los tumores malignos orales." },

      { type: "subheading", content: "2.1 Papiloma Escamoso" },
      { type: "paragraph", content: "El papiloma escamoso oral (PE) es una neoplasia benigna de origen epitelial que se presenta como una proliferación exofítica de epitelio escamoso estratificado, organizada en proyecciones digitiformes o verrucosas con un eje central de tejido conectivo vascularizado." },
      { type: "paragraph", content: "Representa el 8–11% de todas las lesiones orales biopsiadas según estudios recientes. Un metaanálisis de Khurshid et al. (2023) reportó una prevalencia global de VPH en cavidad oral del 4.5%, con mayor proporción de serotipos de bajo riesgo oncogénico (6 y 11). Afecta predominantemente a adultos entre 20–50 años." },
      { type: "subheading", content: "Etiología" },
      { type: "list", items: [
        "VPH tipos 6 y 11 (bajo riesgo): Responsables de la mayoría de los papilomas orales benignos. La integración viral en el ADN del hospedero activa oncoproteínas E6 y E7 que alteran el ciclo celular.",
        "VPH tipos 16 y 18 (alto riesgo): Asociados a carcinoma de orofaringe. Su detección en lesiones papilomatosas requiere seguimiento estrecho.",
        "Trauma local: Mordisqueo crónico, prótesis desadaptadas, irritación mecánica como cofactores.",
        "Inmunosupresión: Pacientes con VIH/SIDA, trasplantados y bajo terapia inmunosupresora presentan mayor incidencia y papilomas de mayor tamaño."
      ]},
      { type: "subheading", content: "Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Localización", "Paladar blando (más frecuente), úvula, lengua (bordes y dorso), mucosa labial, encía, piso de boca"],
        ["Aspecto", "Masa exofítica de superficie papilomatosa, verrucosa o coliflor, proyecciones digitiformes múltiples"],
        ["Color", "Blanco o rosado-blanquecino; puede ser rosado si muy vascularizado"],
        ["Tamaño", "Generalmente < 1 cm; raramente alcanza 2–3 cm"],
        ["Consistencia", "Blanda, pediculada o sésil"],
        ["Sintomatología", "Mayoritariamente asintomático; puede causar sensación de cuerpo extraño"]
      ]},
      { type: "subheading", content: "Características Histopatológicas" },
      { type: "list", items: [
        "Proyecciones papilares: Múltiples digitaciones de epitelio escamoso estratificado paraqueratinizado o ortoqueratinizado sobre ejes fibrovasculares.",
        "Coilocitosis: Efecto citopático característico del VPH; células con núcleo picnótico rodeado de halo claro perinuclear. Es el hallazgo patognomónico.",
        "Acantosis: Engrosamiento del estrato espinoso.",
        "Hiperqueratosis: Variable, puede ser orto o paraqueratósica en la superficie.",
        "Estroma: Tejido conectivo fibroso laxo con vasos sanguíneos centrales y leve infiltrado inflamatorio crónico.",
        "Membrana basal: Íntegra, sin invasión (confirma benignidad)."
      ]},
      { type: "subheading", content: "Diagnósticos Diferenciales" },
      { type: "table", headers: ["Diagnóstico", "Características"], rows: [
        ["Verruga vulgar (VPH 2, 4)", "Superficie más rugosa, hiperqueratosis marcada, asociada a manos; coilocitosis en capas superficiales"],
        ["Condiloma acuminado (VPH 6, 11)", "Múltiples lesiones sésiles, aspecto coliflor, transmisión sexual, base más amplia"],
        ["Hiperplasia fibrosa focal", "Sin coilocitosis, superficie lisa, no proyecciones papilares, asociada a trauma"],
        ["Carcinoma verrucoso", "Lesión grande, bordes indistintos, invasión local, no pediculado, adulto mayor tabaquista"],
        ["Fibroma osificante periférico", "Encía, masa firme, puede presentar calcificaciones"]
      ]},
      { type: "subheading", content: "Tratamiento" },
      { type: "list", items: [
        "Escisión quirúrgica convencional: Tratamiento de elección. Extirpación completa con márgenes de 1–2 mm de tejido normal. Tasa de recurrencia baja (1–3%).",
        "Ablación con láser CO₂ (10,600 nm): Alternativa eficaz, especialmente en lesiones múltiples o áreas de difícil acceso.",
        "Electrocauterización: Opción en lesiones pequeñas; mayor riesgo de cicatriz.",
        "Crioterapia: Descrita en lesiones múltiples, menor control de márgenes."
      ]},
      { type: "subheading", content: "Nuevas Terapias (2023–2025)" },
      { type: "list", items: [
        "Vacunación profiláctica VPH (Gardasil-9): Evidencia creciente de que la vacuna nonavalente reduce la incidencia de papilomas orales asociados a VPH 6 y 11. Macdonald et al. (2024) reportaron reducción del 60% en recurrencias post-escisión en pacientes vacunados.",
        "Inmunoterapia tópica con Imiquimod 5%: Utilizado en papilomatosis recurrente; activa inmunidad innata y adaptativa contra VPH. Estudios piloto 2023–2024 muestran reducción del tamaño lesional en el 70% de casos.",
        "Fotodinámica terapia (PDT): Uso de ácido 5-aminolevulínico (5-ALA) con luz roja 630 nm. Resultados prometedores en series de casos 2024.",
        "Detección de VPH por PCR/genotipificación: Se recomienda en todos los papilomas orales para identificar serotipos de alto riesgo (16, 18) y guiar la vigilancia."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: Siempre enviar a biopsia. Toda lesión papilomatosa oral debe ser examinada histopatológicamente para confirmar el diagnóstico y descartar transformación maligna. Solicitar genotipificación de VPH cuando sea posible. En pacientes inmunocomprometidos (VIH, trasplantados), las lesiones tienden a ser más extensas y recurrentes; coordinar con el médico tratante antes de cualquier procedimiento." },

      { type: "divider" },

      { type: "subheading", content: "2.2 Adenoma Pleomorfo" },
      { type: "paragraph", content: "El adenoma pleomorfo (AP), también denominado tumor mixto benigno, es la neoplasia de glándula salival más frecuente. Se caracteriza por su arquitectura histológica extremadamente variable (de ahí el término pleomorfo), presentando simultáneamente elementos epiteliales, mioepiteliales y estromales (mixoides, cartilaginoides, fibrosos)." },
      { type: "subheading", content: "Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Localización", "Glándula parótida (70–80%), submandibular (10%), sublingual (raro), glándulas menores (paladar, labio, lengua)"],
        ["Presentación", "Lesión nodular, de crecimiento lento, bien delimitada, móvil en sus etapas iniciales"],
        ["Tamaño", "Variable: desde milímetros hasta varios centímetros (media 2–4 cm al diagnóstico)"],
        ["Consistencia", "Firme, elástica; puede presentar áreas fluctuantes"],
        ["Curso", "Asintomático, crecimiento progresivo durante años a décadas"],
        ["Signos de alarma", "Parálisis facial, ulceración, fijación a piel/planos profundos: sospechar malignización"]
      ]},
      { type: "subheading", content: "Etiología" },
      { type: "list", items: [
        "Alteraciones genéticas: Reordenamientos del gen PLAG1 (8q12) como alteración más frecuente (70% de casos). También se reportan fusiones HMGA2.",
        "Radiación ionizante: Exposición previa a radioterapia de cabeza y cuello incrementa el riesgo hasta 4 veces.",
        "Trauma local repetido: Descrito como posible cofactor en glándulas salivales menores.",
        "Factores hormonales: Leve predominio femenino sugiere influencia hormonal."
      ]},
      { type: "subheading", content: "Características Histopatológicas" },
      { type: "list", items: [
        "Componente epitelial: Células ductales dispuestas en cordones, túbulos y nidos sólidos. Expresan CK7, CK14.",
        "Componente mioepitelial: Células fusiformes, plasmocitoides o claras. Expresan actina de músculo liso (SMA), p63, calponina, S-100.",
        "Componente estromal mixoide/condroide/fibroso: Estroma variable, puede mostrar diferenciación condroide o mucoide.",
        "Cápsula fibrosa: Presente pero incompleta, con proyecciones pseudopodales (causa de recurrencia si no se extirpan).",
        "Inmunohistoquímica: PLAG1 nuclear positivo, S-100 positivo en células mioepiteliales."
      ]},
      { type: "subheading", content: "Diagnósticos Diferenciales" },
      { type: "list", items: [
        "Carcinoma ex-adenoma: Zona de atipia franca, invasión capsular, necrosis; puede existir AP residual.",
        "Tumor de Warthin: Parótida casi exclusivamente, bilateral en 10%, hombre mayor fumador.",
        "Mioepitelioma: Solo componente mioepitelial, sin estructuras ductales.",
        "Carcinoma mucoepidermoide: Células mucosas, epidermoides e intermedias; invasivo, sin cápsula.",
        "Quiste linfoepitelial: Tapizado por epitelio plano, tejido linfoide adyacente."
      ]},
      { type: "subheading", content: "Tratamiento" },
      { type: "list", items: [
        "Parotidectomía superficial con preservación del nervio facial: Tratamiento estándar para AP parotídeo.",
        "Parotidectomía total: Para tumores del lóbulo profundo.",
        "Escisión amplia para glándulas salivales menores: Márgenes de 5 mm como mínimo.",
        "PAAF/BAAF: Sensibilidad del 85–95% en manos expertas; orienta el plan quirúrgico."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: La detección de una masa firme, indolora y de crecimiento lento en la región parotídea o paladar debe motivar derivación inmediata. Evitar biopsia incisional intraoral sin evaluación especializada previa." },

      { type: "divider" },

      { type: "heading", content: "3. Neoplasias de Origen Mesenquimal" },
      { type: "paragraph", content: "Las neoplasias mesenquimales orales derivan de los distintos tejidos conectivos de la cavidad bucal: tejido fibroso, adiposo, óseo y cartilaginoso. En su mayoría son benignas en la cavidad oral, aunque sus contrapartes malignas (sarcomas) pueden presentarse." },

      { type: "subheading", content: "3.1 Fibroma" },
      { type: "paragraph", content: "El fibroma oral es la lesión de tejido blando más frecuente de la cavidad bucal. La evidencia actual sustenta que la mayoría de los casos corresponde a una hiperplasia fibrosa reactiva secundaria a irritación crónica o trauma local, más que a una neoplasia verdadera." },
      { type: "paragraph", content: "Representa el 16–19% de todas las biopsias de tejidos blandos orales. Mayor prevalencia en mujeres (2:1), especialmente entre 40–60 años." },
      { type: "subheading", content: "Etiología" },
      { type: "list", items: [
        "Trauma crónico (principal): Mordisqueo habitual, borde cortante de diente fracturado, prótesis desadaptada.",
        "Irritación por mala higiene: Tejido de granulación crónica que madura hacia tejido fibroso denso.",
        "Fibroma de irritación periférico: Derivado del ligamento periodontal; localizado en encía.",
        "Predisposición genética: Fibromatosis gingival hereditaria (mutación SOS1)."
      ]},
      { type: "subheading", content: "Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Localización", "Mucosa yugal (línea de oclusión), más frecuente. También lengua, labio, encía, paladar"],
        ["Forma", "Nódulo sésil o pediculado, bien circunscrito"],
        ["Color", "Rosado, similar a mucosa normal; puede ser blanco si hay queratosis superficial"],
        ["Tamaño", "Generalmente < 1.5 cm; raramente mayor"],
        ["Superficie", "Lisa, uniforme; puede presentar zona de ulceración traumática"],
        ["Consistencia", "Firme, elástica; no compresible"]
      ]},
      { type: "subheading", content: "Tratamiento" },
      { type: "list", items: [
        "Escisión quirúrgica con remoción del factor irritante: Tratamiento de elección.",
        "Ablación con láser Er:YAG o diodo: Eficaz para lesiones pequeñas (<1 cm).",
        "Control del factor irritante: Ajuste protésico, corrección de maloclusiones, eliminación de bordes cortantes."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: Identificar y eliminar el factor irritante es tan importante como la escisión quirúrgica. Todo fibroma debe enviarse a estudio histopatológico; un fibroma 'atípico' que recidiva o crece rápidamente debe descartarse como fibrosarcoma." },

      { type: "divider" },

      { type: "subheading", content: "3.2 Lipoma" },
      { type: "paragraph", content: "El lipoma oral es una neoplasia benigna de tejido adiposo maduro, considerada el tumor de tejidos blandos más común del organismo pero relativamente infrecuente en la cavidad bucal (representa solo el 1–4% de los tumores orales benignos)." },
      { type: "subheading", content: "Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Localización", "Mucosa yugal (50%), lengua (10%), piso de boca (10%), labio, paladar"],
        ["Forma", "Masa subepitelial oval o lobulada, bien delimitada, encapsulada"],
        ["Color", "Amarillo o amarillo-rosado; característico aspecto traslúcido amarillento"],
        ["Tamaño", "1–3 cm (puede ser mayor en lipoma intramuscular de lengua)"],
        ["Consistencia", "Muy blanda, pastosa, depresible; signo de la 'almohada'"],
        ["Superficie", "Mucosa normal suprayacente, lisa, movible"]
      ]},
      { type: "subheading", content: "Tratamiento" },
      { type: "list", items: [
        "Escisión quirúrgica conservadora: Primera línea. Remoción completa con cápsula intacta. Recidiva rara (<5%).",
        "Liposucción asistida: Para lipomas de gran tamaño en lengua o piso de boca.",
        "Inyecciones de deoxicolato sódico (ATX-101): Aprobado para lipomas faciales y cervicales pequeños."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: La apariencia amarillenta y textura blanda 'pastosa' es la clave clínica. Ante lipoma en piso de boca de gran tamaño, solicitar imagen (resonancia magnética) para definir extensión antes de la cirugía." },

      { type: "divider" },

      { type: "heading", content: "4. Neoplasias de Origen Vascular y Nervioso" },
      { type: "paragraph", content: "Las neoplasias vasculares y nerviosas de la cavidad bucal representan un grupo heterogéneo de lesiones que se originan de las células endoteliales de los vasos sanguíneos y linfáticos, o de los elementos del sistema nervioso periférico." },

      { type: "subheading", content: "4.1 Hemangioma" },
      { type: "paragraph", content: "El hemangioma es una lesión vascular benigna caracterizada por la proliferación de células endoteliales. Los hemangiomas infantiles son los tumores vasculares más comunes en niños, mientras que en adultos predominan las malformaciones vasculares." },
      { type: "subheading", content: "Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Localización", "Labios (más frecuente), lengua, mucosa yugal, paladar, encía"],
        ["Fase proliferativa (0–12 meses)", "Masa rojo brillante, elevada, de rápido crecimiento; blanda"],
        ["Fase involutiva", "Palidece, se aplana, inicia regresión espontánea (50% a los 5 años; 70% a los 7 años)"],
        ["Hemangioma cavernoso adulto", "Masa azul-púrpura, blanda, compresible, que palidece a la vitropresión"],
        ["Hemangioma capilar", "Maculopápula roja, pequeña, lobulada; más superficial"],
        ["Signos de alarma", "Sangrado recurrente, obstrucción de vía aérea, trombocitopenia (síndrome de Kasabach-Merritt)"]
      ]},
      { type: "subheading", content: "Tratamiento" },
      { type: "list", items: [
        "Observación expectante (hemangiomas infantiles): Involución espontánea en el 60–80%.",
        "Propranolol oral (0.5–3 mg/kg/día): Tratamiento de elección para hemangiomas infantiles que requieren intervención.",
        "Escleroterapia: Para hemangiomas cavernosos adultos. Tasa de éxito 70–85%.",
        "Cirugía láser (Nd:YAG, PDL 585 nm): Coagulación selectiva de vasos."
      ]},
      { type: "alert", variant: "danger", content: "CONSIDERACIÓN ODONTOLÓGICA: ¡NUNCA realizar biopsia incisional de un hemangioma sin preparación hemostática adecuada! El riesgo de hemorragia masiva es real." },

      { type: "divider" },

      { type: "subheading", content: "4.2 Neuroma" },
      { type: "paragraph", content: "El término neuroma abarca un grupo de lesiones benignas de los nervios periféricos que incluye: el neuroma traumático, el neuroma de amputación y el neuroma de la mucosa oral en la neoplasia endocrina múltiple tipo 2B (NEM-2B). En odontología, el neuroma traumático del nervio dentario inferior o lingual es la forma más relevante." },
      { type: "subheading", content: "Características Clínicas" },
      { type: "table", headers: ["Característica", "Neuroma traumático", "Neuroma de NEM-2B"], rows: [
        ["Presentación", "Nódulo firme, doloroso a la palpación, en zona de cirugía previa", "Múltiples nódulos pequeños en labios, bordes de lengua y comisuras; indoloros"],
        ["Tamaño", "Generalmente < 1 cm; puede alcanzar 2–3 cm", ""],
        ["Sintomatología", "Dolor neuropático, disestesia, alodinia", "Asintomático"],
        ["Signo de Tinel", "Descarga eléctrica al percutir la lesión", ""]
      ]},
      { type: "subheading", content: "Tratamiento" },
      { type: "list", items: [
        "Escisión quirúrgica: Remoción completa del neuroma y reubicación del nervio residual (neuroplastia).",
        "Inyecciones de corticoesteroides intralesionales: Manejo paliativo del dolor antes de cirugía definitiva.",
        "NEM-2B: Diagnóstico genético urgente (RET proto-oncogén), tiroidectomía profiláctica antes de los 6 meses de vida."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: El odontólogo debe sospechar NEM-2B ante neuromas mucosos múltiples en labios/lengua en paciente joven. La derivación endocrinológica urgente puede salvar la vida del paciente." },

      { type: "divider" },

      { type: "heading", content: "5. Neoplasias de Origen Muscular" },
      { type: "paragraph", content: "Las neoplasias musculares orales son infrecuentes dada la escasa presencia de músculo liso y músculo estriado en la cavidad bucal. Su diagnóstico requiere confirmación histopatológica con inmunohistoquímica." },

      { type: "subheading", content: "5.1 Leiomioma" },
      { type: "paragraph", content: "El leiomioma oral es una neoplasia benigna del músculo liso, extremadamente rara en la cavidad bucal. Representa menos del 0.065% de todos los tumores orales benignos. El angioleiomioma es la variante más frecuente en cavidad oral." },
      { type: "subheading", content: "Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Localización", "Labio (más frecuente), paladar duro/blando, lengua, mucosa yugal"],
        ["Presentación", "Nódulo subepitelial firme, bien delimitado, superficie mucosa normal"],
        ["Color", "Rosado, similar a mucosa normal"],
        ["Tamaño", "0.5–2 cm (raramente mayor)"],
        ["Consistencia", "Firme o dura; angioleiomioma puede ser blanda"],
        ["Curso", "Crecimiento muy lento; no invasivo"]
      ]},
      { type: "subheading", content: "Tratamiento" },
      { type: "list", items: [
        "Escisión quirúrgica con márgenes: Curación en casi el 100% de los casos. Recidiva < 2%.",
        "Panel IHQ obligatorio: SMA, desmina, S-100, CD34 y Ki-67 para diagnóstico diferencial preciso."
      ]},

      { type: "divider" },

      { type: "subheading", content: "5.2 Rabdomioma" },
      { type: "paragraph", content: "El rabdomioma es la neoplasia benigna del músculo estriado esquelético, considerada la contraparte benigna del rabdomiosarcoma. Es un tumor infrecuente, con predilección por la región de cabeza y cuello (más del 80% de todos los rabdomiomas extracardíacos)." },
      { type: "subheading", content: "Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Localización", "Faringe posterior, lengua, piso de boca, mejilla, laringe. Intraoral: paladar blando, lengua"],
        ["Presentación", "Masa bien delimitada, solitaria (adulto) o multinodular (20% de casos)"],
        ["Tamaño", "Variable: 1–8 cm"],
        ["Consistencia", "Firme, elástica"],
        ["Sintomatología", "Disfagia, ronquera, sensación de cuerpo extraño; generalmente no doloroso"],
        ["Curso", "Crecimiento lento; 15% puede recidivar localmente"]
      ]},
      { type: "subheading", content: "Tratamiento" },
      { type: "list", items: [
        "Escisión quirúrgica completa: Único tratamiento; curación en > 85% de casos con márgenes adecuados.",
        "IHQ obligatoria: Miogenina, MyoD1, desmina, S-100 (neg), Ki-67 (bajo); sin esto no puede diferenciarse de rabdomiosarcoma."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: El rabdomioma es extraordinariamente raro; sin embargo, ante cualquier masa firme en lengua, piso de boca o faringe de un adulto masculino mayor de 40 años, debe incluirse en el diagnóstico diferencial. La diferenciación con rabdomiosarcoma es una emergencia diagnóstica." },

      { type: "divider" },

      { type: "heading", content: "6. Referencias Bibliográficas" },
      { type: "list", items: [
        "Khurshid Z, et al. (2023). Prevalence of oral human papillomavirus infection and its association with squamous cell papilloma. J Oral Pathol Med. 52(4): 321-330.",
        "Speight PM, et al. (2023). Pleomorphic adenoma of the salivary glands: Updated review. Head Neck Pathol. 17(2):445-460.",
        "Macdonald LC, et al. (2024). Impact of HPV vaccination on recurrence of oral squamous papilloma. Oral Oncol. 149:106687.",
        "WHO Classification of Head and Neck Tumours. 5th Edition (2022 updated 2023). IARC Press, Lyon.",
        "ISSVA (2023). Classification of Vascular Anomalies. Updated nomenclature.",
        "Vered M, et al. (2023). Fibroma of oral mucosa revisited. J Oral Maxillofac Pathol. 27(3):411-419.",
        "El-Naggar AK, et al. (2024). Molecular advances in salivary gland tumours. Virchows Arch. 484:221-232.",
        "Ramos-García P, et al. (2023). Oral lipoma: clinicopathological features of 52 cases. Oral Dis. 29(5):1890-1901.",
        "Léauté-Labrèze C, et al. (2024). Propranolol for infantile hemangiomas. N Engl J Med. 390:2145-2157.",
        "Kaban LB, et al. (2024). Management of traumatic neuromas of the inferior alveolar nerve. Int J Oral Maxillofac Surg. 53(8):712-723.",
        "Sharma R, et al. (2023). Oral leiomyoma: a systematic review of 89 reported cases. Head Neck Pathol. 17(4):1001-1015.",
        "Thompson LDR, et al. (2023). Adult rhabdomyoma of the head and neck. Virchows Arch. 483(3):301-316."
      ]}
    ]
  },
  {
    slug: "lesiones-potencialmente-malignas-cavidad-bucal",
    title: "Lesiones Potencialmente Malignas de la Cavidad Bucal",
    excerpt: "Leucoplasia, eritroplasia, estomatitis nicotínica, liquen plano oral, lupus eritematoso y leucoplasia verrucosa proliferativa. Sustentado en artículos científicos 2023–2025.",
    number: 5,
    sections: [
      { type: "heading", content: "1. Introducción: Lesiones Potencialmente Malignas Orales" },
      { type: "subheading", content: "1.1 Definición del Concepto" },
      { type: "paragraph", content: "Las Lesiones Potencialmente Malignas Orales (LPMO) —anteriormente denominadas lesiones precancerosas— son definidas por la Organización Mundial de la Salud (OMS, 2022–2023) como tejidos morfológicamente alterados en los que el cáncer tiene mayor probabilidad de producirse que en su contraparte normal. El término 'potencialmente maligno' fue acuñado para evitar la connotación determinista de 'precanceroso', reconociendo que no todas las lesiones progresan inexorablemente hacia el carcinoma." },
      { type: "paragraph", content: "Según la revisión sistemática de Warnakulasuriya et al. (2023), la tasa global de transformación maligna de las LPMO oscila entre el 0.13% y el 17.5% anual, siendo la eritroplasia la de mayor riesgo y la estomatitis nicotínica la de menor." },

      { type: "subheading", content: "1.2 Clasificación de las LPMO según la OMS (2022–2023)" },
      { type: "table", headers: ["Lesión", "Riesgo de Transformación Maligna"], rows: [
        ["Eritroplasia", "14–50% (más alto)"],
        ["Leucoplasia Verrucosa Proliferativa", "hasta 70% a largo plazo"],
        ["Leucoplasia no homogénea", "15–25%"],
        ["Leucoplasia homogénea", "1–5%"],
        ["Liquen plano oral (erosivo/atrófico)", "0.4–3.5%"],
        ["Lupus eritematoso oral", "< 1–2%"],
        ["Estomatitis nicotínica", "< 1% (reversible al cesar tabaco)"]
      ]},
      { type: "alert", variant: "info", content: "CONCEPTO CLAVE: La identificación clínica de una LPMO NO reemplaza la biopsia y el estudio histopatológico. Ninguna característica visual —por sí sola— permite establecer el grado de displasia epitelial. La biopsia es el estándar de oro diagnóstico." },

      { type: "divider" },

      { type: "heading", content: "2. Leucoplasia" },
      { type: "subheading", content: "2.1 Definición" },
      { type: "paragraph", content: "La leucoplasia oral (LPO) es definida por la OMS (2022) como una placa blanca de riesgo cuestionable, después de haber excluido otras enfermedades conocidas que no conllevan un mayor riesgo de cáncer. Es un diagnóstico de exclusión." },
      { type: "subheading", content: "2.2 Prevalencia" },
      { type: "list", items: [
        "Prevalencia global: 1.5–4.3% de la población adulta.",
        "Mayor incidencia: hombres entre 50–70 años, fumadores.",
        "Tasas de displasia: displasia epitelial presente en el 15–25% de las leucoplasias; 3–16% se transforman en CEC a los 10 años."
      ]},
      { type: "subheading", content: "2.3 Etiología" },
      { type: "table", headers: ["Factor", "Descripción"], rows: [
        ["Tabaco (principal)", "Cigarrillo, pipa, tabaco sin humo. Dosis-dependiente: 6× mayor riesgo en fumadores pesados. Nitrosaminas → daño ADN → mutación TP53."],
        ["Alcohol", "Efecto sinérgico con el tabaco. Acetaldehído → aductos ADN."],
        ["VPH (tipos 16 y 18)", "Identificado en 22–29% de leucoplasias orales mediante PCR. Activa oncoproteínas E6/E7."],
        ["Candida albicans", "Presente en el 7–50% de leucoplasias, especialmente en variante nodular."],
        ["Trauma crónico", "Prótesis desadaptadas, cúspides agudas. Genera hiperqueratosis reactiva."]
      ]},
      { type: "subheading", content: "2.4 Características Clínicas" },
      { type: "table", headers: ["Tipo", "Descripción"], rows: [
        ["Leucoplasia Homogénea", "Placa blanca uniforme, plana, superficie lisa o finamente rugosa. BAJO riesgo de displasia (< 5%)."],
        ["Leucoplasia No Homogénea", "Superficie irregular: eritroleucoplasia, leucoplasia nodular, leucoplasia verrucosa. ALTO riesgo (15–25% displasia)."],
        ["Eritroleucoplasia", "Combinación de áreas blancas y rojas en la misma lesión. Riesgo intermedio-alto."]
      ]},
      { type: "subheading", content: "2.5 Características Histopatológicas" },
      { type: "list", items: [
        "Hiperqueratosis/Paraqueratosis: Engrosamiento de la capa córnea sin o con núcleos residuales.",
        "Acantosis: Engrosamiento del estrato espinoso.",
        "Displasia Epitelial: Clasificada en Leve (1/3 inferior), Moderada (2/3) y Severa/Carcinoma in situ (todo el espesor). Criterios: pleomorfismo, hipercromasia, mitosis atípicas, pérdida de polaridad."
      ]},
      { type: "subheading", content: "2.6 Diagnósticos Diferenciales" },
      { type: "table", headers: ["Diagnóstico", "Características"], rows: [
        ["Candidiasis", "Se desprende al raspado → base eritematosa; cultivo + para Candida"],
        ["Liquen plano oral", "Patrón reticular (estrías de Wickham), bilateral y simétrico"],
        ["Leucoedema", "Mucosa engrosada blanquecina que desaparece al estirar la mucosa"],
        ["Morsicatio buccarum", "Mucosa yugal bilateral, superficie deshilachada, paciente refiere mordisqueo"],
        ["Nevo blanco esponjoso", "Familiar, difuso, toda la mucosa oral"],
        ["Queratosis friccional", "Blanca en zona de fricción evidente; desaparece al eliminar el factor"]
      ]},
      { type: "subheading", content: "2.7 Tratamiento" },
      { type: "list", items: [
        "Eliminación del factor causal: Cese tabáquico. Primera medida obligatoria.",
        "Escisión quirúrgica: Indicada en displasia moderada-severa, lesiones > 2 cm, localización de alto riesgo. Margen de 3–5 mm.",
        "Ablación con láser CO₂: Alternativa eficaz para leucoplasias extensas. Tasa de recurrencia ~30% a 5 años.",
        "Antifúngicos: Si se identifica Candida asociada.",
        "Vigilancia activa: En leucoplasias homogéneas sin displasia: control cada 3–6 meses."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: Todo paciente con placa blanca oral que no se desprende al raspado y persiste más de 2 semanas debe ser biopsiado o derivado. En lesiones de suelo de boca o vientre lingual, la prioridad de biopsia es MÁXIMA." },

      { type: "divider" },

      { type: "heading", content: "3. Eritroplasia" },
      { type: "subheading", content: "3.1 Definición" },
      { type: "paragraph", content: "La eritroplasia oral (EP) es definida por la OMS como una placa roja vellosa que no puede caracterizarse clínica ni histopatológicamente como cualquier otra enfermedad definida. Entre el 51–83% de las eritroplasias presentan displasia epitelial severa o carcinoma in situ al momento del diagnóstico, y hasta el 14–50% evolucionan a carcinoma invasivo." },
      { type: "subheading", content: "3.2 Prevalencia" },
      { type: "list", items: [
        "Prevalencia: 0.02–0.83% de la población adulta; mucho menos frecuente que la leucoplasia.",
        "Edad: predominio en adultos mayores de 60 años."
      ]},
      { type: "subheading", content: "3.3 Etiología" },
      { type: "table", headers: ["Factor", "Descripción"], rows: [
        ["Tabaco", "Principal factor. Carcinógenos directos sobre el epitelio."],
        ["Alcohol", "Efecto sinérgico con el tabaco."],
        ["VPH tipos 16 y 18", "Mayor prevalencia en eritroplasias que en leucoplasias."],
        ["Inmunosupresión", "Pacientes con VIH, trasplantados presentan formas más agresivas."],
        ["Deficiencias nutricionales", "Vitaminas A, C, E, B12, folato: papel protector del epitelio."],
        ["Idiopática", "Proporción significativa sin factor identificable; mayor agresividad biológica."]
      ]},
      { type: "subheading", content: "3.4 Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Aspecto", "Mancha o placa de color rojo intenso, aterciopelada, de bordes netos"],
        ["Localización", "Suelo de boca, vientre y bordes linguales, paladar blando, mucosa yugal posterior"],
        ["Superficie", "Lisa, aterciopelada (aspecto de terciopelo)"],
        ["Síntomas", "Usualmente asintomático; ardor o sensibilidad en formas extensas"],
        ["Variantes", "Eritroplasia pura, eritroleucoplasia (mixta roja-blanca), eritroplasia moteada"]
      ]},
      { type: "subheading", content: "3.5 Características Histopatológicas" },
      { type: "list", items: [
        "Atrofia epitelial: Epitelio delgado con escasa queratinización → permite ver la vascularización → color rojo.",
        "Displasia severa/Carcinoma in situ: Presente en el 51–83% de los casos.",
        "Carcinoma invasivo: Presente en el 14–50% al diagnóstico.",
        "IHQ: Ki-67 elevado (>30%), p53 mutado, ciclina D1 sobreexpresada."
      ]},
      { type: "alert", variant: "danger", content: "URGENCIA DIAGNÓSTICA: Toda eritroplasia requiere BIOPSIA INMEDIATA. No existe justificación para observación o tratamiento empírico previo. La alta prevalencia de displasia severa/carcinoma in situ exige derivación urgente." },
      { type: "subheading", content: "3.7 Tratamiento" },
      { type: "list", items: [
        "Escisión quirúrgica amplia: Primera línea con displasia moderada-severa/CIS. Márgenes de 5–10 mm.",
        "Ablación con láser CO₂ o Er:YAG: Para lesiones extensas.",
        "Vigilancia post-escisión estricta: Control cada 3 meses durante el primer año."
      ]},

      { type: "divider" },

      { type: "heading", content: "4. Estomatitis Nicotínica" },
      { type: "subheading", content: "4.1 Definición" },
      { type: "paragraph", content: "La estomatitis nicotínica (EN), también denominada paladar del fumador, es una queratosis reactiva del paladar duro, caracterizada por una mucosa blanco-grisácea difusa con pequeños nódulos rojos centrales que representan los orificios de las glándulas salivales menores inflamadas. Es considerada de bajo potencial maligno en fumadores de cigarrillo, pero de mayor riesgo en fumadores de pipa o tabaco invertido." },
      { type: "subheading", content: "4.2 Prevalencia" },
      { type: "list", items: [
        "Prevalencia: 3.0–4.7% de fumadores adultos.",
        "Reversibilidad: completa regresión clínica en el 85–90% de los casos al cesar el tabaco en 4–6 semanas."
      ]},
      { type: "subheading", content: "4.4 Características Clínicas" },
      { type: "table", headers: ["Característica", "Descripción"], rows: [
        ["Localización", "Paladar duro exclusivamente (y ocasionalmente paladar blando anterior)"],
        ["Aspecto establecido", "Mucosa blanco-grisácea difusa con nódulos rojos de 1–2 mm ('ojos de pescado' o 'empedrado')"],
        ["Color", "Blanco-grisáceo uniforme; los nódulos rojos son el signo patognomónico"],
        ["Sintomatología", "Usualmente asintomático; puede haber sensación de sequedad o ardor leve"],
        ["Evolución", "Progresiva con el tiempo de fumado; reversible con cese tabáquico"]
      ]},
      { type: "subheading", content: "4.7 Tratamiento" },
      { type: "list", items: [
        "Cese del hábito tabáquico: ÚNICA medida terapéutica necesaria. Regresión clínica en 4–6 semanas.",
        "Biopsia: Indicada solo en fumadores de tabaco invertido, lesiones que no regresan tras 6 semanas sin tabaco, o presencia de nódulos irregulares.",
        "Consejería antitabáquica estructurada: Protocolo de las 5 'A' (Ask, Advise, Assess, Assist, Arrange).",
        "Vareniclina (Champix®): Agonista parcial de receptores nicotínicos; primera línea farmacológica."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: La estomatitis nicotínica es una oportunidad de oro para la intervención antitabáquica. La lesión en sí es de bajo riesgo en fumadores de cigarrillo, pero es un marcador de riesgo general de cáncer oral. SIEMPRE revisar el resto de la cavidad bucal." },

      { type: "divider" },

      { type: "heading", content: "5. Liquen Plano Oral" },
      { type: "subheading", content: "5.1 Definición" },
      { type: "paragraph", content: "El liquen plano oral (LPO) es una enfermedad inflamatoria crónica de la mucosa oral de naturaleza inmunomediada, caracterizada por la activación de linfocitos T citotóxicos CD8+ que atacan los queratinocitos basales del epitelio oral. La tasa de transformación maligna se estima en 0.4–3.5%, principalmente en las formas erosivas/atróficas." },
      { type: "subheading", content: "5.2 Prevalencia" },
      { type: "list", items: [
        "Prevalencia oral: 1–4% de la población adulta general.",
        "Género: predominio femenino (2:1).",
        "Edad: principalmente en adultos de 40–70 años.",
        "Curso: crónico, en brotes y remisiones; raramente cura de manera espontánea."
      ]},
      { type: "subheading", content: "5.3 Etiología" },
      { type: "list", items: [
        "Respuesta inmune: Activación de linfocitos T CD4+ helper y CD8+ citotóxicos contra antígenos de queratinocitos basales.",
        "Estrés psicológico: Activa eje HPA → inmunosupresión + inflamación.",
        "Hepatitis C (VHC): OR de 2.5 para LP oral en pacientes con VHC.",
        "Reacción liquenoide a fármacos: AINEs, IECAs, antimaláricos, alopurinol, litio, β-bloqueantes.",
        "Materiales dentales: Amalgama de plata → reacción de hipersensibilidad de contacto.",
        "Predisposición genética: HLA-DRB1*0101, HLA-DQB1."
      ]},
      { type: "subheading", content: "5.4 Formas Clínicas" },
      { type: "list", items: [
        "Reticular (más frecuente): Estrías blancas intercruzadas (estrías de Wickham); asintomático; bajo riesgo maligno.",
        "En placa: Placa blanca homogénea sin estrías; simula leucoplasia.",
        "Papular: Pápulas blancas múltiples; transicional hacia reticular.",
        "Atrófico/Eritematoso: Áreas rojas atróficas con estrías periféricas; ardor moderado-severo; riesgo maligno intermedio.",
        "Erosivo/Ulcerativo: Úlceras pseudomembranosas sobre base eritematosa; muy sintomático; MAYOR riesgo de transformación maligna.",
        "Ampolloso (raro): Ampollas que se rompen rápidamente."
      ]},
      { type: "subheading", content: "5.5 Características Histopatológicas" },
      { type: "list", items: [
        "Banda liquenoide subepitelial: Infiltrado denso en banda de linfocitos T en la lámina propia superficial. Es el hallazgo más importante.",
        "Degeneración hidrópica de la capa basal: Vacuolización de los queratinocitos basales.",
        "Cuerpos de Civatte: Queratinocitos basales en apoptosis → cuerpos eosinofílicos. Patognomónicos.",
        "Membrana basal: Engrosada, irregular; PAS positivo prominente.",
        "Inmunofluorescencia directa (IFD): Depósitos de fibrinógeno en la unión epitelio-corion."
      ]},
      { type: "subheading", content: "5.6 Diagnósticos Diferenciales" },
      { type: "table", headers: ["Diagnóstico", "Características"], rows: [
        ["Reacción liquenoide", "Unilateral, adyacente a restauración/fármaco, mejora al retirar causa"],
        ["Leucoplasia", "Sin estrías de Wickham, no bilateral-simétrica"],
        ["Lupus eritematoso oral", "Estrías radiales o en abanico; IFD: depósitos IgG, C3 en membrana basal"],
        ["Penfigoide de membrana mucosa", "Ampollas subepiteliales; IFD: IgG lineal en membrana basal"],
        ["Pénfigo vulgar", "Ampollas intraepiteliales; células de Tzanck; IFD: IgG intercelular"]
      ]},
      { type: "subheading", content: "5.7 Tratamiento" },
      { type: "list", items: [
        "Corticoesteroides tópicos (primera línea): Clobetasol 0.05% o fluocinonida 0.05% en orabase, 2–3 veces/día.",
        "Corticoesteroides intralesionales: Triamcinolona acetonida 10–40 mg/mL en lesiones erosivas persistentes.",
        "Corticoesteroides sistémicos: Prednisona 0.5–1 mg/kg/día en brotes severos; ciclos cortos.",
        "Inhibidores de calcineurina tópicos: Tacrolimus 0.1% o pimecrolimus 1% (segunda línea).",
        "Retinoides tópicos: Tretinoína 0.1% gel en lesiones hiperqueratóticas resistentes."
      ]},
      { type: "subheading", content: "5.8 Nuevas Terapias (2023–2025)" },
      { type: "list", items: [
        "Tofacitinib (inhibidor JAK 1/3): Resolución del 60% de las lesiones erosivas refractarias.",
        "Apremilast (inhibidor PDE4): Mejoría sintomática significativa en estudios piloto.",
        "Plasma rico en factores de crecimiento (PRGF): Reducción del tamaño lesional en 70% a 3 meses.",
        "Fotobiomodulación (LLLT/PBM): Reducción del dolor del 70% comparado con corticoesteroides solos."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: El LPO erosivo/atrófico tiene potencial maligno real. Todo paciente con LPO debe tener: diagnóstico histopatológico confirmado, control fotográfico periódico, biopsia ante cualquier cambio." },

      { type: "divider" },

      { type: "heading", content: "6. Lupus Eritematoso Oral" },
      { type: "subheading", content: "6.1 Definición" },
      { type: "paragraph", content: "El lupus eritematoso (LE) es una enfermedad autoinmune crónica caracterizada por la producción de autoanticuerpos contra componentes nucleares. Las manifestaciones orales son frecuentes tanto en el lupus eritematoso sistémico (LES, 20–45% de pacientes) como en el lupus eritematoso discoide (LED, 25% de casos). Es reconocido como LPMO con bajo pero real potencial maligno (< 1–2%)." },
      { type: "subheading", content: "6.2 Prevalencia" },
      { type: "list", items: [
        "LES: prevalencia 50–100 casos/100,000 habitantes; mujeres en edad fértil (9:1 F:M).",
        "LED: 10–15% de todos los lupus eritematosos.",
        "Transformación maligna: < 2%; mayor riesgo en LED de larga evolución en labio inferior."
      ]},
      { type: "subheading", content: "6.3 Etiología" },
      { type: "list", items: [
        "Autoinmunidad: Pérdida de tolerancia a antígenos nucleares propios. ANA, anti-dsDNA, anti-Smith, anti-Ro/La.",
        "Factores genéticos: HLA-DR2, HLA-DR3; polimorfismos en genes de complemento.",
        "Luz ultravioleta (UV): Desencadenante mayor de brotes.",
        "Hormonas: Estrógenos proinflamatorios → explica predominio femenino.",
        "Infecciones virales: VEB (mimetismo molecular).",
        "Fármacos: Lupus inducido por hidralazina, procainamida, isoniazida."
      ]},
      { type: "subheading", content: "6.4 Características Clínicas" },
      { type: "list", items: [
        "LED oral: Lesión en diana: zona central eritematosa/atrófica o ulcerada, rodeada por estrías blancas radiales, con halo periférico eritematoso.",
        "LES oral: Úlceras aftosas recurrentes, petequias palatinas, eritema difuso.",
        "Localización: Labio inferior (característico del LED), mucosa yugal, paladar, lengua.",
        "Queilitis lúpica: Labio inferior eritematoso, escamoso, con úlceras y costras; riesgo de CEC.",
        "Xerostomía: Frecuente en LES por afectación de glándulas salivales."
      ]},
      { type: "subheading", content: "6.5 Características Histopatológicas" },
      { type: "list", items: [
        "Atrofia/Acantosis variable según la fase.",
        "Degeneración hidrópica basal: Similar al LP, pero menos intensa.",
        "Infiltrado inflamatorio: Linfocitos perivasculares y perifoliculares.",
        "Banda lúpica (IFD): Depósitos granulares de IgG, IgM, C3 y fibrina en membrana basal. Presente en el 80% de biopsias de LED activo. Hallazgo diagnóstico más específico."
      ]},
      { type: "subheading", content: "6.6 Diagnósticos Diferenciales" },
      { type: "table", headers: ["Diagnóstico", "Características"], rows: [
        ["Liquen plano oral", "Bilateral-simétrico, estrías de Wickham en red; IFD: fibrinógeno"],
        ["Eritema multiforme", "Inicio agudo, vesículas/ampollas múltiples, afectación labial con costras hemorrágicas"],
        ["Penfigoide de membrana mucosa", "IFD: IgG lineal en membrana basal (diferente de granular en lupus)"],
        ["Úlceras aftosas recurrentes", "Sin halo eritematoso/blanco periférico; no en zonas fotoexpuestas"],
        ["Queilitis actínica", "Sin lesión intraoral, sin autoanticuerpos; displasia sin banda lúpica"]
      ]},
      { type: "subheading", content: "6.7 Tratamiento" },
      { type: "list", items: [
        "Fotoprotección: OBLIGATORIA. Protector solar labial FPS ≥ 50.",
        "Corticoesteroides tópicos: Clobetasol 0.05% (primera línea para lesiones orales activas).",
        "Antimaláricos sistémicos: Hidroxicloroquina 200–400 mg/día. Medicamento base.",
        "Belimumab (anti-BAFF): Aprobado FDA para LES activo.",
        "Anifrolumab (anti-IFN tipo I): Nueva opción en LES refractario.",
        "Vigilancia oncológica: Biopsia de lesiones de LE de larga data en labio inferior."
      ]},
      { type: "alert", variant: "warning", content: "CONSIDERACIÓN ODONTOLÓGICA: El odontólogo puede ser el primero en sospechar lupus ante lesiones orales características. En pacientes con LES conocido: riesgo elevado de caries rampante (xerostomía), enfermedad periodontal, osteoporosis. Evitar AINEs en pacientes con LES." },

      { type: "divider" },

      { type: "heading", content: "7. Leucoplasia Verrucosa Proliferativa (LVP)" },
      { type: "subheading", content: "7.1 Definición" },
      { type: "paragraph", content: "La leucoplasia verrucosa proliferativa (LVP) es una forma distintiva y agresiva de leucoplasia oral, caracterizada por ser multifocal, de distribución difusa, con superficie verrucosa/exofítica, de evolución progresiva e irreversible, y con una de las tasas más altas de transformación maligna entre todas las LPMO: hasta el 60–74% evoluciona a carcinoma a largo plazo." },
      { type: "subheading", content: "7.2 Prevalencia" },
      { type: "list", items: [
        "Prevalencia: 2.5–5% de todas las leucoplasias orales.",
        "Género: predominio femenino (3:1–4:1).",
        "Transformación maligna: 60–74% a largo plazo; recurrencia post-escisión cercana al 85%.",
        "Mortalidad: Media de supervivencia a 5 años del 56%."
      ]},
      { type: "subheading", content: "7.3 Etiología" },
      { type: "list", items: [
        "Idiopática (principal): La MAYORÍA de casos (60–70%) ocurren en NO fumadores, especialmente mujeres mayores.",
        "VPH (controvertido): Reportado en 0–81% de casos según la serie.",
        "Alteraciones moleculares: LOH en 3p, 9p, 4q, 8p. Mutaciones TP53 (50% de casos).",
        "EBV: Detectado en el 36–55% de LVP en estudios recientes."
      ]},
      { type: "subheading", content: "7.4 Características Clínicas (Estadios)" },
      { type: "table", headers: ["Estadio", "Tipo", "Descripción"], rows: [
        ["1", "Leucoplasia simple", "Placa blanca plana, homogénea. INDISTINGUIBLE de leucoplasia común."],
        ["2", "Leucoplasia verrucosa", "Superficie rugosa, exofítica, verrucosa. Inicio de multifocalidad."],
        ["3", "LVP establecida", "Múltiples placas blancas confluentes, verrucosas, extensas. Afectación bilateral."],
        ["4", "Carcinoma verrucoso", "Tumor verrucoso exofítico, blanco, de crecimiento lento pero localmente destructivo."],
        ["5", "CEC convencional", "Transformación en carcinoma invasivo de células escamosas."]
      ]},
      { type: "subheading", content: "7.5 Criterios Diagnósticos (Consenso 2023)" },
      { type: "alert", variant: "info", content: "CRITERIOS DIAGNÓSTICOS REVISADOS (Bagan et al., 2023): Requiere: (1) Leucoplasia de superficie rugosa/verrucosa o múltiples leucoplasias orales. (2) Extensión progresiva a lo largo del tiempo (≥ 2 localizaciones). (3) Recurrencia después del tratamiento. (4) Sin otra causa identificable. El diagnóstico es CLÍNICO-PATOLÓGICO." },
      { type: "subheading", content: "7.8 Tratamiento" },
      { type: "list", items: [
        "Escisión quirúrgica amplia: Tasa de recidiva cercana al 85%. Márgenes ≥ 5 mm.",
        "Ablación con láser CO₂: Para lesiones extensas no resecables quirúrgicamente.",
        "Fotodinámica terapia (PDT): Resultados prometedores en series 2023–2024.",
        "Combinación cirugía + PDT: Mejor control local a 12 meses (59% vs 38%).",
        "Vigilancia intensiva: Cada 2–3 meses con examen clínico completo y fotografía."
      ]},
      { type: "alert", variant: "danger", content: "CONSIDERACIÓN ODONTOLÓGICA: La LVP es el escenario donde el odontólogo puede tener el mayor impacto en supervivencia. Ante cualquier leucoplasia en mujer mayor de 60 años, no fumadora, con afectación gingival o multifocal: pensar en LVP. La BIOPSIA INICIAL puede no revelar displasia significativa (subestimación histológica), pero esto no descarta LVP. Control cada 2–3 meses." },

      { type: "divider" },

      { type: "heading", content: "8. Referencias Bibliográficas" },
      { type: "list", items: [
        "Warnakulasuriya S, et al. (2023). Oral potentially malignant disorders: A consensus report. Oral Dis. 29(7):1798-1816.",
        "Mello FW, et al. (2023). The global prevalence of oral potentially malignant disorders. Crit Rev Oncol Hematol. 185:103949.",
        "Gupta A, et al. (2023). Proliferative verrucous leukoplakia: Clinicopathological aspects. Oral Oncol. 147:106588.",
        "Bagan JV, et al. (2023). Revised criteria for proliferative verrucous leukoplakia. J Oral Pathol Med. 52(8):695-702.",
        "Giuliani M, et al. (2023). Rate of malignant transformation of oral lichen planus. Oral Dis. 29(3):999-1011.",
        "Mortazavi H, et al. (2023). Oral lichen planus and hepatitis C virus infection. J Oral Pathol Med. 52(4):289-299.",
        "van der Waal I. (2023). Erythroplakia: An underestimated potentially malignant disorder. Oral Dis. 29(4):1324-1328.",
        "Hung KF, et al. (2024). AI-based detection of oral potentially malignant disorders. Oral Oncol. 152:106752.",
        "Mello FW, et al. (2024). Photodynamic therapy for oral leukoplakia. Oral Oncol. 153:106802.",
        "EAOM (2024). Updated guidelines for oral potentially malignant disorders. Oral Dis.",
        "Fantozzi PJ, et al. (2024). JAK inhibitors in oral lichen planus. J Eur Acad Dermatol Venereol. 38(3):541-550.",
        "WHO Classification of Head and Neck Tumours (2022, updated 2023). IARC Press, Lyon."
      ]}
    ]
  }
];
