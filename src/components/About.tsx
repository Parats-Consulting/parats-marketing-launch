const About = () => {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-foreground mb-4">
            Who we are
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Parats Consulting helps growing teams implement Salesforce and practical AI—cleanly, safely, and with measurable results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Leadership intro */}
          <div className="text-center mb-8">
            <p className="text-body font-medium text-foreground">
              Led by Edward Perez and Ashley Perez.
            </p>
            <p className="text-body-sm text-muted-foreground mt-1">
              Our team delivers consistent, documented, high-quality implementations end to end.
            </p>
          </div>

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
                Edward leads Salesforce and AI/Agentforce delivery for small to midsize businesses. He focuses on building systems that reduce manual work, improve visibility, and help teams close deals faster. Hands-on execution with measurable outcomes.
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
                Ashley focuses on operations, process improvement, and client communication. She ensures projects stay organized, decisions are documented, and deliverables meet high standards. Quality and clarity in every engagement.
              </p>
            </div>
          </div>

          {/* Credibility + quality */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-card border border-primary/10 shadow-card">
              <p className="text-body text-foreground font-medium text-center">
                Salesforce-certified team. Full credential list available upon request.
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
