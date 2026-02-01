import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-magacastro.png";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/sobre-mi" },
  { name: "Servicios", href: "/servicios" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="healthcare-container" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Ir al inicio">
            <img 
              src={logo} 
              alt="Dra. María Gabriela Castro - Odontólogo" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  location.pathname === item.href 
                    ? "text-accent" 
                    : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+584144402838" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              0414-4402838
            </a>
            <Link to="/contacto">
              <Button className="healthcare-btn-primary">
                Agendar Cita
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === item.href 
                      ? "text-accent" 
                      : "text-foreground/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50">
                <a 
                  href="tel:+584144402838" 
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4"
                >
                  <Phone className="h-4 w-4" />
                  0414-4402838
                </a>
                <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="healthcare-btn-primary w-full">
                    Agendar Cita
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};