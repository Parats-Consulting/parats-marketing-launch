import { Database, Bot, Zap, Users, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Salesforce Foundation & RevOps Buildout",
    description: "Set up Salesforce Sales Cloud to capture leads, track deals, and report on your pipeline—built for how your team actually works.",
  },
  {
    icon: Bot,
    title: "AI & Agentforce Enablement",
    description: "Introduce practical AI tools like Einstein and Agentforce to save time and surface smarter insights, with guardrails to keep things safe.",
  },
  {
    icon: Zap,
    title: "Lead Intake & Speed-to-Lead Automation",
    description: "Connect your lead sources to Salesforce and automatically assign, route, and notify—so no lead falls through the cracks.",
  },
  {
    icon: Users,
    title: "Customer Data Unification & Activation",
    description: "Bring together data from marketing, sales, and support into one clear view you can act on.",
  },
  {
    icon: BarChart3,
    title: "Marketing Performance & ROI Analytics",
    description: "Build dashboards that connect marketing spend to pipeline and revenue, so you know what's working.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-14 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What we do
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Focused services to get your Salesforce running right.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.15 + index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
