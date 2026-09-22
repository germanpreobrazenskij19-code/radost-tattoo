"use client";

import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/booking";
import { Gallery } from "@/components/gallery";
import {
  About,
  CareAndFaq,
  Hero,
  MobileDock,
  Process,
  Reviews,
  Services,
  Stats,
  Visit,
} from "@/components/home-sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#master"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        К содержанию
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <About />
        <Gallery />
        <Services />
        <Process />
        <Reviews />
        <CareAndFaq />
        <Visit />
        <Booking />
      </main>
      <SiteFooter />
      <MobileDock />
    </div>
  );
}
