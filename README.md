# QuantumSynk — Full Website

A professional B2B technology company website built with React, TypeScript, Tailwind CSS, and React Router.

## 🎨 Features

- **14 Pages Total** — Complete site with landing + 13 inner pages
- **Dark/Light Mode Toggle** — Theme switcher in navbar (default: dark)
- **Full TypeScript** — Type-safe throughout
- **React Router** — Clean routing with scroll-to-top
- **Tailwind CSS** — Modern, responsive styling
- **Custom Animations** — Scroll-triggered reveals, hover effects
- **Mobile Responsive** — Fully optimized for all devices

---

## 📁 Page Structure

| Route | Page |
|-------|------|
| `/` | Landing page (Hero + all sections) |
| `/software` | Software Engineering service |
| `/data` | Data Engineering & Pipelines |
| `/bi` | Business Intelligence & Analytics |
| `/ai` | AI & ML Integration |
| `/api` | API Design & Integrations |
| `/cloud` | Cloud Architecture & DevOps |
| `/about` | About Us (Team, Values, Timeline) |
| `/process` | Our Process (6 phases) |
| `/case-studies` | Case Studies (6 projects) |
| `/careers` | Careers (6 open roles) |
| `/blog` | Blog (6 articles with filters) |
| `/contact` | Contact form + offices |
| `*` | 404 page |

---

## 🚀 Quick Start

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

The site will be available at `http://localhost:5173`

---

## 🌓 Theme Toggle

- **Default**: Dark mode
- **Toggle**: Click sun/moon icon in navbar
- **Persistence**: Theme choice saved to localStorage
- **CSS Variables**: All colors managed via CSS custom properties

---

## 🏗️ Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **React Router** — Routing
- **CSS Variables** — Theme management

---

## 📂 Project Structure

```
src/
├── components/
│   ├── shared.tsx          # Navbar, Footer, shared components
│   ├── Cursor.tsx          # Custom cursor
│   ├── Hero.tsx            # Landing hero section
│   ├── Services.tsx        # Services section
│   ├── Process.tsx         # Process section
│   ├── Industries.tsx      # Industries section
│   ├── WhyQS.tsx           # Why QuantumSynk section
│   ├── About.tsx           # About section
│   ├── CTA.tsx             # Call-to-action section
│   └── StatsTicker.tsx     # Auto-scrolling stats
├── context/
│   └── ThemeContext.tsx    # Theme management
├── pages/
│   ├── ServicePages.tsx    # All 6 service pages
│   ├── AboutPage.tsx       # About page
│   ├── ContactPage.tsx     # Contact page
│   └── CompanyPages.tsx    # Process, Case Studies, Careers, Blog
├── App.tsx                 # Root component with routes
├── main.tsx                # Entry point
└── index.css               # Global styles + theme vars
```

---

## 🎨 Color Scheme

### Brand Colors
- **Primary Green**: `#89C441`
- **Green Dim**: `#6fa332`

### Dark Mode (Default)
- Background: `#000000`
- Foreground: `#ffffff`
- Muted text: `rgba(255,255,255,0.50)`

### Light Mode
- Background: `#ffffff`
- Foreground: `#0a0a0a`
- Muted text: `rgba(0,0,0,0.60)`

---

## 📝 Fonts

- **Outfit** — Headings, body text (300–900 weights)
- **JetBrains Mono** — Code, labels, badges

---

## 🔧 Customization

### Changing Theme Colors

Edit `/src/index.css`:

```css
[data-theme='dark'] {
  --background: #000000;
  --foreground: #ffffff;
  /* ... */
}

[data-theme='light'] {
  --background: #ffffff;
  --foreground: #0a0a0a;
  /* ... */
}
```

### Adding New Pages

1. Create page component in `/src/pages/`
2. Add route in `/src/App.tsx`
3. Add nav link in `/src/components/shared.tsx` (NAV_SERVICES or NAV_COMPANY)

---

## 🌐 Company Info

- **Company**: QuantumSynk
- **Tagline**: Engineering Intelligence for Business
- **CEO**: Lawson Oladele Valentino
- **Contact**: hello@quantumsynk.com
- **Colors**: #89C441 (green), #000000 (black)

---

## 📄 License

Built for QuantumSynk. All rights reserved © 2025.

---

## 🛠️ Development Notes

- **Theme persistence**: Uses localStorage (`quantumsynk-theme`)
- **Scroll behavior**: Auto-scroll to top on route change
- **Mobile**: Hamburger menu, theme toggle included
- **Animations**: CSS-only (no JS animation libraries)
- **Accessibility**: ARIA labels, semantic HTML

---

Built with precision. Delivered with purpose.
