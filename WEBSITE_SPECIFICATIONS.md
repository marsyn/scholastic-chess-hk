# Scholastic Chess Hong Kong — Website Specifications

## 1. Project Overview

**Name:** Scholastic Chess Hong Kong  
**URL:** scholastic-chess-hk  
**Founded:** 2012  
**Purpose:** Marketing and recruitment website for a structured chess education provider in Hong Kong, serving two distinct audiences — parents and schools.

**Contact:** WhatsApp +852 6629 5092

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla HTML, CSS, JavaScript (no framework) |
| **Server** | Node.js native `http` module (`server.js`) |
| **Fonts** | Google Fonts — Source Serif 4 (display), Nunito Sans (body) |
| **Animations** | CSS transitions + IntersectionObserver (scroll-triggered fade-in) |
| **Responsive** | CSS Grid, Flexbox, `clamp()` for fluid sizing |
| **Dependencies** | None (zero external packages) |
| **Port** | 3000 (configurable via `PORT` env var) |

---

## 3. Site Architecture

### 3.1 File Structure

```
scholastic-chess-hk/
├── index.html                    # Parent-facing landing page
├── for-schools.html              # School-facing landing page
├── server.js                     # Node.js HTTP server
├── package.json                  # NPM metadata (no dependencies)
├── public/
│   └── index.html                # Copy of main page
├── CONTENT_REVIEW.md             # Parent page content review template
├── SCHOOLS_CONTENT_REVIEW.md     # Schools page content review template
└── school-presentation-brief.md  # 12-slide school presentation brief
```

### 3.2 Routing

| Route | File Served | Audience |
|-------|-------------|----------|
| `/` | `index.html` | Parents of children ages 4+ |
| `/for-schools` | `for-schools.html` | School principals, directors, curriculum coordinators |

- Trailing slashes and query parameters are ignored.
- All unmatched routes fall through to `index.html`.

---

## 4. Design System

### 4.1 Brand Colours

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Brand | `#E96E20` | CTAs, accents, section lines |
| Dark Brand | `#C85A16` | Button hover states |
| Light Brand | `#F5882E` | Secondary highlights |
| Background | `#FAFAF7` | Page background (off-white) |
| Card Background | `#FFFFFF` | Content cards |
| Hero Background | `#FDF8F3` | Hero section (warm cream) |
| Ink Dark | `#1C2127` | Primary text |
| Ink Faint | `#9CA3AF` | Muted/secondary text |

### 4.2 Typography

| Role | Font Family | Weight |
|------|------------|--------|
| Display / Headings | Source Serif 4 (serif) | 600–700 |
| Body / UI | Nunito Sans (sans-serif) | 400–700 |

### 4.3 Layout Tokens

| Token | Value |
|-------|-------|
| Section padding | 80px vertical |
| Content max-width | 860px |
| Scroll behaviour | `smooth` |
| Border radius (cards) | 12px |

### 4.4 Reusable Component Classes

| Class | Purpose |
|-------|---------|
| `.stat-card` | Numbered stats display (4-column grid) |
| `.section-label` | Small-caps uppercase label above headings |
| `.section-line` | Brand-coloured horizontal divider |
| `.pillar` / `.pillar-number` | Three-column pillar cards |
| `.team-card` | Team member profile card with credentials |
| `.level-item` / `.level-badge` | Curriculum level progression with vertical timeline |
| `.lesson-step` / `.step-time` | Lesson structure timeline |
| `.fade-in` | Scroll-triggered fade-in animation |
| `.comparison-table` | 3-column feature comparison table |
| `.hero-cta` | Call-to-action button (orange for parents, green for schools) |
| `.digital-sections` | Three-column layout for digital tools |

---

## 5. Page Specifications

### 5.1 Parent-Facing Page (`index.html`)

**Audience:** Hong Kong parents seeking enrichment for children aged 4+  
**Goal:** Drive trial lesson bookings via WhatsApp  
**Sections:** 13

