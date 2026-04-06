import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Send, Loader2 } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@alexchen.dev" },
];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial from-primary/3 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="font-code text-primary text-sm mb-2 tracking-widest">
          {"// CONTACT"}
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16">
          Let's Build Something
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-4xl md:text-6xl font-bold text-foreground/10 mb-8 leading-tight">
              GET IN<br />
              <span className="text-primary/30">TOUCH</span>
            </h3>
            <p className="font-body text-muted-foreground mb-8 max-w-md">
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas. Let's create something amazing together.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <s.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "subject", label: "Subject", type: "text" },
            ].map((field) => (
              <div key={field.name} className="relative group">
                <input
                  type={field.type}
                  placeholder={field.label}
                  required
                  className="w-full px-4 py-3 glass-card rounded-lg font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(168_100%_50%/0.15)] transition-all bg-transparent border border-border"
                />
              </div>
            ))}
            <textarea
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-3 glass-card rounded-lg font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(168_100%_50%/0.15)] transition-all bg-transparent border border-border resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-primary-foreground font-display font-bold rounded-lg glow-primary hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
