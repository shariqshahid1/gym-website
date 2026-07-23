import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="pt-32 pb-20">
      <div className="space-y-4 max-w-lg">
        <div className="h-4 w-20 rounded bg-white/[0.06] animate-pulse" />
        <div className="h-8 w-64 rounded-lg bg-white/[0.06] animate-pulse" />
        <div className="h-4 w-48 rounded bg-white/[0.06] animate-pulse" />
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-48 rounded-2xl border border-white/[0.06] bg-white/[0.02] animate-pulse" />
        ))}
      </div>
    </Container>
  );
}
