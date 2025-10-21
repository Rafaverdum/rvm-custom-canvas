const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground mb-2">
          <span className="font-bold text-primary">RVMCUSTOMIZER</span> © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-muted-foreground">
          Diseño gráfico, preimpresión y personalización en Ibi, Alicante
        </p>
      </div>
    </footer>
  );
};

export default Footer;
