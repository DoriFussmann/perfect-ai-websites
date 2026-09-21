# Design Guide

```tokens
{
  "colors": {
    "bg": "#ffffff",
    "fg": "#1a1a1a",
    "accent": "#1A5FD4",
    "accent-hover": "#1753b8",
    "highlight": "#1A9E6B",
    "muted": "#8a8a8a",
    "border": "#e6e6e6",
    "surface": "#ffffff",
    "focus": "#1A5FD4"
  },
  "fonts": {
    "sans": "ui-sans-serif, system-ui, sans-serif",
    "serif": "ui-sans-serif, system-ui, sans-serif"
  },
  "typeScale": {
    "xs": "12px",
    "sm": "15px",
    "base": "15px",
    "lg": "17px",
    "xl": "18px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px"
  },
  "spacingUnit": "4px",
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
  },
  "maxWidth": {
    "container": "1280px",
    "article": "1280px"
  }
}
```

## TNV House Rules

LOCKED — TNV HOUSE RULES (apply to every brand):
- Typography: Inter only. Never bold — weights 400–500 max. Hierarchy via size/color/spacing, not weight.
- Light mode only. Bright, content-forward. No dark sites.
- Motion: smooth transition/morph as a signature, applied with discipline (entrances + interactions, not everything). Respect prefers-reduced-motion.
- Standard component: collapsible panels with a chevron that open/close smoothly (accordion).
- Accessibility: WCAG AA contrast, min ~16px body, visible keyboard focus.
- Responsive down to mobile; consistent breakpoints.
- Readable measure ~65–75 chars for body/content.
- Performance: no heavy hero video by default; sensible image sizing (content/SEO sites).
- Image treatment: standard aspect ratios, a corner-radius token, never bake text into images.

These rules are locked. They override the tokens fence when they conflict: use Inter (not the fence font stack), body text at least 16px, font weight 400 or 500 only, and a light page.

## 1. Brand tokens

| Token | Value |
|---|---|
| `BRAND_NAME` | Perfect AI Websites |
| `DOMAIN` | perfectaiwebsites.com |
| `FEEL` | Technical, sharp, modern, accessible, direct, and no-bullshit. |
| `ACCENT` | `#1A5FD4` |
| `BAND` | `#0D1F4E` |
| `POSITIVE` | `#1A9E6B` |
| `WORDMARK_PRIMARY` | Perfect AI |
| `WORDMARK_ACCENT` | Websites |

**Wordmark rendering:** "Perfect AI" in `#0D1F4E` (BAND), weight 500. "Websites" in `#1A5FD4` (ACCENT), weight 400. Single line, no separator. Never bake into an image.

---

**Extended token set used throughout this guide:**

| Token | Value | Purpose |
|---|---|---|
| `--color-accent` | `#1A5FD4` | Primary CTA, links, active states |
| `--color-accent-hover` | `#1450B8` | Hover on accent elements |
| `--color-accent-subtle` | `#E8EEFA` | Accent tints, tag backgrounds |
| `--color-band` | `#0D1F4E` | Nav background, footer, wordmark primary |
| `--color-band-muted` | `#1C3370` | Band hover states, secondary band surfaces |
| `--color-positive` | `#1A9E6B` | Success, positive metrics, checkmarks |
| `--color-positive-subtle` | `#E6F6F0` | Positive tint backgrounds |
| `--color-surface` | `#FFFFFF` | Page background |
| `--color-surface-2` | `#F4F6FB` | Alternate section background |
| `--color-surface-3` | `#EEF1F8` | Card backgrounds, input fill |
| `--color-text-primary` | `#111827` | Body, headings |
| `--color-text-secondary` | `#4B5563` | Supporting copy, labels |
| `--color-text-muted` | `#6B7280` | Captions, metadata |
| `--color-border` | `#D1D8E8` | Dividers, card borders, input borders |
| `--color-error` | `#C0392B` | Validation errors |
| `--radius-sm` | `4px` | Inputs, tags |
| `--radius-md` | `8px` | Cards, panels |
| `--radius-lg` | `12px` | Feature blocks, image containers |
| `--radius-pill` | `999px` | Pill badges only |
| `--space-unit` | `8px` | Base spacing unit |
| `--container-max` | `1152px` | Max content width |
| `--container-prose` | `720px` | Article/body measure |

