# FreeStack OS

> A brutalist-cyberpunk personal entertainment dashboard. 40+ free, legal sources across 5 categories. No subscriptions. No tracking. No BS.

![Version](https://img.shields.io/badge/version-1.0.0-FF4D4D?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-34D399?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-0-A78BFA?style=flat-square)
![Sources](https://img.shields.io/badge/sources-40%2B-38BDF8?style=flat-square)

---

## What It Is

FreeStack OS is a single-page dashboard that organizes the best free and legal entertainment sources on the internet into one place. Think of it as your personal entertainment OS — movies, music, podcasts, games, and education, all bookmark-ready and filterable.

Built with zero frameworks. Pure HTML, CSS, and JavaScript. Opens in any browser, works offline after first load, and respects your privacy completely — no analytics, no cookies, no external requests except the Google Fonts import.

---

## File Structure

```
freestack-os/
├── index.html          # Semantic HTML structure
├── css/
│   ├── main.css        # Theme variables, resets, base styles
│   ├── layout.css      # Navbar, hero, sidebar, grid, footer
│   ├── components.css  # Cards, badges, buttons, toasts, modals
│   └── animations.css  # All @keyframes and transitions
├── js/
│   ├── data.js         # All 40+ source objects (the database)
│   ├── ui.js           # DOM rendering, clock, noise canvas, accent color
│   ├── search.js       # Real-time search and filter logic
│   ├── bookmarks.js    # Save/remove/export via localStorage
│   └── app.js          # Entry point, init order, event listeners
└── assets/
    └── noise.js        # Canvas-based animated film grain overlay
```

---

## Getting Started

No build step. No `npm install`. Just open it.

```bash
git clone https://github.com/yourusername/freestack-os.git
cd freestack-os
open index.html
```

Or serve it locally if you want proper module resolution:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then go to `http://localhost:8080`.

---

## Features

### Core
- **5 categories** — Movies & TV, Music & Radio, Podcasts & Audiobooks, Games, Docs & Education
- **40+ curated sources** — every one verified free and legal
- **Access type badges** — `[FREE TIER]` `[AD-SUPPORTED]` `[LIBRARY CARD]` `[PUBLIC DOMAIN]`
- **Bookmark search terms** — pre-written search queries you can copy and use directly

### UI & Interactivity
- Real-time search — filters cards by name and description as you type
- Copy bookmark term to clipboard — button state changes for 2s, toast fires
- Save sources to a personal list — persists across sessions via `localStorage`
- Export saved bookmarks as `.txt` — one click, downloads instantly
- Stats bar — animated count-up on load (`40 sources · 5 categories · 0 subscriptions`)
- Live clock — `HH:MM:SS` in navbar, colon blinks every second

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `1` – `5` | Switch between categories |
| `/` | Focus search bar |
| `Esc` | Clear search or close drawer |
| `?` | Toggle keyboard shortcut modal |

### Visual Design
- Dark brutalist-cyberpunk aesthetic — `#050508` background
- Per-category neon accent color system via CSS `--accent` variable
- Animated scanline loop overlay
- Canvas-based film grain texture (`assets/noise.js`)
- Glass-morphism cards with hover lift, shimmer sweep, and accent glow
- Staggered page load reveal — navbar → hero → sidebar → cards cascade in
- Fully responsive — sidebar collapses to horizontal tabs on mobile

---

## Categories & Sources

### 🎬 Movies & TV
| Source | Access | Best For |
|--------|--------|----------|
| Tubi | Free, ad-supported | Hollywood films, TV series, anime, Bollywood |
| Pluto TV | Free, ad-supported | Live TV channels + VOD, news, reality |
| Plex | Free tier | Thousands of movies, shows, Plex originals |
| Kanopy | Library card | Criterion Collection, indie, art-house |
| Internet Archive | Public domain | Silent era, classics, cult films |
| Crackle | Free, ad-supported | Sony-backed Hollywood films, originals |
| Peacock | Free tier | NBC classics, WWE, select originals |
| Popcornflix | Free, ad-supported | Action, comedy, horror, international |
| YouTube Free Movies | Free, ad-supported | Genre films licensed by Google |

### 🎵 Music & Radio
| Source | Access | Best For |
|--------|--------|----------|
| Spotify | Free tier | Full catalog, shuffle, daily mixes |
| SomaFM | Free, donation | Ad-free curated internet radio, 30+ channels |
| Radio Garden | Free | Live radio from every country on a globe |
| BBC Sounds | Free | BBC Radio 1/2/3/6, live + on-demand |
| Free Music Archive | Public domain | Creative Commons downloads, all genres |
| Bandcamp | Free streaming | Indie, metal, experimental — stream before buying |
| YouTube Music | Free tier | Deep catalog, live recordings, auto radio |
| Mixcloud | Free tier | DJ mixes, radio shows, long-form sets |
| Internet Archive Audio | Public domain | Historical recordings, live concerts |

### 🎙️ Podcasts & Audiobooks
| Source | Access | Best For |
|--------|--------|----------|
| LibriVox | Public domain | Volunteer-read classics, no DRM |
| Hoopla | Library card | Current audiobooks, zero waitlist |
| Pocket Casts | Free tier | Cross-platform podcast player |
| Spotify Podcasts | Free tier | Largest podcast catalog |
| Project Gutenberg | Public domain | 70k+ ebooks, pair with TTS |
| Loyal Books | Public domain | Better-browsing alternative to LibriVox |
| Open Culture | Free | Curated free audiobooks from universities |
| Podbean | Free tier | Podcast hosting + discovery |

### 🎮 Games & Interactive
| Source | Access | Best For |
|--------|--------|----------|
| itch.io | Free games filter | Indie, horror, visual novels, game jams |
| Epic Games | Weekly free | AAA game giveaways, keep forever |
| Steam | Free to play | Dota 2, TF2, Warframe, Path of Exile |
| Internet Archive DOS | Public domain | 7000+ DOS classics in browser |
| Poki | Free | High-quality browser games |
| Newgrounds | Free | Flash-era classics, indie, browser games |
| GOG | Free filter | DRM-free free games |
| CrazyGames | Free | HTML5 browser games, updated frequently |
| Flashpoint Archive | Public domain | 100k+ preserved Flash/HTML games |

### 🧠 Docs & Education
| Source | Access | Best For |
|--------|--------|----------|
| NASA+ | Free, no ads | Space docs, live launches, mission coverage |
| Khan Academy | Free, no ads | Math, science, CS, economics |
| MIT OpenCourseWare | Free | Full MIT course materials |
| Coursera | Audit mode | Google certs, ML, data science — free to audit |
| Documentary Heaven | Free | Curated index linking to free streams |
| Top Documentary Films | Free | Rated docs — science, crime, politics |
| Smithsonian Channel | Free | History, space, science full episodes |
| CuriosityStream | Free tier | Science and nature documentaries |
| YouTube Docs | Free, ad-supported | Nature, history, true crime, tech |

---

## Customization

### Adding a source
Open `js/data.js` and add an object to the relevant category's `sources` array:

```js
{
  name: "Source Name",
  url: "https://example.com",
  best: "What it's best for — 1 to 2 lines",
  bookmark: "search term to save as bookmark",
  tag: "FREE TIER" // or: AD-SUPPORTED | LIBRARY CARD | PUBLIC DOMAIN
}
```

### Changing the accent color for a category
In `js/data.js`, update the `color` field on the category object:

```js
{
  id: "movies",
  label: "Movies & TV",
  icon: "🎬",
  color: "#FF4D4D",  // change this
  ...
}
```

### Disabling the noise grain
In `index.html`, remove the `<canvas id="noise-canvas">` element, or in `assets/noise.js` set opacity to `0`.

### Disabling the scanline
In `css/animations.css`, comment out the `.scanline` rule and its `@keyframes scanline` block.

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| IE 11 | ❌ Not supported |

Requires: CSS custom properties, `navigator.clipboard`, `localStorage`, `backdrop-filter`, Canvas API.

---

## Legal Notes

Every source listed is either:
- **Free tier** — ad-supported or freemium with a usable free plan
- **Public domain** — content is out of copyright
- **Library card required** — free with any public library card (Kanopy, Hoopla)
- **Audit mode** — free access to course content without certification (Coursera)

This project does not host, stream, or redistribute any content. It is a directory of links to third-party platforms. All content rights belong to their respective owners and platforms.

---

## Contributing

1. Fork the repo
2. Add sources to `js/data.js` — verify they are free and legal before submitting
3. Open a PR with a short description of what you added and why

Do not add sources that require a paid subscription, have region-locked content as their primary offering, or are of questionable legal status.

---

## License

MIT — do whatever you want with it. Attribution appreciated but not required.

---

*FreeStack OS · Built for free entertainment · No tracking · No cookies · No subscriptions*
