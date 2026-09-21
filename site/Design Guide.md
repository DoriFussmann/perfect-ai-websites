# Design Guide

Resolved tokens for the Tailwind build. Visual decisions come from the repository Design Guide. House rules override the raw token fence there: Inter only, weights 400–500, body text at least 16px, and contrast-safe colors from the extended palette.

## Brand identity

Perfect AI Websites. Wordmark: "Perfect AI" in band `#0D1F4E` at weight 500, "Websites" in accent `#1A5FD4` at weight 400. On the navy band, both parts use light colors that meet WCAG AA.

## Color palette

Light surfaces only. Accent `#1A5FD4` for actions and links. Band `#0D1F4E` for navigation and footer. Positive `#1A9E6B` for icons and large indicators only, never small body text on white.

## Typography

Inter Variable only, self-hosted. Weights 400 and 500. Body 17px. No second display family.

## Spacing & layout

Spacing unit is 4px. The same max-width container wraps every page. Article body uses that same container; a slightly tighter measure is applied only to the prose column for line length, never to the page chrome. Breakpoints follow a simple sm/md/lg/xl scale. Vertical rhythm is 6/8/12 spacing steps between sections.

## Imagery

Hero images are 16:9, `object-fit: cover`, width and height always present. Team photos are square. Alt text is required and descriptive.

## Voice & tone

Plain, specific, and operator-facing in the CMS. On the public site: editorial, complete sentences, no marketing superlatives in placeholder copy.

## Token block

Parseable JSON. `site/design-tokens.mjs` reads this fence and feeds `tailwind.config.mjs`.

```tokens
{
  "colors": {
    "bg": "#FFFFFF",
    "fg": "#111827",
    "accent": "#1A5FD4",
    "accent-hover": "#1450B8",
    "highlight": "#1A9E6B",
    "muted": "#4B5563",
    "border": "#D1D8E8",
    "surface": "#FFFFFF",
    "focus": "#1A5FD4"
  },
  "fonts": {
    "sans": "Inter Variable",
    "serif": "Inter Variable"
  },
  "typeScale": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem"
  },
  "spacingUnit": "4px",
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
  },
  "maxWidth": {
    "container": "72rem",
    "article": "90rem"
  }
}
```
