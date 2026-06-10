import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, FadeIn } from "@/components/Motion";
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

function SchoolTripsPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero eyebrow="Schools" title="Field trips full of laughter" subtitle="Structured fun that complements every curriculum, with free teacher entry and group rates." image={arcade} />

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
    </>
  );
}
