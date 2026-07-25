# Liquid Glass — Apple's Design Language

## Purpose

Convert a Modern Rounded glassmorphism page into Apple's Liquid Glass theme — a 3D physical glass aesthetic with chromatic aberration, specular highlights, and prismatic edge effects. Preserves all content and JS interactions from the source.

## Rules

1. **Output new files to `liquid-class-theme/`** — never overwrite the source.
2. **Copy character images** from `modern-rounded/` into `liquid-class-theme/` as part of setup.
3. **Preserve all content** — HTML structure, text, JS interactions unchanged.
4. **Do not stack glass on glass** — content cards use Clear variant or solid fills, not Regular glass.

## Reference Implementation

File: `liquid-class-theme/roxy.html` — full working reference. Do not edit.

## Style Principles

| Principle | Implementation |
|---|---|
| **3-Layer glass system** | `::after` (chromatic) + `::before` (specular) + element (body + shadows) |
| **Thick glass borders** | 3px border with directional brightness (bright top, darker bottom) |
| **Chromatic aberration** | Rainbow fringing via gradient border mask on `::after` |
| **Specular highlights** | White-to-transparent gradient on `::before` (top-left light source) |
| **Prismatic color bleed** | Multiple colored `box-shadow` layers (red/blue/green/yellow) |
| **Inner glow** | `inset box-shadow` with white (highlights) and dark (depth) |
| **Pastel wallpaper bg** | Soft rainbow gradient (pink, purple, blue, green, yellow) |
| **Colored glass interiors** | Tinted elements have gradients INSIDE the glass body |

## Pattern Catalog

### 1. Background — Pastel Rainbow Gradient

```css
body {
  background:
    radial-gradient(ellipse at 10% 15%, rgba(255,170,190,0.55) 0%, transparent 40%),
    radial-gradient(ellipse at 85% 10%, rgba(180,160,255,0.45) 0%, transparent 35%),
    radial-gradient(ellipse at 50% 45%, rgba(160,210,255,0.35) 0%, transparent 40%),
    radial-gradient(ellipse at 85% 80%, rgba(160,240,180,0.35) 0%, transparent 35%),
    radial-gradient(ellipse at 15% 85%, rgba(255,210,160,0.45) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 90%, rgba(200,170,240,0.3) 0%, transparent 30%),
    linear-gradient(135deg, #f2eaf4, #ece4f2, #e4ecf6, #eaf2ea, #f4ece4);
}
```

### 2. Liquid Glass — 3-Layer System

Every glass element uses 3 CSS layers to simulate physical glass:

```
::after  → Chromatic aberration border (rainbow fringing)
::before → Specular highlight (white gradient on surface)
element  → Glass body (gradient bg + thick border + shadows)
```

#### Regular (containers, cards)

```css
.liquid-glass {
  position: relative;
  background: linear-gradient(
    160deg,
    rgba(255,255,255,0.72) 0%,
    rgba(255,255,255,0.52) 25%,
    rgba(255,255,255,0.6) 50%,
    rgba(255,255,255,0.75) 100%
  );
  backdrop-filter: blur(18px) saturate(1.5);
  -webkit-backdrop-filter: blur(18px) saturate(1.5);
  
  /* Thick glass border — bright top, darker bottom */
  border: 3px solid rgba(255,255,255,0.88);
  border-top-color: rgba(255,255,255,0.95);
  border-bottom-color: rgba(190,190,210,0.55);
  border-left-color: rgba(255,255,255,0.82);
  border-right-color: rgba(210,210,230,0.65);
  
  border-radius: 24px;
  
  /* Multi-layer shadow: depth + prismatic bleed */
  box-shadow:
    0 14px 44px rgba(0,0,0,0.1),
    0 4px 14px rgba(0,0,0,0.05),
    inset 0 2px 6px rgba(255,255,255,0.9),
    inset 0 -2px 6px rgba(0,0,0,0.03),
    4px 0 10px rgba(255,110,110,0.07),
    -4px 0 10px rgba(110,110,255,0.07),
    0 4px 10px rgba(110,255,140,0.05),
    0 -4px 10px rgba(255,200,110,0.05);
  
  overflow: hidden;
}
```

