"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { FILTERS, WORKS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? WORKS : WORKS.filter((w) => w.tag === filter)),
    [filter],
  );

  const activeItem = active !== null ? items[active] : null;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="works" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              02 — Портфолио
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
              Работы, которые остаются
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Сакральная геометрия, крупные проекты и живые работы клиентов студии.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setActive(null);
              }}
              className={cn(
                "h-11 shrink-0 rounded-md px-4 text-sm transition-colors duration-150",
                filter === f.id
                  ? "bg-primary text-primary-fg"
                  : "border border-border text-muted hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {items.map((work, i) => (
            <button
              key={work.src}
              type="button"
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-lg bg-surface text-left"
            >
              <img
                src={work.src}
                alt={work.alt}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent px-3 py-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="block font-display text-lg">{work.title}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-muted">
                  {work.tag}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/92 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-md text-foreground"
            aria-label="Закрыть"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <img
            src={activeItem.src}
            alt={activeItem.alt}
            className="max-h-[88vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
