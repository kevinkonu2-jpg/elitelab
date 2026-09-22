import { Reveal } from "./Reveal";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_CONTACT =
  "https://wa.me/22892598260?text=" +
  encodeURIComponent(
    "Salut Digital Elite Lab, j'aimerais discuter d'un projet professionnel très sérieux avec vous"
  );

const WA_SERVICE =
  "https://wa.me/22892598260?text=" +
  encodeURIComponent(
    "Salut Digital Elite Lab, j'aimerais que vous me rendez un service professionnel, êtes vous disponible pour qu'on en parle ?"
  );

export function CTA() {
  return (
    <section id="contact" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-border p-10 sm:p-16 lg:p-24 text-center">
            <div className="absolute inset-0 -z-10 bg-surface" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-40 blur-3xl animate-float-slow"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.18 220 / 0.7), transparent 60%)" }} />
            <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-float-slow-2"
              style={{ background: "radial-gradient(circle, oklch(0.55 0.27 295 / 0.7), transparent 60%)" }} />
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <span className="text-xs uppercase tracking-[0.3em] text-electric">08 — Passons à l'action</span>
            <h2 className="mt-5 font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight max-w-4xl mx-auto">
              Prêt à transformer votre <span className="text-gradient italic">avenir digital</span> ?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Discutons de votre projet — un échange rapide pour identifier vos besoins
              et bâtir ensemble la solution la plus adaptée.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_CONTACT}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-aurora px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.04] transition-transform animate-float-y"
              >
                <MessageCircle size={16} />
                Nous contacter
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={WA_SERVICE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-electric/50 transition-colors animate-vibrate"
              >
                Demander un service
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
