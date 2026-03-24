import { ExternalLink } from "lucide-react";
import projectHr from "@/assets/project-hr.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectShawarma from "@/assets/project-shawarma.jpg";
import projectAcademy from "@/assets/project-academy.jpg";

const projects = [
  {
    title: "HR Analytics Dashboard",
    desc: "Analyzed employee attrition patterns, workforce demographics, and HR metrics for talent retention insights.",
    tools: ["Power BI"],
    image: projectHr,
  },
  {
    title: "Healthcare Analysis Dashboard",
    desc: "Explored healthcare data to identify trends in patient demographics, treatment outcomes, and resource utilization.",
    tools: ["Excel"],
    image: projectHealthcare,
  },
  {
    title: "E-commerce Sales Insights",
    desc: "Uncovered revenue trends, product performance, and customer purchasing behavior from e-commerce data.",
    tools: ["Power BI"],
    image: projectEcommerce,
  },
  {
    title: "Shawarma Shop Analysis",
    desc: "Freelance project analyzing sales data for a food business — order trends, revenue, and product popularity.",
    tools: ["Power BI", "Freelance"],
    image: projectShawarma,
  },
  {
    title: "Dhatchan Academy Analysis",
    desc: "Comprehensive analysis of student performance, enrollment metrics, and course effectiveness.",
    tools: ["Power BI", "Excel"],
    image: projectAcademy,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary font-medium text-sm">Portfolio</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Project <span className="text-gradient">Showcases</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data analysis projects showcasing dashboard creation, visualization, and insight generation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 ${
                i >= 3 ? "sm:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center">
                    <ExternalLink size={20} className="text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
