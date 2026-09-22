import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const phones = [
  { label: "+228 92 59 82 60", href: "https://wa.me/22892598260" },
  { label: "+228 97 77 30 77", href: "https://wa.me/22897773077" },
  { label: "+228 96 06 57 45", href: "https://wa.me/22896065745" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-aurora overflow-hidden shadow-glow">
                <img
                  src="https://res.cloudinary.com/drtsawgs1/image/upload/v1779858111/ZariuS23_copie_clqftj.jpg"
                  alt="Digital Elite Lab"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-display font-semibold tracking-tight">
                Digital Elite <span className="text-gradient">Lab</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
              Agence digitale et centre de compétences. Nous formons une élite digitale
              autonome, compétente et rentable.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 inline-flex items-center justify-center rounded-full glass hover:border-electric/50 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["À propos", "#about"],
                ["Services", "#services"],
                ["Mission", "#mission"],
                ["Produits", "#products"],
                ["Portfolio", "#portfolio"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="hover:text-electric transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Contacts</h4>
            <ul className="space-y-3 text-sm">
              {phones.map((p) => (
                <li key={p.label} className="flex items-start gap-3">
                  <Phone size={16} className="text-electric mt-0.5 shrink-0" />
                  <a href={p.href} target="_blank" rel="noreferrer" className="hover:text-electric transition-colors">
                    {p.label}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-electric mt-0.5 shrink-0" />
                <a href="mailto:digitalelitelabservices@gmail.com" className="hover:text-electric transition-colors break-all">
                  digitalelitelabservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-electric mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Lomé, Togo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden shadow-glow">
              <img
                src="https://res.cloudinary.com/drtsawgs1/image/upload/v1779858111/ZariuS23_copie_clqftj.jpg"
                alt="Digital Elite Lab"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-display font-semibold text-foreground">Digital Elite Lab</span>
            <span className="hidden sm:inline">© {new Date().getFullYear()} · Tous droits réservés.</span>
          </div>
          <p>Make by <span className="text-gradient font-semibold">Digital Elite Lab</span></p>
        </div>
      </div>
    </footer>
  );
}
