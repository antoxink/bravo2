import { motion } from "framer-motion";
import { TrendingUp, Users, Building, ShieldCheck, Banknote, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const effects = [
  { icon: Users, value: "750+", label: "Постоянных рабочих мест", desc: "Плюс 200–250 на этапе строительства" },
  { icon: Banknote, value: "7,4 млрд ₽", label: "Налоговых поступлений за 10 лет", desc: "739 млн руб. ежегодно в бюджеты всех уровней" },
  { icon: TrendingUp, value: "30%", label: "Снижение транспортной нагрузки", desc: "Оптимизация грузовых потоков в Хабаровске" },
  { icon: Building, value: "210 000+ м²", label: "Объектов инфраструктуры", desc: "Полный цикл логистических услуг" },
];

const benefits = [
  { icon: ShieldCheck, title: "Статус резидента ТОР «Хабаровск»", items: [
    "Налог на прибыль: 0% первые 5 лет, 12% следующие 5 лет",
    "Налог на имущество: 0% первые 5 лет",
    "Страховые взносы: 7,6% первые 10 лет",
    "Земельный налог: 0% первые 5 лет",
    "Свободная таможенная зона",
  ]},
  { icon: Leaf, title: "Социально-экономический эффект", items: [
    "Создание высокооплачиваемых рабочих мест для жителей региона",
    "Развитие инфраструктуры Индустриального района",
    "Поддержка местных сельхозпроизводителей через рынок",
    "Снижение стоимости логистики для бизнеса ДФО",
    "Привлечение инвестиций в Хабаровский край",
  ]},
];

export default function AdvantagesPage() {
  return (
    <Layout>
      <section className="py-20 bg-section-dark">
        <div className="container">
          <SectionTitle title="Преимущества и господдержка" subtitle="Социально-экономический эффект проекта" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {effects.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-section-dark-foreground/5 border border-section-dark-foreground/10"
              >
                <e.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="font-heading font-extrabold text-3xl text-accent mb-1">{e.value}</div>
                <div className="font-semibold text-section-dark-foreground text-sm mb-1">{e.label}</div>
                <div className="text-xs text-section-dark-foreground/60">{e.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{b.title}</h3>
                </div>
                <ul className="space-y-3">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
