import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="h-1 w-16 bg-gradient-primary mb-2"></div>
          <p className="text-foreground font-semibold text-lg">
            <span className="bg-gradient-gold bg-clip-text text-transparent font-bold">RVM</span>
            <span className="text-foreground">CUSTOMIZER</span>
          </p>
          <p className="text-sm text-muted-foreground max-w-md">
            Excelencia en diseño gráfico, servicios de preimpresión profesional y personalización de alta calidad
          </p>
          <div className="pt-4 border-t border-border/50 w-full max-w-md space-y-2">
            <Link 
              to="/privacidad" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors underline"
            >
              Política de Privacidad y Cookies
            </Link>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} RVMCUSTOMIZER. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
