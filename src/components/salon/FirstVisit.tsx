import { SectionTitle } from "./SectionTitle";

const items = [
  "デザイン画像の持ち込みOK",
  "長さ出しや補強も相談可",
  "料金や目安時間を事前に確認",
  "場所はGoogleマップで確認",
];

export function FirstVisit() {
  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <SectionTitle en="First Visit" jaSub="初めての方へ" />
        <p className="mt-6 font-sans-jp text-sm md:text-base leading-relaxed text-muted-foreground text-left md:text-center max-w-2xl mx-auto">
          デザイン画像の持ち込み、長さ出し、スカルプ、エステメニューのご相談も可能です。<br />
          料金や施術時間が変わる場合があるため、気になることは事前にLINEでご相談ください。
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((t, i) => (
            <div key={t} className="bg-card rounded-2xl p-5 text-center shadow-card border border-rose-beige/30">
              <span className="font-en text-xs text-rose-brown">0{i + 1}</span>
              <p className="mt-2 font-sans-jp text-xs md:text-sm text-mocha leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}