import { FileSpreadsheet, BarChart3, Database, Code2, Eraser, PieChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  color: string;
}

const skills: Skill[] = [
  { name: "Advanced Excel", level: 85, icon: FileSpreadsheet, color: "from-emerald-500 to-emerald-600" },
  { name: "Power BI", level: 80, icon: BarChart3, color: "from-amber-500 to-orange-500" },
  { name: "MySQL", level: 75, icon: Database, color: "from-blue-500 to-cyan-500" },
  { name: "Python", level: 70, icon: Code2, color: "from-yellow-500 to-yellow-600" },
  { name: "Data Cleaning", level: 85, icon: Eraser, color: "from-violet-500 to-purple-500" },
  { name: "Data Visualization", level: 80, icon: PieChart, color: "from-pink-500 to-rose-500" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary font-medium text-sm">Skills</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to turn data into meaningful stories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skills.map((skill, i) => {
            const circumference = 2 * Math.PI * 36;
            const offset = circumference - (skill.level / 100) * circumference;

            return (
              <div
                key={skill.name}
                className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-5"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Circular progress */}
                <div className="relative shrink-0">
                  <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
                    <circle cx="40" cy="40" r="36" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <skill.icon size={22} className="text-primary" />
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-base mb-0.5">{skill.name}</h3>
                  <p className="text-2xl font-bold text-primary font-display">{skill.level}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
