import { Zap, Users, BarChart3, Clock, Shield } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    title: "Faster response",
    text: "Respond to leads faster and close more deals",
  },
  {
    icon: Users,
    title: "Unified view",
    text: "See your customers clearly—sales, marketing, and support in one place",
  },
  {
    icon: BarChart3,
    title: "Real ROI",
    text: "Know which marketing efforts actually drive revenue",
  },
  {
    icon: Clock,
    title: "Less busywork",
    text: "Cut the busywork with automation that runs in the background",
  },
  {
    icon: Shield,
    title: "Safe AI",
    text: "Use AI that's practical, safe, and designed with guardrails",
  },
];

const Outcomes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-foreground mb-4">
            What you'll get
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Tangible outcomes that move your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className={`group flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-border transition-all duration-300 opacity-0 animate-fade-in-up ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 lg:mx-0 md:mx-auto md:max-w-md lg:max-w-none' : ''
              }`}
              style={{ animationDelay: `${0.15 + index * 0.08}s` }}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                <outcome.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{outcome.title}</h3>
                <p className="text-body-sm text-muted-foreground">{outcome.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