---

## 2. Principles

**1. Clarity over cleverness.**
Every sentence, label, and UI element should communicate one thing precisely. If a phrase could be cut without losing meaning, cut it.

**2. Technical credibility is visual.**
The layout, spacing, and component precision signal competence before a word is read. Pixel-perfect alignment, consistent spacing, and clean type hierarchy are non-negotiable.

**3. Structure earns trust.**
This product is about content architecture and site structure. The site itself must embody that: logical section order, scannable headings, clear information hierarchy. The medium is the message.

**4. Conversion through directness.**
No teaser copy, no mystery boxes. State the offer, the price, and the outcome plainly. CTAs are specific ("Rebuild My Site", not "Get Started").

**5. Accessibility is a feature, not a footnote.**
WCAG AA minimum everywhere. Keyboard navigation, focus rings, and screen-reader semantics are part of the product story — this company optimizes for AI accessibility, so the site must practice what it sells.

**6. Restraint in motion.**
One entrance animation, one interaction animation. Motion reinforces precision; it does not perform it.

---

## 3. Color

| Token | Hex | Use |
|---|---|---|
| `accent` | `#1A5FD4` | Primary buttons, links, active nav, focus rings |
| `accent-hover` | `#1450B8` | Hover state on accent elements |
| `accent-subtle` | `#E8EEFA` | Tag backgrounds, highlight bands, icon fills |
| `band` | `#0D1F4E` | Nav bar, footer background, wordmark primary text |
| `band-muted` | `#1C3370` | Footer secondary text backgrounds, hover in band |
| `positive` | `#1A9E6B` | Checkmark icons, success states, positive metric callouts |
| `positive-subtle` | `#E6F6F0` | Positive tint chip backgrounds |
| `surface` | `#FFFFFF` | Page base |
| `surface-2` | `#F4F6FB` | Alternating section backgrounds |
| `surface-3` | `#EEF1F8` | Card fill, input fill |
| `text-primary` | `#111827` | All headings and body copy |
| `text-secondary` | `#4B5563` | Supporting copy, subheadings |
| `text-muted` | `#6B7280` | Captions, metadata, placeholder |
| `border` | `#D1D8E8` | Card borders, dividers, input borders |
| `error` | `#C0392B` | Form errors only |

**WCAG AA verified pairs:**

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| `#111827` | `#FFFFFF` | 16.7:1 ✓ | Body on white |
| `#111827` | `#F4F6FB` | 15.2:1 ✓ | Body on surface-2 |
| `#FFFFFF` | `#1A5FD4` | 4.6:1 ✓ | White label on accent button |
| `#FFFFFF` | `#0D1F4E` | 14.8:1 ✓ | Nav/footer text on band |
| `#1A5FD4` | `#FFFFFF` | 4.6:1 ✓ | Accent links on white (≥16px) |
| `#1A9E6B` | `#FFFFFF` | 3.1:1 — use only for large text/icons | Positive on white — non-text only |
| `#0D1F4E` | `#E8EEFA` | 10.4:1 ✓ | Band text on accent-subtle chip |
| `#4B5563` | `#FFFFFF` | 7.0:1 ✓ | Secondary text on white |

> **Note:** `positive` (`#1A9E6B`) does not meet AA for small body text on white. Use it only for icons, large metric numbers (≥24px), or pair it with a `positive-subtle` background where the text is `#0D1F4E`.

---

## 4. Typography

Inter only. Weights 400 and 500 only. Hierarchy through size, color, and spacing — never weight alone.

