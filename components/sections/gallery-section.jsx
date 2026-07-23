import Image from "next/image";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { galleryImages } from "@/lib/data";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Gallery"
          title="See the space for yourself."
          description="Every corner of PulseForge is designed to keep you focused, comfortable, and motivated."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 0.06}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.label}
                width={900}
                height={700}
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56 lg:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition group-hover:bg-black/10" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="rounded-md bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white/80 border border-white/[0.08]">
                  {image.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
