const About = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who we are
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="p-8 rounded-2xl bg-card shadow-card">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Ed & Ashley Parats
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're a husband-and-wife team with deep experience in Salesforce, RevOps, and marketing technology. We've helped companies of all sizes—from scrappy startups to enterprise organizations—build systems that actually work. Now we're focused on helping small to midsize businesses get the same quality consulting without the big agency overhead.
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    Extended team
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    For larger or more specialized projects, we collaborate with a trusted network of senior consultants who share our standards for quality and clear communication. You always know who's on your project and why.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
