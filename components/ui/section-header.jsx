import Reveal from "@/components/ui/reveal";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-[15px] leading-relaxed text-white/50">{description}</p>
      </div>
    </Reveal>
  );
}
