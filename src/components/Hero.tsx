import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import heroBg from "@/assets/hero-professional.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={logo} 
              alt="RVMCUSTOMIZER Logo" 
              className="h-32 w-auto mx-auto opacity-90"
            />
          </div>
          
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wider">EXCELENCIA EN DISEÑO</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-gold bg-clip-text text-transparent font-gala font-light">
              RVM
            </span>
            <span className="text-foreground font-gala font-light">CUSTOMIZER</span>
          </h1>
          
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
            Especialistas en <span className="text-primary font-semibold">diseño gráfico profesional</span>, 
            servicios de <span className="text-primary font-semibold">preimpresión técnica</span> y 
            <span className="text-primary font-semibold"> personalizaciones de alta calidad</span>
          </p>

          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transformamos tus ideas en realidad visual con precisión, creatividad y dedicación
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-lg shadow-gold transition-all hover:scale-105 hover:shadow-glow"
            >
              Solicitar Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-10 py-7 text-lg transition-all"
              asChild
            >
              <a href="tel:665511935">
                665 511 935
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
