# Prototype Generator — Theme-Based Newspaper Prototype

## Purpose

Generate a complete, themed retro newspaper prototype HTML file from user-provided character/image/color references, using `prototype/layout-reference.html` as the structural backbone. The output is a fully styled prototype ready to be passed to `animate/SKILL.md` (retro animated) or `modern-rounded/SKILL.md` (modern card UI).

## Rules

1. **Do NOT edit or overwrite `prototype/layout-reference.html`**. It is the canonical wireframe — never modify it.
2. **Output new prototype files to `prototype/`** (same folder as this skill file).
3. **Download or copy character images** to `prototype/` during setup.

## Input Requirements

The user must provide these for the skill to generate a prototype:

| Input | Example | Used In |
|---|---|---|
| Character name | "Sylphiette" | Page title, `.char-name`, footer edition |
| Character image | URL or file path | Section C — `<img src>` |
| Theme — primary | `#4a7c59` | Banner border, headline accent, curriculum border, `.phase`, dropcap, quote border, CTA bg |
| Theme — dark | `#2d4a38` | `.headline-main`, `.char-name`, `curriculum h3`, CTA hover |
| Theme — light / paper | `#f5f0e1` | `.newspaper` background |
| Accent | `#8b0000` | `.extra-left` text, `.hanko` border and text color |
| Headline accent word | "The Wind" | `.headline-main .accent` span |
| Headline main | "Hero" | Rest of `.headline-main` after accent |
| Headline subtitle | "A Journey Through Backend Engineering" | `.headline-sub` text |
| Character title | "The Wind User" | `.char-title` |
| Article text | 3 paragraphs (character bio + course connection) | `.article p` elements |
| Quote text | `"I believe in you. Let's grow together." — Sylphiette` | `.quote-box` content |
| Hanko word | "Trust" | `.hanko` text |
| Edition name | "Backend Concepts & System Design — Sylphiette Edition" | `.footer` |
| Image shape | `full-body` or `portrait` | Affects `.character-img` sizing |

### Optional Inputs

| Input | Default | Used In |
|---|---|---|
| Font — body | `'Noto Serif JP', serif` | `<body>` font-family |
| Font — headline | `'Yusei Magic', cursive` | `.headline-main`, `.extra-banner`, `.curriculum h3`, `.btn-start`, `.char-name` |
| Font — hanko | `'Zen Antique', serif` | `.hanko` |
| Google Fonts link | `Noto+Serif+JP:wght@400;700;900&family=Yusei+Magic&family=Zen+Antique` | `<link href>` |
| Extra banner text | "BACKEND COURSE" | `.extra-right` |
| CTA href | `../lessons/0001-normalization-schema-design.html` | `.btn-start` href |
| Slash divider | `false` (no divider) | Between headline and content grid (e.g. Eris prototype) |

## Theme Color Map

Maps user-provided colors to CSS properties across all 8 sections:

| Color Variable | Applies To |
|---|---|
| `{primary}` | `.extra-banner` border-bottom-color, `.headline-wrap::after` background, `.headline-main .accent` color, `.article .dropcap::first-letter` color, `.curriculum` border-top-color, `.curriculum-item .phase` color, `.quote-box` border-left-color, `.btn-start` background, `.btn-start:hover` background (dark variant), scroll-progress gradient |
| `{dark}` | `.headline-main` color, `.char-name` color, `.curriculum h3` color, `.btn-start:hover` background |
| `{paper}` | `.newspaper` background |
| `{accent}` | `.extra-left` color, `.hanko` border-color, `.hanko` color |

## Section-by-Section Conversion (A–H)

### A. Extra Banner

**CSS to change:**
```css
.extra-banner {
  border-bottom: 3px double {primary};
  font-family: {headline-font};
}
.extra-banner .extra-left { color: {accent}; }
.extra-banner .extra-right { color: {primary}; }
```

**HTML to replace:**
```html
<span class="extra-right">{course name}</span>
```

---

### B. Headline

**CSS to change:**
```css
.headline-wrap::after { background: {primary}; }
.headline-main {
  font-family: {headline-font};
  color: {dark};
}
.headline-main .accent { color: {primary}; }
.headline-sub {
  font-family: {body-font};
  color: #666;
}
```

**HTML to replace:**
```html
<div class="headline-main">
  <span class="accent">{accent word}</span> {main word}<br>
  Backend Course
</div>
<div class="headline-sub">— {subtitle} —</div>
```

---

### C. Content Grid

**CSS to change:**
```css
.character-img {
  width: 150px;
  /* full-body: height: auto */
  /* portrait: height: 200px */
}
.char-name { font-family: {headline-font}; color: {dark}; }
```

**HTML to replace:**
```html
<img src="{character}-img.png" alt="{character name}" class="character-img">
<div class="char-name">{character name}</div>
<div class="char-title">{character title}</div>
```

