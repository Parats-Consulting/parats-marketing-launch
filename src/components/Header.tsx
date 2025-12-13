import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 px-6">
          <a href="/" className="font-display font-bold text-xl text-foreground">
            Parats Consulting
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          <Button variant="cta" size="sm" asChild>
            <a href="mailto:info@parats.consulting">
              <Mail className="w-4 h-4" />
              Email us
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
