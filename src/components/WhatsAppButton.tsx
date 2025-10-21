import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "665511935";
  const message = "Hola, me gustaría obtener más información sobre sus servicios profesionales.";
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/34${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-gold hover:shadow-glow p-0 animate-float transition-all"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-primary-foreground" />
    </Button>
  );
};

export default WhatsAppButton;
