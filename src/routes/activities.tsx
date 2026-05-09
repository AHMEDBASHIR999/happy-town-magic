import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, FadeIn } from "@/components/Motion";
import softplay from "@/assets/softplay.webp";
import arcade from "@/assets/arcade.webp";
import birthday from "@/assets/birthday.webp";
import trampoline from "@/assets/trampoline.webp";
import ballpit from "@/assets/ballpit.webp";
import funvillage from "@/assets/funvillage.webp";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Happy Town Kuwait" },
      { name: "description", content: "Explore soft play, arcade, trampolines, fun village and more across Happy Town's three Kuwait locations." },
      { property: "og:title", content: "Activities — Happy Town Kuwait" },
      { property: "og:description", content: "Six worlds of play. Soft play, arcade, trampolines, fun village & more." },
    ],
  }),
  component: ActivitiesPage,
});

const activities = [
  { title: "Soft Play Areas", desc: "Multi-level structures, slides and tunnels for ages 1–12.", img: softplay, branches: ["Marina", "Assima", "Avenues"] },
  { title: "Arcade Games", desc: "Latest interactive games, redemption and prize tickets.", img: arcade, branches: ["Marina", "Assima", "Avenues"] },
  { title: "Fun Village (Marina)", desc: "Role-play town: bakery, hospital, supermarket and more.", img: funvillage, branches: ["Marina"] },
  { title: "Party Rooms", desc: "Themed celebration rooms with dedicated event hosts.", img: birthday, branches: ["Marina", "Assima", "Avenues"] },
  { title: "Trampoline Park", desc: "Bounce, leap and play in our supervised trampoline zone.", img: trampoline, branches: ["Avenues"] },
  { title: "Ball Pit Adventures", desc: "Giant ball pit with cannons, climbing nets and slides.", img: ballpit, branches: ["Marina", "Assima"] },
];

function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Six worlds. Endless adventures."
        subtitle="Pick your favorite — or try them all. Every Happy Town visit is a new story."
        image={softplay}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden bg-card border shadow-lg hover:shadow-pop h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-extrabold text-2xl">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{a.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {a.branches.map((b) => (
                      <span key={b} className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-full bg-brand-yellow text-brand-black">{b}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
