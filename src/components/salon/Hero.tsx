import { links } from "@/lib/siteData";
import { NailChip } from "./NailChip";

const badges = ["持ち込みデザインOK", "スカルプ対応", "フィルイン相談可", "完全予約制"];
const visualLabels = ["Design", "Gel", "Sculpture", "Private Salon"];

export function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-95 z-0" />
      <div className="absolute inset-0 bg-[url('/images/na1.png')] bg-cover bg-center opacity-15 mix-blend-multiply z-[-1]" />
      <div className="absolute inset-0 sparkle opacity-70 z-0" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-dusty-pink/30 blur-3xl z-0" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-soft-gold/20 blur-3xl z-0" />
      {/* curved line */}
      <svg className="absolute inset-x-0 top-1/3 w-full h-32 opacity-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,10 600,60 T1200,60" stroke="oklch(0.82 0.08 85)" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* text */}
        <div className="animate-float-up">
          <span className="font-en text-xs tracking-[0.3em] text-rose-brown uppercase">Nail Salon · Omiya</span>
          <h1 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.4] md:leading-[1.35] text-mocha">
            大宮で、理想の指先を<br />相談できる
            <span className="block mt-2 text-xl md:text-2xl text-rose-brown">1席だけのプライベートネイルサロン</span>
          </h1>
          <p className="mt-6 font-sans-jp text-sm md:text-base leading-relaxed text-muted-foreground text-left">
            持ち込みデザイン、ジェル、スカルプ、エステまで。<br className="hidden md:block" />
            あなたにぴったりのメニューで、理想の仕上がりを叶えます。
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="font-sans-jp text-xs px-3 py-1.5 rounded-full bg-white/70 border border-rose-beige/60 text-mocha"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md mx-auto md:mx-0">
            <a href={links.line} aria-label="LINEで相談" className="font-sans-jp text-sm px-2 py-3.5 rounded-full bg-[#9da798] text-ivory text-center shadow-soft hover:bg-[#8d9788] transition-colors whitespace-nowrap">
              LINEで相談
            </a>
            <a href="#design" aria-label="デザインを見る" className="font-sans-jp text-sm px-2 py-3.5 rounded-full bg-ivory text-mocha border border-rose-beige/30 text-center shadow-soft hover:bg-rose-50 transition-colors whitespace-nowrap">
              デザインを見る
            </a>
            <a href={links.minimo} aria-label="minimoで予約" className="font-sans-jp text-sm px-2 py-3.5 rounded-full bg-dusty-pink text-mocha text-center shadow-soft hover:bg-rose-beige transition-colors whitespace-nowrap">
              minimoで予約
            </a>
            <a href={links.hotpepper} aria-label="HPBで予約" className="font-sans-jp text-sm px-2 py-3.5 rounded-full bg-white text-mocha border border-rose-beige/60 text-center hover:bg-offwhite transition-colors whitespace-nowrap">
              HPBで予約
            </a>
          </div>
        </div>

        {/* visual */}
        <div data-anim="HeroAnimationArea" className="relative mt-12 md:mt-0 animate-float-up">
          <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-[420px] mx-auto md:ml-auto md:mr-0 aspect-square">
            <div className="rounded-3xl overflow-hidden shadow-soft border border-rose-beige/30">
              <img src="/images/salon1.png" alt="Salon" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft border border-rose-beige/30">
              <img src="/images/salon2.png" alt="Nails" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft border border-rose-beige/30">
              <img src="/images/salon3.png" alt="Design" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft border border-rose-beige/30">
              <img src="/images/salon4.png" alt="Hand" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-soft-gold animate-shimmer hidden md:block" />
          <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-soft-gold animate-shimmer hidden md:block" />
        </div>
      </div>
      {/* Salon Movie Section */}
      <div className="relative max-w-5xl mx-auto px-5 md:px-8 mt-24 md:mt-32 z-10">
        <div className="text-center mb-8">
          <h2 className="font-en text-2xl md:text-3xl text-mocha tracking-wide">Salon Movie</h2>
          <p className="mt-3 font-sans-jp text-sm text-muted-foreground text-left md:text-center max-w-xl mx-auto">
            施術の雰囲気や、プライベート空間のやわらかさを感じていただけます。
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-card border border-rose-beige/30 aspect-video max-w-3xl mx-auto">
          <video
            src="/videos/hero1.MP4"
            poster="/images/hero-poster.jpg.JPG"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}