import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  { icon: MapPin, label: "Адрес", value: "680001, Хабаровский край, г.Хабаровск, ул.Попова, д.3" },
  { icon: Phone, label: "Телефон", value: "+7 (4212) 26-04-20", href: "tel:+74212260420" },
   { icon: Phone, label: "Телефон", value: "+7 (924) 311-89-60", href: "tel:+79243118960" },
   { icon: Mail, label: "Email", value: "biz@bravogrp.ru", href: "mailto:biz@bravogrp.ru" },
  { icon: Clock, label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
];

export default function ContactsPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Контакты" subtitle="ООО «БРАВО ГРУПП» — свяжитесь с нами" />

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 mb-8">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-0.5">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="font-medium text-foreground hover:text-primary transition-colors">{c.value}</a>
                      ) : (
                        <div className="font-medium text-foreground whitespace-pre-line">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-heading font-bold mb-3">Реквизиты</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">ООО «БРАВО ГРУПП»</strong></p>
                  <p>ИНН: 2700029802</p>
                  <p>ОГРН: 1242700006460</p>
                  <p>Юридический адрес: 680001, Хабаровский край, г.Хабаровск, ул.Попова, д.3</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 border border-border shadow-sm scroll-mt-24"
              id="contact-form"
            >
              <ContactForm title="Обратная связь" submitLabel="Отправить сообщение" source="Контакты" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
