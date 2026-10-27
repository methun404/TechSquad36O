# TechSquad360 🚀

[![Vue 3](https://img.shields.io/badge/Vue-3.4.29-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**TechSquad360** is a modern, high-performance web platform built for a full-suite digital solutions and technology consulting agency. It delivers comprehensive solutions across software engineering, digital strategy, cloud infrastructure, and cybersecurity.

---

## 🌟 Key Features

- **⚡ Fast & Modern Core**: Built on **Vue 3** and powered by **Vite** for instantaneous hot module replacement (HMR) and optimized rollup production bundles.
- **🎨 Curated Brand Design System**: Styled with **Tailwind CSS**, featuring dark slate/teal gradients, smooth card elevations, and custom responsive layouts.
- **✨ Rich Visual Animations**: Integrated with **GSAP** and **Lottie-web** animations for engaging, interactive storytelling across all services.
- **🧭 Dynamic Routing & Transitions**: Configured with **Vue Router 4** featuring lazy-loaded views, dynamic document titles, smooth route transitions, and automatic scroll-to-top behavior.
- **📦 Global State Management**: Managed with **Vuex 4** for synchronized route-level loading overlays and persistent UI state.
- **📅 Interactive Strategy Booking**: Built-in strategy session calendar interface with dynamic date-picker, time-slot selection, and timezone detection.
- **🔍 SEO & Social Ready**: Enhanced `index.html` with Open Graph protocols, Twitter Card tags, structured headings, and semantic HTML5.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Vue 3](https://vuejs.org/) (Composition & Options API) |
| **Bundler & Tooling** | [Vite 5](https://vitejs.dev/), PostCSS, Autoprefixer |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/), Font Awesome 6 |
| **Routing** | [Vue Router 4](https://router.vuejs.org/) |
| **State Management** | [Vuex 4](https://vuex.vuejs.org/) |
| **Animations** | [GSAP](https://greensock.com/gsap/), [Lottie Web](https://airbnb.io/lottie/) |
| **Cloud & Backend** | [Firebase](https://firebase.google.com/) (Modular SDK v10) |

---

## 💼 Services Provided by TechSquad360

1. **SEO Optimization**: Keyword research, technical audits, on-page architecture, and backlink strategies.
2. **Digital Marketing**: Targeted campaigns, social media management, email funnels, and PPC advertising.
3. **Web to App Conversion**: Seamless cross-platform transition from web portals to high-performance mobile apps.
4. **Custom Web Development**: Responsive, fast-loading, user-centric web applications and portals.
5. **Native & Cross-Platform Apps**: Android and multi-platform solutions built for scale and fluid UX.
6. **Cybersecurity**: Threat protection, vulnerability assessments, security audits, and data governance.
7. **Technical / IT Support**: 24/7 monitoring, maintenance, hardware/software troubleshooting, and network solutions.
8. **SaaS Product Engineering**: Custom subscription models, multi-tenant architectures, and scalable APIs.
9. **Cloud Computing**: Elastic infrastructure, cloud migration, and secure data storage on AWS and Firebase.

---

## 📁 Project Structure

```text
techsquad360/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Brand logos, Lottie animation JSONs, and base Tailwind CSS
│   │   └── lotti_animation/ # Service-specific Lottie animation definitions
│   ├── components/         # Reusable UI components
│   │   ├── AboutUs.vue
│   │   ├── AchievementsSection.vue
│   │   ├── BlogResourcesSection.vue
│   │   ├── Footer.vue
│   │   ├── FreeStrategySession.vue
│   │   ├── HeroSection.vue
│   │   ├── LoadingSpinner.vue
│   │   ├── LottieAnimation.vue
│   │   ├── Navbar.vue
│   │   ├── OurProcess.vue
│   │   ├── SeoToolsSection.vue
│   │   ├── ServiceCard.vue
│   │   ├── ServicesSection.vue
│   │   └── WorkDoneSection.vue
│   ├── router/             # Vue Router configuration & route navigation guards
│   ├── views/              # Page views (Home, Services, About, Contact, 404)
│   ├── App.vue             # Root application component
│   ├── firebase.js         # Firebase modular configuration & analytics setup
│   ├── main.js             # Application entry point
│   └── store.js            # Global Vuex state store
├── .env.example            # Environment variables template
├── index.html              # HTML5 entry with comprehensive SEO metadata
├── tailwind.config.js      # Tailwind design tokens and theme extensions
├── vite.config.js          # Vite build optimizations, chunking, and path aliases
└── package.json            # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher recommended
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:methun404/TechSquad36O.git
   cd TechSquad36O
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and adjust credentials if needed:
   ```bash
   cp .env.example .env
   ```

### Development

Run the local development server with Hot Module Replacement:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build

Compile and minify all assets for production:
```bash
npm run build
```
The output will be placed in the `dist/` directory, optimized with vendor chunking.

### Preview Production Build

Preview the production bundle locally:
```bash
npm run preview
```

---

## 👥 Leadership Team

- **Md Mithun Ahmed** — *Co-Founder & Lead Technologist*
- **Md Shohanur Islam** — *Co-Founder & Head of Innovation and Security*
- **Himel Ahmed** — *Co-Founder & Director of Growth and Client Success*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
