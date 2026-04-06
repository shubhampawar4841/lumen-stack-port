import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-foreground">
            Alex Chen<span className="text-primary animate-pulse">_</span>
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
        </div>

        <div className="flex gap-3">
          {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="font-code text-xs text-muted-foreground">
          Designed & Built with ❤️ and ☕
        </p>
        <p className="font-code text-xs text-muted-foreground/50 mt-1">
          © {new Date().getFullYear()} Alex Chen. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
