import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const news = [
  { date: "Март 2025", title: "Получены технические условия на подключение к инженерным сетям", desc: "Завершён этап согласования с ресурсоснабжающими организациями для первой очереди строительства." },
  { date: "Февраль 2025", title: "Завершены инженерные изыскания на площадке", desc: "Проведены геологические, геодезические и экологические изыскания на территории будущего логистического центра." },
  { date: "Январь 2025", title: "ООО «БРАВО ГРУПП» получило статус резидента ТОР «Хабаровск»", desc: "Компания стала резидентом территории опережающего развития, получив доступ к налоговым преференциям." },
  { date: "Декабрь 2024", title: "Подписано соглашение о намерениях с Правительством Хабаровского края", desc: "Стороны договорились о совместной реализации проекта строительства логистического центра." },
];

export default function NewsPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Новости проекта" subtitle="Ход строительства и ключевые события" />

          <div className="max-w-3xl mx-auto space-y-6">
            {news.map((n, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {n.date}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">Следите за новостями проекта BRAVO</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
