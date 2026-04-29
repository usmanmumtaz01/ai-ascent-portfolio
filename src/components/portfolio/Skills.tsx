import { motion } from "framer-motion";

const groups = [
  {
    title: "AI & LLMs",
    items: [
      "AI Agents (Learning)",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI"],
  },
  {
    title: "Tools",
    items: ["GitHub", "Vercel", "LinkedIn", "Firebase", "Supabase"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold max-w-3xl">
            Tools I'm <span className="text-gradient">working with</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-4">
                {g.title}
              </h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-glow" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
