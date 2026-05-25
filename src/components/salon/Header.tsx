import { nav, links, salon } from "@/lib/siteData";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ivory/85 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-en text-lg md:text-xl text-mocha tracking-widest">
          {salon.name}
        </a>
        <nav className="hidden md:flex items-center gap-7 font-en text-sm text-mocha">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-rose-brown transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={links.line}
          aria-label="LINEで相談"
          className="font-sans-jp text-xs md:text-sm px-4 md:px-5 py-2 rounded-full bg-[#9da798] text-ivory hover:bg-[#8d9788] transition-colors shadow-soft"
        >
          LINEで相談
        </a>
      </div>
    </header>
  );
}