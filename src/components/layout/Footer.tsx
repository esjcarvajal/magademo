import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logoSquare from "@/assets/logo-mg-square.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="healthcare-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img 
              src={logoSquare} 
              alt="Dra. María Gabriela Castro" 
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Odontólogo en Naguanagua con 16 años de experiencia. 
              Docente de Patología Bucal en la Universidad de Carabobo.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/magacastro_odontologo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/magacastro.odontologo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {[
                { name: "Limpieza Dental", href: "/servicios/limpieza-dental" },
                { name: "Diseño de Sonrisa", href: "/servicios/diseno-de-sonrisa" },
                { name: "Endodoncia", href: "/servicios/endodoncia" },
                { name: "Cirugía de Cordales", href: "/servicios/cirugia-dental-cordales" },
                { name: "Patología Bucal", href: "/servicios/patologia-bucal" },
                { name: "Emergencias", href: "/servicios/emergencias-dentales" },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Sobre Mí", href: "/sobre-mi" },
                { name: "Blog", href: "/blog" },
                { name: "Contacto", href: "/contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Edif Informa, Av. Universidad de Naguanagua, Valencia, Carabobo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+584144402838" 
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  0414-4402838
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:magacastros0@gmail.com" 
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  magacastros0@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Lun - Vie: 8:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="healthcare-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Dra. María Gabriela Castro. Todos los derechos reservados.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Odontólogo en Naguanagua, Valencia, Venezuela
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};