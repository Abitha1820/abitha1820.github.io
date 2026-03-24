import { ArrowDown, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text */}
        <div className="animate-fade-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-medium text-sm tracking-wide">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
            Hi, I'm{" "}
            <span className="text-gradient relative">
              Devi Abitha
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 2.5" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-[2px] bg-primary rounded-full" />
            Aspiring Data Analyst & Freelancer
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-base">
            An ECE graduate passionate about transforming raw data into actionable insights. 
            Focused on analytics, dashboard creation, and building data-driven solutions.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-7 py-3.5 rounded-xl border border-border bg-card text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Mail size={16} className="text-primary" /> Contact Me
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-border/50">
            {[
              { value: "5+", label: "Projects" },
              { value: "3+", label: "Tools Mastered" },
              { value: "2022", label: "Graduated" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="flex justify-center md:justify-end animate-fade-up order-1 md:order-2" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl -m-4" />
            
            {/* Main image container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
              <img
                src={profileImg}
                alt="Devi Abitha P T"
                className="w-full h-full object-cover"
                width={512}
                height={512}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 right-2 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl shadow-black/5 dark:shadow-black/20 animate-float">
              <p className="font-display font-bold text-primary text-base">ECE Graduate</p>
              <p className="text-xs text-muted-foreground">Anna University</p>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute top-8 -right-6 w-4 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-12 -left-8 w-6 h-6 bg-primary/15 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />

            {/* Rotating dashed ring */}
            <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full border-2 border-dashed border-primary/20 -m-4 animate-spin" style={{ animationDuration: "30s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
