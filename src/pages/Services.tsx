import Layout from "@/components/Layout";

const services = [
  {
    title: "Salesforce Foundation & Revenue Operations Buildout",
    description: "Implement or streamline existing Sales Cloud to increase lead conversion, automate processes, and provide leadership with reliable visibility of data to make decisions",
  },
  {
    title: "Lead Intake & Automation",
    description: "Automatically turn inquiries into action to improve follow-ups and customer responses: forms → CRM creation → routing → follow-up → nurturing",
  },
  {
    title: "AI Enablement",
    description: "Design and deploy safe, practical AI agent workflows with strong prompts, safe execution, and handoffs—so AI creates outcomes, not risk.",
  },
  {
    title: "Customer Data Unification & Activation",
    description: "Unify customer and engagement data to make it usable for segmentation, personalization, and prioritization",
  },
  {
    title: "Marketing Performance & ROI Analytics",
    description: "Connect ad, marketing, and CRM data to measure ROI, build executive dashboards, and improve spend decisions",
  },
];

const platforms = [
  "Sales Cloud",
  "Service Cloud",
  "Data 360",
  "Marketing Cloud Growth/Advanced",
  "Marketing Intelligence (MI2)",
  "AI / SDR / Agentforce",
];

const outcomes = [
  "Higher revenue through stronger lead conversion",
  "Better decisions through visibility into actionable data",
  "Faster execution through shortening time-to-value",
  "Increased efficiency through streamlining processes by automation and AI-powered solutions",
  "Consistent customer experiences across web, email, SMS channels – preserving context",
  "Scalability for growth through healthy AI-powered automation",
  "Cutting-edge AI performance through customer support across digital channels (web, email, SMS, etc.)",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 px-6 md:px-10 lg:px-16">
        <div className="container-wide">
          <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Services
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg text-foreground max-w-4xl opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Parats Consulting provides Salesforce + AI consulting for small-to-midsize businesses.
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding-sm bg-secondary/40">
        <div className="container-wide">
          <div className="space-y-1">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="py-8 md:py-10 border-b border-border/60 last:border-b-0"
              >
                <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-start">
                  <h3 className="font-serif text-heading text-foreground">{service.title}</h3>
                  <p className="text-body text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
            What We Implement & Optimize
          </p>
          <div className="flex flex-wrap gap-3">
            {platforms.map((platform, index) => (
              <span
                key={index}
                className="px-4 py-2 text-body-sm text-foreground bg-secondary rounded-sm"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-caption uppercase tracking-widest text-primary-foreground/60 mb-6">
                What You Can Expect
              </p>
              <h2 className="font-serif text-display-sm md:text-display-md text-primary-foreground">
                Outcomes that matter
              </h2>
            </div>
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 mt-2.5 flex-shrink-0" />
                  <p className="text-body text-primary-foreground/90">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-display-sm md:text-display-md text-foreground mb-8">
            Ready to get started?
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

export default Services;
