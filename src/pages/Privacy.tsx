import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container-narrow">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-slate max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground mt-8">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you contact us through our website, we collect the information you provide, including your name, email address, and message content. We use this information solely to respond to your inquiry and provide our consulting services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground mt-8">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information you provide to respond to your inquiries, provide consulting services, and communicate with you about our services. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground mt-8">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this privacy policy, please contact us at{" "}
                  <a href="mailto:info@parats.consulting" className="text-primary hover:underline">
                    info@parats.consulting
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
