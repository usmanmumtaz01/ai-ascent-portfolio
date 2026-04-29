import { motion } from "framer-motion";
import diet from "@/assets/project-diet.jpg";
import notes from "@/assets/project-notes.jpg";
import resume from "@/assets/project-resume.jpg";
import movie from "@/assets/project-movie.jpg";
import finance from "@/assets/project-finance.jpg";
import research from "@/assets/project-research.jpg";

const shots = [
  { src: diet, label: "AI Diet Planner" },
  { src: notes, label: "Smart Notes Assistant" },
  { src: resume, label: "Resume Analyzer" },
  { src: movie, label: "Movie Recommender" },
  { src: finance, label: "Finance Assistant" },
  { src: research, label: "AI Research Assistant" },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Visual Showcase
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold max-w-3xl">
            A glimpse at the <span className="text-gradient">interfaces</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shots.map((s, i) => (
            <motion.figure
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card aspect-[16/10]"
            >
              <img
                src={s.src}
                alt={`${s.label} interface preview`}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-display font-semibold text-sm">
                  {s.label}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1 rounded-full glass">
                  Concept
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
