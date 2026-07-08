import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="space-y-6">
        <div className="mx-auto h-6 w-32 animate-shimmer rounded-full" />
        <div className="mx-auto h-10 w-96 animate-shimmer rounded-2xl" />
        <div className="mx-auto h-5 w-72 animate-shimmer rounded-2xl" />
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-64 animate-shimmer rounded-[2rem] border border-white/10 bg-white/[0.04]" />
        ))}
      </div>
    </Container>
  );
}
