import { CheckCircle2 } from "lucide-react";

const experiences = [
  "Completed data analysis training with hands-on projects using Kaggle datasets",
  "Worked on Dhatchan Academy analysis project",
  "Built interactive dashboards using Power BI and Excel",
  "Performed data cleaning, analysis, and visualization on real-world datasets",
  "Developed a freelance-style project: Shawarma Shop Analysis",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase text-center mb-2">Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          My Working Process
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-10 card-shadow relative overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
            
            <div className="ml-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                  2023 – Present
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-1">
                Data Analyst Trainee & Project Experience
              </h3>
              <p className="text-muted-foreground text-sm mb-6">Freelance & Self-directed Learning</p>

              <ul className="space-y-4">
                {experiences.map((exp, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-muted-foreground leading-relaxed">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
