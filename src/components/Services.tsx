import { Card, CardContent } from "@/components/ui/card";
import designIcon from "@/assets/design-professional.png";
import printIcon from "@/assets/print-professional.png";
import customIcon from "@/assets/custom-professional.png";

const Services = () => {
  const services = [
    {
      title: "Diseño Gráfico",
      description: "Desarrollo de identidad visual corporativa, diseño editorial y creación de piezas gráficas que comunican la esencia de tu marca con profesionalidad.",
      icon: designIcon,
    },
    {
      title: "Preimpresión",
      description: "Preparación técnica especializada de archivos digitales, gestión de color y optimización para garantizar resultados de impresión excepcionales.",
      icon: printIcon,
    },
    {
      title: "Personalización",
      description: "Servicios de personalización premium sobre múltiples soportes y materiales con acabados de alta calidad y durabilidad garantizada.",
      icon: customIcon,
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Servicios <span className="text-primary">Profesionales</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones integrales de diseño gráfico, preimpresión y personalización para empresas y profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 hover:shadow-gold group overflow-hidden animate-fade-in relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <CardContent className="p-10 text-center relative">
                <div className="mb-8 relative">
                  <div className="w-28 h-28 mx-auto rounded-xl bg-secondary/50 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-5 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
