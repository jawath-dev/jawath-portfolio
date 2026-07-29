import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,167,96,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(214,167,96,0.08),transparent_28%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <Container className="relative z-10 flex min-h-screen items-center justify-center py-20 sm:py-24">
        <section className="mx-auto w-full max-w-3xl text-center">
          <p className="font-display text-sm font-medium uppercase tracking-[0.32em] text-accent sm:text-base">
            Page not found
          </p>

          <h1 className="mt-5 font-display text-[clamp(6rem,26vw,14rem)] font-semibold leading-[0.78] tracking-[-0.08em] text-foreground">
            404
          </h1>

          <div className="mx-auto mt-8 h-px w-20 bg-accent/70" />

          <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
            This page has gone missing.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            The page you are looking for may have been moved, renamed, or no
            longer exists.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-accent/70 bg-accent px-6 py-3 text-sm font-semibold text-background transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent-hover hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transform-none"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none"
              />
              Back to home
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}