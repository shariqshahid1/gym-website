import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="grid gap-6 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-52 animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.04]" />
        ))}
      </div>
    </Container>
  );
}
