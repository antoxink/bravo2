import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ContactFormProps {
  title?: string;
  submitLabel?: string;
}

export default function ContactForm({ title = "Обратная связь", submitLabel = "Отправить" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && <h3 className="font-heading font-bold text-xl mb-4">{title}</h3>}
      <Input placeholder="Имя *" required name="name" maxLength={100} />
      <Input placeholder="Компания" name="company" maxLength={100} />
      <Input placeholder="Телефон *" required name="phone" type="tel" maxLength={20} />
      <Input placeholder="Email *" required name="email" type="email" maxLength={255} />
      <Textarea placeholder="Сообщение" name="message" rows={4} maxLength={1000} />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Отправка..." : submitLabel}
      </Button>
    </form>
  );
}
