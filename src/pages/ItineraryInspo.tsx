import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { fadeUp } from "@/lib/animations";

const itineraries = [
  {
    title: "Nashville Nights",
    city: "Nashville",
    duration: "3 Days / 2 Nights",
    days: [
      { day: "Day 1", items: ["Arrive & check into boutique hotel", "Welcome drinks at a rooftop bar", "Broadway honky-tonk crawl"] },
      { day: "Day 2", items: ["Brunch at a Gulch hot spot", "Private line dancing lesson", "Dinner with a private chef", "Late-night karaoke"] },
      { day: "Day 3", items: ["Recovery brunch & mimosas", "Shopping in 12 South", "Goodbye & departure"] },
    ],
  },
  {
    title: "Scottsdale Glow-Up",
    city: "Scottsdale",
    duration: "4 Days / 3 Nights",
    days: [
      { day: "Day 1", items: ["Arrive & settle into a luxury rental", "Pool party & welcome cocktails", "Dinner at a top-rated steakhouse"] },
      { day: "Day 2", items: ["Morning spa & wellness session", "Poolside lunch", "Desert Jeep tour at sunset", "Old Town bar hopping"] },
      { day: "Day 3", items: ["Yoga & brunch combo", "Shopping in Fashion Square", "Private dinner & games night"] },
      { day: "Day 4", items: ["Leisurely breakfast", "Group photos", "Farewell & departure"] },
    ],
  },
  {
    title: "Miami Heat",
    city: "Miami",
    duration: "3 Days / 2 Nights",
    days: [
      { day: "Day 1", items: ["Arrive in South Beach", "Cabana & bottle service at a beach club", "Dinner in Wynwood", "Nightlife on Ocean Drive"] },
      { day: "Day 2", items: ["Morning beach yoga", "Little Havana food tour", "Sunset yacht cruise", "VIP nightclub experience"] },
      { day: "Day 3", items: ["Recovery brunch at a beachfront spot", "Art Deco walking tour", "Goodbye & departure"] },
    ],
  },
  {
    title: "Charleston Charm",
    city: "Charleston",
    duration: "3 Days / 2 Nights",
    days: [
      { day: "Day 1", items: ["Check into a historic B&B", "Cocktails on a rooftop overlooking the harbor", "Farm-to-table dinner"] },
      { day: "Day 2", items: ["Brunch on King Street", "Walking tour of Rainbow Row", "Afternoon at a beachfront bar", "Private chef dinner"] },
      { day: "Day 3", items: ["Morning market stroll", "Farewell brunch", "Departure"] },
    ],
  },
  {
    title: "Austin Weirdness",
    city: "Austin",
    duration: "3 Days / 2 Nights",
    days: [
      { day: "Day 1", items: ["Check in & settle into an East Austin rental", "Food truck tour", "Rainey Street bar crawl"] },
      { day: "Day 2", items: ["Lake Travis boat day", "BBQ lunch at a legendary pit", "Live music on 6th Street"] },
      { day: "Day 3", items: ["Tacos & coffee brunch", "South Congress shopping", "Farewell & departure"] },
    ],
  },
  {
    title: "Savannah Soirée",
    city: "Savannah",
    duration: "3 Days / 2 Nights",
    days: [
      { day: "Day 1", items: ["Arrive & check into a Forsyth Park-area inn", "To-go cocktails & square strolling", "Dinner at a haunted restaurant"] },
      { day: "Day 2", items: ["Brunch on River Street", "Ghost & history trolley tour", "Afternoon at Tybee Island beach", "Rooftop dinner party"] },
      { day: "Day 3", items: ["Coffee in a hidden garden", "Shopping on Broughton Street", "Farewell brunch & departure"] },
    ],
  },
  {
    title: "Tulum Escape",
    city: "Tulum",
    duration: "4 Days / 3 Nights",
    days: [
      { day: "Day 1", items: ["Arrive & settle into a beachfront villa", "Welcome mezcal ceremony", "Dinner on the beach"] },
      { day: "Day 2", items: ["Cenote swim & snorkel", "Beach club afternoon", "Jungle dinner experience"] },
      { day: "Day 3", items: ["Sunrise yoga", "Mayan ruins tour", "Pool day", "Final night celebration"] },
      { day: "Day 4", items: ["Morning dip", "Farewell breakfast", "Departure"] },
    ],
  },
  {
    title: "Napa Uncorked",
    city: "Napa Valley",
    duration: "3 Days / 2 Nights",
    days: [
      { day: "Day 1", items: ["Arrive & check into a vineyard cottage", "Welcome wine tasting", "Michelin-star dinner"] },
      { day: "Day 2", items: ["Hot air balloon ride at sunrise", "Private winery tour & tasting", "Picnic lunch in the vineyards", "Spa afternoon", "Group dinner at a farmhouse"] },
      { day: "Day 3", items: ["Brunch at a winery", "Downtown Napa shopping", "Farewell & departure"] },
    ],
  },
  {
    title: "Desert Dreamscape",
    city: "Joshua Tree / Palm Springs",
    duration: "3 Days / 2 Nights",
    days: [
      { day: "Day 1", items: ["Check into a mid-century modern Airbnb", "Poolside welcome party", "Stargazing in Joshua Tree"] },
      { day: "Day 2", items: ["Hiking in the national park", "Palm Springs shopping & lunch", "Pool & spa afternoon", "Themed dinner party"] },
      { day: "Day 3", items: ["Morning yoga by the pool", "Brunch at a Palm Springs café", "Farewell & departure"] },
    ],
  },
];

const ItineraryInspo = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Itinerary Inspo
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Sample weekends to spark ideas
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground font-sans leading-relaxed">
            Browse our curated itineraries for inspiration — every one is fully customizable to your group's vibe.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl space-y-8">
          {itineraries.map((itin, idx) => (
            <motion.div
              key={itin.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
              className="bg-card border border-border rounded-sm p-6 lg:p-10"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h2 className="text-2xl font-serif font-bold">{itin.title}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary" />{itin.city}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary" />{itin.duration}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {itin.days.map((d) => (
                  <div key={d.day} className="space-y-2">
                    <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-primary">{d.day}</h3>
                    <ul className="space-y-1.5">
                      {d.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground font-sans flex items-start gap-1.5">
                          <ArrowRight className="w-3 h-3 text-primary mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:underline">
                  Customize this itinerary <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ItineraryInspo;
