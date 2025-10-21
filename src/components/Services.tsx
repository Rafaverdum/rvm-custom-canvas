import { Card, CardContent } from "@/components/ui/card";
import designIcon from "@/assets/design-icon.png";
import printIcon from "@/assets/print-icon.png";
import customIcon from "@/assets/custom-icon.png";

const Services = () => {
  const services = [
    {
      title: "Diseño Gráfico",
      description: "Creamos diseños únicos y profesionales que capturan la esencia de tu marca.",
      icon: designIcon,
    },
    {
      title: "Preimpresión",
      description: "Preparación técnica de archivos para garantizar la máxima calidad de impresión.",
      icon: printIcon,
    },
    {
      title: "Personalización",
      description: "Servicios de personalización para todo tipo de productos y materiales.",
      icon: customIcon,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones completas para todas tus necesidades de diseño y personalización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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
