import { Button } from "@/components/ui/button";
import { Mail, ArrowDown, Zap, Eye, Bot } from "lucide-react";

const trustItems = [
  { icon: Zap, text: "Faster follow-up" },
  { icon: Eye, text: "Clearer visibility" },
  { icon: Bot, text: "Practical AI" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Subtle geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent opacity-40" />
        <div className="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent opacity-30" />
      </div>

      <div className="container-narrow section-padding text-center relative z-10">
        <div className="space-y-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] border border-primary/10 text-sm font-medium text-primary">
              Salesforce + AI/Agentforce consulting
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-display-md md:text-display-lg font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Salesforce that works
            <span className="text-gradient block mt-1">the way your team works</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Faster follow-up, less manual work, clearer visibility into what's happening—plus practical AI with guardrails you can trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="cta" size="xl" asChild>
              <a href="mailto:info@parats.consulting">
                <Mail className="w-5 h-5" />
                Email us
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-muted-foreground hover:text-foreground">
              <a href="#services">
                What we do
                <ArrowDown className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>

          {/* Trust row */}
          <div className="pt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust line */}
          <p className="text-body-sm text-slate font-medium opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            For small to midsize businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
