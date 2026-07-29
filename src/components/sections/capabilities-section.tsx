import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SectionReveal } from "@/components/common/section-reveal";
import { Container } from "@/components/layout/container";
import { capabilities } from "@/config/capabilities";
import { cn } from "@/lib/utils";

const capabilitiesSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const capabilitiesSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const PREMIUM_TRANSITION =
  "transition-[color,border-color,background-color,box-shadow,transform,width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className={cn(
        capabilitiesSans.className,
        "relative isolate overflow-hidden bg-[#080909] py-18 text-white xs:py-20 sm:py-24 lg:py-28 xl:py-32",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute -right-72 -top-44 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.055)_0%,transparent_70%)] sm:-right-64 sm:-top-40 sm:size-[40rem] lg:-right-72 lg:-top-44 lg:size-[44rem]" />

        <div className="absolute -bottom-80 -left-72 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.04)_0%,transparent_72%)] sm:-bottom-88 sm:-left-64 sm:size-[44rem] lg:-bottom-92 lg:-left-72 lg:size-[48rem]" />

        <div className="[background-image:linear-gradient(rgba(255,255,255,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.42)_1px,transparent_1px)] [background-size:56px_56px] sm:[background-size:72px_72px] lg:[background-size:80px_80px]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-white/[0.08]"
      />

      <Container>
        <header className="grid min-w-0 gap-8 border-b border-white/[0.09] pb-10 xs:gap-9 xs:pb-12 sm:gap-10 sm:pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-end lg:gap-16 lg:pb-16 xl:gap-20 xl:pb-18">
          <SectionReveal distance={44} amount={0.18}>
            <div className="min-w-0">
              <div className="flex min-w-0 items-center gap-2.5 xs:gap-3 sm:gap-4">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-[#d6a760] shadow-[0_0_16px_rgba(214,167,96,0.38)]"
                />

                <p className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d6a760] xs:text-[10px] xs:tracking-[0.21em] sm:text-[11px] sm:tracking-[0.24em]">
                  Capabilities
                </p>

                <span
                  aria-hidden="true"
                  className="h-px w-5 shrink-0 bg-[#d6a760]/70 xs:w-6 sm:w-8"
                />
              </div>

              <h2
                id="capabilities-heading"
                className={cn(
                  capabilitiesSerif.className,
                  "mt-5 max-w-[49rem] text-[clamp(2.55rem,11.5vw,3.9rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#f5f0e7]",
                  "xs:text-[clamp(2.8rem,10.8vw,4.2rem)] xs:leading-[0.93]",
                  "sm:mt-6 sm:text-[clamp(3.5rem,8.8vw,4.9rem)] sm:leading-[0.92]",
                  "md:text-[clamp(4rem,7.4vw,5.25rem)]",
                  "lg:text-[clamp(3.25rem,5vw,5.65rem)] lg:leading-[0.91] lg:tracking-[-0.048em]",
                )}
              >
                <span className="block">The way I take a product</span>

                <span className="block">
                  from{" "}
                  <span className="font-normal italic text-[#d6a760]">
                    idea
                  </span>{" "}
                  to launch.
                </span>
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
              className="mb-4 h-px w-11 bg-[#d6a760]/60 xs:mb-5 xs:w-12"
            />

            <p className="max-w-[24rem] text-[0.9rem] leading-7 text-white/58 xs:text-[0.94rem] sm:text-[1.02rem] sm:leading-8">
              I work across product thinking, interface design and engineering
              to build digital products that remain useful beyond the first
              release.
            </p>
          </SectionReveal>
        </header>

        <ol aria-label="Product development capabilities" className="min-w-0">
          {capabilities.map((capability) => {
            const headingId = `capability-${capability.id}-heading`;

            return (
              <li
                key={capability.id}
                className="min-w-0 border-b border-white/[0.09]"
              >
                <SectionReveal distance={46} duration={0.78} amount={0.13}>
                  <article
                    aria-labelledby={headingId}
                    className="group/capability relative min-w-0 py-8 xs:py-9 sm:py-12 lg:py-14 xl:py-16"
                  >
                    <div className="grid min-w-0 gap-6 xs:gap-7 sm:gap-8 lg:grid-cols-[6rem_minmax(0,1fr)_4rem] lg:items-start lg:gap-8 xl:grid-cols-[7rem_minmax(0,1fr)_5rem] xl:gap-10">
                      <div className="flex min-w-0 items-center justify-between gap-4 lg:block">
                        <div className="shrink-0">
                          <span
                            className={cn(
                              "block text-[10px] font-semibold tracking-[0.17em] text-white/34 xs:tracking-[0.18em] sm:text-[11px] sm:tracking-[0.2em]",
                              PREMIUM_TRANSITION,
                              "group-hover/capability:text-[#d6a760]",
                            )}
                          >
                            {capability.number}
                          </span>

                          <span className="mt-3 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-white/24 lg:block">
                            Step
                          </span>
                        </div>

                        <span
                          aria-hidden="true"
                          className={cn(
                            "h-px w-9 shrink-0 bg-white/14 xs:w-10 sm:w-12 lg:mt-7 lg:block",
                            PREMIUM_TRANSITION,
                            "group-hover/capability:w-14 group-hover/capability:bg-[#d6a760]/60",
                          )}
                        />
                      </div>

                      <div className="min-w-0 max-w-[58rem]">
                        <h3
                          id={headingId}
                          className={cn(
                            capabilitiesSerif.className,
                            "max-w-full text-[clamp(2.35rem,10.8vw,3.55rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#f5f0e7]",
                            "xs:text-[clamp(2.55rem,10vw,3.8rem)] xs:leading-[0.93]",
                            "sm:text-[clamp(3.2rem,8vw,4.4rem)] sm:leading-[0.91]",
                            "md:text-[clamp(3.7rem,7vw,4.7rem)]",
                            "lg:text-[clamp(3rem,4.6vw,4.9rem)] lg:leading-[0.9] lg:tracking-[-0.048em]",
                            PREMIUM_TRANSITION,
                            "group-hover/capability:text-white lg:group-hover/capability:translate-x-1",
                          )}
                        >
                          {capability.title}
                        </h3>

                        <p className="mt-4 max-w-[45rem] text-[0.9rem] leading-7 text-white/57 xs:text-[0.92rem] sm:mt-5 sm:text-base sm:leading-[1.875rem]">
                          {capability.description}
                        </p>

                        <ul
                          aria-label={`${capability.title} areas`}
                          className="mt-6 grid min-w-0 gap-2.5 xs:mt-7 sm:mt-8 sm:flex sm:max-w-[52rem] sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-3"
                        >
                          {capability.expertise.map((item, index) => (
                            <li
                              key={item}
                              className="flex min-w-0 items-start gap-3 text-[12px] font-medium leading-5 text-white/48 sm:items-center sm:text-[13px]"
                            >
                              <span
                                aria-hidden="true"
                                className={cn(
                                  "mt-2 size-1 shrink-0 rounded-full bg-[#d6a760]/55 sm:mt-0",
                                  index === 0 && "sm:hidden",
                                )}
                              />

                              <span
                                className={cn(
                                  "min-w-0",
                                  PREMIUM_TRANSITION,
                                  "group-hover/capability:text-white/68",
                                )}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        aria-hidden="true"
                        className="hidden justify-end lg:flex lg:pt-1"
                      >
                        <div
                          className={cn(
                            "relative flex size-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.015]",
                            PREMIUM_TRANSITION,
                            "group-hover/capability:border-[#d6a760]/30 group-hover/capability:bg-[#d6a760]/[0.04]",
                          )}
                        >
                          <span
                            className={cn(
                              "h-px w-3 bg-white/30",
                              PREMIUM_TRANSITION,
                              "group-hover/capability:w-4 group-hover/capability:bg-[#d6a760]",
                            )}
                          />

                          <span
                            className={cn(
                              "absolute size-1.5 rounded-full bg-white/24",
                              PREMIUM_TRANSITION,
                              "group-hover/capability:bg-[#d6a760] group-hover/capability:shadow-[0_0_12px_rgba(214,167,96,0.45)]",
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-[-1px] left-0 h-px w-0 bg-[#d6a760]/75 transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/capability:w-full motion-reduce:transition-none"
                    />
                  </article>
                </SectionReveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
