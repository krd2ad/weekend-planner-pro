import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CalendarDays, PartyPopper, MapPin, Clock, ShoppingBag, Users, Store } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { toast } from "sonner";
import { fadeUp } from "@/lib/animations";

const Index = () => {
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You're in! Check your inbox for the Weekend Playbook.");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-6"
          >
            Boutique Bachelorette Planning
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6"
          >
            Boutique bachelorette weekends, planned to{" "}
            <span className="text-primary italic">perfection</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We handle the itinerary, reservations, vendors, and vibe. You show up and celebrate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
            >
              Book a Consultation
            </Link>
            <a
              href="#newsletter"
              className="px-8 py-4 border border-foreground/20 text-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              Get the Weekend Playbook
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              How It Works
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold">
              Three steps to your dream weekend
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {[
              { icon: Sparkles, step: "01", title: "Tell us your vibe", desc: "Share your crew's energy, preferences, and must-haves. We listen to every detail." },
              { icon: CalendarDays, step: "02", title: "We design your weekend", desc: "From itineraries to reservations, we craft a seamless experience tailored to your group." },
              { icon: PartyPopper, step: "03", title: "You celebrate stress-free", desc: "Show up, soak it in, and make memories. We handle everything behind the scenes." },
            ].map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} custom={i + 2} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-primary font-sans text-xs font-bold uppercase tracking-widest">{item.step}</p>
                <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Our Packages
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold">
              Choose your level of luxury
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {[
              { name: "Essentials", price: "$500", desc: "The perfect starter — we handle the core planning so you can focus on fun.", features: ["Custom itinerary", "Restaurant reservations", "Activity bookings", "Digital planning guide"] },
              { name: "Signature", price: "$1,200", desc: "Our most popular tier. Full-service planning with curated vendor coordination.", features: ["Everything in Essentials", "Vendor sourcing & booking", "Custom décor direction", "Day-of coordination", "Group communication hub"], highlight: true },
              { name: "White-Glove", price: "$2,500+", desc: "The ultimate luxury experience. We're with you from concept to confetti.", features: ["Everything in Signature", "Dedicated planner", "Welcome gifts & swag", "On-site concierge", "Full budget management", "Surprise experiences"] },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                custom={i + 2}
                className={`rounded-sm p-8 flex flex-col ${
                  pkg.highlight
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-card border border-border"
                }`}
              >
                {pkg.highlight && (
                  <p className="text-primary font-sans text-xs font-bold uppercase tracking-widest mb-4">Most Popular</p>
                )}
                <h3 className="text-2xl font-serif font-bold mb-1">{pkg.name}</h3>
                <p className="text-primary font-sans font-bold text-lg mb-3">Starting at {pkg.price}</p>
                <p className="text-muted-foreground font-sans text-sm mb-6 leading-relaxed">{pkg.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm font-sans text-secondary-foreground flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 text-primary mt-1 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`text-center py-3 font-sans font-semibold text-sm uppercase tracking-wider rounded-sm transition-colors ${
                    pkg.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  Book a Consultation
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:underline inline-flex items-center gap-2">
              View full package details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Destinations
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold">
              Where should your crew go?
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { city: "Nashville", vibe: "Live music, honky-tonks & hot chicken" },
              { city: "Scottsdale", vibe: "Desert glam, pool days & spa retreats" },
              { city: "Miami", vibe: "Beach clubs, nightlife & Art Deco energy" },
              { city: "Charleston", vibe: "Southern charm, rooftop bars & history" },
            ].map((dest, i) => (
              <motion.div key={dest.city} variants={fadeUp} custom={i + 2}>
                <Link
                  to="/destinations"
                  className="group block bg-card border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-[4/5] bg-muted flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-bold mb-1">{dest.city}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{dest.vibe}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/destinations" className="text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:underline inline-flex items-center gap-2">
              Explore all destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Itineraries */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Itinerary Inspo
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold">
              Peek at what's possible
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { title: "Nashville Nights", duration: "3 Days / 2 Nights", highlights: ["Broadway bar crawl", "Private chef dinner", "Line dancing lesson", "Brunch at the Gulch"] },
              { title: "Scottsdale Glow-Up", duration: "4 Days / 3 Nights", highlights: ["Spa day at a luxury resort", "Desert Jeep tour", "Pool party", "Old Town nightlife"] },
              { title: "Miami Heat", duration: "3 Days / 2 Nights", highlights: ["South Beach cabana", "Wynwood art walk", "Yacht sunset cruise", "Little Havana food tour"] },
            ].map((itin, i) => (
              <motion.div key={itin.title} variants={fadeUp} custom={i + 2} className="bg-card border border-border rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider">{itin.duration}</span>
                </div>
                <h3 className="text-xl font-serif font-bold">{itin.title}</h3>
                <ul className="space-y-2">
                  {itin.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground font-sans flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 text-primary mt-1 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/itinerary-inspo" className="text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:underline inline-flex items-center gap-2">
              See all sample itineraries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / Email Capture */}
      <section id="newsletter" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Free Download
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Get the Weekend Playbook
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground font-sans mb-8 leading-relaxed">
              Your go-to guide for planning the perfect bachelorette weekend — includes a packing list, budget template, and sample itinerary.
            </motion.p>
            <motion.form variants={fadeUp} custom={3} onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border text-foreground font-sans placeholder:text-muted-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                Send It
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Coming Soon
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold">
              More magic on the way
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: ShoppingBag, title: "Curated Shop", desc: "Bride-approved merch, accessories, and party essentials — all in one place." },
              { icon: Users, title: "Group Dashboard", desc: "A shared itinerary hub where your crew can RSVP, vote, and stay in sync." },
              { icon: Store, title: "Vendor Marketplace", desc: "Browse and book vetted vendors — photographers, chefs, DJs, and more." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i + 2} className="bg-card border border-border border-dashed rounded-sm p-8 text-center space-y-4 opacity-80">
                <div className="w-14 h-14 mx-auto rounded-full bg-muted flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-serif font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                <span className="inline-block text-xs font-sans font-semibold uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
