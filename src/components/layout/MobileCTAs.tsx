import { Link } from "react-router-dom";

const MobileCTAs = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 flex gap-3">
      <Link
        to="/contact"
        className="flex-1 text-center py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-primary/90 transition-colors"
      >
        Book a Consultation
      </Link>
      <button
        onClick={() => {
          const el = document.getElementById("newsletter");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex-1 text-center py-3 border border-primary text-primary text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-primary/10 transition-colors"
      >
        Weekend Playbook
      </button>
    </div>
  );
};

export default MobileCTAs;
