import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Download, Calculator } from "lucide-react";

const warehouseTypes = [
  { value: "classA", label: "Склад класса А", pricePerSqm: 650 },
  { value: "classB", label: "Склад класса Б", pricePerSqm: 450 },
  { value: "cold", label: "Холодильный склад", pricePerSqm: 900 },
  { value: "market", label: "Торговая площадь (рынок)", pricePerSqm: 800 },
  { value: "office", label: "Офисное помещение", pricePerSqm: 700 },
];

export default function BusinessPage() {
  const [wType, setWType] = useState("classA");
  const [area, setArea] = useState([500]);
  const [months, setMonths] = useState([12]);

  const selected = warehouseTypes.find(w => w.value === wType)!;
  const monthlyTotal = selected.pricePerSqm * area[0];
  const total = monthlyTotal * months[0];

  return (
    <Layout>
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionTitle title="Для инвесторов и арендаторов" subtitle="Логистический центр «БРАВО» — масштабный инфраструктурный проект в Хабаровске" />

          <div className="max-w-4xl mx-auto mb-12 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Логистический центр «БРАВО» — это масштабный инфраструктурный проект в Хабаровске,
              объединяющий современные склады, холодильные комплексы, торгово-выставочные пространства,
              сервисную инфраструктуру, гостиницу, сельскохозяйственный рынок и транспортный центр
              федерального уровня. Проект реализуется на территории более 41 гектара с общим объёмом
              инвестиций свыше <strong className="text-foreground">10 млрд рублей</strong>.
            </p>
            <p className="text-foreground font-medium">Сегодня мы открываем возможности для:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>инвесторов, заинтересованных в получении до 25% доли в проекте;</li>
              <li>предпринимателей и компаний, желающих стать соучастниками строительства и развития территории «БРАВО»;</li>
              <li>резидентов, которым необходимы склады, торговые помещения, сервисные зоны или специализированные объекты под собственные задачи.</li>
            </ul>
            <p>
              «БРАВО» создаётся как крупнейший логистический центр Дальнего Востока с собственными
              железнодорожными путями, удобной разгрузочной площадкой, выгодным расположением рядом
              с ключевыми транспортными артериями и перспективным международным направлением через
              Китай. Проект ориентирован на растущий рынок логистики, торговли, хранения и
              распределения грузов.
            </p>
            <p className="text-foreground font-medium">Мы предлагаем возможность:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>войти в проект на этапе активного развития;</li>
              <li>получить долевое участие в перспективном инфраструктурном объекте;</li>
              <li>построить собственный объект на территории «БРАВО» по индивидуальным техническим требованиям;</li>
              <li>разместить бизнес в современном логистическом центре нового поколения.</li>
            </ul>
            <p>
              Если вы ищете надёжный проект с масштабным потенциалом роста — «БРАВО» готов к сотрудничеству.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Rent Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-card rounded-xl p-8 border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-primary" />
                <h3 className="font-heading font-bold text-xl">Калькулятор стоимости аренды</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Тип помещения</label>
                  <Select value={wType} onValueChange={setWType}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {warehouseTypes.map(w => (
                        <SelectItem key={w.value} value={w.value}>{w.label} — {w.pricePerSqm} ₽/м²</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Площадь: {area[0]} м²</label>
                  <Slider value={area} onValueChange={setArea} min={100} max={10000} step={100} />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Срок аренды: {months[0]} мес.</label>
                  <Slider value={months} onValueChange={setMonths} min={1} max={60} step={1} />
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Ежемесячно</div>
                      <div className="font-heading font-bold text-2xl text-primary">
                        {monthlyTotal.toLocaleString("ru-RU")} ₽
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">За весь срок ({months[0]} мес.)</div>
                      <div className="font-heading font-bold text-2xl text-foreground">
                        {total.toLocaleString("ru-RU")} ₽
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Downloads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-heading font-bold mb-4">Скачать документы</h3>
                <div className="space-y-3">
                  {["Бизнес-план", "Презентация проекта", "Финансовая модель", "Коммерческое предложение"].map(doc => (
                    <Button key={doc} variant="outline" className="w-full justify-start gap-2" size="sm">
                      <Download className="w-4 h-4" /> {doc}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 border border-border shadow-sm">
            <ContactForm title="Отправить заявку" submitLabel="Отправить заявку" source="Для бизнеса" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
