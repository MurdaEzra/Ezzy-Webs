import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">Ezzy Webs</div>
            <p className="text-foreground/60 text-sm">
              Smart websites for growing brands
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-foreground/60 text-sm">
          <p>© {currentYear} Ezzy Webs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
