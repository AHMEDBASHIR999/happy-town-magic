import { createFileRoute, Link } from "@tanstack/react-router";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  ShieldCheck,
  Users,
  HeartHandshake,
  Cake,
  School,
  MapPin,
  ArrowRight,
  Star,
  PartyPopper,
  Gamepad2,
  Castle,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/unnamed (1).jpg";
import softplay from "@/assets/softpl.jpg";
import arcade from "@/assets/unnamed (4).jpg";
import birthday from "@/assets/birth.jpg";
import funvillage from "@/assets/unnamed.jpg";
import schooltrip from "@/assets/unnamed (3).jpg";
import pandaLogo from "@/assets/happy-town-logo.png";
import newGalleryImg from "@/assets/unnamed (1).jpg";
import birthdayAlt from "@/assets/birthday.webp";
import funvillageAlt from "@/assets/funvillage.webp";
import softplayAlt from "@/assets/softplay.webp";
import trampoline from "@/assets/unnamed (2).jpg";
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
import { FadeIn } from "@/components/Motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Town Kuwait — Where Smiles Never End" },
      { name: "description", content: "Kuwait's most loved indoor play destination. Soft play, arcade, birthdays & more at Marina, Assima and The Avenues." },
      { property: "og:title", content: "Happy Town Kuwait — Where Smiles Never End" },
      { property: "og:description", content: "Soft play, arcade, birthdays, school trips. Three locations across Kuwait." },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-gradient-hero text-primary-foreground pt-24">
      {/* Parallax bg */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-25">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/40 via-brand-purple/70 to-brand-purple" />
      </motion.div>
      {/* Decorative blobs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 size-[34rem] rounded-full bg-brand-yellow/30 blur-3xl"
      />
      <motion.div style={{ y: y2 }} className="absolute -bottom-32 -right-20 size-96 rounded-full bg-brand-yellow/20 blur-3xl" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center pt-10 pb-20">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-black text-xs font-extrabold uppercase tracking-wider"
          >
            <Sparkles className="size-3.5" /> Kuwait's #1 Kids Playground
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95]"
          >
            Where smiles{" "}
            <span className="relative inline-block">
              <span className="text-brand-yellow">never end</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 9 Q50 0 100 6 T198 4" stroke="#FFED00" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-xl"
          >
            A magical indoor play world for kids of all ages. Soft play, arcade games,
            birthday rooms, unforgettable adventures — all under one happy roof.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="tel:+96522288242"
              className="inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-black px-7 py-4 text-base font-extrabold shadow-glow hover:scale-105 transition-transform"
            >
              <Phone className="size-5" /> Book Now
            </a>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 backdrop-blur px-7 py-4 text-base font-bold hover:bg-primary-foreground/10 transition-colors"
            >
              <MapPin className="size-5" /> View Locations
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-primary-foreground/80"
          >
            <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-brand-yellow" /> Safe & Clean</span>
            <span className="flex items-center gap-2"><Users className="size-4 text-brand-yellow" /> Trained Staff</span>
            <span className="flex items-center gap-2"><HeartHandshake className="size-4 text-brand-yellow" /> Parent Approved</span>
          </motion.div>
        </div>

        {/* Animated Panda Logo */}
        <div className="relative h-[420px] md:h-[520px] lg:h-[600px] flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full bg-brand-yellow/40 blur-2xl"
          />
          <motion.img
            src={pandaLogo}
            alt="Happy Town panda mascot"
            className="relative w-full max-w-md drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -18, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8 },
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="size-10 rounded-full border-2 border-primary-foreground/40 grid place-items-center"
        >
          <span className="size-1.5 rounded-full bg-brand-yellow" />
        </motion.div>
      </div>
    </section>
  );
}

const playAreas = [
  { icon: Castle, title: "Soft Play", desc: "Slides, ball pits & climbing structures for endless fun.", img: softplay, color: "bg-brand-purple" },
  { icon: Gamepad2, title: "Arcade Games", desc: "Latest games, prizes, and high-energy entertainment.", img: arcade, color: "bg-brand-yellow" },
  { icon: PartyPopper, title: "Birthday Rooms", desc: "Themed celebrations your little one will never forget.", img: imgCopy, color: "bg-brand-purple" },
  { icon: Sparkles, title: "Fun Village", desc: "An immersive role-play town only at Marina branch.", img: funvillage, color: "bg-brand-yellow" },
];

