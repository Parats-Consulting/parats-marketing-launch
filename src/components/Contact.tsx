import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-foreground mb-4">
            Let's talk
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Ready to get your Salesforce working for you? Reach out and we'll respond within 1–2 business days.
          </p>
        </div>

        <div className="max-w-lg mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-card text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/[0.08] flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Email us directly
            </h3>
            
            <a
              href="mailto:info@parats.consulting"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 text-lg mb-8 group"
            >
              info@parats.consulting
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div>
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
