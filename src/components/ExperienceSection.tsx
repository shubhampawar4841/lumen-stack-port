import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "TechNova Inc.",
    role: "Senior Full Stack Developer",
    date: "2023 - Present",
    points: [
      "Led development of a real-time analytics dashboard serving 50K+ daily users",
      "Architected microservices infrastructure reducing API response times by 40%",
      "Mentored a team of 4 junior developers through code reviews and pair programming",
    ],
  },
  {
    company: "DataStream Labs",
    role: "Full Stack Developer",
    date: "2022 - 2023",
    points: [
      "Built a data visualization platform processing 1M+ data points in real-time",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Developed a custom GraphQL API layer for unified data access",
    ],
  },
  {
    company: "CodeCraft Studio",
    role: "Frontend Developer",
    date: "2021 - 2022",
    points: [
      "Developed responsive web applications for 10+ clients across various industries",
      "Created a reusable component library reducing development time by 30%",
      "Optimized web performance achieving 95+ Lighthouse scores",
    ],
  },
  {
    company: "Open Source",
    role: "Contributor & Maintainer",
    date: "2020 - Present",
    points: [
      "Active contributor to multiple open-source projects with 500+ GitHub stars",
      "Maintained a popular npm package with 10K+ weekly downloads",
      "Organized community meetups and workshops on modern web development",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="font-code text-primary text-sm mb-2 tracking-widest">
          {"// MY JOURNEY"}
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16">
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-primary via-secondary to-accent" />
          </div>

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
              className={`relative mb-12 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8 ml-12 md:ml-auto"
              } ${i % 2 === 0 ? "ml-12" : "ml-12"}`}
            >
              {/* Dot */}
              <div className={`absolute top-6 w-3 h-3 rounded-full bg-primary glow-primary ${
                i % 2 === 0 ? "left-[-2.1rem] md:-right-[1.85rem] md:left-auto" : "-left-[2.1rem] md:-left-[1.85rem]"
              }`} />

              <div className="glass-card rounded-xl p-6 hover:border-primary/20 transition-colors">
                <span className="font-code text-xs text-primary">{exp.date}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">{exp.role}</h3>
                <p className="font-body text-secondary mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
