import { Button } from "@/components/ui/button";
import { Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-narrow section-padding text-center relative z-10">
        <div className="space-y-8 max-w-3xl mx-auto opacity-0 animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Build a Salesforce that
            <span className="text-gradient block mt-2">actually works for you</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We help growing businesses set up Salesforce the right way—so your team spends less time on busywork and more time closing deals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="cta" size="xl" asChild>
              <a href="mailto:info@parats.consulting">
                <Mail className="w-5 h-5" />
                Email us
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#services" className="text-muted-foreground hover:text-foreground">
                What we do
                <ArrowDown className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-slate pt-8 font-medium">
            Salesforce + AI/Agentforce consulting for small to midsize businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
