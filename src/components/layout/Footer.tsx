import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import logoPine from "@/assets/logo-pine.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logoPine} alt="Sorry Mom & Co" className="h-8" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Boutique bachelorette weekends, planned to perfection. We handle the details so you can celebrate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider text-foreground">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", to: "/services" },
                { label: "Destinations", to: "/destinations" },
                { label: "Itinerary Inspo", to: "/itinerary-inspo" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider text-foreground">Packages</h4>
            <div className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Essentials</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Signature</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">White-Glove</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider text-foreground">Stay in the Loop</h4>
            <p className="text-sm text-muted-foreground">Get the Weekend Playbook — packing lists, budget templates, and itinerary inspo.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sorry Mom & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
