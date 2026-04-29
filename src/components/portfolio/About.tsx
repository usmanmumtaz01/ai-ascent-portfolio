import { motion } from "framer-motion";
import { Brain, Cog, GraduationCap } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI Agents",
    body: "Exploring how LLMs, tools, and memory combine to build agents that can reason and act.",
  },
  {
    icon: Cog,
    title: "Automation",
    body: "Designing small workflows that save time — from data pipelines to assistant bots.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    body: "Studying daily, shipping projects, and improving through honest feedback.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            About
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold max-w-3xl">
            A learner first, an <span className="text-gradient">engineer in the making</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            I'm Usman — an aspiring AI engineer focused on building real,
            useful projects while I learn. My goal is simple: understand how
            intelligent systems work by building them, one project at a time.
            I'm not claiming production experience — I'm sharing the work,
            the progress, and the lessons along the way.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-glow" />
              </div>
              <h3 className="font-display font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
