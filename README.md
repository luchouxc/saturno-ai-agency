# 🪐 Saturno Creativo — Agency Website

> One-page agency website for [saturnocreativo.com](https://www.saturnocreativo.com)
> **JAMstack** · **Cloudflare Pages ready** · Zero build step

---

## Stack

| Layer | Tech |
|-------|------|
| HTML  | Semantic HTML5, single `index.html` |
| CSS   | Vanilla CSS with custom properties (`css/main.css`) |
| JS    | Vanilla ES6+ (`js/main.js`) |
| Fonts | Google Fonts (Barlow Condensed, Barlow, IBM Plex Mono) |
| Host  | Cloudflare Pages (static, CDN-distributed) |

No build step. No frameworks. No dependencies to install. Just push and deploy.

---

## Deploy to Cloudflare Pages

1. **Push this repo to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Saturno Creativo site"
   git remote add origin https://github.com/YOUR_USERNAME/saturno-creativo.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project**
   - Connect your GitHub account and select this repo
   - Framework preset: **None** (static HTML)
   - Build command: *(leave empty)*
   - Build output directory: `/` (root)
   - Click **Save and Deploy**

3. **Custom Domain**
   - In Cloudflare Pages → your project → **Custom domains**
   - Add `saturnocreativo.com` and `www.saturnocreativo.com`
   - Cloudflare will auto-provision SSL

---

## Project Structure

```
saturno-creativo/
├── index.html              ← Main page (single source of truth)
├── css/
│   └── main.css            ← All styles, brand tokens, responsive
├── js/
│   └── main.js             ← Cursor, scroll reveal, nav behavior
├── assets/
│   └── images/
│       ├── logo-color.png  ← Nova Violeta logo (dark backgrounds)
│       ├── logo-dark.png   ← All-dark logo variant
│       └── logo-white.png  ← White/monochrome logo
├── _redirects              ← Cloudflare Pages redirect rules
└── README.md
```

---

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Nova Violeta | `#673BC9` | Primary — borders, accents, CTAs |
| Rubí Titan | `#FF4269` | Secondary — hot accents, CTA buttons |
| Púrpura Dione | `#26086B` | CTA section background |
| Gris Líquido | `#232323` | Footer background |

---

## Customization

### Update booking link
In `index.html`, find and replace:
```
https://calendly.com/saturnocreativo
```
with your actual Calendly / Cal.com URL.

### Update email
Replace `hola@saturnocreativo.com` with your actual address.

### Add Open Graph image
Drop a `1200×630` PNG at `assets/images/og-image.png` for social sharing previews.

---

## Performance Notes

- No JavaScript framework — instant parse
- CSS custom properties for zero-overhead theming
- Google Fonts loaded with `display=swap` for fast LCP
- All animations use `transform` and `opacity` only (GPU-composited)
- IntersectionObserver for scroll reveals — no scroll event listeners
- Cloudflare CDN handles edge caching and HTTP/2 push

---

*Saturno Creativo · San Salvador, El Salvador · Remote Worldwide · Est. 2018*
