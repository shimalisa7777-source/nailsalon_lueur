import { salon, links } from "@/lib/siteData";
import { SectionTitle } from "./SectionTitle";

export function Access() {
  return (
    <section id="access" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <SectionTitle en="Access" jaSub="アクセス" />
        <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <div className="bg-card rounded-3xl p-7 md:p-9 shadow-card border border-rose-beige/30">
            <h3 className="font-en text-lg text-mocha tracking-widest">{salon.name}</h3>
            <dl className="mt-6 space-y-3 font-sans-jp text-sm text-muted-foreground">
              <div className="flex gap-4"><dt className="w-24 text-mocha shrink-0">住所</dt><dd>{salon.address}<br />{salon.area}</dd></div>
              <div className="flex gap-4"><dt className="w-24 text-mocha shrink-0">営業時間</dt><dd>{salon.hours}</dd></div>
              <div className="flex gap-4"><dt className="w-24 text-mocha shrink-0">定休日</dt><dd>{salon.closed}</dd></div>
              <div className="flex gap-4"><dt className="w-24 text-mocha shrink-0">予約方法</dt><dd>LINE / minimo / ホットペッパー</dd></div>
              <div className="flex gap-4"><dt className="w-24 text-mocha shrink-0">お支払い</dt><dd>{salon.payment}</dd></div>
            </dl>
            <div className="mt-6 pt-6 border-t border-rose-beige/40">
              <p className="font-sans-jp text-xs leading-relaxed text-muted-foreground">
                大宮駅を出て、駅前通りをまっすぐ進みます。<br />
                詳細な場所はご予約確定後にご案内します。
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-card border border-rose-beige/30 min-h-[320px] bg-gradient-to-br from-rose-beige/30 to-offwhite">
            {/* Map placeholder */}
            <div className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.85 0.03 30 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.03 30 / 0.4) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
              <path d="M0,200 Q120,160 200,210 T400,180" stroke="oklch(0.7 0.05 30)" strokeWidth="6" fill="none" opacity="0.6" />
              <path d="M180,0 Q220,180 200,400" stroke="oklch(0.7 0.05 30)" strokeWidth="4" fill="none" opacity="0.4" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-mocha shadow-soft flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-ivory" />
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-mocha" />
            </div>
            <a
              href={links.map}
              aria-label="Googleマップで見る"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 font-sans-jp text-sm px-5 py-2.5 rounded-full bg-white text-mocha shadow-soft border border-rose-beige/60 hover:bg-offwhite transition-colors whitespace-nowrap"
            >
              Googleマップで見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}