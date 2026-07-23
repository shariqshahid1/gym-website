export default function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-[#111] shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
