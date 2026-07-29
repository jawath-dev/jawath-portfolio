import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SectionReveal } from "@/components/common/section-reveal";
import { Container } from "@/components/layout/container";
import { projects } from "@/config/projects";
import { cn } from "@/lib/utils";

const workSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const PREMIUM_TRANSITION =
  "transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none";

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className={cn(
        workSans.className,
        "relative isolate overflow-hidden bg-[#080909] py-18 text-white xs:py-20 sm:py-24 lg:py-28 xl:py-32",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute -left-72 top-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.075)_0%,transparent_70%)] sm:-left-64 sm:top-20 sm:size-[38rem]" />

        <div className="absolute -bottom-80 -right-72 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.055)_0%,transparent_72%)] sm:-bottom-80 sm:-right-64 sm:size-[42rem]" />

        <div className="absolute inset-0 opacity-[0.010] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:56px_56px] sm:[background-size:72px_72px]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.34),transparent)] sm:h-36"
      />

      <Container>
        <header className="grid min-w-0 gap-7 sm:gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-end lg:gap-14 xl:gap-16">
          <SectionReveal distance={44} amount={0.18}>
            <div className="min-w-0">
              <div className="flex min-w-0 items-center gap-2.5 xs:gap-3 sm:gap-4">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-[#d6a760] shadow-[0_0_16px_rgba(214,167,96,0.42)]"
                />

                <p className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d6a760] xs:text-[10px] xs:tracking-[0.21em] sm:text-[11px] sm:tracking-[0.24em]">
                  Selected projects
                </p>

                <span
                  aria-hidden="true"
                  className="h-px w-5 shrink-0 bg-[#d6a760]/75 xs:w-6 sm:w-8"
                />
              </div>

              <h2
                id="selected-work-heading"
                className={cn(
                  workSerif.className,
                  "mt-5 max-w-[46rem] text-[clamp(2.55rem,11.5vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.038em] text-[#f5f0e7]",
                  "xs:text-[clamp(2.8rem,10.5vw,4rem)] xs:leading-[0.93]",
                  "sm:mt-6 sm:text-[clamp(3.5rem,8.8vw,4.8rem)] sm:leading-[0.92]",
                  "md:text-[clamp(4rem,7.5vw,5rem)]",
                  "lg:text-[clamp(3.25rem,5vw,5.35rem)] lg:tracking-[-0.045em]",
                )}
              >
                <span className="block">Digital products</span>

                <span className="block">
                  designed with{" "}
                  <span className="font-normal italic text-[#d6a760]">
                    purpose
                  </span>
                </span>

                <span className="block">and built to perform.</span>
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal
            distance={36}
            delay={0.08}
            amount={0.2}
            className="min-w-0 lg:pb-1"
          >
            <div
              aria-hidden="true"
              className="mb-4 h-px w-11 bg-[#d6a760]/65 sm:mb-5 sm:w-12"
            />

            <p className="max-w-[23rem] text-[0.9rem] leading-7 text-white/58 sm:text-[1rem] sm:leading-8 lg:text-[1.02rem]">
              Selected work across travel, healthcare, business operations and
              digital identity, shaped through thoughtful product design and
              scalable engineering.
            </p>
          </SectionReveal>
        </header>

        <div className="mt-11 min-w-0 space-y-5 xs:mt-12 sm:mt-16 sm:space-y-6 lg:mt-20 lg:space-y-7">
          {projects.map((project, projectIndex) => (
            <SectionReveal
              key={project.id}
              distance={52}
              duration={0.8}
              amount={0.1}
            >
              <article
                className={cn(
                  "group relative min-w-0 overflow-hidden rounded-[1.25rem] border border-white/[0.1] bg-[#0d0e0e] shadow-[0_20px_60px_rgba(0,0,0,0.22)]",
                  "xs:rounded-[1.4rem] sm:rounded-[1.75rem] sm:shadow-[0_24px_72px_rgba(0,0,0,0.22)]",
                  PREMIUM_TRANSITION,
                  "hover:border-[#d6a760]/35 hover:shadow-[0_30px_88px_rgba(0,0,0,0.31)]",
                )}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-[#d6a760]/45 to-transparent opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 motion-reduce:transition-none"
                />

                <div className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.9fr)] xl:grid-cols-[minmax(0,1fr)_minmax(25rem,0.88fr)]">
                  <div className="flex min-w-0 flex-col p-5 xs:p-6 sm:p-8 lg:p-9 xl:p-10">
                    <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/42 xs:gap-x-2.5 sm:gap-x-3 sm:text-[11px] sm:tracking-[0.17em]">
                      <span className="text-[#d6a760]">{project.category}</span>

                      <span
                        aria-hidden="true"
                        className="size-1 shrink-0 rounded-full bg-white/20"
                      />

                      <span className="shrink-0">{project.year}</span>

                      <span
                        aria-hidden="true"
                        className="size-1 shrink-0 rounded-full bg-white/20"
                      />

                      <span>{project.status}</span>
                    </div>

                    <h3
                      className={cn(
                        workSerif.className,
                        "mt-4 max-w-[40rem] text-[clamp(2.25rem,10.5vw,3.4rem)] font-medium leading-[0.94] tracking-[-0.04em] text-[#f5f0e7]",
                        "xs:text-[clamp(2.5rem,10vw,3.65rem)]",
                        "sm:text-[clamp(3rem,7.5vw,4rem)] sm:leading-[0.92]",
                        "lg:text-[clamp(2.75rem,4vw,4.2rem)] lg:leading-[0.9] lg:tracking-[-0.046em]",
                      )}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-[39rem] text-[0.875rem] leading-6.5 text-white/57 xs:text-[0.9rem] xs:leading-7 sm:text-base sm:leading-7.5">
                      {project.summary}
                    </p>

                    <div
                      aria-label={`${project.title} technologies`}
                      className="mt-5 flex min-w-0 flex-wrap gap-1.5 xs:gap-2 sm:mt-6"
                    >
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={cn(
                            "inline-flex min-h-8 max-w-full items-center rounded-full border border-white/[0.1] bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium leading-4 text-white/58 backdrop-blur-sm xs:px-3 sm:text-[11px]",
                            PREMIUM_TRANSITION,
                            "hover:border-[#d6a760]/35 hover:bg-[#d6a760]/8 hover:text-[#e5bf82]",
                          )}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-3 grid grid-cols-2 gap-x-16 gap-y-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex min-w-0 items-start gap-2.5 text-[13px] leading-6 text-white/76 sm:gap-3 sm:text-sm"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.58rem] size-1.5 shrink-0 rounded-full bg-[#d6a760] shadow-[0_0_10px_rgba(214,167,96,0.28)]"
                          />

                          <span className="min-w-0">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 sm:mt-9 lg:mt-10">
                      <a
                        href={project.href}
                        aria-label={`View ${project.title} project details`}
                        className={cn(
                          "group/link inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-[#d6a760]/60 bg-[#d6a760]/[0.06] px-4 py-2.5 text-center text-[13px] font-semibold text-[#e5bf82] outline-none",
                          "sm:min-h-10 sm:w-auto sm:px-4.5",
                          PREMIUM_TRANSITION,
                          "hover:border-[#d6a760] hover:bg-[#d6a760] hover:text-[#17120c]",
                          "focus-visible:ring-2 focus-visible:ring-[#e2b875] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0d0e0e]",
                        )}
                      >
                        <span>
                          {project.href === "#contact"
                            ? "Discuss this project"
                            : "View project"}
                        </span>

                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:-translate-y-px group-hover/link:translate-x-px motion-reduce:transition-none motion-reduce:transform-none"
                          strokeWidth={1.8}
                        />
                      </a>
                    </div>
                  </div>

                  <div className="flex min-w-0 items-center justify-center overflow-hidden border-t border-white/[0.08] bg-[#090a0a] p-4 xs:p-5 sm:p-6 lg:min-h-full lg:border-l lg:border-t-0 lg:p-7 xl:p-8">
                    <div className="relative w-full overflow-hidden rounded-[0.95rem] border border-white/[0.1] bg-[#060707] shadow-[0_24px_70px_rgba(0,0,0,0.42)] xs:rounded-[1.1rem] sm:rounded-[1.25rem]">
                      <Image
                        src={project.image}
                        alt={`${project.title} project interface preview`}
                        width={1760}
                        height={1100}
                        unoptimized
                        priority={projectIndex === 0}
                        sizes="(max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) 42vw, 40vw"
                        className={cn(
                          "block h-auto w-[104%] max-w-none object-contain",
                          "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          "group-hover:scale-[1.012]",
                          "motion-reduce:transition-none motion-reduce:transform-none",
                        )}
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.035),transparent_40%,rgba(0,0,0,0.08))]"
                      />

                      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-3 xs:p-4 sm:p-5">
                        <span className="inline-flex max-w-[75%] items-center truncate rounded-full border border-white/[0.14] bg-[#080909]/65 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#e5bf82] shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl xs:px-3 xs:text-[9px] xs:tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em]">
                          {project.visual.label}
                        </span>

                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-[#080909]/62 text-[9px] font-semibold tracking-[0.1em] text-white/65 backdrop-blur-xl sm:size-9 sm:text-[10px]">
                          {String(projectIndex + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="pointer-events-none absolute bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-5 sm:right-5">
                        <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/[0.18] bg-[#080909]/68 text-[#f5f0e7] shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-[border-color,background-color,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-px group-hover:border-[#d6a760]/60 group-hover:bg-[#d6a760] group-hover:text-[#17120c] motion-reduce:transition-none motion-reduce:transform-none sm:size-11">
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-4 sm:size-[18px]"
                            strokeWidth={1.8}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
