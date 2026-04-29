import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Diet Planner",
    description:
      "Generates personalized meal plans based on goals, preferences, and dietary needs using LLM prompting.",
    stack: ["Python", "OpenAI", "FastAPI", "React"],
  },
  {
    title: "Smart Notes Assistant",
    description:
      "Summarizes, tags, and answers questions over your notes using retrieval-augmented generation.",
    stack: ["LangChain", "Vector DB", "Next.js"],
  },
  {
    title: "Resume Analyzer",
    description:
      "Reviews resumes and gives structured feedback on clarity, keywords, and role fit.",
    stack: ["Python", "LLM", "Streamlit"],
  },
  {
    title: "Movie Recommender",
    description:
      "Recommends movies through content-based similarity and prompt-driven taste profiling.",
    stack: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    title: "Finance Assistant",
    description:
      "Helps track expenses and answers questions about your spending in natural language.",
    stack: ["FastAPI", "LLM", "React"],
  },
  {
    title: "AI Research Assistant",
    description:
      "An agent that searches, reads, and summarizes sources to answer research questions with citations.",
    stack: ["LangGraph", "LangChain", "Python"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Projects
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Things I've <span className="text-gradient">built while learning</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Personal projects — built to explore ideas, practice fundamentals,
            and have something real to show.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display font-semibold text-xl">{p.title}</h3>
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px]">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-foreground/5 border border-border text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
