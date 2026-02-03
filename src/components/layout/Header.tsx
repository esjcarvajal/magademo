import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo-magacastro.png";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/sobre-mi" },
  { name: "Servicios", href: "/servicios" },
  { 
    name: "Estudiantes", 
    href: "/estudiantes",
    submenu: [
      { name: "Recursos Descargables", href: "/estudiantes" },
      { name: "Medicina en Odontología", href: "/estudiantes/medicina-odontologia" },
      { name: "Libros de Patología Bucal", href: "/estudiantes/libros-patologia" },
      { name: "Exploración Clínica", href: "/estudiantes/exploracion-clinica" },
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (href: string) => {
    if (href === "/estudiantes") {
      return location.pathname.startsWith("/estudiantes");
    }
    return location.pathname === href;
  };

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
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-accent ${
                    isActiveRoute(item.href) 
                      ? "text-accent" 
                      : "text-foreground/80"
                  }`}>
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.name} asChild>
                        <Link 
                          to={subitem.href}
                          className={`w-full ${
                            location.pathname === subitem.href ? "text-accent" : ""
                          }`}
                        >
                          {subitem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                    isActiveRoute(item.href) 
                      ? "text-accent" 
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a href="tel:+584144402838">
              <Button className="healthcare-btn-primary">
                <Phone className="h-4 w-4 mr-2" />
                0414-4402838
              </Button>
            </a>
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
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      className={`flex items-center justify-between w-full text-base font-medium py-2 transition-colors ${
                        isActiveRoute(item.href) 
                          ? "text-accent" 
                          : "text-foreground/80"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileSubmenuOpen && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className={`block text-sm py-2 transition-colors ${
                              location.pathname === subitem.href 
                                ? "text-accent" 
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileSubmenuOpen(false);
                            }}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-medium py-2 transition-colors ${
                      isActiveRoute(item.href) 
                        ? "text-accent" 
                        : "text-foreground/80"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-border/50">
                <a href="tel:+584144402838" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="healthcare-btn-primary w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    0414-4402838
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
