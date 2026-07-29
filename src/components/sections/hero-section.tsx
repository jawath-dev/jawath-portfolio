import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const heroSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const heroSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const TECHNOLOGIES = [
  {
    label: "React",
    icon: SiReact,
    iconClassName: "text-[#61dafb]",
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
    iconClassName: "text-white",
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    iconClassName: "text-[#3178c6]",
  },
  {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    iconClassName: "text-[#38bdf8]",
  },
  {
    label: "JavaScript",
    icon: SiJavascript,
    iconClassName: "text-[#f7df1e]",
  },
] as const;

const INTERACTION_TRANSITION =
  "transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className={cn(
        heroSans.className,
        "relative isolate min-h-svh overflow-hidden bg-[#080909] text-white",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-40 overflow-hidden"
      >
        <Image
          src="/images/hero-workspace-premium.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[73%_center] xs:object-[70%_center] sm:object-[67%_center] md:object-[64%_center] lg:object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(90deg,rgba(5,6,7,0.995)_0%,rgba(5,6,7,0.98)_54%,rgba(5,6,7,0.76)_100%)] xs:bg-[linear-gradient(90deg,rgba(5,6,7,0.99)_0%,rgba(5,6,7,0.965)_55%,rgba(5,6,7,0.68)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,6,7,0.985)_0%,rgba(5,6,7,0.94)_54%,rgba(5,6,7,0.54)_100%)] lg:hidden"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 hidden bg-[linear-gradient(90deg,rgba(5,6,7,0.99)_0%,rgba(5,6,7,0.965)_27%,rgba(5,6,7,0.84)_41%,rgba(5,6,7,0.4)_57%,rgba(5,6,7,0.07)_76%,rgba(5,6,7,0.025)_100%)] lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,transparent_34%,transparent_62%,rgba(0,0,0,0.72)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-20 h-32 bg-[linear-gradient(180deg,rgba(4,5,5,0.24)_0%,transparent_100%)] sm:h-40"
      />

      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 -z-10 w-full bg-[radial-gradient(circle_at_18%_43%,rgba(201,149,77,0.08),transparent_50%)] sm:w-[78%] lg:w-[60%]"
      />

      <Container>
        <div className="flex min-h-svh flex-col pb-6 pt-[64px] xs:pb-7 xs:pt-[72px] sm:pb-9 sm:pt-[104px] lg:pb-8 lg:pt-[100px] xl:pb-9 xl:pt-[108px]">
          <div className="flex flex-1 items-center py-5 xs:py-6 sm:py-7 lg:py-4 xl:py-2">
            <div className="w-full min-w-0 max-w-[39rem] xl:max-w-[41rem]">
              <div className="flex min-w-0 items-center gap-2.5 xs:gap-3 sm:gap-4">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-[#d3a158] shadow-[0_0_18px_rgba(211,161,88,0.45)]"
                />

                <p className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d7a75f] xs:text-[10px] xs:tracking-[0.21em] sm:text-[11px] sm:tracking-[0.24em]">
                  Frontend Developer
                </p>

                <span
                  aria-hidden="true"
                  className="h-px w-5 shrink-0 bg-[#d3a158]/85 xs:w-6 sm:w-8"
                />
              </div>

              <h1
                id="hero-heading"
                className={cn(
                  heroSerif.className,
                  "mt-5 max-w-[38rem] text-[clamp(2.55rem,12vw,3.7rem)] font-medium leading-[0.94] tracking-[-0.038em] text-[#f6f1e8]",
                  "xs:text-[clamp(2.8rem,11vw,4.1rem)] xs:leading-[0.92]",
                  "sm:mt-6 sm:text-[clamp(3.6rem,9vw,5rem)] sm:leading-[0.9]",
                  "md:text-[clamp(4.15rem,8vw,5.6rem)]",
                  "lg:text-[clamp(3.5rem,5.3vw,6rem)] lg:leading-[0.88] lg:tracking-[-0.044em]",
                )}
              >
                I build digital products that are{" "}
                <span className="font-normal italic text-[#d4a15c]">
                  fast, elegant
                </span>{" "}
                and built to last.
              </h1>

              <div
                aria-hidden="true"
                className="mt-5 h-px w-12 bg-[#d4a15c]/75 xs:mt-6 xs:w-14 sm:mt-7"
              />

              <p className="mt-4 max-w-[33rem] text-[0.875rem] leading-6 text-white/68 xs:mt-5 xs:text-[0.925rem] sm:mt-6 sm:text-base sm:leading-8">
                I design and develop modern web applications with a focus on
                clean interfaces, scalable architecture and performance that
                delivers real impact.
              </p>

              <div className="mt-6 flex flex-col gap-3 xs:mt-7 sm:flex-row sm:items-center">
                <a
                  href="#work"
                  className={cn(
                    "group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[0.7rem] border border-[#d5a35d] bg-[#d5a35d] px-5 py-3 text-sm font-semibold text-[#14110d] outline-none shadow-[0_18px_44px_rgba(0,0,0,0.32)]",
                    "sm:min-h-13 sm:w-auto sm:px-7",
                    INTERACTION_TRANSITION,
                    "hover:-translate-y-0.5 hover:border-[#e1b26b] hover:bg-[#e1b26b] hover:shadow-[0_22px_52px_rgba(0,0,0,0.38)]",
                    "focus-visible:ring-2 focus-visible:ring-[#d5a35d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080909]",
                  )}
                >
                  <span>View my work</span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:transform-none"
                    strokeWidth={1.8}
                  />
                </a>

                <a
                  href="#contact"
                  className={cn(
                    "inline-flex min-h-12 w-full items-center justify-center rounded-[0.7rem] border border-[#d09c50]/80 bg-black/25 px-5 py-3 text-center text-sm font-semibold text-white outline-none shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur-md",
                    "sm:min-h-13 sm:w-auto sm:px-7",
                    INTERACTION_TRANSITION,
                    "hover:-translate-y-0.5 hover:border-[#e0ae64] hover:bg-white/[0.055]",
                    "focus-visible:ring-2 focus-visible:ring-[#d5a35d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080909]",
                  )}
                >
                  Start a conversation
                </a>
              </div>

              <div className="mt-8 xs:mt-9 sm:mt-10 xl:mt-11">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/42 xs:tracking-[0.2em] sm:text-[10px] sm:tracking-[0.24em]">
                  Technologies I use
                </p>

                <div className="mt-4 grid grid-cols-3 gap-x-2 gap-y-5 xs:gap-x-3 min-[430px]:grid-cols-5 sm:mt-5 sm:flex sm:flex-wrap sm:items-start sm:gap-x-5 sm:gap-y-4 xl:gap-x-6">
                  {TECHNOLOGIES.map((technology, index) => {
                    const Icon = technology.icon;

                    return (
                      <div
                        key={technology.label}
                        className="flex min-w-0 items-start justify-center sm:justify-start"
                      >
                        <div className="flex min-w-0 flex-col items-center sm:min-w-[4.25rem]">
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/25 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md">
                            <Icon
                              aria-hidden="true"
                              className={cn(
                                "size-[19px]",
                                technology.iconClassName,
                              )}
                            />
                          </span>

                          <span className="mt-2 max-w-full text-center text-[9px] font-medium leading-4 text-white/65 sm:whitespace-nowrap sm:text-[10px]">
                            {technology.label}
                          </span>
                        </div>

                        {index < TECHNOLOGIES.length - 1 ? (
                          <span
                            aria-hidden="true"
                            className="ml-3.5 mt-2.5 hidden h-5 w-px bg-white/14 sm:block xl:ml-4"
                          />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden justify-center pt-4 xl:flex">
            <a
              href="#work"
              aria-label="Scroll to selected projects"
              className={cn(
                "group flex flex-col items-center gap-2.5 text-[8px] font-semibold uppercase tracking-[0.34em] text-white/42 outline-none",
                INTERACTION_TRANSITION,
                "hover:text-[#d5a35d]",
                "focus-visible:ring-2 focus-visible:ring-[#d5a35d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080909]",
              )}
            >
              <span className="relative flex size-9 items-center justify-center rounded-full border border-[#d09c50]/65 bg-black/20 backdrop-blur-md">
                <span
                  aria-hidden="true"
                  className="absolute -top-5 h-5 w-px bg-[#d09c50]/60"
                />

                <ArrowDown
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none"
                  strokeWidth={1.7}
                />
              </span>

              <span>Scroll</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
