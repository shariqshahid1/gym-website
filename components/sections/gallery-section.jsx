import Image from "next/image";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { galleryImages } from "@/lib/data";

export default function GallerySection() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Gallery"
          title="A visual identity that feels premium from every angle."
          description="From recovery spaces to strength zones, every area is designed to feel sharp, calm, and motivating."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {galleryImages.map((src, index) => (
            <Reveal
              key={src}
              delay={index * 0.08}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10"
            >
              <Image
                src={src}
                alt="Gym gallery"
                width={900}
                height={700}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
