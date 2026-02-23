import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-orange-500/8 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-sm p-12 text-center glow"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Listo para <span className="text-gradient">automatizar</span>?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Únete a cientos de equipos que ya eliminaron el trabajo manual con void
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="glow" size="lg" className="text-base px-8" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Hablar con ventas
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