| Role | Size | Line-height | Weight | Color token | Tailwind classes |
|---|---|---|---|---|---|
| Display | 48px / 3rem | 1.15 | 500 | `text-primary` | `text-5xl leading-tight font-medium` |
| H1 | 36px / 2.25rem | 1.2 | 500 | `text-primary` | `text-4xl leading-snug font-medium` |
| H2 | 28px / 1.75rem | 1.25 | 500 | `text-primary` | `text-3xl leading-snug font-medium` |
| H3 | 22px / 1.375rem | 1.3 | 500 | `text-primary` | `text-2xl leading-normal font-medium` |
| H4 | 18px / 1.125rem | 1.4 | 500 | `text-primary` | `text-lg leading-normal font-medium` |
| Body | 17px / 1.0625rem | 1.65 | 400 | `text-primary` | `text-[17px] leading-relaxed font-normal` |
| Body-sm | 15px / 0.9375rem | 1.6 | 400 | `text-secondary` | `text-[15px] leading-relaxed font-normal` |
| Label | 13px / 0.8125rem | 1.4 | 500 | `text-secondary` | `text-[13px] leading-normal font-medium tracking-wide uppercase` |
| Caption | 13px / 0.8125rem | 1.5 | 400 | `text-muted` | `text-[13px] leading-normal font-normal` |
| Nav link | 15px / 0.9375rem | 1 | 500 | `#FFFFFF` on band | `text-[15px] font-medium` |
| Code/mono | 14px / 0.875rem | 1.6 | 400 | `text-primary` | `font-mono text-sm` |

**Measure:** Body text containers capped at `720px` (`--container-prose`). At 17px Inter, this yields approximately 68–72 characters per line.

**Tailwind config additions:**

```js
// tailwind.config.js
theme: {
  extend: {
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    maxWidth: { prose: '720px', container: '1152px' },
  }
}
```

---

## 5. Layout

**Container:**
- Max width: `1152px`, horizontally centered, `px-6` (24px) gutters on mobile, `px-8` (32px) on md+.
- Prose/article content: `720px` max, centered within the container.

**Breakpoints (Tailwind defaults, named for reference):**

| Name | px | Tailwind prefix |
|---|---|---|
| mobile | 0–639 | (default) |
| sm | 640 | `sm:` |
| md | 768 | `md:` |
| lg | 1024 | `lg:` |
| xl | 1280 | `xl:` |

