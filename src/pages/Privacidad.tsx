import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const META_PRIVACY_URL = "https://www.facebook.com/privacy/policy/";
const WHATSAPP_BUSINESS_PRIVACY_URL = "https://www.whatsapp.com/legal/business-app-privacy-policy";

const Privacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Política de Privacidad
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Última actualización: febrero de 2026
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground/90 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Responsable del tratamiento</h2>
              <p>
                El responsable del tratamiento de sus datos personales es <strong>Void</strong> («nosotros», «nuestro»).
                Esta política describe cómo recogemos, usamos y protegemos su información en relación con nuestros
                servicios, incluido el uso de la WhatsApp Cloud API de Meta Platforms, Inc.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Datos que recogemos</h2>
              <p>Podemos recoger y procesar, entre otros, los siguientes datos:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Datos de identificación:</strong> nombre, dirección de correo electrónico, número de teléfono.</li>
                <li><strong>Datos de comunicación:</strong> contenido de mensajes intercambiados a través de WhatsApp u otros canales cuando contacte con nosotros o use nuestros servicios.</li>
                <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, páginas visitadas y fecha/hora de acceso cuando utiliza nuestro sitio web.</li>
              </ul>
              <p className="mt-3">
                En el contexto del uso de <strong>WhatsApp Business API (Cloud API)</strong>, Meta procesa mensajes y datos
                de contacto en nuestro nombre como encargado del tratamiento. Los datos que usted comparte por WhatsApp
                (número de teléfono, contenido de mensajes) son procesados según las instrucciones que nosotros
                establecemos y conforme a la política de privacidad de Meta y de WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Uso de servicios de Meta (WhatsApp Cloud API)</h2>
              <p>
                Utilizamos la <strong>WhatsApp Cloud API</strong> de Meta para ofrecer comunicación por WhatsApp. Al usar
                este canal:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Meta actúa como <strong>encargado del tratamiento</strong> de los mensajes y datos asociados, según las instrucciones que nosotros definimos.</li>
                <li>Los mensajes están cifrados de extremo a extremo según el protocolo Signal entre el usuario y la infraestructura de Meta.</li>
                <li>Puede consultar la política de privacidad de Meta en:{" "}
                  <a href={META_PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                    Política de privacidad de Meta
                  </a>{" "}
                  y la de WhatsApp Business en:{" "}
                  <a href={WHATSAPP_BUSINESS_PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                    WhatsApp Business App Privacy Policy
                  </a>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Finalidad y base legal</h2>
              <p>Utilizamos sus datos para:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Gestionar la relación comercial y la comunicación con usted (incluida la atención por WhatsApp).</li>
                <li>Cumplir obligaciones legales o contractuales.</li>
                <li>Mejorar nuestros servicios y la experiencia en nuestro sitio web.</li>
              </ul>
              <p className="mt-3">
                La base legal puede ser su <strong>consentimiento</strong>, la <strong>ejecución de un contrato</strong>,
                el <strong>interés legítimo</strong> o el cumplimiento de una obligación legal, según el caso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Conservación de los datos</h2>
              <p>
                Conservamos sus datos personales durante el tiempo necesario para las finalidades descritas y, en su caso,
                durante los plazos que exijan la normativa aplicable (por ejemplo, facturación o reclamaciones). Los
                datos de comunicación por WhatsApp se conservan según nuestras necesidades de servicio y las
                condiciones aplicables de la WhatsApp Cloud API.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Derechos del interesado</h2>
              <p>
                De conformidad con la normativa aplicable (por ejemplo, RGPD si le es aplicable), puede ejercer los
                siguientes derechos en relación con sus datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Acceso:</strong> obtener confirmación de si tratamos sus datos y una copia de los mismos.</li>
                <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
                <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando sea legalmente procedente.</li>
                <li><strong>Limitación:</strong> solicitar que el tratamiento se limite en determinados supuestos.</li>
                <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y de uso común.</li>
                <li><strong>Oposición:</strong> oponerse al tratamiento en los casos previstos por la ley.</li>
              </ul>
              <p className="mt-3">
                Para ejercer estos derechos puede contactarnos mediante el enlace de contacto indicado en esta web. También
                tiene derecho a presentar una reclamación ante la autoridad de control de protección de datos competente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Seguridad y transferencias</h2>
              <p>
                Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos. El uso de la WhatsApp Cloud
                API implica que Meta (con servidores en distintas regiones, por ejemplo Norteamérica y Europa) pueda
                procesar datos en nuestro nombre; Meta ofrece garantías conforme a la normativa aplicable (incluido el
                RGPD cuando corresponda).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con esta política de privacidad o para ejercer sus derechos, puede
                contactarnos a través del enlace de <strong>Contacto</strong> en el pie de página de este sitio o por
                los canales que indiquemos (por ejemplo, WhatsApp o correo electrónico).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">9. Cambios en esta política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta política de privacidad. La fecha de la última actualización
                se indica al inicio del documento. Le recomendamos revisar esta página periódicamente.
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

export default Privacidad;
