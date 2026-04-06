import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const featured = [
  {
    title: "MediFlow — AI Hospital Management",
    desc: "Real-world hospital workflow system with voice-enabled booking using Bolna AI. Features appointment lifecycle, RBAC, multi-language voice support (Marathi, Hindi, Tamil, Telugu), and real-time calendar scheduling.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Clerk", "Bolna AI"],
    gradient: "from-primary/20 via-accent/10 to-secondary/20",
  },
  {
    title: "AI Content Automation Pipeline",
    desc: "End-to-end automated content generation system that converts idea → script → visuals → video → publish. Multi-agent workflows using n8n with AI-generated scripts, images, and reels for multi-platform distribution.",
    tags: ["Node.js", "OpenAI", "Groq", "n8n", "Flux Kontext"],
    gradient: "from-secondary/20 via-primary/10 to-accent/20",
  },
  {
    title: "Medium Clone — Full Stack Blog",
    desc: "Production-ready blogging platform with secure JWT authentication, Zod validation, optimized DB queries using Prisma with connection pooling, deployed on Cloudflare Workers.",
    tags: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "JWT"],
    gradient: "from-accent/20 via-secondary/10 to-primary/20",
  },
];

const moreProjects = [
  { title: "Finovoice SaaS", desc: "AI-driven platform for investment advisors with trade timeline & P/L analytics.", tags: ["React", "Supabase", "Clerk"], category: "Full Stack" },
  { title: "Voice Agent System", desc: "Multi-language conversational AI with low-latency workflows.", tags: ["Bolna AI", "Sarvam AI", "Node.js"], category: "AI" },
  { title: "Web Scraping Engine", desc: "Scalable scraping using Firecrawl, Apify & Selenium.", tags: ["Node.js", "Selenium", "Python"], category: "Backend" },
  { title: "Real-time Dashboard", desc: "Analytics dashboard with live metrics and role-based access.", tags: ["Next.js", "Supabase", "Chart.js"], category: "Frontend" },
  { title: "JSON Pipeline Generator", desc: "Structured JSON pipelines for downstream AI workflows.", tags: ["TypeScript", "Node.js", "OpenAI"], category: "AI" },
  { title: "Component Library", desc: "Reusable UI component library with TailwindCSS & Storybook.", tags: ["React", "TailwindCSS", "Storybook"], category: "Frontend" },
];

const filters = ["All", "Frontend", "Backend", "Full Stack", "AI"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeFilter === "All" ? moreProjects : moreProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="font-code text-primary text-sm mb-2 tracking-widest">
          {"// SELECTED WORKS"}
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
          Featured Projects
        </motion.h2>

        <div className="space-y-12 mb-20">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} glass-card flex items-center justify-center group cursor-pointer overflow-hidden`}
                >
                  <div className="font-display text-2xl text-foreground/20 group-hover:text-foreground/40 transition-colors text-center px-4">
                    {project.title}
                  </div>
                </motion.div>
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <span className="font-code text-primary text-xs">Featured Project</span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-3">{project.title}</h3>
                <p className="font-body text-muted-foreground mb-4">{project.desc}</p>
                <div className={`flex flex-wrap gap-2 mb-4 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-code text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-3 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                  <button className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg font-code text-sm text-foreground hover:text-primary transition-colors hover:border-primary/30">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg font-code text-sm text-foreground hover:text-primary transition-colors hover:border-primary/30">
                    <Github size={14} /> Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mb-6">More Projects</h3>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-code text-sm px-4 py-2 rounded-lg transition-colors ${
                activeFilter === f ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-6 border-t-2 border-t-primary/50 hover:border-t-primary transition-colors cursor-pointer group"
              >
                <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">{project.title}</h4>
                <p className="font-body text-sm text-muted-foreground mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-code text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
