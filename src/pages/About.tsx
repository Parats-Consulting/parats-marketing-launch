import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 px-6 md:px-10 lg:px-16">
        <div className="container-narrow">
          <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            About
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg text-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Our Story
          </h1>
        </div>
      </section>

      {/* Ed's Story */}
      <section className="section-padding-sm bg-secondary/40">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-body text-foreground leading-relaxed mb-6">
              Ed is a University of Florida finance grad who began his career in Lockheed Martin's leadership development program, then spent the next decade in Fortune 150 environments learning how high-performing organizations operate.
            </p>
            <p className="text-body text-foreground leading-relaxed">
              After ten years in corporate America, his path shifted into ministry—traveling globally to teach and preach, while also building and scaling successful programs and supporting leaders around the world. That season deepened a people-first approach: listen well, understand what matters, and help individuals and businesses move forward with clarity and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Ashley's Story */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-body text-foreground leading-relaxed mb-6">
              Ashley's story began in business as a turnaround consultant, helping companies transform and grow exponentially — work that ultimately led to recruitment by FedEx, where she led a team of 45 people in building an app and website for one of FedEx's shipping offerings.
            </p>
            <p className="text-body text-foreground leading-relaxed">
              In 2020, she stepped into ministry, launching her own work centered on teaching, mentoring, and speaking nationally and internationally. She brings a rare blend of strategic rigor and heart: process improvement, attention to detail, and a relentless drive to improve business and lives to be as efficient and effortless as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Together */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-body-lg text-primary-foreground/90 leading-relaxed mb-8">
              After marrying in 2022, we transitioned back into the business world and found our way into the Salesforce ecosystem—almost by accident, but quickly by conviction.
            </p>
            <p className="text-body-lg text-primary-foreground leading-relaxed font-medium">
              Today, we combine corporate discipline, ministry-rooted care for people, and a solutions-first mindset to help organizations simplify complexity, unlock efficiency, and build systems that create real growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-display-sm md:text-display-md text-foreground mb-8">
            Want to learn more?
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

export default About;
