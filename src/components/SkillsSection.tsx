const skills = [
  { name: "Advanced Excel", level: 85, icon: "📊" },
  { name: "Power BI", level: 80, icon: "📈" },
  { name: "MySQL", level: 75, icon: "🗄️" },
  { name: "Python", level: 70, icon: "🐍" },
  { name: "Data Cleaning", level: 85, icon: "🧹" },
  { name: "Data Visualization", level: 80, icon: "📉" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase text-center mb-2">Skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          My Technical Expertise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="font-display font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
