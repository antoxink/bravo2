import { Link } from "react-router-dom";
import logo from "@/assets/bravo_logo.png";

export default function Footer() {
  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="BRAVO" className="h-16 w-auto" />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Современный транспортно-логистический центр<br /> Дальнего Востока. ООО «БРАВО ГРУПП», Хабаровск.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Навигация</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/about" className="hover:opacity-100 transition-opacity">О проекте</Link>
              <Link to="/objects" className="hover:opacity-100 transition-opacity">Объекты и услуги</Link>
              <Link to="/business" className="hover:opacity-100 transition-opacity">Для бизнеса</Link>
              <Link to="/contacts" className="hover:opacity-100 transition-opacity">Контакты</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <p>680001, Хабаровский край, г.Хабаровск, ул.Попова, д.3</p>
              <a href="tel:+74212260420" className="hover:opacity-100 transition-opacity">+7 (4212) 26-04-20</a>
              <a href="mailto:info@bravo-group.ru" className="hover:opacity-100 transition-opacity">info@bravo-group.ru</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Документы</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <span>Бизнес-план</span>
              <span>Презентация проекта</span>
              <span>Финансовая модель</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>© 2024–2026 ООО «БРАВО ГРУПП». Все права защищены.</p>
          <p>ИНН 2700029802 | ОГРН 1242700006460</p>
        </div>
      </div>
    </footer>
  );
}
