import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terminos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Última actualización: febrero de 2026
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground/90 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Aceptación</h2>
              <p>
                El uso de los servicios de <strong>Void</strong> implica la aceptación de estos términos y condiciones.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Servicios</h2>
              <p>
                Void ofrece servicios de comunicación y automatización, incluyendo el uso de la WhatsApp Cloud API de Meta. El uso de WhatsApp está sujeto además a los términos y políticas de Meta y WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Uso aceptable</h2>
              <p>
                El usuario se compromete a utilizar los servicios de forma lícita y conforme a la normativa aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Contacto</h2>
              <p>
                Para consultas sobre estos términos puede contactarnos a través del enlace de Contacto en este sitio.
              </p>
            </section>
          </div>

          <p className="mt-12 pt-6 border-t border-border/60">
            <Link to="/" className="text-primary hover:underline">
              ← Volver al inicio
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terminos;
