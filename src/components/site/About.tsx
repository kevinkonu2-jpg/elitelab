import { Reveal } from "./Reveal";
import { Palette, Code2, Map, Brain, Video, Wrench } from "lucide-react";

const founders = [
  {
    name: "Kévin KONU",
    role: "Co-fondateur · Digital & IA",
    image:
      "https://res.cloudinary.com/drtsawgs1/image/upload/v1777682123/gf.jpg_ewxtjd.jpg",
    skills: [
      { icon: Palette, label: "Graphisme" },
      { icon: Code2, label: "Développement" },
      { icon: Map, label: "Topographie" },
      { icon: Brain, label: "IA" },
    ],
    accent: "from-electric to-electric/40",
  },
  {
    name: "Florent AMEHOUENOU dit Zarius",
    role: "Co-fondateur · Création & Production",
    image:
      "https://res.cloudinary.com/drtsawgs1/image/upload/v1777682134/za.jpg_rtulcr.jpg",
    skills: [
      { icon: Palette, label: "Graphisme" },
      { icon: Video, label: "Montage vidéo" },
      { icon: Wrench, label: "Maintenance" },
      { icon: Brain, label: "Sérigraphie" },
    ],
    accent: "from-violet to-violet/40",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-electric">02 — Qui sommes-nous</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Une équipe <span className="text-gradient italic">complémentaire</span>, une même vision.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Digital Elite Lab est né de la rencontre entre deux passionnés du numérique.
                Notre mission : créer une élite digitale autonome, compétente et rentable au Togo
                et au-delà.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { t: "Notre histoire", v: "2024" },
                  { t: "Collaboration", v: "Quotidienne" },
                  { t: "Valeurs", v: "Excellence" },
                ].map((b) => (
                  <div key={b.t} className="rounded-2xl glass p-4">
                    <div className="text-xs text-muted-foreground">{b.t}</div>
                    <div className="mt-1 text-sm font-semibold">{b.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid gap-6">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.15}>
                <div className="group relative overflow-hidden rounded-3xl glass p-7 sm:p-9 hover:border-electric/40 transition-all duration-500 hover:-translate-y-1">
                  <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${f.accent} opacity-30 blur-3xl group-hover:opacity-50 transition-opacity`} />
                  <div className="relative flex items-center gap-5 sm:gap-7">
                    <div className="relative shrink-0 self-center">
                      <div className={`relative h-32 w-28 sm:h-44 sm:w-36 overflow-hidden rounded-2xl bg-gradient-to-br ${f.accent} p-[2px] shadow-glow`}>
                        <img
                          src={f.image}
                          alt={f.name}
                          loading="lazy"
                          className="h-full w-full rounded-2xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">{f.name}</h3>
                      <p className="mt-1 text-sm text-electric">{f.role}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {f.skills.map((s) => {
                          const Icon = s.icon;
                          return (
                            <span
                              key={s.label}
                              className="inline-flex items-center gap-1.5 rounded-full bg-surface-elevated/60 px-3 py-1.5 text-xs text-muted-foreground border border-border"
                            >
                              <Icon size={12} className="text-electric" />
                              {s.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