| # | Section | Key Content |
|---|---------|-------------|
| 1 | **Hero** | Logo, headline "Scholastic Chess Hong Kong", tagline about complete chess education, CTA "Book a Free Trial Lesson" |
| 2 | **About Us** | Founded 2012, professional curriculum by Dr. Pavel Martynov, small classes (4–6 students), structured levels |
| 3 | **Our Team** | Oliver Conran (Principal) and Dr. Pavel Martynov (Head Coach & Curriculum Author) with full credentials |
| 4 | **Teaching Philosophy** | Four pillars: Effort Over Results, Active Attacking Chess, Structured Progression, Hobby to Professional Pathway |
| 5 | **Curriculum Overview** | Four core levels + onboarding stream, professionally designed with appendices |
| 6 | **Levels** | Five stages: Beginner Bootcamp → First Mover (L1) → Tactician (L2) → Strategist (L3) → Master (L4) |
| 7 | **Lesson Structure** | Structured 60-minute format with timeline and callout: "Every lesson — structured, engaging, purpose-driven" |
| 8 | **Why Scholastic Chess HK** | Comparison table — "What Your Child Will Achieve" vs. other options |
| 9 | **Digital Tools & Engagement** | ChessKid platform, homework (puzzle sheets), Merit Points System |
| 10 | **Competitive Pathway** | Casual play → school tournaments → FIDE-rated tournaments → international competitions |
| 11 | **For Parents** | Dashboard features: progress tracking, notifications, analytics |
| 12 | **Beyond Regular Classes** | Tournaments, summer camps, private coaching, workshops |
| 13 | **Get Started / CTA** | "Give Your Child the Gift of Chess", pricing (HK$2,750 for 10 lessons), booking CTA |

### 5.2 Schools-Facing Page (`for-schools.html`)

**Audience:** School principals, directors, curriculum coordinators  
**Goal:** Drive partnership enquiries (observe lesson, schedule conversation, request curriculum)  
**Sections:** 13

| # | Section | Key Content |
|---|---------|-------------|
| 1 | **Hero** | "Teach Children to Think. Chess Does That.", research-grounded approach, partnership since 2012 |
| 2 | **Chess & Learning** | Three pillars: Cognitive Development, Character Building, Measurable Progress |
| 3 | **Who We Are** | Stats: 20+ schools, 250+ students, Head Coach credentials, decade of chess education |
| 4 | **The Programme** | Classes 5–20 students, 1-hour lessons, beginner-friendly, coaches provide all equipment |
| 5 | **Curriculum** | Progression: Bootcamp → First Mover (L1) → Tactician (L2) |
| 6 | **Lesson Structure** | Six-stage format with detailed timeline (2–5 min smooth start through ~5 min closing) |
| 7 | **Teaching Philosophy** | Three pillars: Effort Over Results, Active Attacking Chess, Coach Handbook |
| 8 | **Beyond the Classroom** | ChessKid subscriptions, homework, Merit Points System |
| 9 | **Competitive Experience** | In-class tournaments, semester champions; qualities: Resilience, Sportsmanship, Confidence |
| 10 | **Our Team** | Oliver Conran & Dr. Pavel Martynov with testimonial on evidence-based curriculum |
| 11 | **The Partnership** | Two-column: "What we provide" vs. "What we ask from school" |
| 12 | **Trusted by Schools** | Social proof section |
| 13 | **Get Started / CTA** | Three options: Observe a Lesson, Schedule Conversation, Request Curriculum; WhatsApp link |

---

## 6. Content & Messaging Strategy

### 6.1 Parent Messaging

| Theme | Key Message |
|-------|-------------|
| **Education quality** | Structured, evidence-based curriculum designed by a PhD chess educator |
| **Individual attention** | Small groups of 4–6 students for personalised coaching |
| **Progression** | Clear pathway from first move to FIDE-rated tournaments |
| **Whole-child development** | Cognitive skills + character traits (resilience, focus, sportsmanship) |
| **Transparency** | Parent dashboard with real-time progress tracking |
| **Low-risk entry** | Free trial lesson, then 10-lesson packages |

### 6.2 School Messaging

| Theme | Key Message |
|-------|-------------|
| **Turnkey solution** | Coaches handle everything — equipment, materials, curriculum |
| **Curriculum alignment** | Chess develops critical thinking, focus, and resilience across subjects |
| **Scalability** | Flexible class sizes (5–20 students) fitting ECA or class periods |
| **Professional credentials** | FIDE-qualified coaches with education research background |
| **Zero burden** | No teacher involvement required; school provides time and space only |
| **Established track record** | 20+ school partnerships across Hong Kong since 2012 |

