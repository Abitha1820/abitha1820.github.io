import { ArrowDown, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[60%] right-[40%] w-64 h-64 bg-accent/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text content */}
        <div className="animate-fade-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-medium text-xs tracking-wide uppercase">
              Open to opportunities
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
            Hello, I'm{" "}
            <span className="text-gradient relative">
              Devi Abitha
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 2.5" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-primary" />
            Aspiring Data Analyst & Freelancer
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-sm md:text-base">
            An ECE graduate and motivated learner focused on data analytics, dashboard creation,
            and deriving meaningful insights from data. Passionate about building a career in the IT field.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border/50">
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
        <div className="flex justify-center md:justify-end animate-fade-up order-1 md:order-2" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-3xl bg-primary/20 blur-2xl -z-10 translate-x-4 translate-y-4" />

            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-3xl overflow-hidden border-2 border-border/50 card-shadow relative group">
              <img
                src={profileImg}
                alt="Devi Abitha P T"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width={512}
                height={512}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-5 py-3 card-shadow animate-float">
              <p className="font-display font-bold text-primary text-base">ECE Graduate</p>
              <p className="text-xs text-muted-foreground">Anna University</p>
            </div>

            {/* Tech stack badge */}
            <div className="absolute -top-3 -right-3 bg-card border border-border rounded-xl px-3 py-2 card-shadow animate-float" style={{ animationDelay: "1.5s" }}>
              <p className="text-xs font-semibold text-foreground">📊 Power BI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
