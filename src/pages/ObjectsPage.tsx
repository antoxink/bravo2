import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { toast } from "sonner";

const categories = ["Все", "Склады", "Инфраструктура", "Сервис", "Коммерция"];

const objects = [
  { name: "Склады класса А и Б", area: "118 000+ м²", category: "Склады", img: "/images/warehouse1.jpg", desc: "Современные складские помещения с высотой потолков до 12 м, антипылевыми полами, рампами и доковыми системами" },
  { name: "Низкотемпературные склады", area: "15 000 м²", category: "Склады", img: "/images/warehouse2.jpeg", desc: "Холодильные и морозильные камеры для хранения овощей, фруктов, морепродуктов и скоропортящихся товаров" },
  { name: "Охраняемая парковка", area: "35 500 м²", category: "Инфраструктура", img: "/images/parking.jpg", desc: "170 машиномест для большегрузного транспорта, круглосуточная охрана и видеонаблюдение" },
  { name: "Административно-бытовой комплекс", area: "5 200 м²", category: "Инфраструктура", img: "/images/complex1.jpg", desc: "Офисные помещения, комнаты отдыха, конференц-залы для арендаторов и сотрудников" },
  { name: "Предприятие общественного питания", area: "2 460 м²", category: "Сервис", img: "/images/complex2.jpg", desc: "Столовая и кафе для работников комплекса и водителей большегрузного транспорта" },
  { name: "Зона ТО + автомойка", area: "7 800 м²", category: "Сервис", img: "/images/complex3.jpg", desc: "Станция технического обслуживания и профессиональная мойка для грузовиков" },
  { name: "Выставочный центр + гостиница", area: "34 800 м²", category: "Коммерция", img: "/images/warehouse3.jpeg", desc: "Выставочные площади для демонстрации товаров и гостиничный комплекс на 60 мест" },
  { name: "Сельскохозяйственный рынок", area: "4 500 м²", category: "Коммерция", img: "/images/warehouse4.jpeg", desc: "Торговые площади для местных сельхозпроизводителей Хабаровского края" },
];

export default function ObjectsPage() {
  const [filter, setFilter] = useState("Все");
  const filtered = filter === "Все" ? objects : objects.filter(o => o.category === filter);

  const handleRent = (name: string) => {
    toast.success(`Заявка на аренду "${name}" принята! Мы свяжемся с вами.`);
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Объекты и услуги" subtitle="Каталог объектов логистического центра BRAVO" />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(c => (
              <Button
                key={c}
                variant={filter === c ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(c)}
              >
                {c}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((obj, i) => (
              <motion.div
                key={obj.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <img src={obj.img} alt={`${obj.name} — логистический центр BRAVO`} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-heading font-bold text-lg">{obj.name}</h3>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">{obj.area}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{obj.desc}</p>
                  <Button size="sm" onClick={() => handleRent(obj.name)}>
                    Оставить заявку на аренду
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
