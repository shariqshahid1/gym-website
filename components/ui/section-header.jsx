import Reveal from "@/components/ui/reveal";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-lime-300">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{description}</p>
      </div>
    </Reveal>
  );
}
