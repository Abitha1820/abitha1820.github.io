import { GraduationCap, Target, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase text-center mb-2">About Me</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Designing Solutions, Not Just Visuals
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Education</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              B.E. in Electronics and Communication Engineering from Anna University Regional Campus, 
              Tirunelveli. Graduated in 2022 with a strong technical foundation.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Career Goal</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aspiring to grow as a Data Analyst, leveraging analytical skills to derive meaningful 
              insights from complex datasets and support data-driven decision making.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Briefcase className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Background</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A motivated freelancer exploring opportunities in data analysis and technology. 
              Focused on developing skills through hands-on projects and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
