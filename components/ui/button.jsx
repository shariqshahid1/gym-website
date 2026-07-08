import Link from "next/link";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300";

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#f97316_0%,#ef4444_55%,#fb923c_100%)] text-white shadow-[0_16px_42px_rgba(249,115,22,0.26)] hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(239,68,68,0.34)]",
  secondary:
    "border border-white/10 bg-white/[0.04] text-white hover:border-orange-400/40 hover:bg-white/[0.08]",
  ghost:
    "text-white/70 hover:text-white"
};

export default function Button({ href, children, variant = "primary", className = "", loading, disabled, ...props }) {
  const classes = `${baseClasses} ${variants[variant]} ${loading || disabled ? "pointer-events-none opacity-60" : ""} ${className}`;
  const content = loading ? (
    <>
      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      {children}
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
