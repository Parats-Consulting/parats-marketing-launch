import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border/40">
      <div className="container-full px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="font-serif text-2xl tracking-wide text-foreground"
            >
              Parats
            </Link>
            <p className="text-body-sm text-muted-foreground max-w-xs">
              Clarity in systems. Peace in execution.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-caption uppercase tracking-widest text-foreground mb-2">Navigate</span>
            <Link to="/" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/services" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link to="/about" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/working-with-us" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">Working With Us</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-caption uppercase tracking-widest text-foreground mb-2">Contact</span>
            <a 
              href="mailto:info@parats.consulting" 
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              info@parats.consulting
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40">
          <p className="text-caption text-muted-foreground">
            © {currentYear} Parats Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
