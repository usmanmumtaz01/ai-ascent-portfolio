import { motion } from "framer-motion";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero pt-24"
    >
      {/* Animated aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-glow/20 blur-3xl animate-aurora" />
        <div
          className="absolute -bottom-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-glow-2/20 blur-3xl animate-aurora"
          style={{ animationDelay: "-9s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-glow opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
            </span>
            Available for collaborations & internships
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Muhammad{" "}
            <span className="text-gradient">Usman Mumtaz</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl">
            AI Engineer — learning & building intelligent systems.
          </p>

          <p className="mt-3 text-base text-muted-foreground/80 max-w-xl">
            Building and exploring AI agents, automation systems, and intelligent
            applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-border text-foreground hover:bg-card transition-all"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-glow/40 to-glow-2/40 blur-2xl opacity-70" />
          <div className="relative animate-float">
            <div className="rounded-[2rem] overflow-hidden border border-border shadow-glow w-72 sm:w-80 aspect-square bg-card">
              <img
                src={profile}
                alt="Muhammad Usman Mumtaz, AI Engineer"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-xs">
              <div className="font-display font-semibold">AI Engineer</div>
              <div className="text-muted-foreground">Learning · Building</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
