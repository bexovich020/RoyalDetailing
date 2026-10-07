import Image from "next/image";
import { media } from "@/lib/media";
import SectionLabel from "@/components/ui/SectionLabel";
import LineReveal from "@/components/ui/LineReveal";

export default function BeforeAfter() {
  return (
    <section id="result" aria-labelledby="result-title" className="relative bg-surface py-16 md:py-24">
      <div className="container-site grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-5">
          <SectionLabel index="03">Студия</SectionLabel>
          <LineReveal id="result-title" lines={["Детейлинг", "в Шымкенте"]} className="display-lg mt-6 text-fg" />
        </div>
        <p className="max-w-md text-[15px] leading-relaxed text-muted md:col-span-5 md:col-start-8">
          Royal Detailing Studio — детейлинг автомобилей и тонировка автостёкол.
        </p>
      </div>
      <div className="container-site mt-8 md:mt-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-bg sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image src={media.compare.after.src} alt={media.compare.after.alt} fill sizes="(min-width: 1440px) 1344px, 100vw" className="object-cover object-[center_54%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/65 via-transparent to-transparent" />
          <p className="meta absolute bottom-5 left-5 bg-bg/60 px-3 py-2 text-fg backdrop-blur md:bottom-8 md:left-8">Желтоксан, 207/1 · Шымкент</p>
        </div>
      </div>
    </section>
  );
}
