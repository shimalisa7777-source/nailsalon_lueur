import { links } from "@/lib/siteData";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 sparkle opacity-70" />
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-dusty-pink/30 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-soft-gold/20 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <span className="font-en text-xs tracking-[0.3em] text-rose-brown uppercase">Visit Us</span>
        <h2 className="mt-4 text-xl md:text-3xl text-mocha leading-relaxed">
          理想のデザインを、<br />
          あなただけのプライベート空間で。
        </h2>
        <p className="mt-6 font-sans-jp text-sm md:text-base leading-relaxed text-muted-foreground">
          初めての方も、リピーター様も。<br />
          デザイン相談やご予約を、<br />
          あなたに合った方法でスムーズにご案内します。
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 max-w-md mx-auto">
          <a href={links.line} aria-label="LINEで相談" className="font-sans-jp text-sm px-2 py-3.5 rounded-full bg-[#9da798] text-ivory text-center shadow-soft hover:bg-[#8d9788] transition-colors whitespace-nowrap">LINEで相談</a>
          <a href={links.minimo} aria-label="minimoで予約" className="font-sans-jp text-sm px-2 py-3.5 rounded-full bg-dusty-pink text-mocha text-center shadow-soft hover:bg-rose-beige transition-colors whitespace-nowrap">minimoで予約</a>
          <a href={links.hotpepper} aria-label="HPBで予約" className="font-sans-jp text-sm px-2 py-3.5 rounded-full bg-white text-mocha border border-rose-beige/60 text-center hover:bg-offwhite transition-colors whitespace-nowrap">HPBで予約</a>
          <a href={links.map} aria-label="マップを見る" className="font-sans-jp text-sm px-2 py-3.5 rounded-full bg-white text-mocha border border-rose-beige/60 text-center hover:bg-offwhite transition-colors whitespace-nowrap">マップを見る</a>
        </div>
      </div>
    </section>
  );
}