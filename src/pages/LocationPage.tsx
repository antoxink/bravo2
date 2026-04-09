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
  { id: 1, area: "8,2 га", purpose: "Складской комплекс I очереди" },
  { id: 2, area: "7,5 га", purpose: "Складской комплекс II очереди" },
  { id: 3, area: "6,8 га", purpose: "Холодильные склады и рынок" },
  { id: 4, area: "7,1 га", purpose: "Выставочный центр и гостиница" },
  { id: 5, area: "6,3 га", purpose: "Парковка и зона ТО" },
  { id: 6, area: "6,0 га", purpose: "Резервная территория" },
];

export default function LocationPage() {
  return (
    <Layout>
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionTitle title="Расположение и инфраструктура" subtitle="Индустриальный район, Владивостокское шоссе — ул. Автобусная, ул. Артёмовская" />

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img src="/images/masterplan.png" alt="Генеральный план логистического центра BRAVO Хабаровск" className="w-full" loading="lazy" />
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
          <SectionTitle title="Земельные участки" subtitle="6 участков общей площадью 41,9 га" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plots.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading font-bold text-primary text-xl">{p.id}</span>
                </div>
                <div className="font-heading font-bold text-2xl text-primary mb-1">{p.area}</div>
                <p className="text-sm text-muted-foreground">{p.purpose}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <SectionTitle title="Карта расположения" subtitle="г. Хабаровск, Индустриальный район" />
          <div className="rounded-xl overflow-hidden shadow-lg border border-border max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46000!2d135.0!3d48.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae8e20e2f0e03%3A0x400cfce68ae0e30!2z0KXQsNCx0LDRgNC-0LLRgdC6!5e0!3m2!1sru!2sru!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения логистического центра BRAVO"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
