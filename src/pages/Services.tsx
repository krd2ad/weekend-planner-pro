import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp } from "@/lib/animations";

const packages = [
  {
    name: "Essentials",
    price: "$500",
    desc: "We take the stress out of the basics so you can focus on having fun.",
    features: ["Custom weekend itinerary", "Restaurant research & reservations", "Activity bookings", "Digital planning guide", "Email support"],
  },
  {
    name: "Signature",
    price: "$1,200",
    desc: "Full-service planning with curated vendors and day-of coordination. Our most popular package.",
    features: ["Everything in Essentials", "Vendor sourcing & booking", "Custom décor direction", "Day-of timeline coordination", "Group communication hub", "Budget tracking", "2 revision rounds"],
    highlight: true,
  },
  {
    name: "White-Glove",
    price: "$2,500+",
    desc: "The ultimate luxury experience — we're with you from the first idea to the last confetti pop.",
    features: ["Everything in Signature", "Dedicated personal planner", "Welcome gifts & custom swag", "On-site concierge service", "Full budget management", "Surprise curated experiences", "Unlimited revisions", "Post-trip thank-you coordination"],
  },
];

const addons = [
  { name: "Custom Merch Package", price: "$150+", desc: "Matching shirts, totes, sashes — designed to your theme." },
  { name: "Welcome Box Curation", price: "$75/person", desc: "Curated welcome boxes delivered to your hotel or Airbnb." },
  { name: "Professional Photography", price: "$400+", desc: "A photographer to capture the highlights of your weekend." },
  { name: "Private Chef Experience", price: "$600+", desc: "An in-home or in-suite dining experience with a local chef." },
];

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 3–4 months before your trip, but we've pulled off incredible weekends in as little as 6 weeks. The earlier you book, the more options we'll have for venues and vendors." },
  { q: "Can I customize a package?", a: "Absolutely. Every package is a starting point — we tailor everything to your group's preferences, budget, and energy. Just tell us what you're dreaming of." },
  { q: "What destinations do you serve?", a: "We currently specialize in Nashville, Scottsdale, Miami, Charleston, Austin, Savannah, Tulum, and Napa. But if you have a different destination in mind, reach out — we love a challenge." },
  { q: "How many people can a group include?", a: "We typically plan for groups of 6–20 people, but we can accommodate larger groups with our White-Glove package." },
  { q: "What's included in the consultation?", a: "A free 30-minute call where we learn about your bride, your crew, and your vision. We'll walk you through our packages and help you decide the best fit." },
  { q: "Do you handle bookings and payments to vendors?", a: "Yes — with the Signature and White-Glove packages, we manage all vendor communication, contracts, and payments on your behalf." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Packages for every kind of party
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground font-sans leading-relaxed">
            Whether you need a little guidance or full-blown concierge service, we've got a tier that fits your crew's vibe and budget.
          </motion.p>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                custom={i}
                className={`rounded-sm p-8 flex flex-col ${pkg.highlight ? "bg-primary/10 border-2 border-primary" : "bg-card border border-border"}`}
              >
                {pkg.highlight && <p className="text-primary font-sans text-xs font-bold uppercase tracking-widest mb-4">Most Popular</p>}
                <h2 className="text-2xl font-serif font-bold mb-1">{pkg.name}</h2>
                <p className="text-primary font-sans font-bold text-lg mb-3">Starting at {pkg.price}</p>
                <p className="text-muted-foreground font-sans text-sm mb-6 leading-relaxed">{pkg.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm font-sans text-secondary-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 font-sans font-semibold text-sm uppercase tracking-wider rounded-sm transition-colors ${pkg.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary text-primary hover:bg-primary/10"}`}
                >
                  Book a Consultation
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">Add-Ons</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold">Make it extra special</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {addons.map((a, i) => (
              <motion.div key={a.name} variants={fadeUp} custom={i + 2} className="bg-card border border-border rounded-sm p-6 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-serif font-bold">{a.name}</h3>
                  <span className="text-primary font-sans font-bold text-sm">{a.price}</span>
                </div>
                <p className="text-sm text-muted-foreground font-sans">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">FAQ</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold">Questions? We've got answers.</motion.h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-sm px-6">
                <AccordionTrigger className="font-sans font-semibold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Ready to start planning?</h2>
          <p className="text-muted-foreground font-sans mb-8">Book a free consultation and let's design your perfect weekend.</p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
            Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
