import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conecta tus apps",
    description: "Integra las herramientas que ya usas en minutos con nuestra API o conectores nativos.",
  },
  {
    number: "02",
    title: "Diseña tu flujo",
    description: "Arrastra, conecta y configura cada paso de tu automatización visualmente. Bien",
  },
  {
    number: "03",
    title: "Activa y escala",
    description: "Lanza tu automatización y déjala correr. Void se encarga del resto.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Tan simple como <span className="text-gradient">1, 2, 3</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="mb-6 font-display text-6xl font-bold text-primary/20">{step.number}</div>
              <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
