import { ArrowDownRight, MapPin, Phone } from "lucide-react";
import { GeometryField } from "@/components/mark";
import { Button } from "@/components/ui/button";
import {
  CARE,
  EXTRA_SERVICES,
  FAQ,
  PROCESS,
  REVIEWS,
  SERVICES,
  SITE,
  STATS,
} from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-dvh overflow-hidden pt-16 sm:pt-[4.5rem]"
    >
      <div className="absolute inset-0">
        <img
          src="/photos/hero-sleeve.jpg"
          alt="Орнаментальный рукав в стиле студии Радость"
          className="h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-background/72 sm:bg-background/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>
      <GeometryField className="pointer-events-none absolute -right-24 top-20 size-[36rem] text-foreground opacity-[0.07]" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col justify-end px-4 pb-32 pt-16 sm:px-6 sm:pb-20">
        <p className="rise-in text-xs font-medium uppercase tracking-[0.22em] text-muted">
          {SITE.city} · {SITE.kicker}
        </p>
        <h1 className="rise-in rise-in-1 mt-5 max-w-3xl font-display text-4xl font-medium leading-[0.95] tracking-tight">
          Татуировки в Ростове
          <span className="block italic text-accent">с Радостью</span>
        </h1>
        <p className="rise-in rise-in-2 mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          {SITE.tagline} Не картинка из ленты — опора, смысл и отражение вашей силы.
        </p>
        <div className="rise-in rise-in-3 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#booking">Записаться на консультацию</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#works">
              Смотреть работы
              <ArrowDownRight className="size-4" />
            </a>
          </Button>
        </div>
        <p className="rise-in rise-in-4 mt-8 text-sm text-subtle">
          {SITE.master} · {SITE.years} лет · {SITE.clients} клиентов · рейтинг {SITE.rating} ·{" "}
          {SITE.award}
        </p>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-8 sm:px-6 ${i % 2 === 1 ? "border-l border-border" : ""} ${i > 1 ? "border-t border-border md:border-t-0" : ""} md:border-l md:first:border-l-0`}
          >
            <p className="font-display text-2xl font-medium tracking-tight">{s.value}</p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="master" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-center">
        <div className="relative overflow-hidden rounded-xl bg-surface">
          <img
            src="/photos/studio-dark.jpg"
            alt="Интерьер тату-студии"
            className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/86 px-4 py-3">
            <p className="font-display text-lg">Студия на Очаковской, 39</p>
            <p className="text-sm text-muted">офис 6, первый этаж · по записи</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            01 — Мастер
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
            Владислав Радость
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Двенадцать лет и больше пяти тысяч человек, которые унесли с собой не
            «крутую картинку», а знак. Сакральная геометрия — редкое направление в
            регионе: линия садится на тело, символ работает как якорь.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            В отзывах повторяется одно и то же: слышит, не торопит, доводит эскиз до
            того момента, когда вы узнаёте себя. Стерильность — не слоган: инструменты
            вскрываются при вас.
          </p>
          <blockquote className="mt-8 border-l border-accent pl-5">
            <p className="font-display text-xl italic leading-snug">
              «Ты получаешь не просто изображение — ты обретаешь поддержку, смысл и
              визуальное отражение своей силы.»
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          03 — Направления
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight">
          Три задачи, которые студия закрывает лучше всего
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <img
                src={s.image}
                alt={s.title}
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                  <span className="shrink-0 text-sm text-muted">{s.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {EXTRA_SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-4"
            >
              <p className="text-sm">{s.title}</p>
              <p className="text-sm text-muted">{s.price}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-subtle">
          Цена сеанса — от 3 500 до 35 000 ₽ в зависимости от размера, плотности и
          места. Точная сумма после консультации. Не оферта.
        </p>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          04 — Как это проходит
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
          От первого сообщения до зажившей работы
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <article key={step.n} className="bg-surface p-6">
              <p className="font-display text-2xl text-subtle">{step.n}</p>
              <h3 className="mt-4 font-display text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 overflow-hidden rounded-xl">
          <img
            src="/photos/process-hands.jpg"
            alt="Работа машинки на сеансе"
            className="max-h-80 w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Отзывы
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
              {SITE.rating} на Яндекс Картах
            </h2>
          </div>
          <a
            href={SITE.yandex}
            className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {SITE.reviewsCount} отзывов · {SITE.award}
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6"
            >
              <blockquote className="text-sm leading-relaxed text-muted">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 text-sm text-foreground">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareAndFaq() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Уход
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
            Чтобы линия осталась линией
          </h2>
          <div className="mt-8 space-y-6">
            {CARE.map((c) => (
              <div key={c.title} className="border-t border-border pt-5">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Вопросы
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
            Коротко по делу
          </h2>
          <div className="mt-8 space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="border-t border-border pt-5">
                <h3 className="font-display text-xl">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Студия
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
              Кировский район, Богатяновка
            </h2>
            <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {SITE.addressFull}
            </p>
            <p className="mt-3 flex items-start gap-3 text-sm text-muted">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={SITE.phoneHref} className="hover:text-foreground">
                {SITE.phone}
              </a>
            </p>
            <p className="mt-6 text-sm text-muted">
              {SITE.hours}
              <br />
              {SITE.hoursNote}
            </p>
            <p className="mt-4 text-sm text-subtle">
              Wi-Fi, оплата картой и СБП, сертификаты, доступна для колясок. Животных в
              студию не берём.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={SITE.yandex} target="_blank" rel="noreferrer">
                Открыть на карте
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={SITE.phoneHref}>Позвонить</a>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <iframe
            title="Студия Радость на карте"
            src={SITE.mapsEmbed}
            className="h-[22rem] w-full lg:h-full lg:min-h-[22rem]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/94 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Button asChild variant="outline" className="w-full">
          <a href={SITE.phoneHref}>Позвонить</a>
        </Button>
        <Button asChild className="w-full">
          <a href={SITE.whatsapp}>WhatsApp</a>
        </Button>
      </div>
    </div>
  );
}
