import Reveal from "@/components/ui/reveal";

export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-5 ${alignment}`}>
      <span className="inline-flex rounded-full border border-orange-500/25 bg-[linear-gradient(90deg,rgba(249,115,22,0.16),rgba(239,68,68,0.08))] px-4 py-1.5 text-[11px] uppercase tracking-[0.34em] text-orange-300">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{description}</p>
      </div>
    </Reveal>
  );
}
