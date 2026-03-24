import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const milestones = [
  {
    period: "2023 – Present",
    title: "Data Analyst Trainee",
    location: "Freelance & Self-directed",
    items: [
      "Completed data analysis training with hands-on Kaggle projects",
      "Built interactive dashboards using Power BI and Excel",
      "Performed data cleaning, analysis, and visualization",
    ],
  },
  {
    period: "2023",
    title: "Freelance Projects",
    location: "Independent",
    items: [
      "Shawarma Shop Analysis – Sales data & revenue trends",
      "Dhatchan Academy Analysis – Student & course metrics",
    ],
  },
  {
    period: "2018 – 2022",
    title: "B.E. Electronics & Communication",
    location: "Anna University, Tirunelveli",
    items: [
      "Graduated with strong technical foundation",
      "Developed problem-solving and analytical skills",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary font-medium text-sm">Experience</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my learning path and professional growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-16 md:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors z-10" />

                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                      <Calendar size={12} />
                      {m.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={12} />
                      {m.location}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" />
                    {m.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {m.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
