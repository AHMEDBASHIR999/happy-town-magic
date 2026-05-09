import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Cake, Sparkles, PartyPopper } from "lucide-react";
import { PageHero, FadeIn } from "@/components/Motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import birthday from "@/assets/birthday.webp";

export const Route = createFileRoute("/birthday-parties")({
  head: () => ({
    meta: [
      { title: "Birthday Parties — Happy Town Kuwait" },
      { name: "description", content: "Themed birthday party packages with dedicated hosts, decorations and unlimited play. Three packages to suit any celebration." },
      { property: "og:title", content: "Birthday Parties — Happy Town Kuwait" },
      { property: "og:description", content: "Throw an unforgettable birthday at Happy Town. Three packages, themed rooms and dedicated party hosts." },
      { property: "og:image", content: birthday },
    ],
  }),
  component: BirthdaysPage,
});

const packages = [
  {
    name: "Basic",
    price: 60,
    icon: Cake,
    inclusions: ["10 children entry", "Party host (1 hr)", "Standard decorations", "Cake table setup", "Dedicated tables"],
  },
  {
    name: "Standard",
    price: 95,
    featured: true,
    icon: PartyPopper,
    inclusions: ["15 children entry", "Party host (2 hrs)", "Themed decorations", "Cake & balloons", "Refreshments for kids", "Photo zone"],
  },
  {
    name: "Premium",
    price: 150,
    icon: Sparkles,
    inclusions: ["25 children entry", "Dedicated host (3 hrs)", "Premium themed setup", "Full catering", "Custom cake", "Photographer", "Goodie bags"],
  },
];

const faqs = [
  { q: "What ages do you cater for?", a: "We host parties for kids aged 1–14. We'll tailor games, music and food to your group." },
  { q: "Can I bring an outside cake?", a: "Yes! Outside cakes are welcome. We can also arrange a custom cake on request." },
  { q: "How long is each party?", a: "Most parties run 2–3 hours including setup and unlimited play time before/after." },
  { q: "What's your cancellation policy?", a: "Free changes up to 7 days before. A 50% retention applies within 48 hours." },
];

function BirthdaysPage() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", branch: "Marina", pkg: "Standard" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Birthday Parties"
        title="Birthdays they'll never forget"
        subtitle="Themed rooms, dedicated hosts and unlimited play — pure magic from cake to confetti."
        image={birthday}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">Choose your package</h2>
            <p className="mt-3 text-muted-foreground">Three thoughtfully designed tiers — every detail handled.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`relative rounded-3xl p-8 h-full border-2 transition-all ${
                    p.featured
                      ? "bg-brand-purple text-primary-foreground border-brand-yellow shadow-pop"
                      : "bg-card border-border hover:shadow-pop"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-extrabold uppercase">
                      Most Popular
                    </span>
                  )}
                  <div className={`size-14 rounded-2xl grid place-items-center mb-5 ${p.featured ? "bg-brand-yellow text-brand-black" : "bg-brand-purple text-primary-foreground"}`}>
                    <p.icon className="size-7" />
                  </div>
                  <h3 className="font-display font-extrabold text-3xl">{p.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-5xl font-display font-extrabold">{p.price}</span>
                    <span className={p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>KD</span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm">
                    {p.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <Check className={`size-5 shrink-0 ${p.featured ? "text-brand-yellow" : "text-brand-purple"}`} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-yellow/30">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">Reserve the date</h2>
            <p className="mt-3 text-muted-foreground">Tell us a bit and our party team will be in touch within 24 hours.</p>
          </FadeIn>
          {submitted ? (
            <div className="rounded-3xl bg-card border p-10 text-center shadow-pop">
              <PartyPopper className="size-12 text-brand-purple mx-auto" />
              <h3 className="font-display font-extrabold text-2xl mt-4">Request received!</h3>
              <p className="text-muted-foreground mt-2">We'll WhatsApp you shortly to finalize details.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-3xl bg-card border p-8 shadow-lg grid sm:grid-cols-2 gap-4"
            >
              {[
                { k: "name", label: "Parent name", type: "text" },
                { k: "phone", label: "Phone", type: "tel" },
                { k: "date", label: "Preferred date", type: "date" },
                { k: "guests", label: "Number of kids", type: "number" },
              ].map((f) => (
                <label key={f.k} className="text-sm font-semibold">
                  {f.label}
                  <input
                    required
                    type={f.type}
                    value={(form as Record<string, string>)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple"
                  />
                </label>
              ))}
              <label className="text-sm font-semibold">
                Branch
                <select value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple">
                  <option>Marina</option><option>Assima</option><option>Avenues</option>
                </select>
              </label>
              <label className="text-sm font-semibold">
                Package
                <select value={form.pkg} onChange={(e) => setForm({ ...form, pkg: e.target.value })} className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple">
                  <option>Basic</option><option>Standard</option><option>Premium</option>
                </select>
              </label>
              <button type="submit" className="sm:col-span-2 mt-2 rounded-full bg-brand-purple text-primary-foreground py-4 font-extrabold shadow-pop hover:scale-[1.02] transition-transform">
                Request Booking
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="font-display font-extrabold text-4xl">Frequently asked</h2>
          </FadeIn>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="bg-card border-2 rounded-2xl px-5">
                <AccordionTrigger className="font-bold text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
