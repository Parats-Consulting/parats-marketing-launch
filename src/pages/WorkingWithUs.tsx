import Layout from "@/components/Layout";

const deliverySteps = [
  {
    title: "Discover",
    description: "Clarify goals, success metrics, and where execution breaks down",
  },
  {
    title: "Strategize",
    description: "Design the simplest system that enforces the right behaviors",
  },
  {
    title: "Build",
    description: "Automate workflows that remove friction and manual effort",
  },
  {
    title: "Connect",
    description: "Unify customer data so context travels with the customer",
  },
  {
    title: "Enable",
    description: "Deploy AI with guardrails, accountability, and human oversight",
  },
  {
    title: "Train",
    description: "Reduce cognitive load so adoption sticks",
  },
  {
    title: "Optimize",
    description: "Iterate based on data, not opinions",
  },
];

const WorkingWithUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 px-6 md:px-10 lg:px-16">
        <div className="container-narrow">
          <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Working With Us
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg text-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            How We Deliver
          </h1>
        </div>
      </section>

      {/* Delivery Steps */}
      <section className="section-padding-sm bg-secondary/40">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {deliverySteps.map((step, index) => (
              <div 
                key={index}
                className="p-6 md:p-8 bg-card border border-border/40 rounded-sm"
              >
                <span className="text-caption text-muted-foreground/60 mb-4 block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-heading text-foreground mb-3">{step.title}</h3>
                <p className="text-body-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6">
            Collaboration
          </p>
          <div className="max-w-2xl">
            <p className="text-body text-foreground leading-relaxed">
              While most of our work happens virtually, we believe there's unique value in sitting across the table when it matters. When the timing and circumstances align, we prioritize at least one in-person working session to deepen alignment, clarify priorities, and ensure the system truly fits your team.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding-sm bg-secondary/40">
        <div className="container-narrow">
          <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6">
            Pricing
          </p>
          <div className="max-w-2xl space-y-6">
            <p className="text-body text-foreground leading-relaxed">
              Our work is project-based and scoped around outcomes, typically ranging from <span className="font-medium">$150–$200/hr</span> based on complexity and expertise required.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              We prioritize solutions that generate measurable revenue lift, cost savings, and execution clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <p className="text-caption uppercase tracking-widest text-primary-foreground/60 mb-6">
            Contact Us
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-primary-foreground mb-8">
            Ready to start a conversation?
          </h2>
          <a
            href="mailto:info@parats.consulting"
            className="inline-flex items-center gap-2 text-caption uppercase tracking-widest text-primary-foreground border-b border-primary-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            Email us
          </a>
          <p className="text-body-sm text-primary-foreground/70 mt-4">
            info@parats.consulting
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default WorkingWithUs;
