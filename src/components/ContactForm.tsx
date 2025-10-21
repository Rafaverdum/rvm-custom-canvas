import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Crear el enlace mailto con los datos del formulario
    const subject = encodeURIComponent(`Consulta de ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone || 'No proporcionado'}\n\n` +
      `Mensaje:\n${formData.message}`
    );
    
    window.location.href = `mailto:rvmcustomizer@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "¡Gracias por contactarnos!",
      description: "Tu cliente de correo se abrirá con tu mensaje.",
    });

    // Limpiar formulario
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hablemos de tu <span className="text-primary">Proyecto</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Nuestro equipo está preparado para convertir tus ideas en realidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Información de Contacto */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-all duration-300 shadow-card">
              <CardHeader className="border-b border-border pb-6">
                <CardTitle className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  RVMCUSTOMIZER
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Excelencia en diseño y personalización profesional
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3.5 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Ubicación</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pintor Pinazo N8<br />
                      03440 Ibi, Alicante<br />
                      España
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3.5 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Teléfono</h3>
                    <a 
                      href="tel:665511935" 
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      +34 665 511 935
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3.5 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                    <a 
                      href="mailto:rvmcustomizer@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors break-all font-medium"
                    >
                      rvmcustomizer@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-all duration-300 shadow-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="border-b border-border pb-6">
              <CardTitle className="text-2xl font-bold text-foreground">Solicitar Información</CardTitle>
              <CardDescription className="text-base">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nombre completo *</label>
                  <Input
                    name="name"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary h-12 text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Correo electrónico *</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary h-12 text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Teléfono</label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary h-12 text-base"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Cuéntanos sobre tu proyecto *</label>
                  <Textarea
                    name="message"
                    placeholder="Describe brevemente tu proyecto o consulta..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary min-h-[140px] text-base resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-gold hover:shadow-glow h-14 text-base"
                  size="lg"
                >
                  Enviar Consulta <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
