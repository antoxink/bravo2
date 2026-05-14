import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { SMTPClient } from "npm:emailjs@4.0.3";

const TO_EMAIL = "biz@bravogrp.ru";
const SMTP_USER = "biz@bravogrp.ru";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;
}

function isValidPhone(phone: string) {
  // strict: + plus 11 digits (country code + 10 digits)
  return /^\+\d{11}$/.test(phone);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim().slice(0, 100);
    const phone = String(body.phone ?? "").trim().slice(0, 20);
    const email = String(body.email ?? "").trim().slice(0, 255);
    const company = String(body.company ?? "").trim().slice(0, 100);
    const message = String(body.message ?? "").trim().slice(0, 2000);
    const source = String(body.source ?? "").trim().slice(0, 100);

    if (!name || !phone || !email) {
      return new Response(
        JSON.stringify({ error: "Поля Имя, Телефон и Email обязательны." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Некорректный email." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ error: "Телефон должен быть в формате +<код страны><10 цифр>, например +79243118960." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const password = Deno.env.get("SMTP_PASSWORD");
    if (!password) {
      return new Response(
        JSON.stringify({ error: "SMTP не настроен." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const client = new SMTPClient({
      user: SMTP_USER,
      password,
      host: "smtp.mail.ru",
      port: 465,
      ssl: true,
    });

    const subject = `Заявка с сайта БРАВО${source ? ` — ${source}` : ""}`;
    const text = [
      `Источник: ${source || "сайт"}`,
      `Имя: ${name}`,
      `Компания: ${company || "—"}`,
      `Телефон: ${phone}`,
      `Email: ${email}`,
      "",
      "Сообщение:",
      message || "—",
    ].join("\n");

    const html = `
      <h2>Новая заявка с сайта БРАВО</h2>
      <p><b>Источник:</b> ${escapeHtml(source || "сайт")}</p>
      <p><b>Имя:</b> ${escapeHtml(name)}</p>
      <p><b>Компания:</b> ${escapeHtml(company || "—")}</p>
      <p><b>Телефон:</b> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>
      <p><b>Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><b>Сообщение:</b></p>
      <p style="white-space:pre-wrap">${escapeHtml(message || "—")}</p>
    `;

    await client.sendAsync({
      from: `BRAVO Site <${SMTP_USER}>`,
      to: TO_EMAIL,
      "reply-to": email,
      subject,
      text,
      attachment: [{ data: html, alternative: true }],
    } as any);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-contact-email error", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Не удалось отправить заявку." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});