import { useState } from "react";
import { menus } from "@/lib/siteData";
import { SectionTitle } from "./SectionTitle";

type Key = keyof typeof menus;
const keys: Key[] = ["gel", "sculp", "esthe"];

export function MenuTabs() {
  const [active, setActive] = useState<Key>("gel");
  const current = menus[active];

  return (
    <section id="menu" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <SectionTitle en="Menu & Price" jaSub="メニュー" />
        <p className="mt-4 font-sans-jp text-sm md:text-base text-left md:text-center text-muted-foreground">
          ジェル、スカルプ、エステまで。<br />
          ご希望に合わせてメニューをお選びいただけます。
        </p>

        <div className="mt-10 flex justify-center gap-2 md:gap-3">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              aria-label={`${menus[k].label}メニューを表示`}
              className={`font-sans-jp text-sm md:text-base px-6 md:px-8 py-2.5 rounded-full transition-all ${
                active === k
                  ? "bg-dusty-pink text-mocha shadow-soft"
                  : "bg-white text-muted-foreground border border-rose-beige/40 hover:bg-offwhite"
              }`}
            >
              {menus[k].label}
            </button>
          ))}
        </div>

        <div className="mt-10 bg-card rounded-3xl shadow-card border border-rose-beige/30 p-6 md:p-10">
          <ul className="divide-y divide-rose-beige/30">
            {current.items.map((m) => (
              <li key={m.name} className="py-5 md:py-6 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-sans-jp text-base md:text-lg text-mocha">{m.name}</h3>
                  <span className="font-en text-base md:text-lg text-rose-brown whitespace-nowrap">{m.price}</span>
                </div>
                <p className="mt-2 font-sans-jp text-xs md:text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 font-sans-jp text-xs text-left md:text-center text-muted-foreground leading-relaxed">
          ※表示価格はデモ用です。<br />
          デザイン、パーツ、長さ出しの有無により、施術時間・料金が変わる場合があります。
        </p>
      </div>
    </section>
  );
}