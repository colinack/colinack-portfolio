import { Github, Linkedin, Mail } from "lucide-react";

const ComicFooter = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl tracking-wider">
            COLIN ACKROYD
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/colinack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/raphael-maigret"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:raphmaigret@gmail.com"
              className="p-2 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="font-body text-sm opacity-70">
            © {new Date().getFullYear()} Colin Ackroyd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ComicFooter;
