# WebBlaze Technologies — Website & Portfolio Source Code

A complete, self-contained local source codebase for the WebBlaze website and portfolio showcase. Built with **React 18**, **TypeScript**, and **Vite**, preserving the design, layout, assets, typography, and interactive components.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: `v18.0.0` or higher (recommended: `v20.x` or `v22.x`)
- **npm**: `v9.0.0` or higher (or pnpm / yarn)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The website will immediately start at `http://localhost:3000` (or the next available port) with instant hot module replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready static bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
webblaze-website/
├── public/
│   └── images/
│       ├── webblaze-logo.png             # Official WebBlaze Logo
│       ├── palluvo/                      # Live Palluvo website screenshots
│       │   ├── screenshot-1.jpg          # Hero: "Every drape, a little magic"
│       │   ├── screenshot-2.jpg          # Section: "Shop the Look"
│       │   ├── screenshot-3.jpg          # Section: "The Festive Edit"
│       │   └── screenshot-4.jpg          # Section: "Shop by Category"
│       └── projects/
│           ├── lasabroso.jpg             # La Sabroso screenshot
│           ├── papilio.jpg               # Papilio screenshot
│           ├── roosterx.jpg              # RoosterX screenshot
│           ├── pharmastore.jpg           # Pharma Store POS screenshot
│           ├── goflytta.jpg              # Goflytta screenshot
│           └── palluvo-original.jpg      # Full original Palluvo capture
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                # Sticky header navbar with logo and menu
│   │   │   └── Footer.tsx                # Full company footer, offices & legal links
│   │   ├── portfolio/
│   │   │   ├── ProjectCard.tsx           # Reusable portfolio card component
│   │   │   ├── PalluvoSlideshow.tsx      # Smooth horizontal hover slideshow
│   │   │   └── PlaceholderPreview.tsx    # "Coming soon" preview placeholder
│   │   └── sections/
│   │       ├── HeroSection.tsx           # "Our Work — Software we've built"
│   │       ├── SelectedWorkSection.tsx   # Client website projects (Lavish, Palluvo, etc.)
│   │       ├── BusinessSystemsSection.tsx# Business software (Open Tele, Pharma, Goflytta)
│   │       ├── ProcessSection.tsx        # "From idea to production" (4 delivery stages)
│   │       ├── ApproachSection.tsx       # "Built with purpose" (4 approach steps)
│   │       └── CtaSection.tsx            # "Let's build something that works"
│   ├── data/
│   │   ├── projects.ts                   # Structured portfolio project data & URLs
│   │   └── navigation.ts                 # Navbar links, footer links, company info
│   ├── pages/
│   │   ├── HomePage.tsx                  # Home page route
│   │   └── WorkPage.tsx                  # Work / Portfolio page route
│   ├── styles/
│   │   └── globals.css                   # Complete design system & tokens
│   ├── types/
│   │   └── project.ts                    # TypeScript definitions
│   ├── App.tsx                           # Main router component
│   └── main.tsx                          # React entry point
├── .env.example                          # Environment variables template
├── .gitignore                            # Standard git ignore rules
├── index.html                            # HTML template with Inter font
├── package.json                          # Scripts & dependencies
├── tsconfig.json                         # TypeScript configuration
├── tsconfig.node.json                    # TypeScript node config
└── vite.config.ts                        # Vite configuration
```

---

## 🎨 Design System & Styling Tokens

All styles are defined in `src/styles/globals.css` using the official WebBlaze color palette and typography:

### Color Palette
- `--ink`: `rgb(10, 10, 10)` (`#0a0a0a`) — Primary text & CTA background
- `--paper`: `rgb(255, 255, 255)` (`#ffffff`) — Page background
- `--muted`: `rgb(83, 93, 109)` (`#535d6d`) — Secondary body & description text
- `--soft-surface`: `rgb(248, 249, 250)` (`#f8f9fa`) — Subtle card/preview background
- `--border`: `rgb(229, 231, 235)` (`#e5e7eb`) — Card, section & button borders

### Typography (Inter)
- **Display Heading**: Inter Black (900), 88px, letter-spacing -4px
- **Section Heading**: Inter ExtraBold (800), 44px, letter-spacing -1.6px
- **Card Title**: Inter Bold (700), 24px, letter-spacing -0.6px
- **Eyebrow**: Inter Bold (700), 12px, letter-spacing 2px, uppercase
- **Body**: Inter Regular (400), 18px, line-height 1.7

---

## 📂 Portfolio Projects & Links

### Client Websites
1. **Lavish**: [https://lavishlooks.srishanth.com/](https://lavishlooks.srishanth.com/)
2. **Palluvo**: [https://palluvo.store](https://palluvo.store)
3. **La Sabroso**: [https://lasabroso.srishanth.com/](https://lasabroso.srishanth.com/)
4. **Papilio**: [https://papilio.srishanth.com](https://papilio.srishanth.com)
5. **RoosterX**: [https://roosterx.srishanth.com/](https://roosterx.srishanth.com/)

### Business Software
1. **Open Tele CRM**: [https://telecrm.srishanth.com/](https://telecrm.srishanth.com/)
2. **Pharma Store POS**: [https://pharmastore-gules.vercel.app/](https://pharmastore-gules.vercel.app/)
3. **Goflytta**: [https://goflytta.srishanth.com/](https://goflytta.srishanth.com/)

*(Note: Bytecode EMS is strictly excluded per project requirements).*

---

## 🖼️ Local Asset Storage

All images are stored in `public/images/`:
- **WebBlaze Logo**: `/images/webblaze-logo.png`
- **Palluvo Screenshots**: `/images/palluvo/screenshot-1.jpg` through `screenshot-4.jpg`
- **Portfolio Images**: `/images/projects/*.jpg`

No builder-specific or external runtime dependencies are required. The site runs completely offline once dependencies are installed.

---

## 🛠️ Continuing Development in VS Code

To continue working on custom hover slideshow interactions for other projects:
1. Open the `webblaze-website/` directory in VS Code.
2. Edit or create preview components in `src/components/portfolio/`.
3. Reference `PalluvoSlideshow.tsx` as a template for adding horizontal slide transitions to any project card.
4. Update `src/data/projects.ts` to switch a project's `previewType` to `'slideshow'` and specify its image paths.