#### Specular Highlight (`::before`)

```css
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    155deg,
    rgba(255,255,255,0.88) 0%,
    rgba(255,255,255,0.45) 12%,
    rgba(255,255,255,0.12) 32%,
    transparent 52%
  );
  pointer-events: none;
  z-index: 2;
}
```

#### Chromatic Aberration (`::after`)

```css
.liquid-glass::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  padding: 3px;
  background: linear-gradient(
    135deg,
    rgba(255,100,100,0.3),
    rgba(255,200,100,0.2),
    rgba(100,255,140,0.2),
    rgba(100,180,255,0.28),
    rgba(180,100,255,0.32)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 3;
  opacity: 0.65;
}
```

### 3. Clear Variant (article, quote)

Thinner border, more transparent body, lighter chromatic effects.

```css
.liquid-glass--clear {
  position: relative;
  background: linear-gradient(
    160deg,
    rgba(255,255,255,0.5) 0%,
    rgba(255,255,255,0.35) 35%,
    rgba(255,255,255,0.45) 100%
  );
  backdrop-filter: blur(14px) saturate(1.3);
  border: 2px solid rgba(255,255,255,0.72);
  border-top-color: rgba(255,255,255,0.85);
  border-bottom-color: rgba(190,190,210,0.45);
  border-radius: 18px;
  box-shadow:
    0 8px 28px rgba(0,0,0,0.07),
    0 2px 8px rgba(0,0,0,0.03),
    inset 0 1px 4px rgba(255,255,255,0.8),
    inset 0 -1px 3px rgba(0,0,0,0.02),
    3px 0 8px rgba(255,110,110,0.05),
    -3px 0 8px rgba(110,110,255,0.05);
}
/* ::before and ::after same pattern as Regular, reduced opacity */
```

### 4. Tinted Variant — Orange/Amber (badges, hanko)

Colored gradient INSIDE the glass body.

```css
.liquid-glass--tinted {
  position: relative;
  background: linear-gradient(
    160deg,
    rgba(255,255,255,0.55) 0%,
    rgba(255,150,80,0.55) 25%,
    rgba(255,110,50,0.65) 55%,
    rgba(220,90,30,0.6) 100%
  );
  backdrop-filter: blur(16px) saturate(1.6);
  border: 3px solid rgba(255,255,255,0.82);
  border-top-color: rgba(255,255,255,0.92);
  border-bottom-color: rgba(200,120,60,0.5);
  border-radius: 999px;
  box-shadow:
    0 8px 28px rgba(200,100,40,0.15),
    0 3px 10px rgba(0,0,0,0.06),
    inset 0 2px 5px rgba(255,255,255,0.85),
    inset 0 -2px 4px rgba(180,80,20,0.08),
    3px 0 8px rgba(255,130,80,0.12),
    -3px 0 8px rgba(255,200,120,0.08);
}
```

### 5. Tinted Variant — Blue (CTA, badges, toast)

```css
.liquid-glass--tinted--blue {
  background: linear-gradient(
    160deg,
    rgba(255,255,255,0.55) 0%,
    rgba(80,150,255,0.55) 25%,
    rgba(50,120,240,0.65) 55%,
    rgba(30,90,210,0.6) 100%
  );
  border-bottom-color: rgba(60,100,200,0.5);
  box-shadow:
    0 8px 28px rgba(40,100,200,0.15),
    /* ... same inset + prismatic pattern ... */
}
```

### 6. Toolbar — Floating Navigation Layer

```css
.liquid-glass--toolbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(
    160deg,
    rgba(255,255,255,0.75) 0%,
    rgba(255,255,255,0.58) 30%,
    rgba(255,255,255,0.68) 100%
  );
  backdrop-filter: blur(22px) saturate(1.8);
  border: 3px solid rgba(255,255,255,0.9);
  /* ... same shadow system ... */
}
```

### 7. Chromatic Aberration — CSS Mask Technique

The `::after` pseudo-element creates a rainbow border using mask-composite:

