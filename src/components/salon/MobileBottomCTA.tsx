import { links } from "@/lib/siteData";

export function MobileBottomCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-ivory/85 backdrop-blur-md border-t border-rose-beige/30 shadow-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 gap-2 p-2.5">
        <a href={links.minimo} aria-label="予約する" className="font-sans-jp text-[11px] py-2.5 rounded-full bg-mocha/90 text-ivory text-center">予約</a>
        <a href={links.line} aria-label="LINEで相談" className="font-sans-jp text-[11px] py-2.5 rounded-full bg-[#9da798]/95 text-ivory text-center">LINE</a>
        <a href={links.map} aria-label="地図を見る" className="font-sans-jp text-[11px] py-2.5 rounded-full bg-white/90 text-mocha border border-rose-beige/60 text-center">MAP</a>
      </div>
    </div>
  );
}