import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Mission", href: "#mission" },
  { label: "Produits", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Avis", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-aurora"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-500 ${
            scrolled ? "" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
              scrolled ? "glass shadow-2xl" : "bg-transparent"
            }`}
          >
            <a href="#top" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
              <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aurora text-primary-foreground font-bold text-sm shadow-glow overflow-hidden">
                <img
                  src="https://res.cloudinary.com/drtsawgs1/image/upload/v1779858111/ZariuS23_copie_clqftj.jpg"
                  alt="Digital Elite Lab"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 rounded-xl bg-aurora opacity-30 blur-md group-hover:opacity-60 transition-opacity" />
              </span>
              <span className="font-display font-semibold tracking-tight text-foreground text-sm sm:text-base whitespace-nowrap">
                Digital Elite <span className="text-gradient">Lab</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 bottom-1 h-px bg-aurora origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center rounded-full bg-aurora px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
              >
                Nous contacter
              </a>
              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-xl glass"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm hover:bg-surface-elevated transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-xl bg-aurora px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Nous contacter
              </a>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
}
