import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const images = [
  { src: "/images/hero-night.jpg", alt: "Логистический центр БРАВО — ночной рендер" },
  { src: "/images/hero.jpg", alt: "3D-визуализация логистического центра БРАВО" },
  { src: "/images/aerial.jpg", alt: "Аэросъёмка территории БРАВО" },
  { src: "/images/masterplan.png", alt: "Генеральный план логистического центра" },
  { src: "/images/warehouse1.jpg", alt: "Склады класса А — рендер" },
  { src: "/images/warehouse2.jpeg", alt: "Холодильные склады БРАВО" },
  { src: "/images/warehouse3.jpeg", alt: "Выставочный центр БРАВО" },
  { src: "/images/warehouse4.jpeg", alt: "Сельскохозяйственный рынок" },
  { src: "/images/warehouse-interior.jpg", alt: "Интерьер современного склада" },
  { src: "/images/parking.jpg", alt: "Парковка для большегрузов" },
  { src: "/images/complex1.jpg", alt: "АБК — административно-бытовой комплекс" },
  { src: "/images/complex2.jpg", alt: "Предприятие общественного питания" },
  { src: "/images/complex3.jpg", alt: "Зона технического обслуживания" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = () => setSelected(null);
  const prev = () =>
    setSelected((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const next = () =>
    setSelected((i) => (i === null ? i : (i + 1) % images.length));

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) next();
    else prev();
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Галерея" subtitle="Фото и 3D-рендеры логистического центра БРАВО" />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground p-2 hover:opacity-80"
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Закрыть"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-primary-foreground p-2 hover:opacity-80"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Предыдущее"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-primary-foreground p-2 hover:opacity-80"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Следующее"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <img
              key={selected}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[90vh] rounded-lg select-none"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/80 text-sm">
              {selected + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
