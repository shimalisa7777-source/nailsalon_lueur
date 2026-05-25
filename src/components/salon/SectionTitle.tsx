import { ReactNode } from "react";

type Props = { en: string; jaSub?: ReactNode; align?: "left" | "center" };

export function SectionTitle({ en, jaSub, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span className="font-en text-xs tracking-[0.3em] text-rose-brown uppercase">{en}</span>
      {jaSub && <h2 className="mt-3 text-xl md:text-3xl text-mocha leading-relaxed">{jaSub}</h2>}
    </div>
  );
}