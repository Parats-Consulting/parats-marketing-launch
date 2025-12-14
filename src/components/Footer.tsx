import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/60 border-t border-border/50">
      <div className="container-narrow section-padding-sm">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <a href="/" className="font-display font-bold text-xl text-foreground">
            Parats Consulting
          </a>

          {/* Email */}
          <a
            href="mailto:info@parats.consulting"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            info@parats.consulting
          </a>

          {/* Divider */}
          <div className="w-16 h-px bg-border" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-body-sm text-muted-foreground">
            <p>© {currentYear} Parats Consulting. All rights reserved.</p>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
