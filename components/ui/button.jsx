import Link from "next/link";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition duration-200";

const variants = {
  primary:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
  secondary:
    "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/15",
  ghost:
    "text-white/60 hover:text-white hover:bg-white/[0.05]"
};

export default function Button({ href, children, variant = "primary", className = "", loading, disabled, ...props }) {
  const classes = `${baseClasses} ${variants[variant]} ${loading || disabled ? "pointer-events-none opacity-50" : ""} ${className}`;
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
