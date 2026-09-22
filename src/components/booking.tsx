"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BOOKING_SERVICES, SITE } from "@/lib/content";

type Channel = "whatsapp" | "telegram" | "call";

function buildMessage(name: string, phone: string, service: string, note: string) {
  return [
    `Здравствуйте, ${SITE.master}!`,
    `Меня зовут ${name}.`,
    `Хочу: ${service}.`,
    note ? `Комментарий: ${note}` : "",
    `Телефон: ${phone}`,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(BOOKING_SERVICES[7]);
  const [note, setNote] = useState("");
  const [channel, setChannel] = useState<Channel>("whatsapp");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const message = buildMessage(name, phone, service, note);
    const encoded = encodeURIComponent(message);
    if (channel === "whatsapp") {
      window.open(`${SITE.whatsapp}?text=${encoded}`, "_blank", "noopener,noreferrer");
    } else if (channel === "telegram") {
      window.open(SITE.telegram, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = SITE.phoneHref;
    }
    setSent(true);
  }

  return (
    <section id="booking" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            05 — Запись
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
            Напишите — и подберём день
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Заявка открывает WhatsApp, Telegram или звонок с готовым текстом. Никакой
            очереди «на ресепшене» — студия работает только по записи.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li>Консультация бесплатна</li>
            <li>Эскиз — 2 000 ₽, если нужна отдельная разработка</li>
            <li>Сеанс — от 3 500 ₽, крупные работы считаются отдельно</li>
          </ul>
        </div>

        {sent ? (
          <div className="rounded-xl border border-border bg-surface p-8">
            <p className="font-display text-2xl">Заявка собрана</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Если окно мессенджера не открылось, напишите напрямую — текст можно
              скопировать из истории чата или начать заново.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={`${SITE.whatsapp}?text=${encodeURIComponent("Здравствуйте! Хочу записаться на консультацию.")}`}>
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={SITE.telegram}>Telegram</a>
              </Button>
            </div>
            <button
              type="button"
              className="mt-6 text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
              onClick={() => setSent(false)}
            >
              Заполнить ещё раз
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-surface p-5 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Label htmlFor="service">Что нужно</Label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="h-11 min-h-11 w-full rounded-md border border-border bg-elevated px-3.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
              >
                {BOOKING_SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Label htmlFor="note">Идея или референс</Label>
              <Textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Место на теле, размер, смысл — как есть"
              />
            </div>
            <fieldset className="mt-5">
              <legend className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Куда отправить
              </legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(
                  [
                    ["whatsapp", "WhatsApp"],
                    ["telegram", "Telegram"],
                    ["call", "Звонок"],
                  ] as const
                ).map(([id, label]) => (
                  <label
                    key={id}
                    className="flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-border px-2 text-sm has-[:checked]:bg-primary has-[:checked]:text-primary-fg"
                  >
                    <input
                      type="radio"
                      name="channel"
                      value={id}
                      checked={channel === id}
                      onChange={() => setChannel(id)}
                      className="sr-only"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
            <Button type="submit" size="lg" className="mt-6 w-full">
              Отправить заявку
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
