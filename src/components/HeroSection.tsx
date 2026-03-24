import { ArrowDown, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-24">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="animate-fade-up">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hello, I'm{" "}
            <span className="text-gradient">Devi Abitha P T</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium mb-2">
            Aspiring Data Analyst | Freelancer
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            An ECE graduate and motivated learner focused on data analytics, dashboard creation, 
            and deriving meaningful insights from data. Passionate about building a career in the IT field.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 card-shadow">
              <img
                src={profileImg}
                alt="Devi Abitha P T"
                className="w-full h-full object-cover"
                width={512}
                height={512}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 right-4 bg-card border border-border rounded-xl px-4 py-2 card-shadow animate-float">
              <p className="font-display font-bold text-primary text-lg">ECE Graduate</p>
              <p className="text-xs text-muted-foreground">Anna University</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed border-primary/30 -m-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
