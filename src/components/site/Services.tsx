import { Reveal } from "./Reveal";
import { Palette, Wrench, Code2, Map, Brain, Printer, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphisme",
    tag: "Identité visuelle",
    items: ["Affiches publicitaires", "Bâches grand format", "Retouche photo pro", "Logos professionnels"],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    tag: "Informatique",
    items: ["Installation systèmes", "Installation logiciels", "Réparation ordinateurs", "Réparation téléphones"],
  },
  {
    icon: Code2,
    title: "Développement",
    tag: "Web & Mobile",
    items: ["Sites web sur mesure", "Applications mobiles", "Tunnels de vente", "Performance & SEO"],
  },
  {
    icon: Map,
    title: "Topographie",
    tag: "Géomatique",
    items: ["Conception de plans", "Lotissement", "Suivi titre foncier", "Levés topographiques"],
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    tag: "Innovation",
    items: ["Visuels IA premium", "Automatisation workflow", "Accompagnement IA", "Formations dédiées"],
  },
  {
    icon: Printer,
    title: "Sérigraphie",
    tag: "Impression",
    items: ["Impression sur supports", "Bâches personnalisées", "Logos sur textile", "Packaging"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.18 220), transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.27 295), transparent 70%)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-electric">03 — Nos services</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Six expertises au service de votre <span className="text-gradient italic">transformation</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-md">
              De la création visuelle à l'IA, en passant par le code et la topographie —
              une équipe, une promesse : l'excellence.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-2 hover:border-electric/50">
                  <div className="absolute inset-0 bg-aurora opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-aurora opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700" />

                  <div className="relative flex items-start justify-between mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-aurora rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated border border-border group-hover:border-electric/40 transition-colors">
                        <Icon size={22} className="text-electric" />
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-electric group-hover:rotate-45 transition-all duration-500" />
                  </div>

                  <div className="relative">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.tag}</span>
                    <h3 className="mt-2 font-serif text-2xl font-bold">{s.title}</h3>
                    <ul className="mt-5 space-y-2.5">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-electric shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
