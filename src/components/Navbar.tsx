import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { WHATSAPP_URL } from "@/lib/constants";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Logo size="md" />
          <span className="font-display text-xl font-bold text-foreground">void software</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Funciones
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cómo funciona
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="glow" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Hablar con ventas
            </a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
