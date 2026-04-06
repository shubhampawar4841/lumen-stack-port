import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 5, suffix: "+" },
  { label: "Open Source Contributions", value: 10, suffix: "+" },
];

const skills = [
  { name: "React / Next.js / Angular", level: 92 },
  { name: "TypeScript / JavaScript", level: 95 },
  { name: "Node.js / Express", level: 85 },
  { name: "PostgreSQL / MongoDB / Supabase", level: 88 },
  { name: "AI / LLM Integration", level: 80 },
  { name: "DevOps / Cloudflare / Vercel", level: 75 },
];

const CountUpValue = ({ target, go }: { target: number; go: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!go) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [go, target]);
  return <>{count}</>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="font-code text-primary text-sm mb-2 tracking-widest">
          {"// ABOUT ME"}
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rotate-6" />
              <div className="absolute inset-0 rounded-2xl glass-card flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-foreground">SP</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-code text-xs text-foreground">Available for work</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="flex flex-col justify-center">
            <p className="font-body text-foreground/80 text-lg leading-relaxed mb-6">
              I'm Shubham Pawar — a Full Stack Engineer skilled in Next.js, React, Angular, TypeScript, Express, and Prisma. I'm experienced in AI-powered applications and web scraping technologies.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              I constantly improve my coding skills and expand my portfolio by sharing my work online. I love building real-world solutions — from hospital management systems with voice AI to automated content pipelines.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="glass-card rounded-full px-4 py-2 font-code text-xs text-primary flex items-center gap-2">
                <Briefcase size={14} /> Open to Freelance
              </span>
              <span className="glass-card rounded-full px-4 py-2 font-code text-xs text-secondary flex items-center gap-2">
                <MapPin size={14} /> Based in India
              </span>
            </div>

            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-code text-sm text-foreground">{skill.name}</span>
                    <span className="font-code text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 + i * 0.1 }} className="glass-card rounded-xl p-6 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                <CountUpValue target={stat.value} go={inView} />{stat.suffix}
              </div>
              <p className="font-code text-xs text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
