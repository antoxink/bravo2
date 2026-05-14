import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormProps {
  title?: string;
  submitLabel?: string;
  source?: string;
  id?: string;
}

const PHONE_RE = /^\+\d{11}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({
  title = "Обратная связь",
  submitLabel = "Отправить заявку",
  source = "Сайт БРАВО",
  id,
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      source,
    };

    const newErrors: Record<string, string> = {};
    if (!payload.name) newErrors.name = "Укажите имя";
    if (!payload.phone) newErrors.phone = "Укажите телефон";
    else if (!PHONE_RE.test(payload.phone))
      newErrors.phone = "Формат: +<код страны><10 цифр>, например +79243118960";
    if (!payload.email) newErrors.email = "Укажите email";
    else if (!EMAIL_RE.test(payload.email)) newErrors.email = "Некорректный email";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: payload,
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Не удалось отправить заявку.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-4" noValidate>
      {title && <h3 className="font-heading font-bold text-xl mb-4">{title}</h3>}
      <div>
        <Input placeholder="Имя *" name="name" maxLength={100} aria-invalid={!!errors.name} />
        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
      </div>
      <Input placeholder="Компания" name="company" maxLength={100} />
      <div>
        <Input
          placeholder="Телефон * (+79243118960)"
          name="phone"
          type="tel"
          maxLength={20}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
      </div>
      <div>
        <Input
          placeholder="Email *"
          name="email"
          type="email"
          maxLength={255}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
      </div>
      <Textarea placeholder="Сообщение" name="message" rows={4} maxLength={1000} />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Отправка..." : submitLabel}
      </Button>
    </form>
  );
}
