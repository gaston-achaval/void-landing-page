import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Vibrant background similar to hero */}
      <div className="absolute inset-0 bg-hero-gradient opacity-60" />
      <div className="absolute inset-0 bg-background/40" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-background/80 backdrop-blur-sm p-12 text-center shadow-xl"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl text-foreground">
            Listo para <span className="text-gradient">automatizar</span>?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Únete a miles de equipos que ya eliminaron el trabajo manual con Void.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="lg" className="text-base px-8">
              Empezar gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost-light" size="lg" className="text-base px-8">
              Hablar con ventas
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Plan gratuito disponible · Upgrade cuando quieras
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
