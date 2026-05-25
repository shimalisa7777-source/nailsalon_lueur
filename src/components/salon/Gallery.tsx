import { gallery, instagramUrl } from "@/lib/siteData";
import { SectionTitle } from "./SectionTitle";

export function Gallery() {
  return (
    <section id="design" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionTitle en="Design Gallery" jaSub="デザインギャラリー" />
        <p className="mt-4 font-sans-jp text-sm md:text-base text-center text-muted-foreground">
          シンプルから華やかな長さ出しまで。<br />
          最新のデザインはInstagramでもご覧いただけます。
        </p>
        <div className="mt-6 flex justify-center">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans-jp text-sm px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white shadow-soft hover:opacity-90 transition-opacity">
            Instagramで最新デザインを見る
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((g) => (
            <figure
              key={g.title}
              className="group relative rounded-2xl overflow-hidden shadow-card border border-rose-beige/30 bg-card flex flex-col"
            >
              <div className="aspect-[4/5] relative bg-rose-50 overflow-hidden">
                {/* 実際のネイル画像 */}
                <img
                  src={g.img}
                  alt={g.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {g.label && (
                  <span className="absolute top-3 left-3 font-en text-[10px] tracking-widest px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-rose-brown shadow-sm z-10">
                    {g.label}
                  </span>
                )}
              </div>
              <figcaption className="px-4 py-4 flex flex-col gap-1 flex-1 bg-white">
                <span className="font-en text-sm tracking-wider text-mocha font-medium">{g.title}</span>
                <span className="font-sans-jp text-xs text-muted-foreground leading-relaxed">{g.desc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}