export default function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
