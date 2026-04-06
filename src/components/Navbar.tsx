import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = links.map((l) => document.getElementById(l.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const scrollTo = (id: string) => {
    if (!isHome) {
      window.location.href = "/#" + id.toLowerCase();
      return;
    }
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-1">
            <span className="font-display text-xl font-bold text-foreground">
              {"<"}
              <span className="text-primary">SP</span>
              {"/>"}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`relative font-code text-sm tracking-wide transition-colors ${
                  active === link && isHome ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link}
                {active === link && isHome && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
            <Link
              to="/twitter"
              className={`relative font-code text-sm tracking-wide transition-colors ${
                !isHome ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Twitter
            </Link>
          </div>

          <button onClick={() => setMobileOpen(true)} className="md:hidden text-foreground">
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-foreground"
            >
              <X size={28} />
            </button>
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(link)}
                className="font-display text-3xl text-foreground hover:text-primary transition-colors my-3"
              >
                {link}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.1 }}
            >
              <Link
                to="/twitter"
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-foreground hover:text-primary transition-colors my-3"
              >
                Twitter
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
