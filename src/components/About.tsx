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
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Edward Perez
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Edward is a University of Florida finance graduate who started his career in Lockheed Martin's leadership development program. He spent a decade working in Fortune 150 environments before serving in ministry—where he developed a people-first approach grounded in clarity and purpose. Today, he focuses on Salesforce and AI/Agentforce consulting, helping teams build systems that actually work.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Ashley Perez
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ashley began her career in turnaround consulting, helping small companies transform their operations. She was later recruited by FedEx, and eventually launched ministry-focused work in teaching and mentoring. Her strengths are process improvement, attention to quality, and making systems actually work for the people who use them.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-foreground leading-relaxed font-medium">
                  Parats Consulting combines strategy and hands-on implementation to help growing teams build systems that actually work.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  You'll work with a consistent team that communicates clearly, documents decisions, and delivers clean, maintainable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
