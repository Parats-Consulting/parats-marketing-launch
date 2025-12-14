import { Database, Bot, Zap, Users, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Salesforce Foundation & Sales Operations Buildout",
    description: "Set up Salesforce to capture leads, track deals, and report on your pipeline—configured for how your team actually sells.",
  },
  {
    icon: Bot,
    title: "AI & Agentforce Enablement",
    description: "Add practical AI tools that save time and surface useful insights—with built-in guardrails so you stay in control.",
  },
  {
    icon: Zap,
    title: "Lead Intake & Speed-to-Lead Automation",
    description: "Connect your lead sources to Salesforce and route them automatically—so your team follows up faster and nothing slips through.",
  },
  {
    icon: Users,
    title: "Customer Data Unification & Activation",
    description: "Bring together data from sales, marketing, and support into one clear view you can actually use.",
  },
  {
    icon: BarChart3,
    title: "Marketing Performance & ROI Analytics",
    description: "Build dashboards that show which campaigns drive revenue—so you know where to invest.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/40">
      <div className="container-wide">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-foreground mb-4">
            What we do
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Focused services to get your Salesforce running right.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-7 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 opacity-0 animate-fade-in-up ${
                index >= 3 ? 'lg:col-span-1' : ''
              } ${index === 3 ? 'lg:ml-auto lg:max-w-sm' : ''} ${index === 4 ? 'lg:mr-auto lg:max-w-sm' : ''}`}
              style={{ animationDelay: `${0.15 + index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-body-sm text-muted-foreground">
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
