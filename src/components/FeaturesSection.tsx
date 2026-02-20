import { motion } from "framer-motion";
import { Workflow, Bot, Link, BarChart3, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Flujos visuales",
    description: "Diseña automatizaciones complejas con nuestro editor drag & drop intuitivo.",
    color: "from-primary/20 to-primary/5 text-primary",
  },
  {
    icon: Bot,
    title: "IA integrada",
    description: "Agentes inteligentes que toman decisiones y ejecutan acciones por ti.",
    color: "from-accent/20 to-accent/5 text-accent",
  },
  {
    icon: Link,
    title: "+200 integraciones",
    description: "Conecta con Slack, Gmail, Notion, HubSpot, Stripe y más herramientas.",
    color: "from-orange-500/20 to-orange-500/5 text-orange-400",
  },
  {
    icon: BarChart3,
    title: "Analytics en tiempo real",
    description: "Monitorea el rendimiento de cada flujo y optimiza en tiempo real.",
    color: "from-primary/20 to-primary/5 text-primary",
  },
  {
    icon: Shield,
    title: "Seguridad enterprise",
    description: "Encriptación end-to-end, SSO y cumplimiento SOC 2 incluido.",
    color: "from-cyan-500/20 to-cyan-500/5 text-cyan-400",
  },
  {
    icon: Clock,
    title: "Ejecución 24/7",
    description: "Tus automatizaciones nunca duermen. Siempre activas, siempre confiables.",
    color: "from-accent/20 to-accent/5 text-accent",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute inset-0 bg-glow opacity-60" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Todo lo que necesitas para{" "}
            <span className="text-gradient">automatizar</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Herramientas poderosas para eliminar el trabajo manual y enfocarte en lo que importa.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 card-glow hover:glow"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} transition-all duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
