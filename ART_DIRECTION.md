# Mar Vilaseca Homepage - Art Direction Pass

## Visual Redesign Complete ✓

A comprehensive art direction pass creating **distinct atmospheric moods** for each section, removing repetitive backgrounds, and establishing a modern jazz record sleeve aesthetic.

---

## 🎨 New Color System (Cohesive Palette)

**Core Colors:**
- Warm Cream: `#F7EFE3` (main neutral)
- Deep Espresso: `#1C1816` (anchor/text)
- Soft Sand: `#E9D8BF`
- Muted Plum: `#6E3A5D`
- Burnt Orange: `#D36A2E`
- Dusty Rose: `#C9A6A6`

**Philosophy:** Each section gets a distinct background for visual rhythm and atmosphere.

---

## 📍 Section-by-Section Atmospheres

### 1. HERO
**Background:** Full-bleed image with cinematic warm gradient  
**Overlay:** Deep espresso from bottom → transparent  
**Mood:** Dramatic, confident, record cover energy  
**Accent:** Burnt orange underline bar  
**Typography:** 8rem max title with tight tracking (-0.03em)

### 2. MUSIC / INTRO
**Background:** Warm Cream (#F7EFE3)  
**Accent:** Subtle editorial rule (2px burnt orange)  
**Mood:** Clean, spacious, editorial  
**Typography:** 6xl → 8xl headings  
**Cards:** Soft sand with neobrutalist shadows

### 3. ABOUT
**Background:** Soft Sand (#E9D8BF)  
**Treatment:** Texture overlay (subtle noise pattern)  
**Mood:** Organic, tactile, warm  
**Cards:** Warm cream with vertical offset (+8px)  
**Breathing room:** More negative space (py-32 → py-40)

### 4. SHOWS
**Background:** Warm Cream  
**Treatment:** Bold 3px divider line at top  
**Mood:** Clean, structured, confident  
**Cards:** Soft sand containers  
**Spacing:** Extra vertical padding (py-40)

### 5. GALLERY
**Background:** Muted plum tint (12% opacity)  
**Mood:** Slightly moody, expressive, artistic  
**Treatment:** Offset grid elements  
- Item 2: +1.5rem margin-top  
- Item 4: -1rem margin-top  
**Hover:** Enhanced lift (6px) with bounce easing  
**Min heights varied:** 240px, 260px, 280px, 340px

### 6. CONTACT
**Background:** Dusty Rose tint (25% opacity)  
**Mood:** Calm, minimal, approachable  
**Cards:** Warm cream with vertical offset (+8px)  
**Layout:** Asymmetric grid (1.3fr / 0.7fr)

### 7. FOOTER
**Background:** Deep Espresso  
**Treatment:** Checkerboard strip transition  
**Mood:** Bold, anchoring, confident  
**Text:** Warm cream on deep background

---

## 📐 Layout Energy & Rhythm

**Breaking Grid Rigidity:**
- Cards offset vertically (translate-y-8)
- Gallery images with individual offsets
- Varied min-heights on gallery items
- Asymmetric grid proportions (1.3fr / 0.7fr vs 1.2fr / 0.8fr)

**Spacing Variation:**
- Hero: 100svh
- Music: py-28 → py-36
- About: py-32 → py-40 (extra breathing room)
- Shows: py-32 → py-40
- Gallery: py-36 → py-44 (most spacious)
- Contact: py-32 → py-40

**No Adjacent Duplicates:**
- Espresso → Cream → Sand → Cream → Plum tint → Rose tint → Espresso

---

## 📝 Typography Emphasis

**Increased Hierarchy:**
- Section headings: 6xl → 8xl (responsive)
- Letter spacing: `-0.03em` (tighter)
- Line height: `0.88` (compressed)
- More breathing room: `mb-10 → mb-14`
- Spacing after headings: `mt-5 → mt-6, mt-7`

**Font Sizes:**
- H1 (Hero): 4.5rem → 8rem
- H2 (Sections): 6xl → 8xl
- Body: 1.15rem → 1.2rem
- Captions: lg → xl

---

## 🎯 Graphic Elements

**Editorial Details:**
- Horizontal editorial rules (2px burnt orange)
- Bold dividers (3px deep espresso)
- Accent bars (4-5px burnt orange near headings)
- Checkerboard strip (hero bottom, footer top)
- Corner accents on gallery (L-shape burnt orange borders)
- Texture overlay on About section

**Not Added:**
- No decorative clutter
- No arbitrary shapes
- Clean, intentional accents only

---

## 🔲 Shadow System (Neobrutalist)

**Consistent Shadow:** `6px 6px 0 #1C1816`

**Applied to:**
- All cards
- Player widget
- Gallery frames
- Newsletter form
- Buttons (primary)
- Navbar (scrolled)
- Badge elements

---

## 🖼️ Gallery Rhythm

**Breaking Perfect Grid:**
- Size variation: min-h-220px → 340px
- Vertical offsets:
  - Item 1: none (baseline)
  - Item 2: +1.5rem (gallery-offset-1)
  - Item 3: none
  - Item 4: -1rem (gallery-offset-2)

**Hover Enhancement:**
- Lift: `translateY(-6px)` (was -4px)
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce)
- Scale: `1.04` (was 1.03)
- Duration: `280ms` (was 250ms)

---

## 🎨 Overall Feel Achieved

✓ **Expressive** - Distinct moods per section  
✓ **Confident** - Large bold typography, strong hierarchy  
✓ **Artistic** - Texture overlays, offset elements, moody backgrounds  
✓ **Warm** - Cohesive cream/sand/rose palette  
✓ **Distinct** - No section feels like a template

✗ **Avoided:**
- Template symmetry
- Flat repetition
- Washed-out colors
- Overly minimal corporate feel
- Beige alternating pattern

---

## 📁 Files Modified

### Core Styles
1. `app/globals.css` - New color system, section-specific utilities, texture overlays
2. `tailwind.config.ts` - Extended palette, updated shadows

### Components
3. `components/hero.tsx` - Cinematic overlay, deep espresso background
4. `components/music-teaser.tsx` - Warm cream, editorial rule, larger scale
5. `components/about-section.tsx` - Soft sand, texture overlay, card offset
6. `components/shows-section.tsx` - Warm cream, bold divider
7. `components/gallery-section.tsx` - Muted plum tint, offset grid items
8. `components/contact-section.tsx` - Dusty rose tint, asymmetric layout
9. `components/section-heading.tsx` - Larger scale (8xl), more breathing room
10. `components/navbar.tsx` - Updated colors, burnt orange accents
11. `components/site-footer.tsx` - Deep espresso background

---

## 🎵 Jazz Record Sleeve Energy

**Achieved Through:**
- Cinematic hero with dramatic overlays
- Bold expressive typography
- Distinct atmospheric sections
- Tactile neobrutalist shadows
- Warm cohesive palette
- Offset editorial layouts
- Confident negative space

**Layout Focal Points:**
Each section has ONE clear visual anchor:
- Hero: Massive title with accent bar
- Music: Album title + player card
- About: Large heading block
- Shows: Bold divider + section heading
- Gallery: Offset grid with lift effect
- Contact: Large heading + newsletter form
- Footer: Checkerboard transition

---

## 🚀 Ready to Deploy

All sections redesigned with:
- Distinct background atmospheres
- Increased visual contrast
- Expressive layout rhythm
- Artist-driven personality
- Modern jazz aesthetic
- No repetitive patterns

**Structure & content preserved** - purely art direction refresh.
