type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c8a96a]">
        {eyebrow}
      </p>

      <h2 className="mb-5 text-4xl font-light text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-base leading-7 text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
