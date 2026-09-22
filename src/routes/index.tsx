import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Mission } from "@/components/site/Mission";
import { Products } from "@/components/site/Products";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Elite Lab — Devenez une élite du digital" },
      {
        name: "description",
        content:
          "Agence digitale et centre de compétences au Togo. Graphisme, développement, IA, topographie, maintenance, sérigraphie. Devenez autonome dans le digital.",
      },
      { property: "og:title", content: "Digital Elite Lab — Devenez une élite du digital" },
      {
        property: "og:description",
        content:
          "Transformez vos compétences, votre business et votre avenir grâce au digital et à l'intelligence artificielle.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mission />
      <Products />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingActions />
    </main>
  );
}
