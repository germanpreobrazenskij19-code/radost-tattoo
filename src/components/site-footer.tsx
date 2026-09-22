import { Mark } from "@/components/mark";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: SITE.whatsapp, label: "WhatsApp" },
  { href: SITE.telegram, label: "Telegram" },
  { href: SITE.vk, label: "ВКонтакте" },
  { href: SITE.yandex, label: "Яндекс Карты" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border pb-24 lg:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Mark className="size-7" />
            <span className="font-display text-xl tracking-[0.16em]">РАДОСТЬ</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {SITE.tagline}
          </p>
          <p className="mt-3 text-sm text-subtle">
            {SITE.addressFull}
            <br />
            {SITE.hours} · {SITE.hoursNote}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="min-h-11 text-muted transition-colors duration-150 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
