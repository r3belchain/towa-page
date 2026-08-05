export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-black uppercase tracking-[.22em] text-[#e8833a]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[#756d5c]">{description}</p>
    </div>
  );
}
