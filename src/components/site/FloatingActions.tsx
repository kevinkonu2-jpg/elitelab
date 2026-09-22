import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/22892598260?text=" +
  encodeURIComponent(
    "Salut Digital Elite Lab, j'aimerais discuter d'un projet professionnel très sérieux avec vous"
  );

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Retour en haut"
            className="h-12 w-12 rounded-full glass flex items-center justify-center hover:border-electric/50 transition-colors"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative h-14 w-14 rounded-full bg-aurora flex items-center justify-center text-primary-foreground shadow-glow hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-electric/40 animate-ping" />
        <MessageCircle size={22} className="relative" />
      </a>
    </div>
  );
}
