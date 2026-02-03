import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import carousel1 from "@/assets/carousel/carousel-1.png";
import carousel2 from "@/assets/carousel/carousel-2.png";
import carousel3 from "@/assets/carousel/carousel-3.png";
import carousel4 from "@/assets/carousel/carousel-4.png";
import carousel5 from "@/assets/carousel/carousel-5.png";
import carousel6 from "@/assets/carousel/carousel-6.png";
import carousel7 from "@/assets/carousel/carousel-7.png";

const images = [
  { src: carousel1, alt: "Dra. María Gabriela Castro con modelo dental" },
  { src: carousel2, alt: "Tratamiento dental en consultorio" },
  { src: carousel3, alt: "Dra. María Gabriela Castro con instrumentos" },
  { src: carousel4, alt: "Dra. María Gabriela Castro con mascarilla" },
  { src: carousel5, alt: "Análisis de radiografía dental" },
  { src: carousel6, alt: "Dra. María Gabriela Castro en consultorio" },
  { src: carousel7, alt: "Equipo dental en procedimiento" },
];

export const ImageCarousel = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: false,
    },
    [autoplayRef.current]
  );

  return (
    <section className="py-0 overflow-hidden bg-accent">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-[280px] md:w-[360px] lg:w-[400px] aspect-[3/4]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index < 4 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
