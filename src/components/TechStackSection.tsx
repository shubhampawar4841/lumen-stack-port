import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["Frontend", "Backend", "AI & Scraping", "DevOps & Tools", "Languages"];

const techData: Record<string, Array<{ name: string; desc: string; level: number }>> = {
  Frontend: [
    { name: "React.js", desc: "Building complex SPAs & component libraries", level: 95 },
    { name: "Next.js", desc: "SSR/SSG applications with optimal performance", level: 90 },
    { name: "Angular 14+", desc: "Enterprise-grade applications", level: 82 },
    { name: "React Native", desc: "Cross-platform mobile applications", level: 80 },
    { name: "TailwindCSS", desc: "Utility-first responsive design", level: 92 },
    { name: "Material UI", desc: "Component libraries & design systems", level: 85 },
  ],
  Backend: [
    { name: "Node.js", desc: "REST APIs & microservices", level: 88 },
    { name: "Express.js", desc: "Backend frameworks & middleware", level: 88 },
    { name: "PostgreSQL", desc: "Complex queries, optimization, migrations", level: 85 },
    { name: "MongoDB", desc: "Document-based data modeling", level: 82 },
    { name: "Prisma ORM", desc: "Type-safe database access & migrations", level: 88 },
    { name: "Supabase", desc: "Real-time DB, auth, RLS policies", level: 90 },
    { name: "Firebase", desc: "Serverless backend & real-time features", level: 78 },
  ],
  "AI & Scraping": [
    { name: "Cursor AI", desc: "AI-powered development workflows", level: 85 },
    { name: "Firecrawl", desc: "Web scraping & data extraction", level: 80 },
    { name: "Bolna AI", desc: "Voice agents & conversational AI", level: 78 },
    { name: "OpenAI / Groq", desc: "LLM integration & multi-modal AI", level: 82 },
  ],
  "DevOps & Tools": [
    { name: "Git / GitHub", desc: "Version control & collaboration", level: 92 },
    { name: "Cloudflare Workers", desc: "Edge computing & serverless", level: 80 },
    { name: "Vercel", desc: "Deployment & CI/CD pipelines", level: 88 },
    { name: "Postman", desc: "API testing & documentation", level: 85 },
  ],
  Languages: [
    { name: "TypeScript", desc: "Primary language for web development", level: 92 },
    { name: "JavaScript", desc: "Deep understanding of the language", level: 95 },
    { name: "C++", desc: "DSA & competitive programming", level: 78 },
    { name: "SQL", desc: "Database queries & optimization", level: 85 },
    { name: "HTML5 / CSS3", desc: "Semantic markup & modern layouts", level: 95 },
  ],
};

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="font-code text-primary text-sm mb-2 tracking-widest">
          {"// MY ARSENAL"}
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
          Tech Stack
        </motion.h2>

        <div className="flex flex-wrap gap-2 mb-10 relative">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative font-code text-sm px-5 py-2.5 rounded-lg transition-colors ${
                activeTab === cat ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === cat && (
                <motion.span
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-primary rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {techData[activeTab].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass-card rounded-xl p-6 cursor-pointer hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-code text-primary text-sm font-bold">
                    {tech.name.slice(0, 2)}
                  </div>
                  <h3 className="font-display text-foreground font-bold">{tech.name}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.desc}
                </p>
                <div className="h-1 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${tech.level}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
                <span className="font-code text-xs text-muted-foreground mt-2 block">{tech.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechStackSection;
