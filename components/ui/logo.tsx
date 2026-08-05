export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="towa-cup" aria-hidden="true">
        <span />
      </span>
      <span
        className={
          compact
            ? "font-black tracking-[0.18em]"
            : "text-xl font-black tracking-[0.18em]"
        }
      >
        TOWA
      </span>
    </div>
  );
}
