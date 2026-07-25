# Modern Rounded — Prototype → Modern Card-Based UI

## Purpose

Convert a static retro newspaper prototype (from `prototype/*.html`) into a modern, rounded card-based UI using glassmorphism, pill badges, soft shadows, and clean typography. All animations and interactivity from the `animate/` skill are preserved.

## Rules

1. **Do NOT edit or overwrite the reference file** (`modern-rounded/sylphiette.html`). It is the canonical reference — never modify it.
2. **Output new files to the same folder as this skill file** (`modern-rounded/`). The result of applying this skill must be placed in `modern-rounded/`.
3. **Copy images** from `animate/` (or `prototype/`) into `modern-rounded/` as part of setup.

## Reference Implementation

File: `modern-rounded/sylphiette.html` — full working reference. Do not edit.

The input prototype follows the structure defined in `prototype/layout-reference.html` (8 sections: A–H).

## Style Principles

| Principle | Implementation |
|---|---|
| **Rounded everything** | `border-radius: 24px` container, `12–16px` cards, `999px` pills/buttons |
| **Glassmorphism** | `background: rgba(255,255,255,0.92)` + `backdrop-filter: blur(8px)` |
| **Soft shadows** | `box-shadow: 0 8px 40px rgba(0,0,0,0.12)` — never harsh |
| **Gradient dividers** | `linear-gradient(90deg, transparent, color, transparent)` — no solid borders |
| **Pill badges** | `border-radius: 999px` for labels, tags, toasts, tooltips |
| **Sans-serif primary** | `Inter` or system-ui for body/UI, accent fonts kept for headlines only |
| **No textures** | No washi paper, no repeating gradients — clean bg only |
| **Card sections** | Each section wrapped in a subtle card with `rgba(255,255,255,0.5)` bg |

## Pattern Catalog

### 1. Atmosphere — Animated Gradient Background

Same as `animate/SKILL.md` — replace flat body background with an animated gradient.

