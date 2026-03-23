import projectHr from "@/assets/project-hr.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectShawarma from "@/assets/project-shawarma.jpg";
import projectAcademy from "@/assets/project-academy.jpg";

const projects = [
  {
    title: "HR Analytics Dashboard",
    desc: "Analyzed employee attrition patterns, workforce demographics, and HR metrics to provide actionable insights for talent retention.",
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
    desc: "Analyzed e-commerce sales data to uncover revenue trends, product performance, and customer purchasing behavior.",
    tools: ["Power BI"],
    image: projectEcommerce,
  },
  {
    title: "Shawarma Shop Analysis",
    desc: "Freelance-style project analyzing sales data for a food business, covering order trends, revenue, and product popularity.",
    tools: ["Power BI", "Freelance"],
    image: projectShawarma,
  },
  {
    title: "Dhatchan Academy Analysis",
    desc: "Comprehensive analysis of academy data including student performance, enrollment metrics, and course effectiveness.",
    tools: ["Power BI", "Excel"],
    image: projectAcademy,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase text-center mb-2">Portfolio</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Digital Product Showcases
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A collection of data analysis projects showcasing dashboard creation, data visualization, and insight generation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all hover:-translate-y-2 group"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={512}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
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
