import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, FadeIn } from "@/components/Motion";
import softplay from "@/assets/softplay.webp";
import arcade from "@/assets/unnamed (4).jpg";
import birthday from "@/assets/birthday.webp";
import trampoline from "@/assets/unnamed (2).jpg";
import ballpit from "@/assets/unnamed (1).jpg";
import funvillage from "@/assets/funvillage.webp";
import unnamed from "@/assets/unnamed (1).jpg";
import unnamed2 from "@/assets/unnamed (2).jpg";  
import unnamed3 from "@/assets/unnamed (3).jpg";
import unnamed4 from "@/assets/unnamed (4).jpg";
import unnamed5 from "@/assets/unnamed (5).jpg";
import unnamed6 from "@/assets/unnamed (6).jpg";
import unnamed7 from "@/assets/unnamed (7).jpg";
import unnamed8 from "@/assets/unnamed (8).jpg";
import unnamed9 from "@/assets/unnamed (9).jpg";
import unnamed10 from "@/assets/unnamed (10).jpg";
import unnamed11 from "@/assets/unnamed (11).jpg";
import unnamed12 from "@/assets/unnamed (12).jpg";
import unnamed13 from "@/assets/unnamed (13).jpg";
import unnamed14 from "@/assets/unnamed (14).jpg";
import ee from "@/assets/ee.jpg";
import ee2 from "@/assets/IMG_8349.jpg";


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
  { title: "Soft Play Areas", desc: "Multi-level structures, slides and tunnels for ages 1–9.", img: unnamed6, branches: ["Marina", "Assima", "Avenues"] },
  { title: "Arcade Games", desc: "Latest interactive games, redemption and prize tickets.", img: unnamed12, branches: ["Marina"] },
  { title: "Fun Village (Marina)", desc: "Role-play town: bakery, hospital, supermarket and more.", img: ee, branches: ["Marina"] },
  { title: "Party Rooms", desc: "Themed celebration rooms with dedicated event hosts.", img: unnamed7, branches: ["Marina", "Assima"] },
  { title: "Trampoline Park", desc: "Bounce, leap and play in our supervised trampoline zone.", img: ee2, branches: ["Assima","Marina","Avenues"] },
  { title: "Ball Pit Adventures", desc: "Giant ball pit with cannons, climbing nets and slides.", img: ballpit, branches: ["Avenues","Marina","Assima"] },
];

function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Six worlds. Endless adventures."
        subtitle="Pick your favorite,or try them all. Every Happy Town visit is a new story."
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
