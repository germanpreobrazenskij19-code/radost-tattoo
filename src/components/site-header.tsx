"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-200 ease-out",
        scrolled || open
          ? "border-b border-border bg-background/92"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-foreground">
          <Mark className="size-8 text-foreground" />
          <span className="font-display text-xl font-medium tracking-[0.18em] sm:text-2xl">
            РАДОСТЬ
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Разделы">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="text-sm text-muted transition-colors duration-150 hover:text-foreground"
          >
            {SITE.phone}
          </a>
          <Button asChild size="sm">
            <a href="#booking">Записаться</a>
          </Button>
        </div>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background lg:hidden",
          "transition-[max-height,opacity] duration-200 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Мобильное меню">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 text-base text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="#booking" onClick={() => setOpen(false)}>
              Записаться
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