```css
body {
  background: linear-gradient(135deg, #2d4a38, #4a7c59, #6b9b7a);
  background-size: 400% 400%;
  animation: bgShift 12s ease infinite;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
@keyframes bgShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 2. Page Entrance — Glassmorphism Container

Replaces the `.newspaper` class with `.container` — a rounded glass card.

```css
.container {
  max-width: 920px;
  width: 100%;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(8px);
  padding: 2.5rem 2.5rem 2rem;
  box-shadow: 0 8px 40px rgba(0,0,0,0.12);
  border-radius: 24px;
  animation: cardFadeIn 1s ease-out;
}
@keyframes cardFadeIn {
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
```

**CUSTOMIZE**: Adjust `rgba` opacity for more/less transparency, `backdrop-filter: blur(8px)` for glass strength, `border-radius` for roundness.

### 3. Scroll Reveal

Same IntersectionObserver pattern as `animate/SKILL.md`. Class name: `.reveal`.

```css
.reveal {
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
```

### 4. Typography & UI Elements

#### 4a. EXTRA — Pill Badge + Gradient Divider

"EXTRA" becomes a small pill-shaped badge. The old double border is replaced by a gradient divider.

**HTML**
```html
<div class="extra-banner">
  <span class="extra-left">EXTRA</span>
  <span class="extra-price">SPECIAL EDITION</span>
  <span class="extra-right">BACKEND COURSE</span>
</div>
<div class="banner-divider"></div>
```

**CSS — Pill Badge**
```css
.extra-left {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: #8b0000;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  letter-spacing: 0.15em;
  position: relative;
  overflow: hidden;
}
.extra-left::after {
  content: '';
  position: absolute; top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 3s ease-in-out infinite;
}
@keyframes shimmer {
  0%   { left: -100%; }
  50%  { left: 100%; }
  100% { left: 100%; }
}
```

**CSS — Gradient Divider**
```css
.banner-divider {
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, transparent, #4a7c59, transparent);
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
```

#### 4b. Headline — Gradient Pill Divider

The decorative line under the headline becomes a rounded gradient pill.

```css
.headline-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4a7c59, #6b9b7a);
  border-radius: 4px;
  margin: 0.75rem auto;
  animation: lineGrow 1.2s ease-out forwards;
  transform-origin: left;
}
@keyframes lineGrow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
```

#### 4c. Headline — Staggered Letter Reveal

Same as `animate/SKILL.md` — split key words into `<span class="letter">` elements.

#### 4d. Accent Word Pulse

Same as `animate/SKILL.md` — `text-shadow` animation.

#### 4e. Dropcap Glow

Same as `animate/SKILL.md` — `text-shadow` animation on the first letter.

#### 4f. Quote — Rounded Card

Replaces the left-border quote box with a full rounded card.

```css
.quote-card {
  padding: 1.2rem 1.5rem;
  border-radius: 14px;
  background: rgba(74,124,89,0.06);
  font-style: italic;
  font-size: 0.9rem;
  color: #555;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.quote-card:hover {
  background: rgba(74,124,89,0.1);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
```

#### 4g. Subtitle — Sans-serif

```css
.headline-sub {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #777;
  font-weight: 400;
}
```

### 5. Card-Based Layout Sections

#### 5a. Article — Glass Card

The article text sits inside a subtley rounded glass card.

```css
.article-card {
  background: rgba(255,255,255,0.5);
  border-radius: 16px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.article {
  columns: 2;
  column-gap: 1.5rem;
  column-rule: 1px solid rgba(74,124,89,0.15);
}
```

#### 5b. Curriculum — Cards with Lift on Hover

Each phase becomes a rounded card with a subtle shadow, lifts on hover, reveals a lesson count pill.

```css
.curriculum-item {
  padding: 0.6rem 0.8rem;
  background: rgba(255,255,255,0.5);
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}
.curriculum-item:hover {
  background: rgba(74,124,89,0.08);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.curriculum-item.active-lesson {
  background: rgba(74,124,89,0.12);
  box-shadow: 0 0 0 2px rgba(74,124,89,0.2);
}
.curriculum-item .lesson-badge {
  background: #4a7c59;
  color: #fff;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.6rem;
  font-weight: 600;
}
```

#### 5c. Section Divider — Gradient Line

A thin rounded gradient separator between major sections.

```css
.section-divider {
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(74,124,89,0.2), transparent);
  border-radius: 2px;
  margin-bottom: 1.5rem;
}
```

### 6. Interactive Elements

#### 6a. Character Image — No Card Frame (clean)

The image has its own `border-radius: 14px` without a wrapping white card frame. Optional tooltip is a pill.

```css
.character-img {
  border-radius: 14px;
  transition: filter 0.3s ease;
  cursor: pointer;
}
.char-tooltip {
  padding: 0.4rem 1rem;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
```

#### 6b. Curriculum Toast — Pill

```css
.curriculum-toast {
  padding: 0.8rem 2rem;
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}
```

#### 6c. CTA Button — Large Pill

```css
.btn-start {
  padding: 0.9rem 3rem;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 0 0 0 rgba(74,124,89,0.4);
  animation: ctaGlow 2s ease-in-out infinite;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}
.btn-start:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 24px rgba(45,74,56,0.35);
}
```

#### 6d. Hanko — Soft Shadow

```css
.hanko {
  box-shadow: 0 2px 8px rgba(139,0,0,0.1);
}
```

#### 6e. Scroll Progress Bar — Rounded End

```css
.scroll-progress {
  border-radius: 0 4px 4px 0;
}
```

#### 6f. Character Parallax Tilt, Hanko Stamp Click, Typewriter Quote

Same JS as `animate/SKILL.md` — unchanged.

### 7. Footer — Minimal Border

```css
.footer {
  border-top: 1px solid rgba(0,0,0,0.06);
  font-size: 0.7rem;
  color: #aaa;
  font-weight: 500;
}
```

## Conversion Workflow

```
Step 1 — Setup
  ├── Copy prototype/{character}.html → modern-rounded/{character}.html (output goes to this skill's folder)
  ├── Copy prototype/{character}-img.png → modern-rounded/
  └── Identify theme color from prototype CSS

Step 2 — Atmosphere
  ├── Replace body `background:` with animated gradient
  ├── Add particle container + keyframes (same as animate/SKILL.md)
  └── Change font-family to 'Inter', system-ui, sans-serif

Step 3 — Glass Container
  ├── Rename `newspaper` class → `container`
  ├── Add glass bg: `background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);`
  ├── Set `border-radius: 24px`
  ├── Add soft shadow
  └── Remove washi paper `::before` texture

Step 4 — Scroll Reveal
  ├── Add `.reveal` CSS (same as animate/SKILL.md)
  └── Add IntersectionObserver JS

Step 5 — Convert Sections to Cards
  ├── EXTRA → pill badge + gradient divider
  ├── Headline underline → gradient pill (.headline-divider)
  ├── Article → .article-card with border-radius: 16px
  ├── Curriculum → .curriculum-item with border-radius: 12px + lift hover
  ├── Quote → .quote-card with border-radius: 14px
  ├── CTA → border-radius: 999px pill
  ├── Tooltip → border-radius: 999px pill
  └── Toast → border-radius: 999px pill

Step 6 — Add Dividers
  ├── .banner-divider after extra-banner
  └── .section-divider between major sections

Step 7 — Add Interactivity
  ├── Same as animate/SKILL.md Step 6
  └── Add .curriculum-item lift-on-hover

Step 8 — Minimal Footer
  └── Replace border with rgba(0,0,0,0.06)

Step 9 — Responsive
  └── Verify mobile breakpoint (≤700px), reduce border-radius on container to 16px
```

## Customization Guide

### Changing Theme Colors
All theme colors are used in: body gradient, extra-right text, banner divider, headline divider, headline accent, dropcap, curriculum borders/hovers, CTA background, quote-card background, tooltip bg, scroll progress. Replace globally or use a `:root` approach:

```css
:root {
  --theme: #4a7c59;
  --theme-dark: #2d4a38;
  --theme-light: #6b9b7a;
  --accent: #8b0000;
}
```

### Adjusting Roundness
- Container: `border-radius: 24px` → adjust to taste
- Cards: `border-radius: 12px` to `16px`
- Pills/badges: always `999px`
- Images: `border-radius: 14px`

### Font Strategy
- **Primary**: `Inter` (or `system-ui`, `-apple-system`) for body, buttons, small text
- **Accent/headline**: Keep the character font (e.g. `Yusei Magic`, `Zen Antique`) for headlines and hanko only
- **Google Fonts link**: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Yusei+Magic&family=Zen+Antique&display=swap" rel="stylesheet">`

### Disabling Specific Patterns
- Glassmorphism: remove `backdrop-filter` and increase `rgba` opacity to `1`
- Gradient dividers: replace with solid `border-bottom`
- Card sections: remove `background`, `border-radius`, `box-shadow` from cards
- Particles: remove the particle container HTML + CSS + JS

### Performance Notes
- `backdrop-filter: blur()` can be expensive on low-end devices — consider removing or reducing blur radius
- All animations use `transform` and `opacity` only (GPU-composited)
- Same particle performance notes as `animate/SKILL.md`

## Assets

| File | Purpose |
|---|---|
| `modern-rounded/sylphiette.html` | Full working reference implementation |
| `modern-rounded/sylphiette-img.png` | Character image used by reference |
| `prototype/layout-reference.html` | Structural baseline (8-section wireframe) |
| `animate/SKILL.md` | Animation patterns (all animations preserved in modern-rounded) |
