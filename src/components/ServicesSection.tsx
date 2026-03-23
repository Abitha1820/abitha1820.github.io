import { BarChart3, LayoutDashboard, Sparkles, PieChart, Database } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Data Analysis", desc: "Comprehensive data analysis to uncover patterns, trends, and actionable insights from complex datasets." },
  { icon: LayoutDashboard, title: "Dashboard Creation", desc: "Interactive dashboards using Power BI & Excel to visualize KPIs and business metrics effectively." },
  { icon: Sparkles, title: "Data Cleaning & Preparation", desc: "Thorough data cleaning, transformation, and preparation to ensure accuracy and reliability." },
  { icon: PieChart, title: "Data Visualization", desc: "Compelling visual representations of data using charts, graphs, and infographics for clear communication." },
  { icon: Database, title: "SQL Data Handling", desc: "Efficient data querying, manipulation, and management using MySQL for database operations." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase text-center mb-2">Services</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          What I Offer
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Professional data analysis services tailored to help businesses make informed decisions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <s.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
