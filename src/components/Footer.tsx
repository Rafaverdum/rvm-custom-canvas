import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="h-1 w-16 bg-gradient-primary mb-2"></div>
          <img 
            src={logo} 
            alt="RVM CustomizeR Logo" 
            className="h-16"
          />
          <p className="text-sm text-muted-foreground max-w-md">
            Excelencia en diseño gráfico, servicios de preimpresión profesional y personalización de alta calidad en Ibi, Alicante
          </p>
          <div className="pt-4 border-t border-border/50 w-full max-w-md">
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
