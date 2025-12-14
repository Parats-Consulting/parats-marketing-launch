const steps = [
  {
    step: "01",
    title: "Align",
    description: "We learn how your team works, what tools you use, and where things are breaking down.",
  },
  {
    step: "02",
    title: "Build",
    description: "We configure Salesforce to fit your process—not force you into a template.",
  },
  {
    step: "03",
    title: "Connect",
    description: "We integrate your lead sources, marketing tools, and other systems so data flows automatically.",
  },
  {
    step: "04",
    title: "Scale",
    description: "We add automation and AI so your team can handle more without adding headcount.",
  },
  {
    step: "05",
    title: "Optimize",
    description: "We refine and improve as your business grows and your needs change.",
  },
];

const HowWeWork = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-foreground mb-4">
            How we work
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            A clear, collaborative process from start to finish.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />

          <div className="space-y-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-5 md:gap-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-cta flex items-center justify-center shadow-md">
                    <span className="text-primary-foreground font-display font-bold text-sm md:text-base">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 pb-6">
                  <div className="p-5 md:p-6 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-shadow">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
