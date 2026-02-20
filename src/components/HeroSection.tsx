import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dark base */}
      <div className="absolute inset-0 bg-background" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-25" />
      {/* Vibrant blob gradients */}
      <div className="absolute inset-0 bg-hero-gradient" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

      <div className="container relative mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium"
          >
            <Zap className="h-3.5 w-3.5" />
            Automatización inteligente
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Automatiza todo.
            <br />
            <span className="text-gradient">No dejes nada al azar.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Void conecta tus herramientas, elimina tareas repetitivas y escala tus procesos.
            Sin código. Sin fricción. Sin límites.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="lg" className="text-base px-8">
              Comenzar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost-light" size="lg" className="text-base px-8">
              Ver demo
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Gratis para empezar · Sin tarjeta de crédito
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
