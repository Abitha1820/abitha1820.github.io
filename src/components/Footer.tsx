import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="font-display text-xl font-bold text-gradient">
              Devi Abitha
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Freelance Data Analyst
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Devi Abitha P T. Made with
            <Heart size={14} className="text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
