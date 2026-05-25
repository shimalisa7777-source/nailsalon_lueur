import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/salon/Header";
import { Hero } from "@/components/salon/Hero";
import { Concept } from "@/components/salon/Concept";
import { MenuTabs } from "@/components/salon/MenuTabs";
import { Gallery } from "@/components/salon/Gallery";
import { Reservation } from "@/components/salon/Reservation";
import { FirstVisit } from "@/components/salon/FirstVisit";
import { FAQ } from "@/components/salon/FAQ";
import { FinalCTA } from "@/components/salon/FinalCTA";
import { Footer } from "@/components/salon/Footer";
import { MobileBottomCTA } from "@/components/salon/MobileBottomCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nail Salon Lueur｜大宮のプライベートネイルサロン" },
      { name: "description", content: "大宮駅徒歩圏内、1席だけのプライベートネイルサロン。ジェル・スカルプ・エステまで、持ち込みデザインもご相談いただけます。" },
      { property: "og:title", content: "Nail Salon Lueur｜大宮のプライベートネイルサロン" },
      { property: "og:description", content: "大宮駅徒歩圏内、1席だけのプライベートネイルサロン。" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Noto+Serif+JP:wght@400;500&family=Noto+Sans+JP:wght@300;400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <Hero />
        <Concept />
        <MenuTabs />
        <Gallery />
        <Reservation />
        <FirstVisit />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomCTA />
    </div>
  );
}
