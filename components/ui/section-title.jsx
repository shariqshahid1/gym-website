import Reveal from "@/components/ui/reveal";

export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {title}
        </h2>
        <p className="max-w-xl text-[15px] leading-relaxed text-white/50">{description}</p>
      </div>
    </Reveal>
  );
}