```css
.liquid-glass::after {
  content: '';
  position: absolute;
  inset: -3px;           /* extends 3px outside the element */
  border-radius: inherit;
  padding: 3px;           /* creates the border width */
  background: linear-gradient(
    135deg,
    rgba(255,100,100,0.3),   /* red */
    rgba(255,200,100,0.2),   /* yellow */
    rgba(100,255,140,0.2),   /* green */
    rgba(100,180,255,0.28),  /* blue */
    rgba(180,100,255,0.32)   /* purple */
  );
  /* Mask: show only the border area (not the fill) */
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 3;
  opacity: 0.65;
}
```

**Note:** `mask-composite: exclude` is not supported in Firefox. Fallback: solid gradient border (still looks good).

### 8. Specular Highlight

White-to-transparent gradient from top-left corner (simulates light source).

```css
.liquid-glass::before {
  background: linear-gradient(
    155deg,
    rgba(255,255,255,0.88) 0%,   /* bright white at top-left */
    rgba(255,255,255,0.45) 12%,  /* fades quickly */
    rgba(255,255,255,0.12) 32%,
    transparent 52%               /* gone by center */
  );
}
```

### 9. Prismatic Color Bleed (Box-Shadow)

Multiple colored shadows simulate light refracting through glass edges:

```css
box-shadow:
  /* depth shadows */
  0 14px 44px rgba(0,0,0,0.1),
  0 4px 14px rgba(0,0,0,0.05),
  /* inner glow */
  inset 0 2px 6px rgba(255,255,255,0.9),
  inset 0 -2px 6px rgba(0,0,0,0.03),
  /* prismatic bleed — each edge gets a different color */
  4px 0 10px rgba(255,110,110,0.07),    /* right: red */
  -4px 0 10px rgba(110,110,255,0.07),   /* left: blue */
  0 4px 10px rgba(110,255,140,0.05),    /* bottom: green */
  0 -4px 10px rgba(255,200,110,0.05);   /* top: yellow */
```

### 10. Bokeh Particles

Soft, pastel-colored orbs matching the background palette.

```css
.bokeh {
  position: absolute;
  border-radius: 50%;
  animation: bokehFloat linear infinite;
}
.bokeh:nth-child(1) { background: radial-gradient(circle, rgba(255,170,190,0.25), transparent); }
.bokeh:nth-child(2) { background: radial-gradient(circle, rgba(180,160,255,0.22), transparent); }
.bokeh:nth-child(3) { background: radial-gradient(circle, rgba(160,210,255,0.18), transparent); }
.bokeh:nth-child(4) { background: radial-gradient(circle, rgba(160,240,180,0.2), transparent); }
.bokeh:nth-child(5) { background: radial-gradient(circle, rgba(255,210,160,0.18), transparent); }
```

### 11. Font Strategy

- **Primary**: `Inter` (system-ui, -apple-system) for body, buttons, small text
- **Accent/headline**: `Yusei Magic` for headlines and curriculum titles
- **Stamp**: `Zen Antique` for hanko stamp only
- **Google Fonts link**: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Yusei+Magic&family=Zen+Antique&display=swap" rel="stylesheet">`

## Conversion Workflow

```
Step 1 — Setup
  ├── Copy modern-rounded/{character}.html → liquid-class-theme/{character}.html
  ├── Copy modern-rounded/{character}-img.png → liquid-class-theme/
  └── Identify theme color (keep original blue tones)

Step 2 — Background
  ├── Replace body gradient with pastel rainbow (v2 reference)
  ├── Remove bgShift animation
  └── Set font-family to Inter, system-ui, sans-serif

Step 3 — 3-Layer Glass System
  ├── Create .liquid-glass with gradient bg + thick directional border
  ├── Add ::before (specular highlight)
  ├── Add ::after (chromatic aberration via mask-composite)
  └── Add multi-layer box-shadow (depth + prismatic bleed)

Step 4 — Variants
  ├── .liquid-glass--clear (thinner, more transparent)
  ├── .liquid-glass--tinted (orange gradient inside glass)
  ├── .liquid-glass--tinted--blue (blue gradient inside glass)
  └── .liquid-glass--toolbar (sticky nav with blur)

Step 5 — Convert Elements
  ├── Headline → .liquid-glass (main container)
  ├── Article → .liquid-glass--clear
  ├── Quote → .liquid-glass--clear
  ├── CTA → .liquid-glass--tinted--blue
  ├── Curriculum items → mini .liquid-glass with ::before/::after
  ├── Lesson badges → .liquid-glass--tinted--blue (small)
  ├── Hanko → circular .liquid-glass with red tint
  ├── Character img → glass frame with ::before specular
  ├── Toolbar → .liquid-glass--toolbar (sticky)
  └── Toast → .liquid-glass--tinted--blue (fixed)

Step 6 — Bokeh Particles
  ├── Replace .star with .bokeh
  ├── Use pastel colors matching background
  └── Soft blur filter

Step 7 — Responsive
  ├── Mobile breakpoint at 700px
  ├── Reduce blur radius on mobile
  └── Verify all interactions work
```

