import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Gem, Eye } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { fadeUp } from "@/lib/animations";

const About = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            About Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-serif font-bold mb-6">
            The story behind the celebrations
          </motion.h1>
        </div>
      </section>

      {/* Founder Story */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} custom={0} className="aspect-[3/4] bg-card border border-border rounded-sm flex items-center justify-center">
              <Heart className="w-16 h-16 text-muted-foreground/20" />
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">How it all started</h2>
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>
                  Sorry Mom & Co was born from a simple realization: planning a bachelorette weekend shouldn't feel like a second job. After organizing her own friends' celebrations (and learning the hard way what works and what doesn't), our founder decided to turn that chaos into a service.
                </p>
                <p>
                  What started as helping friends quickly turned into a passion for crafting curated, stress-free celebrations. The name? A nod to those moments during a bachelorette weekend that are best left off social media — and a promise that we'll make sure those moments happen in style.
                </p>
                <p>
                  Today, Sorry Mom & Co has planned unforgettable weekends for hundreds of groups across the country. Every trip is different because every bride is different — and that's exactly the point.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Philosophy</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-serif font-bold">What makes us different</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Personal, never cookie-cutter", desc: "We don't do templates. Every weekend is designed from scratch around your bride's personality, your group's energy, and the destination's best-kept secrets." },
              { icon: Gem, title: "Elevated, not over-the-top", desc: "We believe in luxury that feels effortless. Thoughtful details, premium vendors, and seamless execution — without the pretension or the Pinterest-overload." },
              { icon: Eye, title: "Obsessive attention to detail", desc: "From the welcome gifts to the late-night snack run, we think about every touchpoint. Because the best weekends feel magical when nothing goes wrong." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i + 2} className="text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Let's plan something unforgettable</h2>
          <p className="text-muted-foreground font-sans mb-8">Your bride deserves a weekend that's as unique as she is. Let's make it happen.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
