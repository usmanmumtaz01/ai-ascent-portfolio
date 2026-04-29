import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, Github, Linkedin } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const RECIPIENT = "umerusman563@gmail.com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSending(true);
    try {
      const subject = `Portfolio contact from ${result.data.name}`;
      const body = `${result.data.message}\n\n— ${result.data.name} (${result.data.email})`;
      const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      toast.success("Opening your email app — thanks for reaching out!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Let's <span className="text-gradient">build something</span>.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
              Open to internships, collaborations, freelance gigs, and
              learning opportunities. I'll get back to you as soon as I can.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${RECIPIENT}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-glow" /> {RECIPIENT}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4 text-glow" /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4 text-glow" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-1.5 w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-1.5 w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="mt-1.5 w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder="Tell me about your idea or opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
