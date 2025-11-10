# Gladiator Games - Astro Website

A modern, competitive gaming platform website built with Astro and Tailwind CSS.

## Features

- **Modern Design**: Based on the WordPress reference site with improved aesthetics
- **Responsive Layout**: Mobile-first design that works on all devices
- **Color Palette**: Custom Tailwind colors matching the brand
  - Black (#000000) - Primary background
  - Red (#cf2e2e) - Primary accent
  - Orange (#ff6900) - Secondary accent
  - Cyan (#0693e3) - Tertiary accent
  - Purple (#9b51e0) - Additional accent
  - Dark Gray (#32373c) - UI elements
  - Gray (#abb8c3) - Text/borders

## Prerequisites

**Important**: This project requires Node.js >= 18.20.8 or >= 20.3.0

Your current version: v18.17.1 (needs upgrade)

### Upgrading Node.js

**Option 1: Using nvm (recommended)**
```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 20
nvm install 20
nvm use 20
```

**Option 2: Using Homebrew (macOS)**
```bash
brew upgrade node
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/             # Static assets
│   └── favicon.svg
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Games.astro
│   │   ├── Events.astro
│   │   ├── Partners.astro
│   │   └── Footer.astro
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Routes
│   │   └── index.astro
│   └── styles/         # Global styles
│       └── global.css
├── astro.config.mjs    # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

## Deployment Options

### 1. Vercel (Recommended)
- Zero configuration deployment
- Automatic HTTPS
- Global CDN
- Free tier available

### 2. Netlify
- Simple git-based deployment
- Built-in CDN
- Free SSL
- Generous free tier

### 3. Cloudflare Pages
- Fast global network
- Unlimited bandwidth
- Free tier
- Excellent performance

### 4. GitHub Pages
- Free hosting
- Works with GitHub repositories
- Custom domain support

See DEPLOYMENT.md for detailed deployment instructions.

## Customization

### Colors
Edit `tailwind.config.mjs` to modify the color palette.

### Content
- Games: Edit `src/components/Games.astro`
- Events: Edit `src/components/Events.astro`
- Partners: Edit `src/components/Partners.astro`
- Hero text: Edit `src/components/Hero.astro`

### Navigation
Modify `src/components/Header.astro` to add/remove menu items.

## License

ISC
