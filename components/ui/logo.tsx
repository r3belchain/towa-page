"use client";

interface LogoProps {
  compact?: boolean;
  className?: string;
}

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <div className="group flex items-center gap-3">
      <img
        src="/dc-assets/logo-towa.svg"
        alt="TOWA - Tongkrongan Warga Asbun"
        draggable={false}
        className={`w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 ${
          className ? className : compact ? "h-7" : "h-8 sm:h-9"
        }`}
      />
    </div>
  );
}
