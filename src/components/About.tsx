const About = () => {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-foreground mb-4">
            Who we are
          </h2>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Edward */}
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-primary/[0.08] flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-primary">EP</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Edward Perez
                </h3>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Edward is a University of Florida finance graduate who started his career in Lockheed Martin's leadership development program. He spent a decade working in Fortune 150 environments before serving in ministry—where he developed a people-first approach grounded in clarity and purpose. Today, he focuses on Salesforce and AI/Agentforce consulting, helping teams build systems that actually work.
              </p>
            </div>

            {/* Ashley */}
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-accent/[0.1] flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-accent">AP</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Ashley Perez
                </h3>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Ashley began her career in turnaround consulting, helping small companies transform their operations. She was later recruited by FedEx, and eventually launched ministry-focused work in teaching and mentoring. Her strengths are process improvement, attention to quality, and making systems actually work for the people who use them.
              </p>
            </div>
          </div>

          {/* Summary cards */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-card border border-primary/10 shadow-card">
              <p className="text-body text-foreground font-medium text-center">
                Parats Consulting combines strategy and hands-on implementation to help growing teams build systems that actually work.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-secondary/60 border border-border/30">
              <p className="text-body-sm text-muted-foreground text-center">
                You'll work with a consistent team that communicates clearly, documents decisions, and delivers clean, maintainable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
