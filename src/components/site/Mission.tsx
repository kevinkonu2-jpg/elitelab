import { Reveal } from "./Reveal";
import { GraduationCap, Compass, Rocket, Coins, Cpu } from "lucide-react";

const missions = [
  { icon: GraduationCap, t: "Apprendre le digital", d: "Acquérir les compétences indispensables à l'ère numérique." },
  { icon: Compass, t: "Devenir autonome", d: "Maîtriser ses outils pour ne plus jamais dépendre d'un tiers." },
  { icon: Rocket, t: "Digitaliser son activité", d: "Donner une présence en ligne forte à votre business." },
  { icon: Coins, t: "Générer des revenus", d: "Transformer le digital en source de revenus durables." },
  { icon: Cpu, t: "Exploiter l'IA", d: "Faire de l'intelligence artificielle votre meilleur allié." },
];

export function Mission() {
  return (
    <section id="mission" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-electric">04 — Notre impact</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Notre mission <span className="text-gradient italic">pour vous</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground">
              Cinq engagements concrets pour faire de chaque personne et chaque entreprise
              un acteur autonome et performant du monde digital.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {missions.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.t} delay={i * 0.08}>
                <div className="group relative h-full rounded-3xl glass p-6 hover:border-electric/40 hover:-translate-y-2 transition-all duration-500">
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora text-primary-foreground shadow-glow">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold leading-snug">{m.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
