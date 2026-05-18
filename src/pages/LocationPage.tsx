import { motion } from "framer-motion";
import { MapPin, TrainFront, Ship, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const locationAdvantages = [
  { icon: MapPin, title: "1,5 км до объездной дороги", desc: "Удобный выезд на федеральные трассы" },
  { icon: TrainFront, title: "Собственный ж/д тупик", desc: "Прямой доступ к железнодорожной сети" },
  { icon: Ship, title: "Связь с портами ДФО", desc: "Владивосток, Находка, Ванино" },
  { icon: Globe, title: "Близость к Китаю", desc: "Остров Большой Уссурийский — пограничная зона" },
];

const plots = [
  {
    id: "I",
    area: "6,3 Га",
    title: "Склады общего назначения",
    items: [
      "Склад общего назначения — 14 268 м²",
      "Склад с зоной низкотемпературного хранения — 2 470 м²",
    ],
  },
  {
    id: "II",
    area: "1,4 Га",
    title: "Административная зона и открытое хранение",
    items: [
      "АБК — 1 440 м²",
      "Диспетчерская — 100 м²",
      "Склад открытого хранения — 2 450 м²",
    ],
  },
  {
    id: "III",
    area: "9,3 Га",
    title: "Многофункциональный комплекс",
    items: [
      "Выставочный комплекс — 30 000 м²",
      "Сельскохозяйственный рынок — 4 500 м²",
      "Склады общего назначения — 3 300 и 8 000 м²",
      "Гостиница на 60 номеров и предприятие общественного питания",
      "Охраняемая парковка на 170 м/м, зона ТО и грузовая автомойка — по 10 боксов",
      "АБК",
    ],
  },
  {
    id: "IV",
    area: "9,3 Га",
    title: "Складской кластер с низкотемпературным хранением",
    items: [
      "Склад общего назначения — 4 062 м²",
      "4 склада общего назначения с зонами низкотемпературного хранения — по 7 798 м²",
    ],
  },
];

export default function LocationPage() {
  return (
    <Layout>
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionTitle title="Расположение и инфраструктура" subtitle="Индустриальный район, Владивостокское шоссе — ул. Автобусная, ул. Артёмовская" />

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white">
                <img
                  src="/images/masterplan.jpg"
                  alt="Ситуационная схема размещения объектов логистического центра BRAVO в Хабаровске"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {locationAdvantages.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-5 border border-border shadow-sm"
                >
                  <a.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading font-bold text-sm mb-1">{a.title}</h3>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionTitle title="Земельные участки" subtitle="4 участка общей площадью 41,9 Га — единый логистический кластер" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plots.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-primary text-lg">{p.id}</span>
                  </div>
                  <div className="font-heading font-bold text-2xl text-primary leading-none">
                    {p.area}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-base mb-3 text-foreground">
                  {p.title}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <SectionTitle title="Карта расположения" subtitle="г. Хабаровск, Индустриальный район" />
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=135.058600%2C48.496900&z=16&pt=135.058600%2C48.496900,pm2rdm&l=map&text=Россия%2C+Хабаровск%2C+улица+Попова%2C+3"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта: Россия, Хабаровск, улица Попова, д. 3"
              />
            </div>
            <p className="text-center text-muted-foreground">
              Адрес: <strong className="text-foreground">Россия, Хабаровск, улица Попова, д. 3</strong>
              {" · "}
              <a
                href="https://yandex.ru/maps/?rtext=~48.496900%2C135.058600&rtt=auto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Построить маршрут
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
