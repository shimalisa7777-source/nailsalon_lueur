type Props = {
  className?: string;
  gradient?: string;
  shimmer?: boolean;
};

export function NailChip({ className = "", gradient = "bg-gradient-chip", shimmer }: Props) {
  return (
    <div className={`nail-chip relative overflow-hidden ${gradient} shadow-soft ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10" />
      {shimmer && <div className="absolute inset-0 sparkle animate-shimmer" />}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-white/50" />
    </div>
  );
}