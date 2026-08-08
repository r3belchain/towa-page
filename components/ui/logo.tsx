"use client";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="group flex items-center gap-3">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6"
        aria-hidden="true"
      >
        <path
          d="M21 13H25C26.6569 13 28 14.3431 28 16V18C28 19.6569 26.6569 21 25 21H21"
          className="stroke-towa-text transition-colors duration-500"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M7 10H21V20C21 23.866 17.866 27 14 27C10.134 27 7 23.866 7 20V10Z"
          className="fill-towa-accent stroke-towa-text transition-colors duration-500"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M11 6C11 4.5 12 4.5 12 3"
          className="stroke-towa-accent-2 transition-colors duration-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M17 6C17 4.5 16 4.5 16 3"
          className="stroke-towa-accent-2 transition-colors duration-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <span
        className={`text-towa-text transition-colors duration-300 group-hover:text-towa-accent-2 ${
          compact
            ? "font-black tracking-[0.18em]"
            : "text-xl font-black tracking-[0.18em]"
        }`}
      >
        TOWA
      </span>
    </div>
  );
}
