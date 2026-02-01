import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="healthcare-container">
          <div className="text-center max-w-lg mx-auto">
            <div className="text-8xl font-serif font-bold text-accent mb-6">404</div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Página no encontrada
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="healthcare-btn-primary">
                  <Home className="mr-2 h-5 w-5" />
                  Ir al Inicio
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="healthcare-btn-secondary"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver Atrás
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