**Grid:**
- Default content grid: `grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8`
- Feature 2-up: `md:col-span-6`
- Feature 3-up: `md:col-span-4`
- Sidebar layout (article): `md:col-span-8` content + `md:col-span-4` sidebar
- Service card grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`

**Section spacing:**

| Context | Class |
|---|---|
| Section vertical padding (default) | `py-16 md:py-24` |
| Section vertical padding (tight) | `py-10 md:py-16` |
| Section vertical padding (hero) | `pt-20 pb-16 md:pt-28 md:pb-24` |
| Stack gap within a section | `space-y-6 md:space-y-8` |
| Component internal padding | `p-6 md:p-8` |

**Nav:**
- Full-width band bar (`bg-[#0D1F4E]`), height `64px` (`h-16`).
- Wordmark left, nav links center or right, CTA button far right.
- Mobile: hamburger collapses to a full-width drawer sliding from the right, `bg-[#0D1F4E]`.
- Sticky on scroll: `sticky top-0 z-50`.
- Active link: `border-b-2 border-[#1A5FD4]` on the band background.

**Footer:**
- `bg-[#0D1F4E]` band, `py-12`.
- 3-column grid on md+: brand/tagline | links | contact/social.
- All footer text `text-[#D1D8E8]`; links `text-white hover:text-[#E8EEFA]`.
- Bottom bar: `border-t border-[#1C3370]`, copyright in `text-[#6B7280]`.

---

## 6. Motion

**Signature:** Smooth fade-up entrance. Content sections and cards enter by translating 16px upward while fading from opacity 0 to 1. Duration 400ms, ease `[0.25, 0.1, 0.25, 1.0]`. Stagger siblings by 60ms.

Used on: section entrances (hero content, feature cards, service cards, pricing block). Not used on: nav, footer, inline text, form fields during typing, or decorative elements.

**Interaction animation:** Accent underline slides in on link hover. Chevron rotates 180° on accordion open. Button background transitions on hover (`transition-colors duration-150`).

**Framer Motion — fade-up entrance variant:**

```tsx
// variants/fadeUp.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// Usage in a card grid
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/variants/fadeUp';

<motion.ul
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-64px' }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
>
  {services.map((s) => (
    <motion.li key={s.title} variants={fadeUp}>
      <ServiceCard {...s} />
    </motion.li>
  ))}
</motion.ul>
```

**Accordion chevron rotation:**

```tsx
// Framer Motion inline for chevron
<motion.span
  animate={{ rotate: isOpen ? 180 : 0 }}
  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
>
  <ChevronDownIcon className="w-5 h-5 text-[#4B5563]" />
</motion.span>
```

**prefers-reduced-motion:**

```tsx
// hooks/useReducedMotion.ts
import { useReducedMotion } from 'framer-motion';

export function useSafeMotion() {
  const reduce = useReducedMotion();
  return reduce
    ? { hidden: {}, visible: {} } // no animation
    : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
}
```

Apply `useSafeMotion()` in place of `fadeUp` wherever the hook is available. For CSS transitions, add:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

---

## 7. Components

### Button

| Variant | Tailwind |
|---|---|
| Primary | `inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#1A5FD4] text-white text-[15px] font-medium transition-colors duration-150 hover:bg-[#1450B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5FD4]` |
| Secondary | `inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] border border-[#1A5FD4] text-[#1A5FD4] text-[15px] font-medium bg-white transition-colors duration-150 hover:bg-[#E8EEFA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5FD4]` |
| Ghost | `inline-flex items-center gap-2 px-4 py-2 text-[#1A5FD4] text-[15px] font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A5FD4] rounded-[4px]` |
| Destructive | `inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#C0392B] text-white text-[15px] font-medium hover:bg-[#A93226] transition-colors duration-150` |

CTA labels are specific: "Rebuild My Site", "See the Process", "View Pricing" — not "Submit" or "Learn More".

---

### Card

```html
<article class="
  bg-white
  border border-[#D1D8E8]
  rounded-[8px]
  p-6
  flex flex-col gap-4
  transition-shadow duration-200
  hover:shadow-md
">
  <!-- Icon or category label -->
  <span class="text-[13px] font-medium tracking-wide uppercase text-[#4B5563]">
    Service
  </span>
  <!-- Title -->
  <h3 class="text-[22px] leading-snug font-medium text-[#111827]">
    Card Title
  </h3>
  <!-- Body -->
  <p class="text-[17px] leading-relaxed font-normal text-[#111827]">
    Supporting description of the service or feature.
  </p>
  <!-- CTA -->
  <a href="#" class="text-[#1A5FD4] text-[15px] font-medium hover:underline mt-auto">
    Learn more →
  </a>
</article>
```

- Corner radius: `rounded-[8px]` (`--radius-md`)
- Images inside cards: `aspect-video` or `aspect-[4/3]`, `rounded-t-[8px]`, `object-cover`, never with baked-in text.
- Positive indicator (e.g., "Included"): `text-[#1A9E6B]` with a checkmark icon, background chip `bg-[#E6F6F0] text-[#0D1F4E] rounded-[999px] px-3 py-0.5 text-[13px] font-medium`.

---

### Input / Form field

```html
<div class="flex flex-col gap-1.5">
  <label class="text-[13px] font-medium tracking-wide uppercase text-[#4B5563]">
    Business URL
  </label>
  <input
    type="url"
    placeholder="https://yourbusiness.com"
    class="
      w-full
      px-4 py-2.5
      rounded-[4px]
      bg-[#EEF1F8]
      border border-[#D1D8E8]
      text-[17px] font-normal text-[#111827]
      placeholder:text-[#6B7280]
      focus:outline-none
      focus:ring-2 focus:ring-[#1A5FD4] focus:border-[#1A5FD4]
      transition-colors duration-150
    "
  />
  <span class="text-[13px] text-[#6B7280]">We'll audit this site before your call.</span>
</div>
```

Error state: add `border-[#C0392B] focus:ring-[#C0392B]` and a `<span class="text-[13px] text-[#C0392B]">` error message below.

---

### Image treatment

- Aspect ratios: `aspect-video` (16:9) for editorial/blog headers; `aspect-[4/3]` for feature images; `aspect-square` for team or icon thumbnails.
- Corner radius: `rounded-[12px]` (`--radius-lg`) for standalone images; `rounded-t-[8px]` for card-top images.
- Always `object-cover w-full h-full`.
- Never bake text into images. All captions are HTML below the image element.
- Lazy load: `loading="lazy"` on all images below the fold.
- Alt text: descriptive and specific; never empty on informational images.

---

### Collapsible panel (Accordion)

```tsx
// components/AccordionItem.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Props {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#D1D8E8]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="
          w-full flex items-center justify-between
          py-4 gap-4
          text-left text-[17px] font-medium text-[#111827]
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-[#1A5FD4] rounded-[4px]
        "
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="shrink-0"
        >
          <ChevronDownIcon className="w-5 h-5 text-[#4B5563]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[17px] leading-relaxed text-[#4B5563] max-w-[720px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

Wrap multiple `AccordionItem` components in a `<div class="divide-y divide-[#D1D8E8] rounded-[8px]">` container. Only one item open at a time is optional behavior — implement if the FAQ list exceeds 6 items.

---

## 8. Page recipes

### Home page

| # | Section | Components used | Background |
|---|---|---|---|
| 1 | **Nav** | Wordmark, nav links, primary CTA button | `bg-[#0D1F4E]` |
| 2 | **Hero** | Display headline, body copy (max 2 sentences), primary + secondary button, no video | `bg-white` |
| 3 | **Problem statement** | H2, 2–3 sentence body, optional stat callouts in `text-[#1A5FD4]` | `bg-[#F4F6FB]` |
| 4 | **Services grid** | 3-up card grid with `positive` checkmarks per service; stagger fade-up entrance | `bg-white` |
| 5 | **How it works** | Numbered 3-step horizontal layout on md+, vertical on mobile; H3 per step | `bg-[#F4F6FB]` |
| 6 | **Pricing block** | 2 pricing cards (one-time + monthly); positive chip "Included" list; primary CTA | `bg-white` |
| 7 | **FAQ** | AccordionItem list (6–8 questions); H2 above | `bg-[#F4F6FB]` |
| 8 | **Final CTA band** | Full-width `bg-[#0D1F4E]`, H2 in white, body in `#D1D8E8`, primary button | `bg-[#0D1F4E]` |
| 9 | **Footer** | 3-column, band background | `bg-[#0D1F4E]` |

**Hero copy pattern:**
- Display: "Your website should find customers. Right now, it probably doesn't."
- Body: One sentence on what the product does. One sentence on what they get.
- Buttons: "Rebuild My Site" (primary) + "See How It Works" (secondary/ghost).

---

### Inner page: Service detail — "Complete Website Rebuild"

| # | Section | Components used | Background |
|---|---|---|---|
| 1 | **Nav** | Shared nav | `bg-[#0D1F4E]` |
| 2 | **Page header** | H1, label (e.g., "Service"), short body (2 sentences), breadcrumb | `bg-[#F4F6FB]` |
| 3 | **What's included** | 2-column list with `positive` checkmark icons; H2 above | `bg-white` |
| 4 | **Process steps** | Vertical numbered accordion or step list; each step has H3 + body | `bg-[#F4F6FB]` |
| 5 | **Technical detail** | Prose block, `max-w-[720px]`, H2, body paragraphs, optional inline `code` tags | `bg-white` |
| 6 | **Related services** | 2-up or 3-up card grid linking to other services | `bg-[#F4F6FB]` |
| 7 | **CTA block** | H2, body, primary button "Get a Rebuild Estimate" | `bg-[#0D1F4E]` |
| 8 | **Footer** | Shared footer | `bg-[#0D1F4E]` |

**Notes:**
- No sidebar on this page; full-width prose at `720px` centered within the 1152px container.
- Breadcrumb: `Home → Services → Complete Website Rebuild` in `text-[13px] text-[#4B5563]`.
- Images: one `aspect-video` editorial image below the page header, `rounded-[12px]`, descriptive alt text.

---

## 9. Voice

**Core tone:** Clear, confident, practical, and technically credible without unnecessary complexity or hype.

| Copy type | How it sounds | Example |
|---|---|---|
| **Headlines** | Direct statement or honest observation. No question marks unless it's a genuine challenge to the reader. No exclamation marks. | "Your website isn't built for how people search today." |
| **Subheadings** | Functional, not clever. Describe what follows. | "What's included in the rebuild" |
| **Body copy** | Short sentences. Active voice. No filler. Specific over vague — say "two cluster articles per month" not "regular content updates." | "Every rebuild includes keyword research, pillar content, and technical SEO. You approve the direction before we write a word." |
| **Labels / UI** | Imperative or noun-only. Never passive. | "Rebuild My Site" / "View Pricing" / "Monthly Program" |
| **Positive callouts** | State the outcome, not the feeling. | "Indexed and discoverable by AI answer engines" not "AI-ready!" |
| **Error messages** | Specific and fixable. | "Enter a full URL, including https://" |
| **Pricing copy** | State the number, then justify it in one clause. | "$250/month. Two new articles, analytics access, and site health monitoring." |

**What to avoid:**
- "Supercharge," "game-changing," "unlock your potential," "next-level."
- Passive voice in CTAs ("Get started" is acceptable; "Solutions can be explored" is not).
- Vague time claims ("quickly," "in no time"). Use real numbers when you have them.
- Rhetorical questions used as filler. If you ask a question, the next sentence must answer it.

---

## 10. Never

**Brand-specific:**
- Never use agency buzzwords: "holistic," "synergy," "bespoke," "full-service digital transformation."
- Never promise specific search rankings or AI citation rates. State capabilities, not guarantees.
- Never position this as a DIY tool or a template service. It is a done-for-you productized service.
- Never obscure the price. The monthly retainer ($250/month) is a feature, not a detail to hide.
- Never show the founder as a solo freelancer. Frame as a capable team with founder visibility.
- Never use stock photos of people at laptops in coffee shops. Use diagrams, architecture illustrations, or abstract technical imagery.
- Never use the word "cheap." Use "affordable," "fixed-cost," or state the price directly.

**House rule enforcement:**
- Never use `font-bold`, `font-semibold`, `font-black`, or any weight above 500 (`font-medium`).
- Never implement a dark mode or dark page surface. Light mode only.
- Never use a hero video. Hero section is text + buttons only.
- Never bake text into images. All text is HTML/CSS.
- Never use color alone to convey meaning (always pair with an icon or label).
- Never break WCAG AA contrast. Do not use `positive` (`#1A9E6B`) as small body text on white.
- Never animate everything. Fade-up entrance and chevron rotation are the two permitted motion patterns. Do not add parallax, scroll-jacking, or looping animations.
- Never ignore `prefers-reduced-motion`. The `useSafeMotion` hook is required wherever Framer Motion is used.
- Never use a body font size below 16px for primary reading content.
- Never let body copy exceed `720px` in line width.