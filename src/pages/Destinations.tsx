import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, DollarSign } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { fadeUp } from "@/lib/animations";

const destinations = [
  { city: "Nashville", vibe: "Live music, honky-tonks & hot chicken", bestTime: "April – October", budget: "$$", description: "Nashville is the ultimate destination for brides who love live music, great food, and a buzzing nightlife. From Broadway's neon-lit honky-tonks to the trendy Gulch neighborhood, every corner serves up Southern charm with a side of fun." },
  { city: "Scottsdale", vibe: "Desert glam, pool days & spa retreats", bestTime: "October – April", budget: "$$$", description: "Scottsdale is pure desert luxury. Think infinity pools, world-class spas, stunning desert landscapes, and a nightlife scene that punches way above its weight. Perfect for groups who want to tan, relax, and turn up." },
  { city: "Miami", vibe: "Beach clubs, nightlife & Art Deco energy", bestTime: "November – April", budget: "$$$", description: "Miami brings the heat — literally and figuratively. South Beach cabanas, Wynwood's art scene, Little Havana's flavors, and nightlife that doesn't quit. It's a bachelorette classic for a reason." },
  { city: "Charleston", vibe: "Southern charm, rooftop bars & history", bestTime: "March – May, September – November", budget: "$$", description: "Charleston is for the group that wants elegance without pretension. Cobblestone streets, incredible restaurants, rooftop cocktails, and a relaxed pace that still knows how to party." },
  { city: "Austin", vibe: "Eclectic eats, live music & lake vibes", bestTime: "March – May, September – November", budget: "$$", description: "Austin keeps it weird in the best way. From barton Springs to Rainey Street, this city offers an eclectic mix of live music, incredible tacos, craft cocktails, and outdoor adventures." },
  { city: "Savannah", vibe: "Historic squares, cocktails & ghost tours", bestTime: "March – May, October – November", budget: "$$", description: "Savannah is dripping with charm and open-container-friendly vibes. Spanish moss, gorgeous squares, incredible food, and a party culture that's surprisingly lively for such a historic town." },
  { city: "Tulum", vibe: "Bohemian beach, cenotes & jungle parties", bestTime: "November – April", budget: "$$ – $$$", description: "For the crew that wants something a little more adventurous. Tulum offers crystalline cenotes, bohemian beach clubs, Mayan ruins, and some of the most photogenic backdrops on the planet." },
  { city: "Napa Valley", vibe: "Wine tastings, vineyard dinners & hot air balloons", bestTime: "August – October", budget: "$$$", description: "Napa is for the sophisticated crew. Stunning vineyard tours, private tastings, Michelin-star dining, and hot air balloon rides over rolling hills. It's refined celebration at its finest." },
];

const Destinations = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Destinations
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Pick your playground
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground font-sans leading-relaxed">
            We've scouted the best cities for unforgettable bachelorette weekends. Each one brings a different energy — find the one that matches your crew.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-12 max-w-5xl">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.city}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
              className="bg-card border border-border rounded-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="aspect-[4/3] lg:aspect-auto bg-muted flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-muted-foreground/20" />
                </div>
                <div className="lg:col-span-2 p-6 lg:p-10 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold">{dest.city}</h2>
                  <p className="text-primary font-sans text-sm font-semibold italic">{dest.vibe}</p>
                  <p className="text-muted-foreground font-sans leading-relaxed">{dest.description}</p>
                  <div className="flex flex-wrap gap-6 pt-2">
                    <div className="flex items-center gap-2 text-sm text-secondary-foreground font-sans">
                      <Calendar className="w-4 h-4 text-primary" />
                      {dest.bestTime}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-secondary-foreground font-sans">
                      <DollarSign className="w-4 h-4 text-primary" />
                      {dest.budget}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:underline"
                  >
                    Plan a trip here <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