function PlayAreas() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-extrabold uppercase tracking-widest">Explore</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-6xl">
            Worlds of <span className="text-brand-purple">play</span> await
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Four magical zones designed to delight every age, every imagination.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playAreas.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-pop transition-shadow h-full"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                  <div className={`size-12 rounded-2xl ${p.color} text-brand-black grid place-items-center mb-3 shadow-pop`}>
                    <p.icon className="size-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl">{p.title}</h3>
                  <p className="text-sm text-primary-foreground/80 mt-1">{p.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Safe Indoor Play", desc: "Padded surfaces, certified equipment and constant supervision." },
    { icon: Sparkles, title: "Sparkling Clean", desc: "Hospital-grade sanitation between every play session." },
    { icon: Users, title: "Trained Staff", desc: "Friendly, first-aid certified team kids love." },
    { icon: HeartHandshake, title: "Parent Peace of Mind", desc: "Comfortable lounges with full visibility of play areas." },
  ];
  return (
    <section className="py-24 bg-gradient-to-br from-brand-yellow/30 via-background to-brand-yellow/10 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 size-96 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-primary-foreground text-xs font-extrabold uppercase tracking-widest">Why Happy Town</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-6xl">Built for big smiles & total trust</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.1}>
              <div className="bg-card rounded-3xl p-7 h-full shadow-sm hover:shadow-pop transition-shadow border">
                <div className="size-14 rounded-2xl bg-brand-purple text-primary-foreground grid place-items-center mb-5 shadow-pop">
                  <it.icon className="size-7" />
                </div>
                <h3 className="font-display font-extrabold text-xl">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function BirthdayCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero text-primary-foreground p-10 md:p-16 lg:p-20">
            <motion.img
              src={birthday}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-purple/90 to-brand-purple/40" />
            <div className="relative max-w-2xl">
              <Cake className="size-12 text-brand-yellow mb-4" />
              <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight">
                Birthdays they'll <span className="text-brand-yellow">always remember</span>
              </h2>
              <p className="mt-5 text-lg text-primary-foreground/85 max-w-lg">
                Themed party rooms, dedicated hosts, decorations and unlimited play. Three packages for every dream celebration.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/birthday-parties" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-black px-7 py-4 font-extrabold shadow-glow hover:scale-105 transition-transform">
                  Plan a Birthday <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SchoolTrips() {
  return (
    <section className="py-24 bg-brand-yellow/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-primary-foreground text-xs font-extrabold uppercase tracking-widest">Educators</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl">School trips that turn learning into laughter</h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl">
            Group rates, exclusive sessions, free teacher entry and structured experiences your students will rave about.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm font-semibold">
            {["Free teacher entry", "Group bookings 20+", "Flexible weekday slots", "Special rates for higher numbers"].map((b) => (
              <li key={b} className="flex items-center gap-2"><span className="size-2 rounded-full bg-brand-purple" /> {b}</li>
            ))}
          </ul>
          <Link to="/school-trips" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-purple text-primary-foreground px-7 py-4 font-extrabold shadow-pop hover:scale-105 transition-transform">
            <School className="size-5" /> Request a School Trip
          </Link>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-purple/10 rounded-[2.5rem] rotate-3" />
            <img src={schooltrip} alt="School trips at Happy Town" className="relative rounded-[2.5rem] shadow-pop w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function LocationsPreview() {
  const locs = [
    { name: "Marina Mall", area: "Salmiya", tag: "Softplay Area + Arcade Games + Fun Village" },
    { name: "Assima Mall", area: "Kuwait City", tag: "Softplay Area + Creative Centre" },
    { name: "The Avenues", area: "Al Rai", tag: "Softplay Area" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-extrabold uppercase tracking-widest">Locations</span>
            <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl">Three places to play</h2>
          </div>
          <Link to="/locations" className="font-bold text-brand-purple inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {locs.map((l, i) => (
            <FadeIn key={l.name} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="rounded-3xl bg-card border shadow-lg hover:shadow-pop p-7 h-full">
                <div className="size-12 rounded-2xl bg-brand-yellow text-brand-black grid place-items-center mb-4 shadow-pop">
                  <MapPin className="size-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl">{l.name}</h3>
                <p className="text-sm text-muted-foreground">{l.area}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-brand-purple">{l.tag}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Laia Monleón", when: "7 months ago", text: "Our favorite playground in Kuwait! Love the place and in love with the staff! Thank you to treat us always really well!", rating: 5 },
    { name: "mohammad saud", when: "11 months ago", text: "The place is very beautiful and has a variety of games. There is also a cafe.", rating: 5 },
    { name: "Dirgha Rai", when: "a year ago", text: "Very nice place. Can ask who own Happy Town Company?", rating: 5 },
  ];
  return (
    <section className="py-24 bg-brand-purple text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-brand-yellow/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-extrabold uppercase tracking-widest">Loved by Families</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl">Smiles say it all</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="rounded-3xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-7 h-full">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="size-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 italic leading-relaxed">"{t.text}"</p>
                <p className="mt-4 font-bold text-brand-yellow">— {t.name}</p>
                <p className="text-xs text-primary-foreground/60">{t.when} · Google Review</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    schooltrip,
    funvillage,
    softplay,
    img5,
    img6,
    img7,
    img8,
    img10,
    img11,
    img12,
    img13,
    img14,
    imgCopy,
    ee,
    tt,
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-extrabold uppercase tracking-widest">Gallery</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl">Moments of Joy</h2>
        </FadeIn>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="break-inside-avoid">
                <img src={img} alt="Happy Town Gallery" className="w-full rounded-[2rem] object-cover hover:scale-[1.02] transition-transform duration-300 shadow-sm" loading="lazy" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <PlayAreas />
      <WhyUs />
      <Gallery />
      <BirthdayCTA />
      <SchoolTrips />
      <LocationsPreview />
      <Testimonials />
    </>
  );
}
