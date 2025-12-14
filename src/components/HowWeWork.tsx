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
        <div className="text-center mb-14 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How we work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A clear, collaborative process from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-soft">
                    <span className="text-primary-foreground font-display font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                </div>
                <div className="pt-3">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
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
