import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const featured = [
  {
    title: "CloudSync Dashboard",
    desc: "A real-time cloud infrastructure monitoring dashboard with live metrics, alerting, and multi-provider support.",
    tags: ["React", "TypeScript", "GraphQL", "AWS"],
    gradient: "from-primary/20 via-accent/10 to-secondary/20",
  },
  {
    title: "NeuralChat AI",
    desc: "An AI-powered conversational platform with natural language processing, sentiment analysis, and multi-language support.",
    tags: ["Next.js", "Python", "PostgreSQL", "Redis"],
    gradient: "from-secondary/20 via-primary/10 to-accent/20",
  },
  {
    title: "DevFlow CLI",
    desc: "An open-source CLI tool for automating development workflows, CI/CD pipelines, and project scaffolding.",
    tags: ["Node.js", "TypeScript", "Docker", "Git"],
    gradient: "from-accent/20 via-secondary/10 to-primary/20",
  },
];

const moreProjects = [
  { title: "CryptoTracker", desc: "Real-time cryptocurrency portfolio tracker with price alerts.", tags: ["React", "Node.js", "WebSocket"], category: "Full Stack" },
  { title: "DesignSystem UI", desc: "A comprehensive component library for rapid prototyping.", tags: ["React", "Storybook", "CSS"], category: "Frontend" },
  { title: "API Gateway", desc: "Microservice API gateway with rate limiting and auth.", tags: ["Node.js", "Redis", "Docker"], category: "Backend" },
  { title: "TaskFlow Mobile", desc: "Cross-platform task management app with offline sync.", tags: ["React Native", "Firebase"], category: "Mobile" },
  { title: "DataViz Studio", desc: "Interactive data visualization platform with custom charts.", tags: ["D3.js", "React", "Python"], category: "Frontend" },
  { title: "LogStream", desc: "Centralized log aggregation and monitoring service.", tags: ["Go", "Elasticsearch", "Kubernetes"], category: "Backend" },
];

const filters = ["All", "Frontend", "Backend", "Full Stack", "Mobile"];

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

        {/* Featured */}
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
                  <div className="font-display text-2xl text-foreground/20 group-hover:text-foreground/40 transition-colors">
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

        {/* More projects */}
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
