# Nails by Prisca — Website

**Live URL:** https://tafika-itaye.github.io/nailsbyprisca/

---

## Files

| File | Description |
|------|-------------|
| `index.html` | Homepage with hero, services, gallery teaser, booking teaser, contact |
| `shop.html` | Product shop with category filters & WhatsApp CTAs |
| `gallery.html` | Full masonry gallery with lightbox & video support |
| `booking.html` | Calendar + slot booking UI → confirms via WhatsApp |
| `admin.html` | Admin panel to manage available booking slots |
| `style.css` | All styles (Blush Luxe theme) |
| `assets.js` | Asset manifest — all GitHub image/video paths & product data |
| `main.js` | Homepage JS |
| `booking.js` | Calendar & slot booking logic |

---

## Deployment

1. Upload all files to your GitHub Pages repo: `tafika-itaye.github.io/nailsbyprisca/`
2. All images load from `https://tafika-itaye.github.io/nailsbyprisca/assets/` — no changes needed.

---

## Admin: Managing Booking Slots

1. Go to `https://tafika-itaye.github.io/nailsbyprisca/admin.html`
2. Enter PIN (default: **1234** — change it immediately!)
3. Use **"Fill next 7 weekdays"** or **"Fill next 30 days"** to auto-populate standard slots
4. Or add individual dates + times manually
5. Click **💾 Save All Slots** — slots are stored in the browser's localStorage on your device

> ⚠️ localStorage is per-device/browser. Slots you set on your phone will be visible to customers on the same device. For a shared, server-based slot system, a backend (Google Sheets API, Firebase, etc.) would be needed in a future upgrade.

---

## WhatsApp Integration

All CTAs pass pre-filled messages to WhatsApp number: **+265 889 941 700**

- **Ask Price** → product enquiry with item name
- **Book** → appointment request with product name  
- **Booking form** → full booking details (date, time, name, service, notes)

---

## Theme: Blush Luxe

Colours extracted from the Nails by Prisca logo palette:
- Blush pink `#f5c6c6`
- Dusty rose `#e8a8b0`
- Mauve `#c9a0b4`
- Soft purple `#a97ca8`
- Gold `#c9a84c`
- Deep plum `#2a1f2d`

Fonts: Great Vibes (script) + Cormorant Garamond (serif) + Jost (body)

---

## Social

- TikTok: https://www.tiktok.com/@nailsbyprisca
- Instagram: https://www.instagram.com/nails_by_prisca

---

*Built by TechNexus · technexusmw.com*
