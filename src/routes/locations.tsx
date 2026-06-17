import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { PageHero, FadeIn } from "@/components/Motion";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Happy Town Kuwait" },
      { name: "description", content: "Visit Happy Town at Marina Mall, Assima Mall or The Avenues. Hours, directions and contact details." },
      { property: "og:title", content: "Locations — Happy Town Kuwait" },
      { property: "og:description", content: "Three Happy Town branches across Kuwait: Marina, Assima and The Avenues." },
    ],
  }),
  component: LocationsPage,
});

const locations = [
  {
    name: "Marina Mall",
    area: "Salmiya,",
    floor: "First and second floor",
    phone: "+965 98572227",
    hours: ["Saturday - Wednesday: 10:00 AM - 10:30PM", "Thursday - Friday 10:00 AM - 11:00 PM"],
    features: ["Soft Play", "Arcade", "Birthday Rooms", "Fun Village"],
    map: "https://www.google.com/maps?q=Marina+Mall+Kuwait&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Marina+Mall+Kuwait",
  },
  {
    name: "Assima Mall",
    area: "Kuwait City",
    floor: "5th Floor",
    phone: "+965 99323061",
    hours: ["Saturday - Wednesday: 10:00 AM - 10:00PM", "Thursday - Friday 10:00 AM - 10:30 PM"],
    features: ["Soft Play", "Birthday Rooms", "Ball Pit"],
    map: "https://www.google.com/maps?q=Assima+Mall+Kuwait&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Assima+Mall+Kuwait",
  },
  {
    name: "The Avenues",
    area: "Al Rai",
    floor: "Grand Avenue, Phase 4",
    phone: "+965 91112540",
    hours: ["Saturday - Wednesday: 10:00 AM - 10:00PM", "Thursday - Friday 10:00 AM - 11:00 PM"],
    features: ["Soft Play", "Trampoline Park"],
    map: "https://www.google.com/maps?q=The+Avenues+Kuwait&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=The+Avenues+Mall+Kuwait",
  },
];

function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Locations" title="Three places to play" subtitle="Find your nearest Happy Town and bring the family today." />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          {locations.map((l, i) => (
            <FadeIn key={l.name} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} className="grid lg:grid-cols-2 gap-8 rounded-3xl bg-card border-2 overflow-hidden shadow-lg">
                <div className="aspect-video lg:aspect-auto lg:min-h-[420px]">
                  <iframe
                    title={l.name}
                    src={l.map}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col">
                  <div className="size-12 rounded-2xl bg-brand-yellow text-brand-black grid place-items-center mb-4 shadow-pop">
                    <MapPin className="size-6" />
                  </div>
                  <h2 className="font-display font-extrabold text-3xl">{l.name}</h2>
                  <p className="text-muted-foreground">{l.area} · {l.floor}</p>

                  <div className="mt-6 space-y-2 text-sm">
                    {l.hours.map((h) => (
                      <p key={h} className="flex items-center gap-2"><Clock className="size-4 text-brand-purple" /> {h}</p>
                    ))}
                    <p className="flex items-center gap-2"><Phone className="size-4 text-brand-purple" /> {l.phone}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {l.features.map((f) => (
                      <span key={f} className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple">{f}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <a
                      href={l.directions}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-purple text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-pop hover:scale-105 transition-transform"
                    >
                      <Navigation className="size-4" /> Get Directions
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
