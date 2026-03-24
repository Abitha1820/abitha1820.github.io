import { BarChart3, LayoutDashboard, Sparkles, PieChart, Database } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Data Analysis", desc: "Comprehensive data analysis to uncover patterns, trends, and actionable insights from complex datasets.", num: "01" },
  { icon: LayoutDashboard, title: "Dashboard Creation", desc: "Interactive dashboards using Power BI & Excel to visualize KPIs and business metrics effectively.", num: "02" },
  { icon: Sparkles, title: "Data Cleaning", desc: "Thorough data cleaning, transformation, and preparation to ensure accuracy and reliability.", num: "03" },
  { icon: PieChart, title: "Data Visualization", desc: "Compelling visual representations using charts, graphs, and infographics for clear communication.", num: "04" },
  { icon: Database, title: "SQL Data Handling", desc: "Efficient data querying, manipulation, and management using MySQL for database operations.", num: "05" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary font-medium text-sm">Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional data analysis services tailored to help businesses make informed decisions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                i === services.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-display text-5xl font-bold text-border/50 dark:text-border/30 group-hover:text-primary/10 transition-colors select-none">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-300">
                  <s.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={26} />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
