import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { Play, Sparkles, ArrowUpRight } from "lucide-react";
import { VimeoPlayer } from "./VimeoPlayer";

type Cat = "Tous" | "Design" | "Web" | "Vidéo" | "IA";

type Item = {
  cat: Exclude<Cat, "Tous">;
  title: string;
  tag: string;
  description?: string;
  media:
    | { kind: "image"; src: string }
    | { kind: "video"; src: string; poster?: string }
    | { kind: "vimeo"; id: string }
    | { kind: "ai"; gradient: string; emoji: string };
  url?: string;
};

const items: Item[] = [
  // DESIGN (3)
  {
    cat: "Design",
    title: "Tanty Grace · Identité visuelle",
    tag: "Branding",
    media: { kind: "image", src: "https://res.cloudinary.com/drtsawgs1/image/upload/v1777700756/tanty_Grace_copie.jpg_re6hxy.jpg" },
  },
  {
    cat: "Design",
    title: "Tanty · Affiche promotionnelle",
    tag: "Print",
    media: { kind: "image", src: "https://res.cloudinary.com/drtsawgs1/image/upload/v1777700769/tanty.jpg_lx4n9l.jpg" },
  },
  {
    cat: "Design",
    title: "Gifty N · Portrait éditorial",
    tag: "Editorial",
    media: { kind: "image", src: "https://res.cloudinary.com/drtsawgs1/image/upload/v1777682157/Gifty_N.jpg_wi9uqu.jpg" },
  },
  // WEB (3)
  {
    cat: "Web",
    title: "Les Secrets de l'informatique",
    tag: "Landing premium",
    description: "Site de vente d'un ebook avec tunnel de conversion optimisé.",
    media: { kind: "ai", gradient: "from-cyan-400 via-sky-500 to-indigo-600", emoji: "💻" },
    url: "https://lessecretsdelinformatique.netlify.app",
  },
  {
    cat: "Web",
    title: "Boutique Chariow · Tunnel de vente",
    tag: "E-commerce",
    description: "Boutique en ligne complète avec produits digitaux et paiement intégré.",
    media: { kind: "ai", gradient: "from-violet-500 via-fuchsia-500 to-pink-500", emoji: "🛒" },
    url: "https://xoeztfdc.mychariow.shop",
  },
  {
    cat: "Web",
    title: "Cabinet conseil · Site vitrine",
    tag: "Corporate",
    description: "Site vitrine sur mesure pour un cabinet de conseil, design éditorial moderne.",
    media: { kind: "ai", gradient: "from-emerald-400 via-teal-500 to-cyan-600", emoji: "🌐" },
  },
  // VIDÉO (3)
  {
    cat: "Vidéo",
    title: "Spot publicitaire · Édition",
    tag: "Edit",
    media: { kind: "vimeo", id: "1194219050" },
  },
  {
    cat: "Vidéo",
    title: "Reel · Réseaux sociaux",
    tag: "Social",
    media: { kind: "vimeo", id: "1195794447" },
  },
  {
    cat: "Vidéo",
    title: "Clip événementiel",
    tag: "Cover",
    media: { kind: "vimeo", id: "1195792266" },
  },
  // IA (3)
  {
    cat: "IA",
    title: "Affiche IA · Campagne mode",
    tag: "Génératif",
    media: { kind: "ai", gradient: "from-blue-500 via-indigo-500 to-purple-700", emoji: "🎨" },
  },
  {
    cat: "IA",
    title: "Mockup site · Généré par IA",
    tag: "UI Concept",
    media: { kind: "ai", gradient: "from-purple-500 via-violet-500 to-blue-600", emoji: "🪄" },
  },
  {
    cat: "IA",
    title: "Chatbot IA · Assistant client",
    tag: "Conversationnel",
    media: { kind: "ai", gradient: "from-pink-500 via-rose-500 to-orange-500", emoji: "🤖" },
  },
];

const categories: Cat[] = ["Tous", "Design", "Web", "Vidéo", "IA"];

function Media({ it }: { it: Item }) {
  if (it.media.kind === "image") {
    return (
      <img
        src={it.media.src}
        alt={it.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    );
  }
  if (it.media.kind === "video") {
    return (
      <video
        src={it.media.src}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }
  if (it.media.kind === "vimeo") {
    return (
      <div className="absolute inset-0">
        <VimeoPlayer videoId={it.media.id} title={it.title} />
      </div>
    );
  }
  return (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${it.media.gradient}`} />
      <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl opacity-90 group-hover:scale-110 transition-transform duration-700">
        {it.media.emoji}
      </div>
    </>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<Cat>("Tous");
  const filtered = active === "Tous" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="portfolio" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-electric">06 — Portfolio</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Quelques <span className="text-gradient italic">réalisations</span> récentes.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    active === c
                      ? "bg-aurora text-primary-foreground shadow-glow scale-105"
                      : "glass text-muted-foreground hover:text-foreground hover:scale-105"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => {
              const isVideo = it.media.kind === "video" || it.media.kind === "vimeo";
              return (
                <motion.article
                  key={it.title}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-lg hover:shadow-2xl hover:border-electric/40 transition-all duration-500"
                >
                  <Media it={it} />

                  {!isVideo && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  )}

                  <div className="pointer-events-none absolute top-4 right-4 flex gap-2">
                    {isVideo && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-electric">
                        <Play size={10} /> Vidéo
                      </span>
                    )}
                    {it.cat === "IA" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-electric">
                        <Sparkles size={10} /> IA
                      </span>
                    )}
                  </div>

                  {!isVideo && (
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-background/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-electric">
                        {it.cat} · {it.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-xl font-bold leading-tight">{it.title}</h3>
                      {it.description && (
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {it.description}
                        </p>
                      )}
                      {it.url && (
                        <a
                          href={it.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-electric hover:gap-2.5 transition-all"
                        >
                          Visiter le site <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  )}

                  {isVideo && (
                    <div className="pointer-events-none absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground">
                        {it.tag}
                      </span>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
