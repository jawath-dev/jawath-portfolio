import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { siteConfig, type SocialPlatform } from "@/config/site";
import { cn } from "@/lib/utils";

const footerSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const footerSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const PHONE_NUMBER = "+94 77 773 4067";
const PHONE_HREF = "tel:+94777734067";
const WHATSAPP_HREF = "https://wa.me/94777734067";

const footerServices = [
  "Responsive Web Design",
  "Frontend Development",
  "UI Engineering",
  "Performance Optimisation",
] as const;

const interactionTransition =
  "transition-[color,background-color,border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none";

const textColourTransition =
  "transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none";

type BrandIconProps = ComponentPropsWithoutRef<"svg">;

function GitHubIcon({ className, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.985 1.029-2.684-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.829a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.684 0 3.842-2.337 4.688-4.566 4.936.359.309.679.92.679 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.579.688.481A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedInIcon({ className, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.875 3A1.875 1.875 0 1 0 4.875 6.75 1.875 1.875 0 0 0 4.875 3ZM21 13.7c0-3.84-2.05-5.625-4.785-5.625-2.205 0-3.195 1.215-3.75 2.07V8.25H9.215V21h3.25v-6.315c0-1.665.315-3.28 2.38-3.28 2.035 0 2.06 1.905 2.06 3.39V21H21v-7.3Z" />
    </svg>
  );
}

function FiverrIcon({ className, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M7.65 6.78v-.84C7.65 3.4 9.24 2 11.86 2c1.03 0 1.91.16 2.62.46v2.91a4.86 4.86 0 0 0-1.69-.32c-1.09 0-1.53.44-1.53 1.38v.35h3.18v3.03h-3.1V21H7.65V9.81H5.78V6.78h1.87Zm8.49 0h3.61V21h-3.61V6.78Z" />
    </svg>
  );
}

function WhatsAppIcon({ className, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12.04 2A9.84 9.84 0 0 0 3.6 16.9L2 22l5.25-1.55A9.96 9.96 0 1 0 12.04 2Zm0 17.92a8.02 8.02 0 0 1-4.08-1.12l-.29-.17-3.11.92.94-3.03-.19-.31a7.86 7.86 0 0 1-1.22-4.21 7.95 7.95 0 1 1 7.95 7.92Zm4.36-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const socialIcons: Partial<
  Record<SocialPlatform, (props: BrandIconProps) => React.JSX.Element>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  fiverr: FiverrIcon,
};

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <div className="h-[3.25rem]">
      <h3 className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d6a760]">
        {children}
      </h3>

      <span
        aria-hidden="true"
        className="mt-4 block h-px w-8 bg-[#d6a760]/60"
      />
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        footerSans.className,
        "relative overflow-hidden border-t border-[#d6a760]/14 bg-[#100d0a] text-[#f5f0e7]",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6a760]/26 to-transparent" />

        <div className="absolute -right-64 -top-72 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.06)_0%,transparent_70%)]" />

        <div className="absolute -bottom-72 -left-64 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      <Container className="relative">
        <div className="grid gap-x-8 gap-y-12 pb-8 pt-12 md:grid-cols-2 lg:grid-cols-[minmax(17rem,1.25fr)_minmax(8rem,0.5fr)_minmax(13rem,0.78fr)_minmax(18rem,1fr)] lg:items-start lg:gap-x-10 lg:pb-10 lg:pt-14 xl:gap-x-16">
          <div className="max-w-[22rem]">
            <a
              href="#home"
              aria-label="Mohamed Jawath home"
              className="group inline-flex w-fit flex-col rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-4 focus-visible:ring-offset-[#100d0a]"
            >
              <span
                className={cn(
                  footerSerif.className,
                  "whitespace-nowrap text-[clamp(2.35rem,3vw,3.35rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-[#f8f3ea]",
                  interactionTransition,
                  "group-hover:text-[#e3b36b]",
                )}
              >
                Mohamed Jawath
              </span>

              <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d6a760]">
                Frontend Developer
              </span>
            </a>

            <p className="mt-5 max-w-[21rem] text-sm leading-7 text-[#f5f0e7]/52">
              I build responsive, accessible and thoughtfully engineered web
              experiences with modern frontend technologies.
            </p>

            {siteConfig.availability.isAvailable ? (
              <div className="mt-6 inline-flex items-center gap-2.5 text-xs font-medium text-[#f5f0e7]/48">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-[#d6a760] shadow-[0_0_9px_rgba(214,167,96,0.45)]"
                />

                <span className="whitespace-nowrap">
                  {siteConfig.availability.label}
                </span>
              </div>
            ) : null}
          </div>

          <div>
            <FooterHeading>Navigation</FooterHeading>

            <nav aria-label="Footer navigation">
              <ul className="grid auto-rows-[1.5rem] gap-y-3.5">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href} className="flex items-center">
                    <a
                      href={item.href}
                      className="group flex h-6 w-fit items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-3 focus-visible:ring-offset-[#100d0a]"
                    >
                      <span
                        className={cn(
                          "whitespace-nowrap text-sm font-medium text-[#f5f0e7]/58",
                          textColourTransition,
                          "group-hover:text-[#f8f3ea]",
                        )}
                      >
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <FooterHeading>Services</FooterHeading>

            <ul className="grid auto-rows-[1.5rem] gap-y-3.5">
              {footerServices.map((service) => (
                <li key={service} className="flex items-center">
                  <span className="inline-flex h-6 items-center whitespace-nowrap text-sm font-medium text-[#f5f0e7]/58">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <FooterHeading>Let&apos;s connect</FooterHeading>

            <div className="space-y-3.5">
              <a
                href={siteConfig.contact.emailHref}
                className="group flex w-fit max-w-full items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-3 focus-visible:ring-offset-[#100d0a]"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d6a760]/20 bg-[#d6a760]/[0.055] text-[#d6a760]">
                  <Mail
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.65}
                  />
                </span>

                <span
                  className={cn(
                    "whitespace-nowrap text-sm font-medium text-[#f5f0e7]/58",
                    textColourTransition,
                    "group-hover:text-[#f8f3ea]",
                  )}
                >
                  {siteConfig.email}
                </span>
              </a>

              <a
                href={PHONE_HREF}
                className="group flex w-fit items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-3 focus-visible:ring-offset-[#100d0a]"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d6a760]/20 bg-[#d6a760]/[0.055] text-[#d6a760]">
                  <Phone
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.65}
                  />
                </span>

                <span
                  className={cn(
                    "whitespace-nowrap text-sm font-medium text-[#f5f0e7]/58",
                    textColourTransition,
                    "group-hover:text-[#f8f3ea]",
                  )}
                >
                  {PHONE_NUMBER}
                </span>
              </a>

              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d6a760]/20 bg-[#d6a760]/[0.055] text-[#d6a760]">
                  <MapPin
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.65}
                  />
                </span>

                <span className="whitespace-nowrap text-sm font-medium text-[#f5f0e7]/58">
                  {siteConfig.location}
                </span>
              </div>
            </div>

            <div className="mt-7 border-t border-[#f5f0e7]/[0.09] pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5f0e7]/38">
                Find me online
              </p>

              <div aria-hidden="true" className="h-5" />

              <ul className="m-0 flex list-none items-center gap-5 p-0">
                {siteConfig.socialLinks.map((socialLink) => {
                  const SocialIcon = socialIcons[socialLink.platform];

                  return (
                    <li key={socialLink.href} className="shrink-0">
                      <a
                        href={socialLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${socialLink.label}`}
                        className={cn(
                          "inline-flex size-10 items-center justify-center rounded-full border border-[#f5f0e7]/[0.11] bg-[#f5f0e7]/[0.035] text-[#f5f0e7]/62 outline-none",
                          interactionTransition,
                          "hover:border-[#d6a760]/60 hover:bg-[#d6a760]/10 hover:text-[#d6a760]",
                          "focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-3 focus-visible:ring-offset-[#100d0a]",
                        )}
                      >
                        {SocialIcon ? (
                          <SocialIcon className="size-4" />
                        ) : (
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-4"
                            strokeWidth={1.65}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}

                <li className="shrink-0">
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with Mohamed Jawath on WhatsApp at ${PHONE_NUMBER}`}
                    className={cn(
                      "inline-flex size-10 items-center justify-center rounded-full border border-[#f5f0e7]/[0.11] bg-[#f5f0e7]/[0.035] text-[#f5f0e7]/62 outline-none",
                      interactionTransition,
                      "hover:border-[#d6a760]/60 hover:bg-[#d6a760]/10 hover:text-[#d6a760]",
                      "focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-3 focus-visible:ring-offset-[#100d0a]",
                    )}
                  >
                    <WhatsAppIcon className="size-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#f5f0e7]/[0.09] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="whitespace-nowrap text-xs leading-6 text-[#f5f0e7]/34">
            © {currentYear}{" "}
            <span className="font-medium text-[#d6a760]">Mohamed Jawath</span>.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="hidden whitespace-nowrap text-xs text-[#f5f0e7]/32 sm:block">
              Designed and engineered with intention.
            </p>

            <a
              href="#home"
              aria-label="Back to top"
              className={cn(
                "inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#f5f0e7]/[0.11] bg-[#f5f0e7]/[0.03] text-[#f5f0e7]/58 outline-none",
                interactionTransition,
                "hover:border-[#d6a760]/60 hover:bg-[#d6a760]/10 hover:text-[#d6a760]",
                "focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-3 focus-visible:ring-offset-[#100d0a]",
              )}
            >
              <ArrowUp
                aria-hidden="true"
                className="size-4"
                strokeWidth={1.7}
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
