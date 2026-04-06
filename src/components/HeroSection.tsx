import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const roles = ["Full Stack Developer", "UI/UX Engineer", "Open Source Contributor", "Problem Solver"];
const techStack = ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "GraphQL", "Next.js", "MongoDB", "Redis", "Kubernetes", "Figma", "Git"];

const ScrambleText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => (i < iteration ? char : chars[Math.floor(Math.random() * chars.length)]))
          .join("")
      );
      iteration += 0.5;
      if (iteration >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <>{display}</>;
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setRoleText(current.slice(0, roleText.length + 1));
          if (roleText.length + 1 === current.length) setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setRoleText(current.slice(0, roleText.length - 1));
          if (roleText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Floating shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-primary/10 rounded-lg"
          style={{
            width: 40 + i * 20,
            height: 40 + i * 20,
            top: `${15 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
          animate={{
            rotate: [0, 360],
            x: mousePos.x * (10 + i * 5),
            y: mousePos.y * (10 + i * 5),
          }}
          transition={{ rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }, x: { duration: 0.3 }, y: { duration: 0.3 } }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-code text-primary text-sm mb-4 tracking-widest"
        >
          {"// WELCOME TO MY WORLD"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4"
        >
          <ScrambleText text="ALEX CHEN" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-code text-xl md:text-2xl text-muted-foreground mb-8 h-8"
        >
          <span className="text-primary">{">"}</span> {roleText}
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-body text-muted-foreground max-w-xl text-lg mb-10"
        >
          Building exceptional digital experiences with clean code and creative solutions. Passionate about turning complex problems into elegant interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display font-bold rounded-lg glow-primary hover:scale-105 transition-transform"
          >
            View My Work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button className="flex items-center gap-2 px-8 py-3 border border-primary/30 text-primary font-display rounded-lg hover:border-primary hover:glow-primary transition-all hover:scale-105">
            <Download size={16} />
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="mx-6 font-code text-sm text-muted-foreground/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
