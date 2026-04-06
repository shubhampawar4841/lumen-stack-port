import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechNova Inc.",
    initials: "SJ",
    text: "Alex is one of the most talented developers I've worked with. Their ability to translate complex requirements into elegant solutions is remarkable. The dashboard they built exceeded all our expectations.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, DataStream",
    initials: "MC",
    text: "Working with Alex was a game-changer for our team. They brought not just technical expertise but also a deep understanding of user experience that elevated our entire product.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StartupX",
    initials: "ER",
    text: "Alex delivered our MVP in record time without compromising on quality. Their proactive communication and attention to detail made the entire development process smooth and enjoyable.",
  },
  {
    name: "David Park",
    role: "Lead Developer, CodeCraft",
    initials: "DP",
    text: "I've had the pleasure of mentoring Alex early in their career, and their growth has been phenomenal. They now consistently deliver production-ready code that's both performant and maintainable.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/3 rounded-full blur-[150px] -translate-x-1/2" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="font-code text-primary text-sm mb-2 tracking-widest text-center">
          {"// TESTIMONIALS"}
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
          What People Say
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              <Quote className="text-primary/30 mb-4" size={40} />
              <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-foreground">{testimonials[current].initials}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{testimonials[current].name}</p>
                  <p className="font-code text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="p-2 glass-card rounded-full text-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="p-2 glass-card rounded-full text-foreground hover:text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
