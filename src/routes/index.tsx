import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Showcase } from "@/components/portfolio/Showcase";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Usman Mumtaz — AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Usman Mumtaz — AI Engineer learning and building intelligent systems, AI agents, and automation.",
      },
      { property: "og:title", content: "Muhammad Usman Mumtaz — AI Engineer" },
      {
        property: "og:description",
        content:
          "Building and exploring AI agents, automation systems, and intelligent applications.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Showcase />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