**Article paragraphs** — replace the 3 `<p>` elements with character bio content.

---

### D. Curriculum

**CSS to change:**
```css
.curriculum { border-top: 2px solid {primary}; }
.curriculum h3 { font-family: {headline-font}; color: {dark}; }
.curriculum-item .phase { color: {primary}; }
```

**HTML:** Content stays the same (6 standard phases). Only customize if phases differ.

---

### E. Hanko Stamp

**CSS to change:**
```css
.hanko {
  border: 3px solid {accent};
  font-family: {hanko-font};
  color: {accent};
}
```

**HTML to replace:**
```html
<div class="hanko">{hanko word}</div>
```

---

### F. Quote Box

**CSS to change:**
```css
.quote-box {
  border-left: 3px solid {primary};
  background: rgba({primary-rgb}, 0.06);
}
```

**HTML to replace:**
```html
"{quote text}" — {character name}
```

---

### G. CTA Button

**CSS to change:**
```css
.btn-start {
  font-family: {headline-font};
  background: {primary};
}
.btn-start:hover { background: {dark}; }
```

**HTML to replace:**
```html
<a href="{lesson-link}" class="btn-start">
  START COURSE
  <span class="sub">Begin your journey</span>
</a>
```

---

### H. Footer

**CSS to change:** None (keep default colors).

**HTML to replace:**
```html
{edition name}
```

## Image Shape Guide

| Shape | `.character-img` CSS | Used By |
|---|---|---|
| `full-body` | `width: 150px; height: auto;` | Sylphiette, Eris, Roxy |
| `portrait` | `width: 150px; height: auto;` | Rudeus, Norn, Aisha |

## Font Configuration

Default Japanese retro font stack:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&family=Yusei+Magic&family=Zen+Antique&display=swap" rel="stylesheet">
```
```css
body { font-family: 'Noto Serif JP', serif; }
.headline-main, .extra-banner, .curriculum h3, .btn-start, .char-name { font-family: 'Yusei Magic', cursive; }
.hanko { font-family: 'Zen Antique', serif; }
```

To use custom fonts, replace the Google Fonts link and update the CSS `font-family` properties.

## Conversion Workflow

```
Step 1 — Gather theme reference
  └── Collect all inputs from user (character name, image, colors, text)

Step 2 — Copy wireframe
  └── Copy prototype/layout-reference.html → prototype/{character}.html

Step 3 — Copy character image
  ├── Download from URL or copy from local path
  └── Save to prototype/{character}-img.png

Step 4 — Apply Section A (Extra Banner)
  ├── Replace border-bottom-color with {primary}
  ├── Update .extra-right text
  └── Set headline font on .extra-banner

Step 5 — Apply Section B (Headline)
  ├── Replace colors: {primary}, {dark}
  ├── Set fonts: headline-font, body-font
  ├── Replace accent word and main word
  └── Replace subtitle text

Step 6 — Apply Section C (Content Grid)
  ├── Replace img src with {character}-img.png
  ├── Set image dimensions per shape guide
  ├── Replace character name and title
  └── Replace article paragraphs with user content

Step 7 — Apply Sections D–H
  ├── D: Replace curriculum border and phase colors
  ├── E: Replace hanko border, font, and text
  ├── F: Replace quote box border, background, and text
  ├── G: Replace CTA colors, font, and href
  └── H: Replace footer edition text

Step 8 — Verify
  ├── Remove .wf-label elements and wireframe borders
  ├── Set body background to {dark}
  ├── Set newspaper background to {paper}
  ├── Remove dashed container border
  └── Test responsive breakpoint (≤700px)
```

## Examples

Reference completed prototypes in `prototype/`:

| File | Character | Theme | Image Shape |
|---|---|---|---|
| `prototype/sylphiette.html` | Sylphiette | Green wind (#4a7c59) | full-body |
| `prototype/eris.html` | Eris | Crimson sword (#8b2252) | full-body |
| `prototype/roxy.html` | Roxy | Blue magic (#2c5f8a) | full-body |
| `prototype/rudeus.html` | Rudeus | Purple mage (#5a3a8a) | portrait |
| `prototype/norn.html` | Norn | Teal resolve (#2a6b6b) | portrait |
| `prototype/aisha.html` | Aisha | Gold wisdom (#8a7a2a) | portrait |

## Assets

| File | Purpose |
|---|---|
| `prototype/layout-reference.html` | Structural wireframe — do not edit |
| `prototype/{character}.html` | Generated prototype output |
| `prototype/{character}-img.png` | Character image copied during setup |
| `prototype/sylphiette.html` (et al.) | Completed reference prototypes |

## Next Steps After This Skill

The generated `prototype/{character}.html` can be passed to:

1. **`animate/SKILL.md`** — Convert to retro animated page (output: `animate/`)
2. **`modern-rounded/SKILL.md`** — Convert to modern card UI (output: `modern-rounded/`)
