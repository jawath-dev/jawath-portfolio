import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  children: ReactNode;
  title: string;
  url?: string;
  className?: string;
  contentClassName?: string;
  toolbarClassName?: string;
  priorityLabel?: string;
};

export function BrowserFrame({
  children,
  title,
  url,
  className,
  contentClassName,
  toolbarClassName,
  priorityLabel,
}: BrowserFrameProps) {
  const displayUrl = url ?? title.toLowerCase().replaceAll(" ", "-");

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0b0f14] shadow-[0_30px_90px_rgba(0,0,0,0.34)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-11 items-center gap-3 border-b border-white/10 bg-white/[0.055] px-4 backdrop-blur-xl sm:h-12 sm:px-5",
          toolbarClassName,
        )}
      >
        <div aria-hidden="true" className="flex shrink-0 items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </div>

        <div className="flex min-w-0 flex-1 justify-center">
          <div className="flex h-7 min-w-0 max-w-[18rem] flex-1 items-center justify-center rounded-lg border border-white/10 bg-black/20 px-3 sm:max-w-[22rem]">
            <span className="truncate text-[10px] font-medium tracking-[0.015em] text-white/45 sm:text-[11px]">
              {displayUrl}
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="w-[3.75rem] shrink-0 sm:w-[4.25rem]"
        />
      </div>

      <div
        className={cn(
          "relative min-h-[18rem] overflow-hidden bg-[#0f141b] sm:min-h-[23rem] lg:min-h-[28rem]",
          contentClassName,
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        {priorityLabel ? (
          <div className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
              {priorityLabel}
            </span>
          </div>
        ) : null}

        <div className="relative min-h-[inherit]">{children}</div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.035]"
      />
    </div>
  );
}
