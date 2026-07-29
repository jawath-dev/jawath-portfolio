import { ArrowUpRight } from "lucide-react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SectionReveal } from "@/components/common/section-reveal";
import { Container } from "@/components/layout/container";
import { contactContent } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const contactSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const contactSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const INTERACTION_TRANSITION =
  "transition-[color,border-color,background-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none";

export function ContactSection() {
  const {
    eyebrow,
    heading,
    introduction,
    emailSupportingCopy,
    availability,
    actionLabel,
    principlesLabel,
    principles,
    closingNote,
  } = contactContent;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={cn(
        contactSans.className,
        "relative isolate overflow-hidden bg-[#080909] pb-18 pt-14 text-white xs:pb-20 xs:pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24 xl:pb-32 xl:pt-28",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-white/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute -right-72 -top-80 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.07)_0%,transparent_70%)] sm:-right-64 sm:-top-80 sm:size-[44rem] lg:size-[48rem]" />

        <div className="absolute -bottom-80 -left-72 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.045)_0%,transparent_72%)] sm:-bottom-84 sm:-left-60 sm:size-[46rem] lg:size-[50rem]" />

        <div className="[background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:56px_56px] sm:[background-size:72px_72px] lg:[background-size:84px_84px]" />
      </div>

      <Container>
        <SectionReveal distance={34} amount={0.2}>
          <div className="flex min-w-0 items-center gap-2.5 xs:gap-3 sm:gap-4">
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-[#d6a760] shadow-[0_0_16px_rgba(214,167,96,0.32)]"
            />

            <p className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d6a760] xs:text-[10px] xs:tracking-[0.21em] sm:text-[11px] sm:tracking-[0.24em]">
              {eyebrow}
            </p>

            <span
              aria-hidden="true"
              className="h-px w-5 shrink-0 bg-[#d6a760]/65 xs:w-6 sm:w-8"
            />
          </div>
        </SectionReveal>

        <div className="mt-5 grid min-w-0 gap-11 xs:mt-6 xs:gap-12 sm:gap-14 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,19rem)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-20 2xl:gap-24">
          <div className="min-w-0">
            <SectionReveal distance={48} amount={0.16}>
              <h2
                id="contact-heading"
                className={cn(
                  contactSerif.className,
                  "max-w-[68rem] text-[clamp(2.6rem,12vw,4rem)] font-medium leading-[0.94] tracking-[-0.043em] text-[#f5f0e7]",
                  "xs:text-[clamp(2.85rem,11vw,4.25rem)] xs:leading-[0.92]",
                  "sm:text-[clamp(4rem,9.5vw,5.5rem)] sm:leading-[0.89]",
                  "md:text-[clamp(4.8rem,8vw,6.4rem)]",
                  "lg:text-[clamp(4.25rem,6.3vw,7.4rem)] lg:leading-[0.87] lg:tracking-[-0.055em]",
                )}
              >
                <span className="block">{heading.firstLine}</span>

                <span className="block font-normal italic text-[#d6a760]">
                  {heading.accent}
                </span>

                <span className="block">{heading.finalLine}</span>
              </h2>
            </SectionReveal>

            <div className="mt-8 border-t border-white/[0.1] pt-7 xs:mt-9 xs:pt-8 sm:mt-12 sm:pt-10 lg:mt-16 lg:pt-12">
              <div className="grid min-w-0 gap-8 xs:gap-9 sm:gap-10 xl:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)] xl:gap-14 2xl:gap-16">
                <SectionReveal distance={36} amount={0.18}>
                  <p
                    className={cn(
                      contactSerif.className,
                      "max-w-[27rem] text-[1.45rem] font-medium leading-[1.12] tracking-[-0.024em] text-[#eee8dc]",
                      "xs:text-[1.6rem] xs:leading-[1.1]",
                      "sm:text-[2rem] sm:leading-[1.08] sm:tracking-[-0.027em]",
                    )}
                  >
                    {introduction}
                  </p>
                </SectionReveal>

                <SectionReveal distance={34} amount={0.16}>
                  <div className="min-w-0 max-w-[46rem]">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/36 xs:tracking-[0.18em] sm:text-[10px] sm:tracking-[0.2em]">
                      Email
                    </p>

                    <a
                      href={siteConfig.contact.emailHref}
                      aria-label={`Email ${siteConfig.name} at ${siteConfig.email}`}
                      className={cn(
                        "group/email mt-4 flex w-full min-w-0 items-center justify-between gap-3 border-b border-white/[0.16] pb-3 outline-none xs:mt-5 sm:inline-flex sm:w-fit sm:max-w-full sm:justify-start sm:gap-4",
                        INTERACTION_TRANSITION,
                        "hover:border-[#d6a760]/80",
                        "focus-visible:border-[#d6a760] focus-visible:ring-2 focus-visible:ring-[#d6a760]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080909]",
                      )}
                    >
                      <span
                        className={cn(
                          contactSerif.className,
                          "min-w-0 break-all text-[clamp(1.2rem,6.5vw,2rem)] font-medium leading-[1.08] tracking-[-0.032em] text-[#f5f0e7]",
                          "xs:text-[clamp(1.35rem,6.8vw,2.2rem)]",
                          "sm:break-normal sm:text-[clamp(2rem,5vw,3.2rem)]",
                          "lg:text-[clamp(1.75rem,3.6vw,3.55rem)] lg:leading-none lg:tracking-[-0.043em]",
                          INTERACTION_TRANSITION,
                          "group-hover/email:text-[#d6a760] group-focus-visible/email:text-[#d6a760]",
                        )}
                      >
                        {siteConfig.email}
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className={cn(
                          "size-4 shrink-0 text-[#d6a760] xs:size-[1.05rem] sm:size-6",
                          INTERACTION_TRANSITION,
                          "group-hover/email:-translate-y-0.5 group-hover/email:translate-x-0.5",
                          "group-focus-visible/email:-translate-y-0.5 group-focus-visible/email:translate-x-0.5",
                        )}
                        strokeWidth={1.55}
                      />
                    </a>

                    <p className="mt-4 max-w-[35rem] text-[0.875rem] leading-6 text-white/48 xs:mt-5 xs:text-sm sm:mt-6 sm:text-[0.95rem] sm:leading-7">
                      {emailSupportingCopy}
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>

            <SectionReveal distance={40} amount={0.16}>
              <div className="mt-10 border-y border-white/[0.1] py-7 xs:mt-11 xs:py-8 sm:mt-14 sm:py-10 lg:mt-16 lg:py-12">
                <div className="grid min-w-0 gap-6 xs:gap-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-10 lg:gap-12">
                  <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "size-2 shrink-0 rounded-full",
                          siteConfig.availability.isAvailable
                            ? "bg-[#d6a760] shadow-[0_0_16px_rgba(214,167,96,0.32)]"
                            : "bg-white/30",
                        )}
                      />

                      <p className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/38 xs:tracking-[0.18em] sm:text-[10px] sm:tracking-[0.2em]">
                        {availability.label}
                      </p>
                    </div>

                    <p className="mt-3 max-w-[39rem] text-[0.875rem] leading-6 text-white/55 xs:text-sm sm:text-[0.95rem] sm:leading-7">
                      {availability.message}
                    </p>
                  </div>

                  <a
                    href={siteConfig.contact.emailHref}
                    aria-label={`${actionLabel} by email`}
                    className={cn(
                      "group/action inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[#d6a760]/50 bg-[#d6a760] px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.13em] text-[#11130f] outline-none xs:px-6 xs:tracking-[0.14em] sm:w-fit sm:px-7 sm:text-[11px] sm:tracking-[0.16em]",
                      INTERACTION_TRANSITION,
                      "hover:-translate-y-0.5 hover:border-[#e1bb7d] hover:bg-[#e1bb7d] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]",
                      "focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080909]",
                    )}
                  >
                    <span>{actionLabel}</span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className={cn(
                        "size-4 shrink-0",
                        INTERACTION_TRANSITION,
                        "group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5",
                        "group-focus-visible/action:-translate-y-0.5 group-focus-visible/action:translate-x-0.5",
                      )}
                      strokeWidth={1.7}
                    />
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>

          <aside
            aria-label="Contact details"
            className="min-w-0 border-t border-white/[0.1] pt-8 xs:pt-9 sm:pt-10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1 xl:pl-10 2xl:pl-12"
          >
            <SectionReveal distance={32} amount={0.18}>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/36 xs:tracking-[0.19em] sm:text-[10px] sm:tracking-[0.22em]">
                Connect
              </p>
            </SectionReveal>

            <nav
              aria-label="Professional profiles"
              className="mt-5 min-w-0 border-t border-white/[0.1] xs:mt-6 sm:mt-7"
            >
              <ul className="min-w-0">
                {siteConfig.socialLinks.map((socialLink, index) => (
                  <li key={socialLink.platform} className="min-w-0">
                    <SectionReveal
                      distance={28}
                      delay={index * 0.045}
                      amount={0.15}
                    >
                      <a
                        href={socialLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${siteConfig.name} on ${socialLink.label}`}
                        className={cn(
                          "group/social flex min-w-0 items-center justify-between gap-5 border-b border-white/[0.1] py-5 text-white outline-none xs:py-6 sm:py-7 lg:py-8",
                          INTERACTION_TRANSITION,
                          "hover:border-white/[0.2]",
                          "focus-visible:border-[#d6a760]/70 focus-visible:ring-2 focus-visible:ring-[#d6a760]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080909]",
                        )}
                      >
                        <span
                          className={cn(
                            contactSerif.className,
                            "min-w-0 text-[1.3rem] font-medium leading-none tracking-[-0.022em] text-[#eee8dc] xs:text-[1.4rem] xs:tracking-[-0.023em] sm:text-[1.5rem] sm:tracking-[-0.025em]",
                            INTERACTION_TRANSITION,
                            "group-hover/social:text-[#d6a760] group-focus-visible/social:text-[#d6a760]",
                          )}
                        >
                          {socialLink.label}
                        </span>

                        <ArrowUpRight
                          aria-hidden="true"
                          className={cn(
                            "size-[1.05rem] shrink-0 text-white/28 xs:size-[1.1rem]",
                            INTERACTION_TRANSITION,
                            "group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5 group-hover/social:text-[#d6a760]",
                            "group-focus-visible/social:-translate-y-0.5 group-focus-visible/social:translate-x-0.5 group-focus-visible/social:text-[#d6a760]",
                          )}
                          strokeWidth={1.5}
                        />
                      </a>
                    </SectionReveal>
                  </li>
                ))}
              </ul>
            </nav>

            <SectionReveal distance={28} amount={0.16}>
              <div className="mt-8 min-w-0 xs:mt-9 sm:mt-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/36 xs:tracking-[0.19em] sm:text-[10px] sm:tracking-[0.22em]">
                  {principlesLabel}
                </p>

                <ol className="mt-5 min-w-0 border-t border-white/[0.1] xs:mt-6 sm:mt-7">
                  {principles.map((principle) => (
                    <li
                      key={`${principle.label}-${principle.value}`}
                      className="grid min-w-0 grid-cols-[1.65rem_minmax(0,1fr)] gap-3 border-b border-white/[0.1] py-5 xs:grid-cols-[1.75rem_minmax(0,1fr)] xs:py-6 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-4 sm:py-7"
                    >
                      <span className="pt-1 text-[9px] font-semibold tracking-[0.15em] text-[#d6a760]/72 xs:tracking-[0.16em] sm:text-[10px] sm:tracking-[0.18em]">
                        {principle.label}
                      </span>

                      <span
                        className={cn(
                          contactSerif.className,
                          "min-w-0 text-[1.15rem] font-medium leading-[1.12] tracking-[-0.018em] text-[#eee8dc] xs:text-[1.25rem] xs:leading-[1.1] xs:tracking-[-0.02em] sm:text-[1.35rem] sm:leading-[1.08] sm:tracking-[-0.022em]",
                        )}
                      >
                        {principle.value}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </SectionReveal>

            <SectionReveal distance={28} amount={0.16}>
              <div className="mt-7 min-w-0 border-t border-white/[0.1] pt-6 xs:mt-8 xs:pt-7 sm:mt-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/32 xs:tracking-[0.17em] sm:text-[10px] sm:tracking-[0.19em]">
                  Based in
                </p>

                <p
                  className={cn(
                    contactSerif.className,
                    "mt-2.5 text-[1.25rem] font-medium tracking-[-0.018em] text-[#eee8dc] xs:text-[1.3rem] sm:text-[1.4rem] sm:tracking-[-0.02em]",
                  )}
                >
                  {siteConfig.location}
                </p>

                <p className="mt-2 text-xs leading-5 text-white/38">
                  Available for remote collaboration.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal distance={28} amount={0.16}>
              <p
                className={cn(
                  contactSerif.className,
                  "mt-8 max-w-[18rem] border-t border-white/[0.1] pt-6 text-[1.05rem] font-medium leading-[1.26] tracking-[-0.015em] text-white/48 xs:mt-9 xs:pt-7 xs:text-[1.1rem] xs:leading-[1.24] xs:tracking-[-0.016em] sm:mt-10 sm:max-w-[16rem] sm:text-[1.2rem] sm:leading-[1.2] sm:tracking-[-0.018em]",
                )}
              >
                {closingNote}
              </p>
            </SectionReveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}
