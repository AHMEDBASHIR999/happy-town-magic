import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero, FadeIn } from "@/components/Motion";
import softplay from "@/assets/softplay.webp";
import arcade from "@/assets/unnamed (4).jpg";
import birthday from "@/assets/birthday.webp";
import trampoline from "@/assets/unnamed (2).jpg";
import ballpit from "@/assets/unnamed (1).jpg";
import funvillage from "@/assets/funvillage.webp";
import birth from "@/assets/birth.jpg";
import unnamed from "@/assets/unnamed.jpg";
import softpl from "@/assets/softpl.jpg";
import schooltrip from "@/assets/unnamed (3).jpg"
import ee from "@/assets/ee.jpg";
import tt from "@/assets/tt.jpg";
import img5 from "@/assets/unnamed (5).jpg";
import img6 from "@/assets/unnamed (6).jpg";
import img7 from "@/assets/unnamed (7).jpg";
import img8 from "@/assets/unnamed (8).jpg";
import img10 from "@/assets/unnamed (10).jpg";
import img11 from "@/assets/unnamed (11).jpg";
import img12 from "@/assets/unnamed (12).jpg";
import img13 from "@/assets/unnamed (13).jpg";
import img14 from "@/assets/unnamed (14).jpg";
import imgCopy from "@/assets/unnamed copy.jpg";
import ee2 from "@/assets/IMG_8349.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Events — Happy Town Kuwait" },
      { name: "description", content: "Photos from birthday celebrations, daily play and special events at Happy Town Kuwait." },
      { property: "og:title", content: "Gallery & Events — Happy Town Kuwait" },
      { property: "og:description", content: "See the magic in motion. Browse photos and upcoming events at Happy Town." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: unnamed, cat: "Play", h: "tall" },
  { src: schooltrip, cat: "Play", h: "wide" },
  { src: ee, cat: "Play", h: "wide" },
  { src: tt, cat: "Play", h: "tall" },
  { src: softpl, cat: "Play", h: "tall" },
  { src: img5, cat: "Play", h: "tall" },
  { src: img6, cat: "Play", h: "wide" },
  { src: img7, cat: "Birthdays", h: "tall" },
  { src: img8, cat: "Play", h: "wide" },
  { src: img10, cat: "Play", h: "wide" },
  { src: img11, cat: "Play", h: "tall" },
  { src: img12, cat: "Birthdays", h: "wide" },
  { src: img13, cat: "Play", h: "tall" },
  { src: img14, cat: "Play", h: "wide" },
  { src: imgCopy, cat: "Play", h: "tall" },
  { src: ee2, cat: "Play", h: "wide" },
];

const events = [
  { date: "Every Friday", title: "Panda Show", desc: "Live mascot meet & greet at all branches, 5pm." },
  { date: "Saturday", title: "Magic Workshop", desc: "Hands-on magic class for ages 6+ at Marina." },
  { date: "Monthly", title: "Glow Party Night", desc: "Black-light dance party in our soft play zone." },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <PageHero eyebrow="Gallery & Events" title="A peek inside the fun" subtitle="Real moments. Real smiles. Real Happy Town." />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((p, i) => (
              <FadeIn key={`${p.src}${i}`} delay={(i % 4) * 0.05}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setOpen(p.src)}
                  className={`block w-full overflow-hidden rounded-3xl shadow-md hover:shadow-pop ${p.h === "tall" ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"}`}
                >
                  <img src={p.src} alt={p.cat} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
                </motion.button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-purple text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-extrabold uppercase tracking-widest">Coming Up</span>
            <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl">Events & shows</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.1}>
                <div className="rounded-3xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-7 h-full">
                  <p className="text-brand-yellow font-bold text-sm">{e.date}</p>
                  <h3 className="font-display font-extrabold text-2xl mt-2">{e.title}</h3>
                  <p className="text-primary-foreground/80 text-sm mt-2">{e.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-brand-black/90 backdrop-blur-sm grid place-items-center p-6"
          >
            <button className="absolute top-6 right-6 size-12 rounded-full bg-brand-yellow text-brand-black grid place-items-center" onClick={() => setOpen(null)}>
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={open} alt="" className="max-w-full max-h-[85vh] rounded-3xl shadow-pop"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
