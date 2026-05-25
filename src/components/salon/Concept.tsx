import { SectionTitle } from "./SectionTitle";

const cards = [
  { t: "持ち込みデザイン相談OK", d: "お気に入りの画像を見せていただきながら、一緒に仕上がりを決めていきます。" },
  { t: "長さ出し・スカルプ対応", d: "短い爪のお悩みや、特別な日の華やかな指先にも対応しています。" },
  { t: "1席だけのプライベート空間", d: "周りの目を気にせず、ゆったりとお過ごしいただける空間です。" },
];

export function Concept() {
  return (
    <section id="concept" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <SectionTitle en="Concept" jaSub={<>指先も、時間も、<br />自分らしく整える場所</>} />
        <p className="mt-6 font-sans-jp text-sm md:text-base leading-relaxed text-muted-foreground text-left md:text-center max-w-2xl mx-auto">
          Lueurは、大宮駅徒歩圏内のプライベートネイルサロンです。<br />
          持ち込みデザインや長さ出しのご相談も、1対1でゆっくり確認できます。<br />
          初めての方にも分かりやすいよう、メニュー・料金・予約方法をこのページにまとめています。
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={c.t} className="relative bg-card rounded-3xl p-7 shadow-card border border-rose-beige/30">
              <span className="font-en text-xs text-rose-brown">0{i + 1}</span>
              <h3 className="mt-3 text-base md:text-lg text-mocha font-medium">{c.t}</h3>
              <p className="mt-3 font-sans-jp text-sm leading-relaxed text-muted-foreground text-left">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}