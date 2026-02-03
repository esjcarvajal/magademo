

## Resumen

Aumentar el tamaño de la imagen del logo en el hero de la página "Sobre Mí" para que ocupe toda la sección, similar a como aparece en la sección "About" del home.

## Cambios a realizar

### Archivo: `src/pages/SobreMi.tsx`

**Modificación del contenedor de imagen (líneas 29-36)**

Cambiar el estilo del contenedor y la imagen para que sea más grande y ocupe todo el espacio disponible:

- **Imagen actual**: `w-48 h-auto` (tamaño fijo pequeño de 12rem)
- **Imagen nueva**: `w-full h-auto object-contain` (ocupa todo el ancho disponible)

- **Contenedor actual**: `p-10` (padding de 2.5rem)
- **Contenedor nuevo**: `p-12` (padding de 3rem, igual que en el home)

Esto hará que la imagen tenga el mismo comportamiento visual que en la sección AboutSection del home, ocupando todo el espacio del contenedor con el efecto de gradiente blur detrás.

## Detalles técnicos

```text
Antes:
┌─────────────────────────┐
│  ┌─────────┐            │
│  │  Logo   │  w-48      │
│  │  (12rem)│            │
│  └─────────┘            │
└─────────────────────────┘

Después:
┌─────────────────────────┐
│ ┌─────────────────────┐ │
│ │                     │ │
│ │       Logo          │ │
│ │     (w-full)        │ │
│ │                     │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

