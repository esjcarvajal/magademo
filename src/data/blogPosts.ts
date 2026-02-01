// Blog posts extracted from WordPress XML export
// Each post maintains its original slug for SEO preservation

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 133,
    title: "Entre lo que quiere el paciente y lo que quiere el odontólogo",
    slug: "lo-quiere-paciente-lo-quiere-odontologo",
    date: "2016-11-19",
    excerpt: "En la consulta odontológica se ponen de manifiesto diversos pensamientos, algunos por el paciente y el otros por el odontólogo ¿pero cual es más relevante?",
    content: `<p>Cuando se está en el consultorio odontológico se ponen de manifiesto diversos pensamientos, algunos pueden surgir por el paciente y el otro por el odontólogo, que pueden estar o no en la misma sintonía.</p>
    <p>Existen pensamientos que surgen del paciente y su estado o que están relacionados a la sintomatología o el conjunto de aspectos causantes de desagrado para él. También se pueden formular inquietudes en cuanto al tipo de dolor que quizás se pueda desarrollar en la realización de los procedimientos en el sillón dental, el tiempo invertido, el costo que se deberá pagar.</p>
    <h2>Lo que espera el paciente</h2>
    <p>Tomar en cuenta las expectativas del paciente, por parte del profesional, es de vital importancia, de allí aquello que recita "la belleza puede ser subjetiva a la mirada del espectador".</p>
    <h3>El rol del odontólogo</h3>
    <p>Muchas veces es una de las tareas del Odontólogo brindar educación en este aspecto, explicando cual es la mejor alternativa sin que se comprometa la salud del paciente.</p>
    <p>Informar a los pacientes de las complicaciones a mediano y largo plazo en cuanto a la elección de determinados tratamientos, costos a futuro y precauciones.</p>`,
    category: "Consejos Odontológicos",
    readingTime: 4
  },
  {
    id: 325,
    title: "Caries dental. Todo lo que debes saber",
    slug: "caries-dental-todo-lo-que-debes-saber",
    date: "2018-01-31",
    excerpt: "Resulta de vital interés destacar el lamentable hecho del porcentaje elevado de Caries dental en los pacientes que acuden a la consulta odontológica.",
    content: `<p>Resulta de vital interés destacar, el lamentable hecho del porcentaje elevado de Caries dental en los pacientes que acuden a la consulta odontológica.</p>
    <h2>¿QUÉ ES LA CARIES DENTAL?</h2>
    <p>La Caries dental es una patología bucal de carácter infeccioso, con la característica de ser transmisible o contagiosa entre los individuos, capaz de producir una cavidad patológica en la estructura dentaria.</p>
    <h2>ETAPAS O EVOLUCIÓN DE LAS CARIES</h2>
    <p>Debemos puntualizar el aspecto clínico observado de la Caries dental en las etapas iniciales apreciado en la superficie dentaria como una mancha blanquecina.</p>
    <h2>CAUSAS Y ETIOLOGÍA DE LA CARIES DENTAL</h2>
    <p>Para que los dientes con caries existan se requiere de microorganismos patógenos y sustancias como la sacarosa proveniente en su mayoría de los carbohidratos fermentados de la dieta.</p>
    <h2>CARIES EN NIÑOS</h2>
    <p>La Caries dental es transmitida durante el embarazo por vía vertical de la madre al bebe, de allí la importancia de las consultas prenatales de prevención.</p>`,
    category: "Consejos Odontológicos",
    readingTime: 8
  },
  {
    id: 393,
    title: "Importancia de la reposición de los dientes ante una pérdida dentaria",
    slug: "importancia-de-la-reposicion-de-los-dientes-ante-una-perdida-dentaria",
    date: "2019-03-19",
    excerpt: "Los dientes perdidos por cualquier causa deben ser sustituidos mediante el uso de prótesis dentales en la brevedad posible.",
    content: `<p>Los dientes perdidos por cualquier causa, bien sea por caries profundas que impiden ser reparados, por fracturas dentales, por abscesos, o problemas periodontales deben ser sustituidos mediante el uso de prótesis dentales en la brevedad posible.</p>
    <h2>¿Qué complicaciones acarrea el no sustituir los dientes perdidos?</h2>
    <p>Cuando existen dientes faltantes por perdida prematura o patológica causan una desarmonía en todo el sistema estomatognatico.</p>
    <h3>El tiempo juega en contra</h3>
    <p>A medida que el tiempo transcurre las alteraciones producto de las pérdidas dentarias se agravan.</p>
    <h2>La pérdida de piezas dentales origina alteraciones en la masticación</h2>
    <p>Los pacientes tienden a masticar más en el lado con más unidades dentarias o donde no poseen dolor.</p>`,
    category: "Consejos Odontológicos",
    readingTime: 5
  },
  {
    id: 398,
    title: "Como el tabaco afecta a nuestra salud dental",
    slug: "como-el-tabaco-afecta-a-nuestra-salud-dental",
    date: "2018-08-31",
    excerpt: "Es innegable los efectos nocivos del cigarrillo en la población. ¿Te has puesto a pensar alguna vez cómo el tabaco afecta a nuestra salud dental?",
    content: `<p>Es innegable los efectos nocivos del cigarrillo en la población. Pero… ¿Te has puesto a pensar alguna vez cómo el tabaco afecta a nuestra salud dental?</p>
    <h2>Pero hablemos de los efectos del cigarrillo en nuestra salud bucal</h2>
    <h3>Enfermedades periodontales</h3>
    <p>Las enfermedades periodontales son inflamaciones del periodonto (encías, fibras periodontales y huesos dentales).</p>
    <h3>Caries</h3>
    <p>La caries es el resultado de la actividad de bacterias en la cavidad oral. Los fumadores suelen tener más caries que los que no lo son.</p>
    <h3>Cambios en la mucosa oral</h3>
    <p>La enfermedad precancerosa más común en la cavidad oral es la mancha blanca (leucoplasia).</p>
    <h2>Prevención de las enfermedades bucales causadas por el cigarrillo</h2>
    <p>Indudablemente la mejor disciplina de prevención a este tipo de enfermedades bucales es el abandono total del hábito.</p>`,
    category: "Consejos Odontológicos",
    readingTime: 5
  },
  {
    id: 459,
    title: "Dientes amarillos ¿a qué se debe y cómo tratarlo?",
    slug: "dientes-amarillos-a-que-se-debe-y-como-tratarlo",
    date: "2019-03-19",
    excerpt: "Descubre las causas del amarillamiento dental y los tratamientos disponibles para recuperar el blanco natural de tus dientes.",
    content: `<p>El color de los dientes puede variar por múltiples factores, desde la genética hasta los hábitos alimenticios.</p>
    <h2>Causas del amarillamiento dental</h2>
    <p>Entre las principales causas encontramos el consumo de café, té, vino tinto y tabaco.</p>
    <h2>Tratamientos disponibles</h2>
    <p>Existen múltiples opciones desde blanqueamientos profesionales hasta carillas dentales.</p>`,
    category: "Caso clínico",
    readingTime: 8
  },
  {
    id: 478,
    title: "Todo sobre los Miniimplantes en la ortodoncia",
    slug: "todo-sobre-los-miniimplantes-en-la-ortodoncia",
    date: "2019-06-14",
    excerpt: "Dentro de la odontología la ortodoncia es una de las ramas que debe mantenerse en constante actualización, utilizando las herramientas tecnológicas más avanzadas.",
    content: `<p>Dentro de la odontología la ortodoncia es una de las ramas que debe mantenerse en constante actualización.</p>
    <h2>La ortodoncia y los miniimplantes</h2>
    <p>En búsqueda de solventar los problemas de maloclusión o mordida, los investigadores han integrado el uso de implantes a los esquemas de tratamiento.</p>
    <h2>Aplicaciones clínicas de los miniimplantes en la ortodoncia</h2>
    <p>Los miniimplantes son empleados por los dentistas cuando se desea lograr movimientos específicos.</p>
    <h2>Ventajas del diseño de los miniimplantes</h2>
    <p>Son materiales biocompatibles, generan confort en el paciente y disminuyen los tiempos de tratamiento.</p>`,
    category: "Consejos Odontológicos",
    readingTime: 4
  },
  {
    id: 486,
    title: "¿Qué es la periodontitis? Tratamiento periodontal, consejos para evitar la periodontitis",
    slug: "que-es-la-periodontitis-tratamiento-periodontal-consejos-para-evitar-la-periodontitis",
    date: "2019-10-28",
    excerpt: "La periodontitis es una infección grave de las encías causada por bacterias que se han acumulado en los dientes y las encías.",
    content: `<p>La periodontitis es una infección grave de las encías. Es causada por bacterias que se han acumulado en los dientes y las encías.</p>
    <h2>¿Cuáles son las etapas de la periodontitis?</h2>
    <h3>Inflamación (gingivitis)</h3>
    <p>La periodontitis comienza con una inflamación en las encías conocida como gingivitis.</p>
    <h3>Enfermedad periodontal temprana</h3>
    <p>En las primeras etapas, las encías se retraen y se forman pequeñas bolsas entre las encías y los dientes.</p>
    <h2>¿Cuáles son los síntomas de la periodontitis?</h2>
    <p>Encías que sangran, mal aliento, cambios en la posición de los dientes, encías retraídas.</p>`,
    category: "Consejos Odontológicos",
    readingTime: 6
  },
  {
    id: 510,
    title: "COVID-19: Uso de tapabocas y mascarillas",
    slug: "covid-19-uso-de-tapabocas-y-mascarillas",
    date: "2020-03-21",
    excerpt: "En la actualidad los científicos trabajan sin descansar para entender el mecanismo de funcionamiento del Coronavirus 2019-nCoV.",
    content: `<p>En la actualidad los científicos trabajan sin descansar para entender el mecanismo de funcionamiento del Coronavirus.</p>
    <h2>Método de elaboración de tapaboca para sujetarlo por medio de cintas</h2>
    <p>Debes cortar 2 cintas iguales de 1 cm de ancho y 25cm de largo.</p>
    <h2>Recomendaciones para quitar y lavar el tapabocas</h2>
    <p>Al terminar de usar el tapaboca, asegúrate de retirarlo por las cintas sin tocar el rectángulo del tapabocas.</p>`,
    category: "Covid-19",
    readingTime: 12
  },
  {
    id: 520,
    title: "¿Qué casos se consideran urgencia dental? Cómo actuar ante ellas",
    slug: "que-casos-se-consideran-urgencia-dental-como-actuar-ante-ellas",
    date: "2020-05-13",
    excerpt: "Cuando se trata de un problema dental, tu dentista debería ser la primera persona a la que llames.",
    content: `<p>Cuando se trata de un problema dental, tu dentista debería ser la primera persona a la que llames.</p>
    <h2>Cómo saber si es una emergencia dental</h2>
    <p>No todas las situaciones dentales deben considerarse una urgencia. Pregúntate: ¿Tiene un dolor intenso? ¿Ha perdido un diente?</p>
    <h2>¿Qué no es una emergencia dental?</h2>
    <p>Si el problema puede esperar hasta que tu dentista te vea en los próximos días, no es una emergencia dental.</p>
    <h2>Emergencias dentales comunes</h2>
    <p>Diente caído, diente agrietado o astillado, diente con absceso.</p>`,
    category: "Recomendaciones Bibliográficas",
    readingTime: 7
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return blogPosts.slice(0, limit);
  
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => post.category === currentPost.category)
    .slice(0, limit);
};

export const getAllCategories = (): string[] => {
  return [...new Set(blogPosts.map(post => post.category))];
};