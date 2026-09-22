import { Reveal } from "./Reveal";
import { BookOpen, Scissors, Layers, Wand2, ArrowRight } from "lucide-react";

const products = [
  {
    icon: BookOpen,
    title: "Les Secrets de l'informatique",
    type: "Ebook",
    desc: "Le guide complet pour maîtriser votre ordinateur de A à Z et débloquer votre potentiel numérique.",
    benefits: ["Lecture immédiate", "Astuces pro", "À vie"],
    href: "https://lessecretsdelinformatique.netlify.app",
  },
  {
    icon: Scissors,
    title: "Formation CapCut",
    type: "Formation vidéo",
    desc: "Devenez monteur vidéo confirmé : techniques avancées, transitions, effets et workflow professionnel.",
    benefits: ["+10 modules", "Projets pratiques", "Certificat"],
    href: "https://xoeztfdc.mychariow.shop/prd_7p2bf3",
  },
  {
    icon: Layers,
    title: "Installation Autocad",
    type: "Service",
    desc: "Installation complète, configuration et prise en main personnalisée de votre licence Autocad.",
    benefits: ["Setup complet", "Tutoriel offert", "Support 30j"],
    href: "https://xoeztfdc.mychariow.shop/prd_ud7o7n",
  },
  {
    icon: Wand2,
    title: "Templates Photoshop",
    type: "Pack créatif",
    desc: "Une bibliothèque de templates premium pour accélérer vos créations graphiques au quotidien.",
    benefits: ["50+ templates", "Mises à jour", "Usage pro"],
    href: "https://xoeztfdc.mychariow.shop/prd_9990eayi",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-32 sm:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-electric">05 — Produits digitaux</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Des ressources <span className="text-gradient italic">premium</span>, prêtes à l'emploi.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.1}>
                <article className="group relative overflow-hidden rounded-3xl glass p-7 sm:p-9 h-full hover:border-electric/40 transition-all duration-500">
                  <div className="absolute -bottom-32 -right-20 w-72 h-72 rounded-full bg-aurora opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-elevated border border-border">
                        <Icon size={20} className="text-electric" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.type}</span>
                    </div>
                    <h3 className="mt-5 font-serif text-2xl sm:text-3xl font-bold leading-tight">{p.title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{p.desc}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.benefits.map((b) => (
                        <span key={b} className="rounded-full border border-border bg-surface-elevated/60 px-3 py-1 text-xs text-muted-foreground">
                          ✓ {b}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_0_40px_-5px_oklch(0.78_0.18_220/0.6)]"
                      >
                        Obtenir
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
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