### 6.3 Tone Guidelines

- **Parents:** Warm, reassuring, aspirational — emphasise child development and parental peace of mind
- **Schools:** Professional, evidence-based, consultative — "educational and exploratory, not hard sell"

---

## 7. Team Profiles

### Oliver Conran — Principal

| Credential | Detail |
|-----------|--------|
| FIDE School Instructor | Certified |
| National Arbiter | Certified |
| Chess Promoter | Certified |
| Tournament Director | Active |
| Teaching experience | 10+ years |

### Dr. Pavel Martynov — Head Coach & Curriculum Author

| Credential | Detail |
|-----------|--------|
| PhD | Education (chess pedagogy) |
| FIDE Title | FIDE Master |
| Coaching experience | 10+ years |
| Curriculum | Author of all Scholastic Chess HK curriculum materials |
| Media | YouTube chess educator |

---

## 8. Curriculum Structure

### 8.1 Levels

| Level | Name | Audience |
|-------|------|----------|
| Onboarding | Beginner Bootcamp | Brand-new players (ages 4+) |
| Level 1 | First Mover | Foundations — rules, basic tactics |
| Level 2 | Tactician | Intermediate — tactical patterns, combinations |
| Level 3 | Strategist | Advanced — positional play, planning |
| Level 4 | Master | Competition-ready — deep strategy, tournament prep |

*Note: Schools page covers up to Level 2 (Tactician); parent page covers all four levels plus Bootcamp.*

### 8.2 Lesson Format (60 minutes)

| Phase | Duration | Activity |
|-------|----------|----------|
| Smooth Start | 2–5 min | Settle in, puzzle warm-up |
| Lesson Introduction | 5–10 min | New concept taught |
| Guided Practice | 10–15 min | Coach-led exercises |
| Independent Practice | 15–20 min | Student play / puzzles |
| Review | 5–10 min | Discussion of key moments |
| Closing | ~5 min | Homework, merit points, wrap-up |

---

## 9. Digital Tools & Engagement

| Tool | Purpose |
|------|---------|
| **ChessKid** | Online platform for practice, puzzles, and play |
| **Homework Sheets** | Printed puzzle sheets for off-lesson practice |
| **Merit Points System** | Behavioural and performance rewards to motivate students |
| **Parent Dashboard** | Progress tracking, notifications, analytics (parent page only) |

---

## 10. Competitive Pathway

| Stage | Description |
|-------|-------------|
| Casual play | In-class games during lessons |
| School tournaments | Internal/inter-school events |
| FIDE-rated tournaments | Official rated competitions |
| International competitions | Overseas events for top performers |

---

## 11. Business & Conversion

### 11.1 Pricing (Parent)

- **Trial:** Free first lesson
- **Package:** 10 lessons for HK$2,750

### 11.2 Conversion Points

| Page | Primary CTA | Method |
|------|-------------|--------|
| Parent | "Book a Free Trial Lesson" | WhatsApp |
| Schools | Three options: Observe / Conversation / Request Curriculum | WhatsApp |

### 11.3 Social Links

- Facebook
- LinkedIn

---

## 12. Server Configuration

```javascript
// server.js summary
- Reads index.html and for-schools.html into memory at startup
- Routes /for-schools → for-schools.html
- Routes all other paths → index.html
- Content-Type: text/html; charset=utf-8
- Listens on 0.0.0.0:${PORT || 3000}
```

**Start command:** `npm start` → `node server.js`

---

## 13. Known Issues & Notes

1. **Content contradiction (Schools page):** The page mentions "no score/ranking" philosophy but also includes Merit Points + tournaments — flagged for resolution in `SCHOOLS_CONTENT_REVIEW.md`.
2. **No external dependencies:** The project has zero npm dependencies, making it highly portable.
3. **No build step:** HTML files are served directly with no compilation or bundling.
4. **No image assets in repo:** Images appear to be externally hosted or inlined.
5. **`public/index.html`** appears to be a backup/copy of the main `index.html`.

---

*Generated for Scholastic Chess Hong Kong — April 2026*
