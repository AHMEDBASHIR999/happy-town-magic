import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PartyPopper } from "lucide-react";
import { PageHero, FadeIn } from "@/components/Motion";
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
    </>
  );
}
