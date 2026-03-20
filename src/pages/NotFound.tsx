import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import draCastroImg from "@/assets/dra-castro-404.jpg";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center py-16">
        <div className="healthcare-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-8 border-4 border-accent/20 shadow-lg">
              <img
                src={draCastroImg}
                alt="Dra. María Gabriela Castro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-7xl font-serif font-bold text-accent mb-4">404</div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¡Ups! Parece que este contenido no está disponible
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Es posible que la página haya sido movida o que la dirección no sea correcta. 
              Te invitamos a revisar el enlace o volver al inicio.
            </p>
            <Link to="/">
              <Button className="healthcare-btn-primary gap-2">
                <Home className="h-5 w-5" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
