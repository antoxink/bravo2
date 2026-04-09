import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bravo_logo.png";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "О проекте", path: "/about" },
  { label: "Расположение", path: "/location" },
  { label: "Объекты", path: "/objects" },
  { label: "Этапы", path: "/stages" },
  { label: "Преимущества", path: "/advantages" },
  { label: "Для бизнеса", path: "/business" },
  { label: "Галерея", path: "/gallery" },
  { label: "Новости", path: "/news" },
  { label: "Контакты", path: "/contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-section-dark backdrop-blur-lg border-b border-muted-foreground/20 shadow-sm">
      <div className="container flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="BRAVO логистический центр Хабаровск" className="h-14 lg:h-16 w-auto" />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === item.path
                  ? "bg-primary/20 text-primary"
                  : "text-section-dark-foreground/70 hover:text-section-dark-foreground hover:bg-muted-foreground/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 text-section-dark-foreground"
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-section-dark border-b border-muted-foreground/20 shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md ${
                  pathname === item.path
                    ? "bg-primary/20 text-primary"
                    : "text-section-dark-foreground/70 hover:bg-muted-foreground/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
