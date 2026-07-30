# Professional CV & Portfolio - Jorge G. Lopez Laveaga

Professional integrated portfolio and CV with a premium "Stitch" design, featuring bilingual support and optimized PDF printing.

## 🚀 Live Demo
[View Live Portfolio](https://jorgeahmed.github.io/portafolio/)

## ✨ Key Features

- **Premium Dashbord Design**: High-end industrial aesthetic inspired by "Stitch" UI.
- **Bilingual Support (EN/ES)**: Instant dynamic swappability between English and Spanish.
- **Optimized PDF Export**: ATS-friendly print layout (single-column, labeled contact fields) for recruiter bots and applicant tracking systems.
- **Integrated Content**: Dynamically curated projects combined with professional experience and a custom cover letter.
- **Responsive Layout**: Designed for seamless viewing across mobile, tablet, and desktop devices.
- **AI Chat (OpenRouter)**: Interactive CV assistant for recruiters via OpenRouter (`google/gemini-2.5-flash`).

## 🛠️ Technology Stack

- **Core**: Vanilla HTML5, CSS3, JavaScript.
- **Styling**: Tailwind CSS, Google Fonts (Inter), Material Symbols.
- **Build Tool**: Vite.
- **Deployment**: GitHub Pages.
- **Chat API**: [OpenRouter](https://openrouter.ai) (`/api/v1/chat/completions`).

## 🤖 Chat AI / OpenRouter

The chat calls OpenRouter from the browser with the key in `OPENROUTER_API_KEY` (`index.html`).

- Endpoint: `https://openrouter.ai/api/v1/chat/completions`
- Default model: `google/gemini-2.5-flash`
- Optional override: **Configurar API Key** stores `openrouter_api_key` in `localStorage` (takes priority).

Create or rotate keys at [openrouter.ai/keys](https://openrouter.ai/keys). Keep credits topped up if the chat returns 402/insufficient credits.

> Note: a client-side key is visible in the page source. Prefer a key with spend limits, or a backend proxy for production hardening.

## 📄 How to Use for Recruitment

1. **Visit the Web App**: Navigate to the live link.
2. **Select Language**: Use the **EN / ES** toggle in the header.
3. **Print ATS PDF**: Click **"Imprimir ATS"** / **"Print ATS"** and choose "Save as PDF". The print view is single-column with labeled Phone/Email/Location fields for recruiter bots.
4. **Ask the CV**: Use the Chat AI button to query experience, projects, or analyze a job posting.

## 👤 About Jorge Lopez
Senior Infrastructure & Technology Project Manager with 15+ years of experience in AI, IoT, and global telecommunications infrastructure.

---
© 2026 Jorge G. Lopez Laveaga
