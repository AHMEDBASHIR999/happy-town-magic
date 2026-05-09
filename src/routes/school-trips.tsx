import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, GraduationCap } from "lucide-react";
import { PageHero, FadeIn } from "@/components/Motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import arcade from "@/assets/arcade.webp";

export const Route = createFileRoute("/school-trips")({
  head: () => ({
    meta: [
      { title: "School Trips — Happy Town Kuwait" },
      { name: "description", content: "Group school trips with free teacher entry, exclusive sessions and structured activities. Custom packages for nurseries to high schools." },
      { property: "og:title", content: "School Trips — Happy Town Kuwait" },
      { property: "og:description", content: "Make learning unforgettable. Group rates, free teacher entry, exclusive play sessions." },
    ],
  }),
  component: SchoolTripsPage,
});

const tiers = [
  { name: "Mini", size: "20–40", price: "3 KD/child", inc: ["1 hr soft play", "Free teacher entry (1:10)", "Welcome juice"] },
  { name: "Classic", size: "40–80", price: "5 KD/child", inc: ["2 hrs full access", "Free teacher entry (1:8)", "Snack pack", "Group photo"] },
  { name: "Plus", size: "80+", price: "Custom", inc: ["Exclusive session", "Catering options", "Dedicated coordinator", "Activity workshops"] },
];

const faqs = [
  { q: "What age groups do you accept?", a: "We host trips from age 2 (with carers) through high school." },
  { q: "What's the teacher-to-student ratio?", a: "We recommend 1 teacher per 8–10 students. Teachers enter free." },
  { q: "Do you provide food?", a: "Yes — packed snacks or full catering can be arranged in advance." },
  { q: "How do we get there?", a: "All branches offer mall parking and dedicated bus drop-off zones." },
];

function SchoolTripsPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero eyebrow="Schools" title="Field trips full of laughter" subtitle="Structured fun that complements every curriculum, with free teacher entry and group rates." image={arcade} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="rounded-3xl bg-card border-2 p-7 h-full hover:shadow-pop transition-shadow">
                <GraduationCap className="size-10 text-brand-purple" />
                <h3 className="mt-4 font-display font-extrabold text-2xl">{t.name}</h3>
                <p className="text-sm text-muted-foreground">Group of {t.size}</p>
                <div className="mt-4 text-3xl font-display font-extrabold text-brand-purple">{t.price}</div>
                <ul className="mt-5 space-y-2 text-sm">
                  {t.inc.map((x) => <li key={x} className="flex gap-2"><Check className="size-4 text-brand-purple shrink-0 mt-0.5" /> {x}</li>)}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand-yellow/30">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">Plan your trip</h2>
          </FadeIn>
          {submitted ? (
            <div className="rounded-3xl bg-card border p-10 text-center shadow-pop">
              <h3 className="font-display font-extrabold text-2xl">Got it!</h3>
              <p className="text-muted-foreground mt-2">Our team will reach out to your school within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-3xl bg-card border p-8 shadow-lg grid sm:grid-cols-2 gap-4">
              {[
                ["School / Organization", "text"],
                ["Contact person", "text"],
                ["Phone", "tel"],
                ["Email", "email"],
                ["Preferred date", "date"],
                ["Group size", "number"],
              ].map(([label, type]) => (
                <label key={label} className="text-sm font-semibold">{label}
                  <input required type={type} className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple" />
                </label>
              ))}
              <label className="sm:col-span-2 text-sm font-semibold">Notes
                <textarea rows={3} className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple" />
              </label>
              <button className="sm:col-span-2 rounded-full bg-brand-purple text-primary-foreground py-4 font-extrabold shadow-pop hover:scale-[1.02] transition-transform">
                Send Request
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FadeIn className="text-center mb-10"><h2 className="font-display font-extrabold text-4xl">FAQ</h2></FadeIn>
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
