import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentAuthProvider } from "@/contexts/StudentAuthContext";
import Index from "./pages/Index";
import SobreMi from "./pages/SobreMi";
import Servicios from "./pages/Servicios";
import ServicioDetalle from "./pages/ServicioDetalle";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacto from "./pages/Contacto";
import Estudiantes from "./pages/Estudiantes";
import Temas from "./pages/Temas";
import TemaDetalle from "./pages/TemaDetalle";
import MedicinaOdontologia from "./pages/MedicinaOdontologia";
import LibrosPatologia from "./pages/LibrosPatologia";
import ExploracionClinica from "./pages/ExploracionClinica";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <StudentAuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:slug" element={<ServicioDetalle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/estudiantes" element={<Estudiantes />} />
            <Route path="/estudiantes/temas" element={<Temas />} />
            <Route path="/estudiantes/temas/:slug" element={<TemaDetalle />} />
            <Route path="/estudiantes/medicina-odontologia" element={<MedicinaOdontologia />} />
            <Route path="/estudiantes/libros-patologia" element={<LibrosPatologia />} />
            <Route path="/estudiantes/exploracion-clinica" element={<ExploracionClinica />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StudentAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