## Customization Guide

### Changing Theme Colors

All theme colors are used in: body gradient, tinted glass gradients, prismatic bleed shadows. Replace globally:

```css
:root {
  --glass-bg-1: rgba(255,255,255,0.72);
  --glass-bg-2: rgba(255,255,255,0.52);
  --glass-border: rgba(255,255,255,0.88);
  --glass-border-bottom: rgba(190,190,210,0.55);
  --shadow-depth: rgba(0,0,0,0.1);
  --prismatic-red: rgba(255,110,110,0.07);
  --prismatic-blue: rgba(110,110,255,0.07);
  --prismatic-green: rgba(110,255,140,0.05);
  --prismatic-yellow: rgba(255,200,110,0.05);
}
```

### Adjusting Chromatic Aberration

```css
/* Stronger chromatic — increase opacity and saturation */
.liquid-glass::after {
  background: linear-gradient(
    135deg,
    rgba(255,80,80,0.45),
    rgba(255,180,80,0.3),
    rgba(80,255,120,0.3),
    rgba(80,160,255,0.4),
    rgba(160,80,255,0.45)
  );
  opacity: 0.8;
}

/* Subtle chromatic — reduce opacity */
.liquid-glass::after {
  opacity: 0.4;
}
```

### Adjusting Specular Highlight

```css
/* Stronger specular — brighter, larger */
.liquid-glass::before {
  background: linear-gradient(
    155deg,
    rgba(255,255,255,0.95) 0%,
    rgba(255,255,255,0.6) 18%,
    rgba(255,255,255,0.2) 40%,
    transparent 60%
  );
}

/* Subtle specular — dimmer, smaller */
.liquid-glass::before {
  background: linear-gradient(
    155deg,
    rgba(255,255,255,0.7) 0%,
    rgba(255,255,255,0.25) 10%,
    transparent 30%
  );
}
```

### Tuning Glass Thickness

```css
/* Thicker glass (4px border) */
.liquid-glass {
  border-width: 4px;
}
.liquid-glass::after {
  inset: -4px;
  padding: 4px;
}

/* Thinner glass (2px border) */
.liquid-glass {
  border-width: 2px;
}
.liquid-glass::after {
  inset: -2px;
  padding: 2px;
}
```

### Disabling Specific Effects

- **Chromatic aberration**: remove `::after` pseudo-element
- **Specular highlight**: remove `::before` pseudo-element
- **Prismatic bleed**: remove colored `box-shadow` layers (keep depth shadows only)
- **Bokeh particles**: remove `.bokeh-container` HTML + CSS + JS
- **Thick border**: change to `border: 1px solid rgba(255,255,255,0.5)`

### Performance Notes

- `backdrop-filter: blur()` is expensive — reduce radius on mobile
- `mask-composite: exclude` not supported in Firefox (graceful fallback)
- Bokeh particles use `filter: blur()` — limit count to 15-20
- All animations use `transform` and `opacity` only (GPU-composited)
- `::before` and `::after` pseudo-elements are free (no extra DOM nodes)

## Assets

| File | Purpose |
|---|---|
| `liquid-class-theme/roxy.html` | Full working reference implementation |
| `liquid-class-theme/roxy-img.png` | Character image used by reference |
| `modern-rounded/roxy.html` | Source file (Modern Rounded) |
| `modern-rounded/SKILL.md` | Modern Rounded skill (source patterns) |
