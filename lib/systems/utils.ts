import { clsx, type ClassValue } from "clsx"

import { twMerge } from "tailwind-merge"

/*
━━━━━━━━━━━━━━━━━━━
CLASS MERGE
━━━━━━━━━━━━━━━━━━━
*/

export function cn(
  ...inputs: ClassValue[]
) {

  return twMerge(
    clsx(inputs)
  )

}

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━
*/

export const editorialTypography = {

  hero:
    "font-heading cinematic-title font-semibold",

  sectionTitle:
    "font-heading tracking-[-0.04em] leading-[1.02]",

  label:
    "editorial-spacing text-[11px]",

  paragraph:
    "leading-[1.9] text-[1.05rem] font-light",

  premiumParagraph:
    "leading-[2rem] text-[1.08rem] font-light"

}

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL SURFACES
━━━━━━━━━━━━━━━━━━━
*/

export const editorialSurface = {

  glass:
    "editorial-glass editorial-shadow",

  card:
    "bg-white/70 border border-black/5 rounded-[32px]",

  elevated:
    "shadow-[0_20px_80px_rgba(0,0,0,0.05)]"

}

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL LAYOUTS
━━━━━━━━━━━━━━━━━━━
*/

export const editorialLayout = {

  container:
    "max-w-7xl mx-auto px-8",

  readingWidth:
    "max-w-3xl",

  cinematicSpacing:
    "pt-28 pb-24"

}

/*
━━━━━━━━━━━━━━━━━━━
EDITORIAL MOTION
━━━━━━━━━━━━━━━━━━━
*/

export const editorialMotion = {

  smooth:
    "transition-all duration-500 ease-out",

  hoverLift:
    "hover:-translate-y-[2px]",

  subtleScale:
    "hover:scale-[1.01]"

}