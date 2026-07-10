import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Footer = () => (
  <footer className="border-t border-border py-10 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="text-center md:text-left shrink-0">
          <p className="font-display text-lg text-foreground">
            Shubham Pawar<span className="text-primary animate-pulse">_</span>
          </p>
          <p className="font-code text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        <nav className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-2">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="font-code text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
          <Link
            to="/twitter"
            className="font-code text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Twitter
          </Link>
        </nav>

        <div className="flex gap-4 md:shrink-0">
          <a href="https://github.com/shubhampawar4841" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
          <a href="https://linkedin.com/in/shubhampawar4841" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href="https://twitter.com/shubhampawar484" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
          <a href="mailto:shubhampawar4036@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center px-2">
        <p className="font-code text-xs text-muted-foreground">
          Designed & Built with ❤️ and ☕
        </p>
        <p className="font-code text-xs text-muted-foreground/80 mt-1">
          © {new Date().getFullYear()} Shubham Pawar. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
