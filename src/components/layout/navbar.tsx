"use client";

import {
  Cormorant_Garamond,
  Libre_Baskerville,
  Manrope,
} from "next/font/google";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navbarLogo = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const navbarSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const navbarSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const MOBILE_MENU_ID = "mobile-navigation";
const DESKTOP_BREAKPOINT = 1024;
const NAVBAR_HEIGHT = 76;
const MOBILE_NAVBAR_HEIGHT = 68;
const SCROLL_THRESHOLD = 20;
const PAGE_END_TOLERANCE = 4;

const SMOOTH_TRANSITION =
  "transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none";

function getSectionId(href: string) {
  if (!href.startsWith("#")) {
    return null;
  }

  const sectionId = href.slice(1).trim();

  return sectionId.length > 0 ? sectionId : null;
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  const hasSurface = isScrolled || isMenuOpen;

  useEffect(() => {
    let animationFrameId: number | null = null;

    const navigationSectionIds = siteConfig.navigation
      .map((item) => getSectionId(item.href))
      .filter((sectionId): sectionId is string => sectionId !== null);

    const updateNavigationState = () => {
      animationFrameId = null;

      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const currentNavbarHeight =
        window.innerWidth >= DESKTOP_BREAKPOINT
          ? NAVBAR_HEIGHT
          : MOBILE_NAVBAR_HEIGHT;

      setIsScrolled(scrollTop > SCROLL_THRESHOLD);

      if (navigationSectionIds.length === 0 || scrollTop < SCROLL_THRESHOLD) {
        setActiveSectionId(null);
        return;
      }

      const isAtPageEnd =
        scrollTop + viewportHeight >= documentHeight - PAGE_END_TOLERANCE;

      if (isAtPageEnd) {
        setActiveSectionId(
          navigationSectionIds[navigationSectionIds.length - 1] ?? null,
        );
        return;
      }

      const activationLine =
        currentNavbarHeight + Math.min(viewportHeight * 0.22, 176);

      let nextActiveSectionId: string | null = null;

      for (const sectionId of navigationSectionIds) {
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        const sectionBounds = section.getBoundingClientRect();

        if (
          sectionBounds.top <= activationLine &&
          sectionBounds.bottom > currentNavbarHeight
        ) {
          nextActiveSectionId = sectionId;
        }
      }

      setActiveSectionId(nextActiveSectionId);
    };

    const scheduleNavigationUpdate = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateNavigationState);
    };

    updateNavigationState();

    window.addEventListener("scroll", scheduleNavigationUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleNavigationUpdate);
    window.addEventListener("hashchange", scheduleNavigationUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleNavigationUpdate);
      window.removeEventListener("resize", scheduleNavigationUpdate);
      window.removeEventListener("hashchange", scheduleNavigationUpdate);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHomeNavigation = () => {
    setActiveSectionId(null);
    closeMenu();
  };

  const handleSectionNavigation = (href: string) => {
    const sectionId = getSectionId(href);

    if (sectionId) {
      setActiveSectionId(sectionId);
    }

    closeMenu();
  };

  return (
    <header
      className={cn(
        navbarSans.className,
        "fixed inset-x-0 top-0 z-50 border-b text-white",
        "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:transition-none",
        hasSurface
          ? "border-white/[0.08] bg-[#080909]/82 shadow-[0_14px_46px_rgba(0,0,0,0.24)] backdrop-blur-[22px] backdrop-saturate-[1.55]"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <Container>
        <div className="flex h-[68px] min-w-0 items-center justify-between gap-4 lg:h-[76px]">
          <a
            href="#home"
            aria-label={`${siteConfig.name} home`}
            onClick={handleHomeNavigation}
            className={cn(
              "group inline-flex min-w-0 items-center rounded-lg outline-none",
              SMOOTH_TRANSITION,
              "focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-4",
              hasSurface
                ? "focus-visible:ring-offset-[#080909]"
                : "focus-visible:ring-offset-transparent",
            )}
          >
            <span
              className={cn(
                navbarLogo.className,
                "shrink-0 whitespace-nowrap text-[1.38rem] font-normal leading-none tracking-[0.025em] text-[#F5F0E7] xs:text-[1.56rem] sm:text-[1.68rem]",
                SMOOTH_TRANSITION,
                "group-hover:text-[#D6A760]",
              )}
            >
              {siteConfig.name}
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="group/navigation hidden items-center gap-1 lg:flex xl:gap-2"
          >
            {siteConfig.navigation.map((item) => {
              const sectionId = getSectionId(item.href);
              const isActive =
                sectionId !== null && activeSectionId === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    handleSectionNavigation(item.href);
                  }}
                  className={cn(
                    "group/item relative inline-flex h-11 items-center justify-center whitespace-nowrap px-2.5 text-[13px] font-medium outline-none xl:px-3.5 xl:text-sm",
                    SMOOTH_TRANSITION,
                    isActive
                      ? "text-[#f5f0e7]"
                      : hasSurface
                        ? "text-white/72"
                        : "text-white/82",
                    "hover:text-white",
                    "focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-3",
                    hasSurface
                      ? "focus-visible:ring-offset-[#080909]"
                      : "focus-visible:ring-offset-transparent",
                  )}
                >
                  <span>{item.label}</span>

                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute bottom-1.5 left-1/2 h-px w-7 -translate-x-1/2 bg-[#d6a760] opacity-100",
                        "transition-[width,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        "group-hover/navigation:w-0 group-hover/navigation:opacity-0",
                        "group-focus-within/navigation:w-0 group-focus-within/navigation:opacity-0",
                        "motion-reduce:transition-none",
                      )}
                    />
                  ) : null}

                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-[#d6a760] opacity-0",
                      "transition-[width,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      "group-hover/item:w-6 group-hover/item:opacity-100",
                      "group-focus-visible/item:w-6 group-focus-visible/item:opacity-100",
                      "motion-reduce:transition-none",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
            {siteConfig.availability.isAvailable ? (
              <div
                className={cn(
                  "hidden items-center gap-2.5 whitespace-nowrap text-[12px] font-medium xl:inline-flex xl:text-[13px]",
                  SMOOTH_TRANSITION,
                  hasSurface ? "text-white/62" : "text-white/72",
                )}
              >
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#d2a35d] shadow-[0_0_10px_rgba(210,163,93,0.42)]"
                />

                <span>{siteConfig.availability.label}</span>
              </div>
            ) : null}

            <a
              href="#contact"
              onClick={() => {
                handleSectionNavigation("#contact");
              }}
              className={cn(
                "group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#d6a760] bg-[#d6a760] px-4 text-[13px] font-semibold text-[#17120c] outline-none xl:gap-2.5 xl:px-5 xl:text-sm",
                "shadow-[0_10px_26px_rgba(0,0,0,0.22)]",
                SMOOTH_TRANSITION,
                "hover:-translate-y-px hover:border-[#e2b875] hover:bg-[#e2b875] hover:shadow-[0_14px_32px_rgba(0,0,0,0.3)]",
                "focus-visible:ring-2 focus-visible:ring-[#f0c987] focus-visible:ring-offset-3",
                hasSurface
                  ? "focus-visible:ring-offset-[#080909]"
                  : "focus-visible:ring-offset-transparent",
              )}
            >
              <span>Let&apos;s talk</span>

              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-px group-hover:translate-x-px motion-reduce:transition-none motion-reduce:transform-none"
                strokeWidth={1.8}
              />
            </a>
          </div>

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => {
              setIsMenuOpen((currentState) => !currentState);
            }}
            className={cn(
              "inline-flex size-11 shrink-0 items-center justify-center rounded-full border text-white outline-none backdrop-blur-md lg:hidden",
              SMOOTH_TRANSITION,
              hasSurface
                ? "border-white/[0.14] bg-white/[0.05]"
                : "border-white/[0.22] bg-black/[0.12]",
              "hover:border-[#d6a760]/75 hover:bg-[#d6a760]/10",
              "focus-visible:ring-2 focus-visible:ring-[#d6a760] focus-visible:ring-offset-3",
              hasSurface
                ? "focus-visible:ring-offset-[#080909]"
                : "focus-visible:ring-offset-transparent",
            )}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
            ) : (
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </Container>

      <div
        id={MOBILE_MENU_ID}
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed inset-x-0 top-[68px] z-40 h-[calc(100dvh-68px)] overflow-x-clip overflow-y-auto overscroll-contain",
          "border-t border-white/[0.06] bg-[#080909]/96 backdrop-blur-[24px] backdrop-saturate-[1.4]",
          "transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "lg:hidden motion-reduce:transition-none",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-40 top-0 size-[27rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.1)_0%,transparent_70%)]" />

          <div className="absolute -bottom-44 -left-36 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(214,167,96,0.06)_0%,transparent_70%)]" />
        </div>

        <Container className="relative flex min-h-full flex-col py-7 pb-[max(2rem,env(safe-area-inset-bottom))] xs:py-8 sm:py-10">
          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d6a760]">
              Navigation
            </p>

            <p className="text-[11px] font-medium text-white/38 sm:text-xs">
              Portfolio · 2026
            </p>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col">
            {siteConfig.navigation.map((item) => {
              const sectionId = getSectionId(item.href);
              const isActive =
                sectionId !== null && activeSectionId === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    handleSectionNavigation(item.href);
                  }}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className={cn(
                    "group relative flex min-h-[4.25rem] min-w-0 items-center justify-between gap-4 border-b py-3 pl-3 outline-none xs:min-h-[4.5rem] sm:min-h-[4.75rem]",
                    SMOOTH_TRANSITION,
                    isActive
                      ? "border-[#d6a760]/38"
                      : "border-white/[0.08] hover:border-[#d6a760]/28",
                    "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d6a760]",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-4 left-0 w-px origin-center bg-[#d6a760]",
                      "transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                      isActive
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0",
                    )}
                  />

                  <span
                    className={cn(
                      navbarSerif.className,
                      "min-w-0 text-[clamp(1.9rem,9vw,3.25rem)] font-medium leading-none tracking-[-0.045em]",
                      SMOOTH_TRANSITION,
                      isActive
                        ? "translate-x-1 text-[#d9ad69]"
                        : "text-[#f5f0e7] group-hover:translate-x-1 group-hover:text-[#d9ad69]",
                    )}
                  >
                    {item.label}
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className={cn(
                      "size-5 shrink-0 transition-[color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none",
                      isActive
                        ? "-translate-y-px translate-x-px text-[#d6a760]"
                        : "text-white/30 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-[#d6a760]",
                    )}
                    strokeWidth={1.6}
                  />
                </a>
              );
            })}
          </nav>

          <div className="mt-auto pt-9 sm:pt-10">
            {siteConfig.availability.isAvailable ? (
              <div className="mb-5 inline-flex items-center gap-2.5 text-[13px] font-medium text-white/62 sm:mb-6 sm:text-sm">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#d2a35d] shadow-[0_0_10px_rgba(210,163,93,0.42)]"
                />

                <span>{siteConfig.availability.label}</span>
              </div>
            ) : null}

            <a
              href="#contact"
              onClick={() => {
                handleSectionNavigation("#contact");
              }}
              tabIndex={isMenuOpen ? 0 : -1}
              className={cn(
                "group inline-flex h-13 w-full items-center justify-center gap-3 rounded-xl border border-[#d6a760] bg-[#d6a760] px-5 text-[15px] font-semibold text-[#17120c] outline-none shadow-[0_16px_40px_rgba(0,0,0,0.28)] sm:h-14 sm:px-6 sm:text-base",
                SMOOTH_TRANSITION,
                "hover:-translate-y-px hover:border-[#e2b875] hover:bg-[#e2b875] hover:shadow-[0_20px_48px_rgba(0,0,0,0.34)]",
                "focus-visible:ring-2 focus-visible:ring-[#f0c987] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080909]",
              )}
            >
              <span>Start a project</span>

              <ArrowUpRight
                aria-hidden="true"
                className="size-[18px] shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-px group-hover:translate-x-px motion-reduce:transition-none motion-reduce:transform-none"
                strokeWidth={1.8}
              />
            </a>

            <div className="mt-5 flex items-start gap-3 sm:mt-6">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-[18px] shrink-0 text-[#d6a760]"
                strokeWidth={1.7}
              />

              <p className="max-w-sm text-[13px] leading-6 text-white/48 sm:text-sm">
                Based in {siteConfig.location}. Available for selected freelance
                projects and remote collaborations.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
