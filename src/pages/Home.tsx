import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 px-6 md:px-10 lg:px-16">
        <div className="container-narrow">
          <div className="text-center space-y-8">
            <h1 className="font-serif text-display-xl md:text-[5.5rem] lg:text-[6.5rem] text-foreground">
              Parats
            </h1>
            <p className="font-serif text-body-lg md:text-heading text-foreground/70 -mt-2">
              Your Breakthrough
            </p>
            <p className="font-serif text-heading md:text-display-sm text-foreground/80">
              Clarity in systems. Peace in execution.
            </p>
            <div className="max-w-2xl mx-auto pt-6 space-y-6">
              <p className="text-body text-muted-foreground leading-relaxed">
                Parats was founded by leaders who have operated inside Fortune 100 organizations and led people in high-stakes, human-centered environments.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Systems should create clarity, not complexity — and performance should be repeatable without burning people out. We help leaders stop carrying execution in their heads and finally trust their systems.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="mailto:info@parats.consulting"
                className="inline-flex items-center gap-2 text-caption uppercase tracking-widest text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="section-padding bg-secondary/40">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6">
              What We Solve
            </p>
            <h2 className="font-serif text-display-md md:text-display-lg text-foreground mb-12">
              The Problems Leaders Don't Say Out Loud
            </h2>
            <p className="text-body-lg text-muted-foreground italic mb-12">
              — but feel every day
            </p>
            <div className="space-y-6">
              {[
                "We have smart people and powerful tools, but outcomes still feel unpredictable.",
                "Follow-up depends on who's having a good day — not a system we trust.",
                "Our team spends more time managing systems than serving customers.",
                "We know AI matters — but we're unsure how to use it safely and consistently.",
                "Salesforce should help us scale, but instead it creates friction.",
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-4 py-4 border-b border-border/60">
                  <span className="text-muted-foreground/40 font-serif text-lg">"</span>
                  <p className="text-body text-foreground/90">{problem}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            <div>
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6">
                What You Get
              </p>
              <h2 className="font-serif text-display-md md:text-display-lg text-foreground">
                What changes when systems replace guesswork
              </h2>
            </div>
            <div className="space-y-8">
              {[
                "Predictable revenue through consistent lead handling",
                "Data-driven decisions leaders actually trust",
                "Faster momentum with fewer reinventions",
                "Less burnout through invisible-labor automation",
                "AI that supports humans instead of replacing them",
                "Customer experiences that feel intentional",
              ].map((outcome, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <p className="text-body text-foreground/90">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Parats Really Does Section */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-caption uppercase tracking-widest text-primary-foreground/60 mb-6">
              What Parats Really Does
            </p>
            <p className="text-body-lg text-primary-foreground/90 leading-relaxed">
              We design and implement clear, enforced, human-centered operating rhythms across sales, marketing, service, and AI — so performance no longer depends on individual effort.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Foundation",
                description: "Clean, enforceable Salesforce architecture",
              },
              {
                title: "Flow",
                description: "Lead intake → routing → follow-up → nurture",
              },
              {
                title: "Intelligence",
                description: "Guardrailed AI agents with human handoffs",
              },
              {
                title: "Visibility",
                description: "Executive dashboards tied to behavior",
              },
              {
                title: "Adoption",
                description: "Training that reduces workload before demanding change",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-serif text-heading text-primary-foreground">{item.title}</h3>
                <p className="text-body-sm text-primary-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-display-sm md:text-display-md text-foreground mb-8">
            Ready to build systems you can trust?
          </h2>
          <a
            href="mailto:info@parats.consulting"
            className="inline-flex items-center gap-2 text-caption uppercase tracking-widest text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            Email us
          </a>
          <p className="text-body-sm text-muted-foreground mt-4">
            info@parats.consulting
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
