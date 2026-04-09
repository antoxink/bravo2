import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const images = [
  { src: "/images/hero-night.jpg", alt: "Логистический центр BRAVO — ночной рендер" },
  { src: "/images/hero.jpg", alt: "3D-визуализация логистического центра BRAVO" },
  { src: "/images/aerial.jpg", alt: "Аэросъёмка территории BRAVO" },
  { src: "/images/masterplan.png", alt: "Генеральный план логистического центра" },
  { src: "/images/warehouse1.jpg", alt: "Склады класса А — рендер" },
  { src: "/images/warehouse2.jpeg", alt: "Холодильные склады BRAVO" },
  { src: "/images/warehouse3.jpeg", alt: "Выставочный центр BRAVO" },
  { src: "/images/warehouse4.jpeg", alt: "Сельскохозяйственный рынок" },
  { src: "/images/warehouse-interior.jpg", alt: "Интерьер современного склада" },
  { src: "/images/parking.jpg", alt: "Парковка для большегрузов" },
  { src: "/images/complex1.jpg", alt: "АБК — административно-бытовой комплекс" },
  { src: "/images/complex2.jpg", alt: "Предприятие общественного питания" },
  { src: "/images/complex3.jpg", alt: "Зона технического обслуживания" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Галерея" subtitle="Фото и 3D-рендеры логистического центра BRAVO" />

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
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)}>
              <X className="w-8 h-8" />
            </button>
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[90vh] rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
