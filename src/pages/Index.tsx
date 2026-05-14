import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Warehouse, Truck, Building2, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const stats = [
  { value: "41,9 га", label: "Общая площадь земель" },
  { value: "10+ млрд ₽", label: "Капитальные вложения" },
  { value: "750+", label: "Рабочих мест" },
  { value: "739 млн ₽", label: "Налогов в год" },
];

const advantages = [
  { icon: MapPin, title: "Стратегическое расположение", desc: "Рядом с Владивостокским шоссе и о. Большой Уссурийский — ключевой транспортный узел" },
  { icon: Warehouse, title: "Зонирование по категориям", desc: "5 категорий товаров: лёгкая и тяжёлая промышленность, продукты, техника, алкоголь" },
  { icon: Truck, title: "Полный придорожный сервис", desc: "Автомойка, СТО, парковка 170 машиномест, общественное питание" },
  { icon: Building2, title: "Связь с Китаем и портами ДФО", desc: "Прямой доступ к портам Владивосток, Находка, Ванино и КНР" },
  { icon: TrendingUp, title: "Резидент ТОР «Хабаровск»", desc: "Налоговые преференции и господдержка для резидентов территории опережающего развития" },
  { icon: Shield, title: "Надёжная инфраструктура", desc: "Собственный ж/д тупик, инженерные сети, охрана территории 24/7" },
];

const timeline = [
  { year: "2026", text: "Проектирование и начало строительства I очереди" },
  { year: "2027", text: "Ввод складов класса А, парковки, АБК" },
  { year: "2028", text: "Холодильные склады, сельхозрынок" },
  { year: "2029", text: "Выставочный центр, гостиничный комплекс" },
  { year: "2030", text: "Расширение складских мощностей" },
  { year: "2031", text: "Полный ввод всех объектов комплекса" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-night.jpg"
            alt="Логистический центр BRAVO Хабаровск — ночной вид"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-primary-foreground">
              Логистический центр "БРАВО"
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-4 text-primary-foreground/90 leading-tight">
              Современный транспортно-логистический центр<br /> Дальнего Востока
            </p>
            <p className="text-lg mb-8 text-primary-foreground/70 leading-relaxed">
              41,9 га • Более 210 000 м² объектов • Более 120 000 м² складских площадей • Более 600 000 м³ хранения • Собственные ЖД пути и разгрузочная площадка
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/business">Стать арендатором</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/business">Инвестировать</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/contacts">Получить КП</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-section-dark">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-accent mb-2">{s.value}</div>
                <div className="text-sm text-section-dark-foreground/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 bg-section-light">
        <div className="container">
          <SectionTitle title="Преимущества БРАВО" subtitle="Уникальные возможности для вашего бизнеса" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <a.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionTitle title="Этапы реализации" subtitle="Дорожная карта 2026–2031" />
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 border-4 border-background" />
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-card rounded-lg p-5">
                    <div className="font-heading font-bold text-primary text-lg">{t.year}</div>
                    <p className="text-sm text-muted-foreground mt-1">{t.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-dark">
        <div className="container text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-section-dark-foreground mb-4">
            Почему выбирают БРАВО
          </h2>
          <p className="text-section-dark-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
            Единственный на Дальнем Востоке логистический центр с полным зонированием по категориям товаров, 
            собственной ж/д веткой и статусом резидента ТОР.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/about">Подробнее о проекте <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
