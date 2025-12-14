import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-18 px-5 md:px-8">
          <a href="/" className="font-display font-bold text-lg md:text-xl text-foreground">
            Parats Consulting
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          <Button variant="cta" size="sm" asChild>
            <a href="mailto:info@parats.consulting">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email us</span>
              <span className="sm:hidden">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
