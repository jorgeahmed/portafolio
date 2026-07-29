# Professional CV & Portfolio - Jorge G. Lopez Laveaga

Professional integrated portfolio and CV with a premium "Stitch" design, featuring bilingual support and optimized PDF printing.

## 🚀 Live Demo
[View Live Portfolio](https://jorgeahmed.github.io/portafolio/)

## ✨ Key Features

- **Premium Dashbord Design**: High-end industrial aesthetic inspired by "Stitch" UI.
- **Bilingual Support (EN/ES)**: Instant dynamic swappability between English and Spanish.
- **Optimized PDF Export**: Custom `@media print` styles for clean, professional multi-page document generation.
- **Integrated Content**: Dynamically curated projects combined with professional experience and a custom cover letter.
- **Responsive Layout**: Designed for seamless viewing across mobile, tablet, and desktop devices.
- **AI Chat (Gemini)**: Interactive CV assistant for recruiters (requires a valid Gemini API key).

## 🛠️ Technology Stack

- **Core**: Vanilla HTML5, CSS3, JavaScript.
- **Styling**: Tailwind CSS, Google Fonts (Inter), Material Symbols.
- **Build Tool**: Vite.
- **Deployment**: GitHub Pages.

## 🤖 Chat AI / Gemini API key

The chat calls Google Gemini from the browser. If you see:

`Requests from referer https://jorgeahmed.github.io/ are blocked`

the API key has **HTTP referrer** restrictions that do not allow GitHub Pages.

Fix in [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials):

1. Open the Gemini API key used in `index.html` (`GEMINI_API_KEY`).
2. **Application restrictions** → **HTTP referrers (web sites)**.
3. Add these referrers (include `https://`):
   - `https://jorgeahmed.github.io/*`
   - `http://localhost:*/*` (optional, for local testing)
4. **API restrictions** → allow **Generative Language API** (or leave unrestricted).
5. Save and wait 1–5 minutes, then hard-reload the site.

Alternatively, set Application restrictions to **None**, or use **Configurar API Key** in the chat UI to store another key in `localStorage` (overrides the hardcoded one).

## 📄 How to Use for Recruitment

1. **Visit the Web App**: Navigate to the live link.
2. **Select Language**: Use the **EN / ES** toggle in the header.
3. **Print as PDF**: Click the **"Print PDF"** button and select "Save as PDF" in the browser's print dialog.
4. **Ask the CV**: Use the Chat AI button to query experience, projects, or analyze a job posting.

## 👤 About Jorge Lopez
Senior Infrastructure & Technology Project Manager with 15+ years of experience in AI, IoT, and global telecommunications infrastructure.

---
© 2026 Jorge G. Lopez Laveaga
