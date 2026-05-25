import { salon, links } from "@/lib/siteData";

export function Footer() {
  return (
    <footer className="bg-rose-brown text-ivory pb-24 md:pb-12 pt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-en text-xl tracking-widest">{salon.name}</h3>
          <p className="mt-4 font-sans-jp text-sm leading-relaxed opacity-80">{salon.address}</p>
          <p className="mt-2 font-sans-jp text-sm opacity-80">{salon.area}</p>
        </div>
        <div>
          <h4 className="font-en text-xs tracking-[0.25em] opacity-70">HOURS</h4>
          <p className="mt-3 font-sans-jp text-sm opacity-90">営業時間：{salon.hours}</p>
          <p className="mt-1 font-sans-jp text-sm opacity-90">定休日：{salon.closed}</p>
        </div>
        <div>
          <h4 className="font-en text-xs tracking-[0.25em] opacity-70">CONTACT</h4>
          <ul className="mt-3 font-sans-jp text-sm space-y-2 opacity-90">
            <li><a href={links.instagram} aria-label="Instagram" className="hover:opacity-70">Instagram</a></li>
            <li><a href={links.line} aria-label="LINE" className="hover:opacity-70">LINE</a></li>
            <li><a href={links.minimo} aria-label="minimo" className="hover:opacity-70">minimo</a></li>
            <li><a href={links.hotpepper} aria-label="ホットペッパー" className="hover:opacity-70">ホットペッパー</a></li>
            <li><a href={links.map} aria-label="Googleマップ" className="hover:opacity-70">Googleマップ</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-ivory/15">
        <p className="font-en text-xs opacity-60 text-center tracking-widest">© {new Date().getFullYear()} {salon.name}</p>
      </div>
    </footer>
  );
}