import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's talk
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to get your Salesforce working for you? Reach out and we'll respond within 1–2 business days.
          </p>
        </div>

        <div className="max-w-md mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="p-8 rounded-2xl bg-gradient-hero border border-border text-center">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Email us directly
            </h3>
            <a
              href="mailto:info@parats.consulting"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline underline-offset-4 text-lg mb-6"
            >
              info@parats.consulting
            </a>

            <div className="mt-6">
              <Button variant="cta" size="lg" asChild className="w-full sm:w-auto">
                <a href="mailto:info@parats.consulting">
                  <Mail className="w-5 h-5" />
                  Email us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
