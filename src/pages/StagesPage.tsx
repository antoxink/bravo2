import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const phases = [
  {
    period: "2025 (1кв.–4кв.)",
    title: "Проектирование и подготовка",
    items: ["Инженерные изыскания", "Разработка проектной документации", "Получение ТУ на подключение", "Начало земляных работ"],
    status: "active",
  },
  {
    period: "2026 (1кв.–4кв.)",
    title: "Строительство I очереди",
    items: ["Складские помещения класса А — 45 000 м²", "Административно-бытовой комплекс", "Охраняемая парковка", "Инженерные сети и дороги"],
    status: "planned",
  },
  {
    period: "2027 (1кв.–4кв.)",
    title: "Строительство II очереди",
    items: ["Холодильные и морозильные склады", "Сельскохозяйственный рынок — 4 500 м²", "Предприятие общепита — 2 460 м²"],
    status: "planned",
  },
  {
    period: "2028 (1кв.–4кв.)",
    title: "Коммерческие объекты",
    items: ["Выставочный центр — 34 800 м²", "Гостиничный комплекс на 60 мест", "Зона ТО и автомойка — 7 800 м²"],
    status: "planned",
  },
  {
    period: "2029 (1кв.–4кв.)",
    title: "Расширение и полный ввод",
    items: ["Складские помещения класса Б", "Расширение парковки", "Благоустройство территории"],
    status: "planned",
  },
  {
    period: "2030",
    title: "Завершение проекта",
    items: ["Эксплуатация всех мощностей", "Масштабирование сервисов"],
    status: "planned",
  },
];

export default function StagesPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Этапы реализации"
            subtitle="Интерактивный таймлайн строительства 2025–2030"
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/10 rounded-xl p-6 mb-12 text-center">
              <h3 className="font-heading font-bold text-lg text-primary mb-2">Текущий статус</h3>
              <p className="text-muted-foreground">
                Ведётся проектирование первой очереди. Выполнены инженерные изыскания, получены технические условия на подключение к инженерным сетям.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background z-10 ${
                    phase.status === "active" ? "bg-primary shadow-lg shadow-primary/30" : "bg-border"
                  }`} />
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                    <div className={`rounded-xl p-6 border shadow-sm ${
                      phase.status === "active" ? "bg-primary/5 border-primary/30" : "bg-card border-border"
                    }`}>
                      <div className="font-heading font-bold text-primary text-sm mb-1">{phase.period}</div>
                      <h3 className="font-heading font-bold text-lg mb-3">{phase.title}</h3>
                      <ul className="space-y-1.5">
                        {phase.items.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
