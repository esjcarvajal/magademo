import { useState } from "react";
import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es muy largo"),
  email: z.string().trim().email("Ingresa un correo electrónico válido").max(255, "El correo es muy largo"),
  phone: z.string().trim().min(10, "Ingresa un número de teléfono válido").max(20, "El teléfono es muy largo"),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "El mensaje es muy largo")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const phoneNumber = "584144402838";
  const message = encodeURIComponent("Hola Dra. María Gabriela, me gustaría agendar una cita.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="healthcare-container">
          <Breadcrumbs items={[{ label: "Contacto" }]} />
          
          <div className="max-w-3xl mt-8">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Contáctanos
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Agenda tu Cita
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos por el medio que prefieras 
              y agendaremos tu cita lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tucorreo@ejemplo.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0414-1234567"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="healthcare-btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              {/* WhatsApp Alternative */}
              <div className="mt-8 p-6 bg-[#25D366]/10 rounded-2xl">
                <p className="text-foreground font-medium mb-4">
                  ¿Prefieres contactarnos directamente?
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dirección</h3>
                    <p className="text-muted-foreground">
                      Edif Informa, Av. Universidad de Naguanagua<br />
                      Valencia, Carabobo, Venezuela
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <a 
                      href="tel:+584144402838" 
                      className="text-accent hover:underline"
                    >
                      0414-4402838
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Correo</h3>
                    <a 
                      href="mailto:odontologo@magacastro.com" 
                      className="text-accent hover:underline"
                    >
                      odontologo@magacastro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Horario</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.8671!2d-68.0251!3d10.2721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE2JzE5LjYiTiA2OMKwMDEnMzAuNCJX!5e0!3m2!1ses!2sve!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del consultorio de la Dra. María Gabriela Castro"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;