import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const categories = [
  { name: "Лёгкая промышленность", desc: "Текстиль, одежда, обувь, аксессуары" },
  { name: "Тяжёлая промышленность", desc: "Стройматериалы, металлоизделия, оборудование" },
  { name: "Алкоголь и табак", desc: "Лицензированное хранение акцизных товаров" },
  { name: "Продукты питания", desc: "Холодильные и морозильные камеры, овощи, фрукты, морепродукты" },
  { name: "Бытовая и промышленная техника", desc: "Электроника, бытовая техника, инструменты" },
];

const infra = [
  "Собственные ЖД пути с удобной разгрузочно-погрузочной площадкой для обработки грузов и интеграции с логистической инфраструктурой центра",
  "Сельскохозяйственный рынок для местных производителей — 4 500 м²",
  "Выставочный центр — 34 800 м²",
  "Гостиничный комплекс на 60 мест",
  "Предприятие общественного питания — 2 460 м²",
  "Автомойка и сервисный центр для большегрузов — 7 800 м²",
  "Охраняемая парковка на 170 машиномест — 35 500 м²",
  "Административно-бытовой комплекс",
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/aerial.jpg"
          >
            <source src="/videos/about-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container relative z-10 text-center py-12">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">О проекте</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Логистический центр БРАВО — масштабный инвестиционный проект в Хабаровске
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              В рамках проекта планируется строительство логистического центра, который обеспечит качественную логистику 
              между регионами Дальневосточного федерального округа, югом России и Китайской Народной Республикой. Общий объём инвестиций составляет 
              <strong className="text-foreground"> более 10 млрд руб.</strong>
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Логистический центр БРАВО — это более 210 000 м² объектов на территории 41,9 га, включая более 
              118 000 м² складских площадей и более 600 000 м³ объёмов хранения. Проект реализуется компанией 
              ООО «БРАВО ГРУПП» в Индустриальном районе г. Хабаровска.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <SectionTitle title="Уникальное зонирование" subtitle="5 категорий товаров для оптимальных условий хранения" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="font-heading font-bold text-primary">{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold mb-2">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionTitle title="Дополнительная инфраструктура" subtitle="Полный спектр сервисов на территории комплекса" />
          <div className="max-w-3xl mx-auto space-y-4">
            {infra.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
