import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SectionReveal } from "@/components/common/section-reveal";
import { Container } from "@/components/layout/container";
import { aboutContent } from "@/config/about";
import { cn } from "@/lib/utils";

const aboutSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const aboutSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const PREMIUM_TRANSITION =
  "transition-[color,border-color,background-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none";

export function AboutSection() {
  const {
    eyebrow,
    heading,
    introduction,
    paragraphs,
    quote,
    detailsLabel,
    details,
    closingNote,
  } = aboutContent;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={cn(
        aboutSans.className,
        "relative isolate overflow-hidden bg-[#f2eee5] py-18 text-[#151713] xs:py-20 sm:py-24 lg:py-28 xl:py-32",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-black/[0.09]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute -right-64 -top-72 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.09)_0%,transparent_70%)] sm:-right-56 sm:-top-68 sm:size-[42rem]" />

        <div className="absolute -bottom-80 -left-64 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(17,19,17,0.035)_0%,transparent_72%)] sm:-bottom-72 sm:-left-52 sm:size-[44rem]" />

        <div className="[background-image:linear-gradient(rgba(25,27,23,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(25,27,23,0.32)_1px,transparent_1px)] [background-size:58px_58px] sm:[background-size:84px_84px]" />
      </div>

      <Container>
        <SectionReveal distance={34} amount={0.2}>
          <div className="flex min-w-0 items-center gap-2.5 xs:gap-3 sm:gap-4">
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-[#ad7937] shadow-[0_0_14px_rgba(173,121,55,0.22)]"
            />

            <p className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#98682d] xs:text-[10px] xs:tracking-[0.21em] sm:text-[11px] sm:tracking-[0.24em]">
              {eyebrow}
            </p>

            <span
              aria-hidden="true"
              className="h-px w-5 shrink-0 bg-[#ad7937]/55 xs:w-6 sm:w-8"
            />
          </div>
        </SectionReveal>

        <div className="mt-5 grid min-w-0 gap-11 xs:mt-6 xs:gap-12 sm:mt-7 sm:gap-14 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,19rem)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-24 2xl:gap-28">
          <div className="min-w-0">
            <SectionReveal distance={48} amount={0.16}>
              <h2
                id="about-heading"
                className={cn(
                  aboutSerif.className,
                  "max-w-[68rem] text-[clamp(2.55rem,11.5vw,3.9rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#171915]",
                  "xs:text-[clamp(2.8rem,10.8vw,4.2rem)] xs:leading-[0.93]",
                  "sm:text-[clamp(3.8rem,9vw,5.2rem)] sm:leading-[0.91]",
                  "md:text-[clamp(4.5rem,8vw,6rem)]",
                  "lg:text-[clamp(3.8rem,6vw,6.75rem)] lg:leading-[0.89] lg:tracking-[-0.052em]",
                )}
              >
                <span className="block">{heading.firstLine}</span>

                <span className="block">{heading.secondLine}</span>

                <span className="block">
                  {heading.thirdLine}{" "}
                  <span className="font-normal italic text-[#ad7937]">
                    {heading.accent}
                  </span>
                </span>
              </h2>
            </SectionReveal>

            <div className="mt-9 border-t border-black/[0.12] pt-7 xs:mt-10 xs:pt-8 sm:mt-14 sm:pt-11 lg:mt-16 lg:pt-12">
              <div className="grid min-w-0 gap-9 sm:gap-11 md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] md:gap-12 xl:gap-18 2xl:gap-20">
                <SectionReveal distance={38} amount={0.18}>
                  <div className="min-w-0 max-w-[30rem]">
                    <span
                      aria-hidden="true"
                      className="mb-5 block h-px w-11 bg-[#ad7937]/55 xs:mb-6 xs:w-12 sm:mb-7"
                    />

                    <p
                      className={cn(
                        aboutSerif.className,
                        "text-[1.45rem] font-medium leading-[1.12] tracking-[-0.024em] text-[#252720]",
                        "xs:text-[1.6rem] xs:leading-[1.1]",
                        "sm:text-[2rem] sm:leading-[1.08] sm:tracking-[-0.027em]",
                      )}
                    >
                      {introduction}
                    </p>
                  </div>
                </SectionReveal>

                <div className="min-w-0 max-w-[41rem] space-y-5 xs:space-y-6 sm:space-y-7">
                  {paragraphs.map((paragraph, index) => (
                    <SectionReveal
                      key={paragraph}
                      distance={32}
                      delay={index * 0.05}
                      amount={0.16}
                    >
                      <p className="text-[0.9rem] leading-7 text-[#353831]/75 xs:text-[0.94rem] sm:text-base sm:leading-8">
                        {paragraph}
                      </p>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            </div>

            <SectionReveal distance={42} amount={0.16}>
              <blockquote
                style={{ marginTop: "2rem" }}
                className="relative min-w-0 overflow-hidden border-y border-black/[0.12] py-8 xs:py-9 sm:py-12 lg:py-14"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 top-1/2 size-52 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(173,121,55,0.08)_0%,transparent_68%)] sm:size-56"
                />

                <div className="relative grid min-w-0 gap-2.5 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-7 lg:grid-cols-[3rem_minmax(0,1fr)] lg:gap-8">
                  <span
                    aria-hidden="true"
                    className={cn(
                      aboutSerif.className,
                      "text-4xl font-normal leading-none text-[#ad7937] sm:text-5xl",
                    )}
                  >
                    “
                  </span>

                  <p
                    className={cn(
                      aboutSerif.className,
                      "min-w-0 max-w-[52rem] text-[clamp(1.65rem,7.8vw,2.45rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#1b1d19]",
                      "xs:text-[clamp(1.8rem,7.4vw,2.6rem)]",
                      "sm:text-[clamp(2.3rem,5vw,3rem)] sm:leading-[1.03]",
                      "lg:text-[clamp(2.15rem,3.25vw,3.3rem)] lg:leading-[1.02] lg:tracking-[-0.036em]",
                    )}
                  >
                    <span className="block">{quote.firstLine}</span>

                    <span className="mt-2 block font-normal italic text-[#ad7937] sm:mt-3">
                      {quote.secondLine}
                    </span>
                  </p>
                </div>
              </blockquote>
            </SectionReveal>
          </div>

          <aside
            aria-label="Professional details"
            className="min-w-0 border-t border-black/[0.12] pt-8 xs:pt-9 sm:pt-10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1 xl:pl-10 2xl:pl-12"
          >
            <SectionReveal distance={34} amount={0.18}>
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-7 shrink-0 bg-[#ad7937]/45 sm:w-8"
                />

                <p className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77786f] xs:tracking-[0.19em] sm:text-[10px] sm:tracking-[0.22em]">
                  {detailsLabel}
                </p>
              </div>
            </SectionReveal>

            <dl className="mt-6 min-w-0 border-t border-black/[0.12] xs:mt-7 sm:mt-8">
              {details.map((detail, index) => {
                const detailId = `about-detail-${index}`;

                return (
                  <SectionReveal
                    key={`${detail.label}-${detail.value}`}
                    distance={28}
                    delay={index * 0.045}
                    amount={0.15}
                  >
                    <div
                      className={cn(
                        "group/detail min-w-0 border-b border-black/[0.12] py-5 sm:py-6 lg:py-7",
                        PREMIUM_TRANSITION,
                      )}
                    >
                      <dt
                        id={`${detailId}-label`}
                        className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77786f] xs:tracking-[0.17em] sm:text-[10px] sm:tracking-[0.19em]"
                      >
                        {detail.label}
                      </dt>

                      <dd
                        aria-labelledby={`${detailId}-label`}
                        className={cn(
                          aboutSerif.className,
                          "mt-2.5 text-[1.3rem] font-medium leading-[1.16] tracking-[-0.02em] text-[#22241f]",
                          "xs:text-[1.35rem]",
                          "sm:text-[1.45rem] sm:leading-[1.12] sm:tracking-[-0.022em]",
                          PREMIUM_TRANSITION,
                          "group-hover/detail:text-[#98682d]",
                        )}
                      >
                        {detail.value}
                      </dd>
                    </div>
                  </SectionReveal>
                );
              })}
            </dl>

            <SectionReveal distance={30} amount={0.16}>
              <div className="mt-7 min-w-0 border-l border-[#ad7937]/45 pl-4 xs:mt-8 sm:mt-9 sm:pl-5">
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#ad7937] shadow-[0_0_10px_rgba(173,121,55,0.18)]"
                  />

                  <p
                    className={cn(
                      aboutSerif.className,
                      "min-w-0 max-w-[17rem] text-[1rem] font-medium leading-[1.34] tracking-[-0.014em] text-[#45483f]",
                      "xs:text-[1.05rem] xs:leading-[1.32]",
                      "sm:text-[1.1rem] sm:leading-[1.3] sm:tracking-[-0.015em]",
                    )}
                  >
                    <span className="block">{closingNote.firstLine}</span>

                    <span className="block font-normal italic text-[#98682d]">
                      {closingNote.secondLine}
                    </span>
                  </p>
                </div>
              </div>
            </SectionReveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}
