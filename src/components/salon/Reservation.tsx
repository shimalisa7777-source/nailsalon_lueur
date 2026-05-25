import { links } from "@/lib/siteData";
import { SectionTitle } from "./SectionTitle";

export function Reservation() {
  return (
    <section id="reservation" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <SectionTitle en="Reservation" jaSub="ご予約・ご相談" />
        <p className="mt-4 font-sans-jp text-sm md:text-base text-left md:text-center text-muted-foreground">
          初めてのお客様は空き状況がわかる専用ページから。<br />
          リピーター様やデザインの事前相談は、公式LINEからお気軽にご連絡ください。
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-3xl p-7 md:p-9 shadow-card border border-rose-beige/30">
            <span className="font-en text-xs tracking-[0.25em] text-rose-brown">FIRST VISIT</span>
            <h3 className="mt-3 text-lg md:text-xl text-mocha">ご新規様はこちら</h3>
            <p className="mt-3 font-sans-jp text-sm leading-relaxed text-muted-foreground">
              メニューや空き状況をご確認いただきながら、スムーズにご予約へ進めます。
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={links.minimo} aria-label="minimoで予約" className="font-sans-jp text-sm px-5 py-3 rounded-full bg-dusty-pink text-mocha text-center shadow-soft hover:bg-rose-beige transition-colors">
                minimoで予約
              </a>
              <a href={links.hotpepper} aria-label="HPBで予約" className="font-sans-jp text-sm px-5 py-3 rounded-full bg-white text-mocha border border-rose-beige/60 text-center hover:bg-offwhite transition-colors">
                HPBで予約
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-beige/40 to-dusty-pink/40 rounded-3xl p-7 md:p-9 shadow-card border border-rose-beige/30 relative overflow-hidden">
            <div className="absolute inset-0 sparkle opacity-60" />
            <div className="relative">
              <span className="font-en text-xs tracking-[0.25em] text-rose-brown">FOR REPEATERS</span>
              <h3 className="mt-3 text-lg md:text-xl text-mocha">リピーター様・相談はこちら</h3>
              <p className="mt-3 font-sans-jp text-sm leading-relaxed text-muted-foreground">
                公式LINEからデザイン相談や次回予約ができます。お気軽にお声がけください。
              </p>
              <div className="mt-6">
                <a href={links.line} aria-label="LINEで相談" className="block font-sans-jp text-sm px-5 py-3 rounded-full bg-[#9da798] text-ivory text-center shadow-soft hover:bg-[#8d9788] transition-colors">
                  LINEで相談
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 font-sans-jp text-xs text-left md:text-center text-muted-foreground">
          お好みの方法で、スムーズにご相談・ご予約いただけます。
        </p>
      </div>
    </section>
  );
}