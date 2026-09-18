# MAGACASTRO.COM

## Contexto
Sitio web de la Dra. María Gabriela Castro. El sitio cubre dos perfiles
distintos de la doctora: el clínico (pacientes) y el docente (estudiantes).
Ambos conviven en el mismo dominio pero con audiencias y tonos separados.

Repositorio: esjcarvajal/magademo
Stack: Vite + React + TypeScript + Tailwind + shadcn/ui (base generada en Lovable)

## Objetivo general
Modernizar la web y añadir tres capacidades nuevas:

1. **Blog** con artículos escritos y videos, gestionado desde un backend propio.
2. **Área de estudiantes** — sección interna con artículos, temas de estudio
   e información de interés para los alumnos de la doctora.
3. **Grid de testimonios** en la home, alimentado con las reseñas del perfil
   de Google Business Profile.

## Especificación del blog

### Backend
Panel de administración protegido por contraseña para crear, editar y publicar
artículos. No es un sitio multiusuario: una sola autora.

### Estructura de cada artículo
- H1
- Extracto (resumen corto, se usa también como meta description y en los listados)
- Imagen destacada
- Bloque de puntos clave del artículo
- Índice de contenidos (generado a partir de los H2/H3)
- Cuerpo del artículo con:
  - Jerarquía de encabezados H2, H3, H4
  - Imágenes intercaladas en el texto
  - Videos embebidos

### Área de estudiantes
Sección interna separada del blog público. Mismo tipo de contenido editorial,
distinta audiencia y distinto control de acceso.

## Cómo trabajamos

- El chat del proyecto se usa para decidir arquitectura, revisar enfoques y
  redactar especificaciones.
- Claude Code se usa para ejecutar sobre el repositorio.
- Cuando el chat produzca una decisión técnica, devuélvela en un formato que
  yo pueda pegar directamente en Claude Code: ruta de archivo, cambio concreto,
  sin preámbulo.
- Cuando Claude Code produzca un resultado que yo traiga de vuelta al chat,
  trátalo como el estado real del repositorio y trabaja desde ahí, no desde
  lo que se asumió en mensajes anteriores.

## Reglas de trabajo

- No inventes rutas, componentes ni dependencias: si no sabes qué hay en un
  archivo, pídemelo antes de escribir código sobre él.
- Da opiniones estratégicas directas. Si un enfoque que propongo es peor que
  la alternativa, dímelo con el porqué.
- Código listo para implementar, sin pseudocódigo ni fragmentos incompletos.
- SEO no es un añadido posterior: cada decisión de estructura se toma ya
  pensando en indexación, encabezados, datos estructurados y rendimiento.
- Todo el contenido visible del sitio va en español.
- Reutiliza los componentes de shadcn/ui ya presentes antes de crear nuevos.