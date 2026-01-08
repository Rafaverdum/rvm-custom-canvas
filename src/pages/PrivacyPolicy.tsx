import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Política de Privacidad y Cookies
        </h1>

        {/* Datos del responsable */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Datos del Responsable</h2>
          <div className="bg-card/50 border border-border rounded-lg p-6 space-y-2">
            <p><strong>Titular:</strong> Rafael Verdú Martínez</p>
            <p><strong>NIF:</strong> 21677497C</p>
            <p><strong>Dirección:</strong> Pintor Pinazo 8, 03440 Ibi, Alicante</p>
            <p><strong>Email:</strong> rvmcustomizer@gmail.com</p>
          </div>
        </section>

        {/* Política de Privacidad */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Política de Privacidad</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 
              relativo a la protección de las personas físicas (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, 
              de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos sobre 
              el tratamiento de sus datos personales.
            </p>
            
            <h3 className="text-lg font-medium text-foreground mt-6">2.1 Finalidad del tratamiento</h3>
            <p>
              Los datos personales que nos proporcione serán utilizados para:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Gestionar las consultas y solicitudes de presupuesto</li>
              <li>Prestar los servicios de diseño gráfico, preimpresión y personalización contratados</li>
              <li>Enviar comunicaciones comerciales si ha dado su consentimiento</li>
              <li>Cumplir con las obligaciones legales aplicables</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mt-6">2.2 Base legal</h3>
            <p>
              El tratamiento de sus datos se basa en el consentimiento del interesado y/o la ejecución de un contrato 
              o relación comercial.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-6">2.3 Conservación de datos</h3>
            <p>
              Sus datos serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron 
              recabados y para determinar las posibles responsabilidades derivadas de dicha finalidad.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-6">2.4 Derechos del usuario</h3>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición 
              enviando un correo electrónico a <strong>rvmcustomizer@gmail.com</strong>.
            </p>
          </div>
        </section>

        {/* Política de Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Política de Cookies</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Esta web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y ofrecer 
              contenidos de interés.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-6">3.1 ¿Qué son las cookies?</h3>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
              Permiten que el sitio recuerde sus acciones y preferencias durante un período de tiempo.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-6">3.2 Tipos de cookies utilizadas</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento básico del sitio web</li>
              <li><strong>Cookies de análisis:</strong> Permiten analizar el uso del sitio para mejorarlo</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mt-6">3.3 Gestión de cookies</h3>
            <p>
              Puede configurar su navegador para rechazar las cookies o para que le avise cuando un sitio web intente 
              instalar una cookie. Sin embargo, si bloquea las cookies, es posible que algunas funciones del sitio 
              no funcionen correctamente.
            </p>
          </div>
        </section>

        {/* Aviso Legal */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Aviso Legal</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de todas 
              las condiciones incluidas en este aviso legal.
            </p>
            <p>
              RVMCUSTOMIZER no se hace responsable del mal uso que se realice de los contenidos de esta web, 
              siendo exclusiva responsabilidad de la persona que acceda a ellos o los utilice.
            </p>
            <p>
              Los contenidos de esta web (textos, imágenes, diseños) son propiedad de RVMCUSTOMIZER y están 
              protegidos por las leyes de propiedad intelectual.
            </p>
          </div>
        </section>

        <div className="border-t border-border pt-6 mt-8">
          <p className="text-sm text-muted-foreground text-center">
            Última actualización: Enero 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
