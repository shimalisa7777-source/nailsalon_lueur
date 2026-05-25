import { useState } from "react";
import { faqs } from "@/lib/siteData";
import { SectionTitle } from "./SectionTitle";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <SectionTitle en="FAQ" jaSub="よくあるご質問" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="bg-card rounded-2xl shadow-card border border-rose-beige/30 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-label={f.q}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-5 text-left"
                >
                  <span className="font-sans-jp text-sm md:text-base text-mocha">{f.q}</span>
                  <span className={`font-en text-rose-brown text-xl transition-transform shrink-0 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-7 pb-5 font-sans-jp text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}