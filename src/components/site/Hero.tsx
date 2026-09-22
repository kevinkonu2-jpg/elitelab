import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-dvh flex items-center pt-32 pb-20 overflow-hidden noise">
      {/* Background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-50 animate-float-slow"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.18 220 / 0.6), transparent 60%)" }} />
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl opacity-40 animate-float-slow-2"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.27 295 / 0.55), transparent 60%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm text-muted-foreground"
          >
            <Sparkles size={14} className="text-electric" />
            <span>Agence digitale & centre de compétences — Togo</span>
          </motion.div>

          <h1 className="mt-7 font-serif font-black tracking-tight text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] max-w-5xl">
            {"Devenez une".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-3"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="inline-block text-gradient italic"
            >
              élite
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="inline-block"
            >
              du digital
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Nous transformons vos compétences, votre business et votre avenir grâce au digital
            et à l'intelligence artificielle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#services"
              className="group relative inline-flex items-center gap-2 rounded-full bg-aurora px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.04] transition-transform animate-float-y"
            >
              Découvrir nos services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-electric/50 transition-colors animate-vibrate"
            >
              Commencer maintenant
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-24 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-3xl"
          >
            {[
              { v: "6+", l: "Domaines d'expertise" },
              { v: "100%", l: "Engagement qualité" },
              { v: "24/7", l: "Accompagnement" },
            ].map((s) => (
              <div key={s.l} className="text-left sm:text-center">
                <div className="font-serif text-3xl sm:text-5xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-2"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-electric to-transparent" />
      </motion.div>
    </section>
  );
}
