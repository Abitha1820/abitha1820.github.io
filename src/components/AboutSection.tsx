import { GraduationCap, Target, Briefcase, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    highlight: "B.E. in ECE",
    desc: "Anna University Regional Campus, Tirunelveli. Graduated in 2022 with a strong technical foundation in electronics and communication.",
  },
  {
    icon: Target,
    title: "Career Goal",
    highlight: "Data Analyst",
    desc: "Aspiring to grow as a Data Analyst, leveraging analytical skills to derive meaningful insights and support data-driven decision making.",
  },
  {
    icon: Briefcase,
    title: "Background",
    highlight: "Freelancer",
    desc: "A motivated freelancer exploring data analysis and technology. Focused on developing skills through hands-on projects and continuous learning.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary font-medium text-sm">About Me</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Designing Solutions,{" "}
            <span className="text-gradient">Not Just Visuals</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An ECE graduate transitioning into the world of data — combining technical knowledge with analytical thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-300">
                <card.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={26} />
              </div>

              <span className="text-xs font-semibold text-primary tracking-wider uppercase">{card.highlight}</span>
              <h3 className="font-display font-bold text-xl mt-1 mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>

              <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
