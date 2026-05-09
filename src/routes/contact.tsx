import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import { PageHero, FadeIn } from "@/components/Motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Happy Town Kuwait" },
      { name: "description", content: "Reach out to Happy Town. WhatsApp, phone or email — we're here to help plan your visit." },
      { property: "og:title", content: "Contact — Happy Town Kuwait" },
      { property: "og:description", content: "Get in touch with Happy Town Kuwait." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Say hi to Happy Town" subtitle="We're a quick message away — pick whichever channel suits you best." />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "+965 0000 0000", href: "https://wa.me/96500000000", color: "bg-brand-purple text-primary-foreground" },
            { icon: Phone, label: "Call us", value: "+965 0000 0000", href: "tel:+96500000000", color: "bg-brand-yellow text-brand-black" },
            { icon: Mail, label: "Email", value: "hello@happytown.kw", href: "mailto:hello@happytown.kw", color: "bg-brand-purple text-primary-foreground" },
          ].map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.1}>
              <a href={c.href} className={`block rounded-3xl p-7 ${c.color} shadow-pop hover:scale-[1.02] transition-transform`}>
                <c.icon className="size-8" />
                <p className="mt-4 text-xs font-extrabold uppercase tracking-widest opacity-80">{c.label}</p>
                <p className="font-display font-extrabold text-2xl mt-1">{c.value}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          {sent ? (
            <FadeIn>
              <div className="rounded-3xl bg-card border p-10 text-center shadow-pop">
                <h3 className="font-display font-extrabold text-2xl">Thanks for reaching out!</h3>
                <p className="text-muted-foreground mt-2">We'll be in touch within 24 hours.</p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl bg-card border p-8 shadow-lg grid sm:grid-cols-2 gap-4">
                <h2 className="sm:col-span-2 font-display font-extrabold text-3xl text-center mb-2">Send us a message</h2>
                <label className="text-sm font-semibold">Name
                  <input required className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple" />
                </label>
                <label className="text-sm font-semibold">Phone
                  <input required type="tel" className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple" />
                </label>
                <label className="sm:col-span-2 text-sm font-semibold">Email
                  <input required type="email" className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple" />
                </label>
                <label className="sm:col-span-2 text-sm font-semibold">Inquiry type
                  <select className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple">
                    <option>General question</option>
                    <option>Birthday party</option>
                    <option>School trip</option>
                    <option>Membership</option>
                  </select>
                </label>
                <label className="sm:col-span-2 text-sm font-semibold">Message
                  <textarea rows={4} required className="mt-1 w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none focus:border-brand-purple" />
                </label>
                <button className="sm:col-span-2 rounded-full bg-brand-purple text-primary-foreground py-4 font-extrabold shadow-pop hover:scale-[1.02] transition-transform">
                  Send Message
                </button>
              </form>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="py-12 bg-brand-yellow/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-3 gap-4">
          {["Marina Mall, Salmiya", "Assima Mall, Kuwait City", "The Avenues, Al Rai"].map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-2xl bg-card border p-5">
              <MapPin className="size-5 text-brand-purple" />
              <span className="font-bold">{a}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
