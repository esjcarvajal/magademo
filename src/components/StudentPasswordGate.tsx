import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { useStudentAuth } from "@/contexts/StudentAuthContext";

interface StudentPasswordGateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const StudentPasswordGate = ({
  children,
  title = "Área de Estudiantes",
  description = "Esta sección contiene recursos exclusivos para estudiantes de Patología Bucal. Ingresa la contraseña proporcionada por tu profesor para acceder.",
}: StudentPasswordGateProps) => {
  const { isAuthenticated, authenticate } = useStudentAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <>{children}</>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authenticate(password)) {
      setError("");
    } else {
      setError("Contraseña incorrecta. Intenta de nuevo.");
    }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="healthcare-container">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">{title}</h1>
              <p className="text-muted-foreground mb-6">{description}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Ingresa la contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center"
                />
                {error && <p className="text-destructive text-sm">{error}</p>}
                <Button type="submit" className="w-full healthcare-btn-primary">
                  Acceder
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
