import { useRef, useState, useCallback } from "react";
import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

const reviews = [
  { n: "Aïcha B.", r: "Entrepreneure", t: "Grâce à Digital Elite Lab, j'ai enfin pu digitaliser ma boutique. Ventes x3 en 2 mois !", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces" },
  { n: "Komlan T.", r: "Architecte", t: "Plans topographiques précis, livraison rapide. Des pros à recommander sans hésiter.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces" },
  { n: "Sandrine M.", r: "Créatrice de contenu", t: "La formation CapCut a transformé ma manière de créer. Mes vidéos sont enfin pro.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces" },
  { n: "Yves K.", r: "Restaurateur", t: "Logo + identité visuelle au top. L'équipe écoute vraiment et délivre au-delà des attentes.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces" },
  { n: "Mawuli A.", r: "Étudiant ingénieur", t: "Mon ordi planté en pleine soutenance, sauvé en moins d'une heure. Service béton.", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces" },
  { n: "Fatou D.", r: "Coach digital", t: "Leur accompagnement IA m'a fait gagner 10h/semaine. Bluffant et accessible.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces" },
];

const loop = [...reviews, ...reviews];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <article className="shrink-0 w-[340px] sm:w-[400px] mr-5 rounded-3xl glass p-7 cursor-default
      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:-translate-y-3 hover:scale-[1.02]
      hover:shadow-[0_25px_60px_-15px_oklch(0.78_0.18_220/0.25),0_0_0_1px_oklch(0.78_0.18_220/0.15)]
      hover:border-electric/50 hover:bg-surface-elevated/80">
      <Quote size={28} className="text-electric/60" />
      <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90">"{r.t}"</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={r.img}
          alt={r.n}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover border border-border transition-transform duration-500 group-hover/card:scale-110"
        />
        <div>
          <div className="text-sm font-semibold">{r.n}</div>
          <div className="text-xs text-muted-foreground">{r.r}</div>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <section id="testimonials" className="relative py-32 sm:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-electric">07 — Témoignages</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Ils nous ont fait <span className="text-gradient italic">confiance</span>.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="relative group/track"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex animate-marquee will-change-transform"
          style={{
            width: "max-content",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {loop.map((r, i) => (
            <div key={i} className="group/card">
              <Card r={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

