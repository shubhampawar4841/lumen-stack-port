import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-foreground">
            Shubham Pawar<span className="text-primary animate-pulse">_</span>
          </p>
          <p className="font-code text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="flex gap-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="font-code text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
          <Link to="/twitter" className="font-code text-sm text-muted-foreground hover:text-primary transition-colors">
            Twitter
          </Link>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/shubhampawar4841" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
          <a href="https://linkedin.com/in/shubhampawar4841" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href="https://twitter.com/shubhampawar4841" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
          <a href="mailto:shubhampawar4036@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
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
