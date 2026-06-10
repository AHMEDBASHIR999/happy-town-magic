import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FadeIn } from "@/components/Motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Happy Town Kuwait" },
      { name: "description", content: "Transparent pricing across Marina, Assima and Avenues. Infant, child, special needs and guardian rates." },
      { property: "og:title", content: "Pricing — Happy Town Kuwait" },
      { property: "og:description", content: "Simple entry pricing across all three Happy Town locations." },
    ],
  }),
  component: PricingPage,
});

const rows = [
  { cat: "Fun Village Marina Mall", marina: "5.500 KD", assima: "5.500 KD", avenues: "5.500 KD" },
  { cat: "Infants (under 1)", marina: "Free", assima: "Free", avenues: "Free" },
  { cat: "Children (1 to 9)", marina: "6.500 KD", assima: "6.500 KD", avenues: "6.500 KD" },
  { cat: "Special Needs", marina: "3.500 KD", assima: "3.500 KD", avenues: "3.500 KD" },
  { cat: "Guardian Entry", marina: "Free (1)", assima: "Free (1)", avenues: "Free (1)" },
];

const faqs = [
  { q: "What's the age policy?", a: "Children must be supervised at all times. Infants enter free with a paying guardian." },
  { q: "Is re-entry allowed?", a: "Yes — keep your wristband for free same-day re-entry." },
  { q: "Are socks required?", a: "Yes, anti-slip socks are required and available at reception for 1 KD." },
];

function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple, transparent rates" subtitle="No hidden fees. Pay once and play all day." />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border-2 shadow-lg">
              <table className="w-full">
                <thead className="bg-brand-purple text-primary-foreground">
                  <tr>
                    <th className="px-6 py-5 text-left font-display font-extrabold">Category</th>
                    <th className="px-6 py-5 font-display font-extrabold">Marina</th>
                    <th className="px-6 py-5 font-display font-extrabold">Assima</th>
                    <th className="px-6 py-5 font-display font-extrabold">Avenues</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.cat} className={i % 2 ? "bg-brand-yellow/10" : "bg-card"}>
                      <td className="px-6 py-4 font-bold">{r.cat}</td>
                      <td className="px-6 py-4 text-center">{r.marina}</td>
                      <td className="px-6 py-4 text-center">{r.assima}</td>
                      <td className="px-6 py-4 text-center">{r.avenues}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

        </div>
      </section>

      <section className="py-20 bg-brand-yellow/20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FadeIn className="text-center mb-10"><h2 className="font-display font-extrabold text-4xl">Common questions</h2></FadeIn>
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
