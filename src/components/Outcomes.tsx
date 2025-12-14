import { Check, Zap, Users, BarChart3, Clock, Shield } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    text: "Respond to leads faster and close more deals",
  },
  {
    icon: Users,
    text: "See your customers clearly—sales, marketing, and support in one place",
  },
  {
    icon: BarChart3,
    text: "Know which marketing efforts actually drive revenue",
  },
  {
    icon: Clock,
    text: "Cut the busywork with automation that runs in the background",
  },
  {
    icon: Shield,
    text: "Use AI that's practical, safe, and designed with guardrails",
  },
];

const Outcomes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What you'll get
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tangible outcomes that move your business forward.
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card hover:shadow-hover transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.15 + index * 0.08}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <outcome.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium pt-2">{outcome.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
