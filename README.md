# ByteSpace — Online Learning & Skill Development Platform

> **🌐 Live Deployment:** [https://byte-space-plum.vercel.app/](https://byte-space-plum.vercel.app/)  
> **🎨 Figma Design:** [Landing Page Specification](https://www.figma.com/design/89EAukhyduuVV8GY7ouCU3/Landing-Page?node-id=0-1&p=f&t=iEq6YelIqTTpc52n-0)

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20with-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://byte-space-plum.vercel.app/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 📌 Project Overview

**ByteSpace** is a modern, high-performance web platform designed to empower individuals through knowledge, hands-on skill building, and creator monetization. 

This project is a **1:1 pixel-accurate implementation** of the official Figma design specification, built with React, Vite, and Tailwind CSS. It features a complete, fully responsive landing page as well as dedicated authentication portals (**Login** and **Signup**) matching the design layout, typography, 3D elements, and asset alignments.

---

## ✨ Features

### 1. Header & Navigation Bar
- Responsive sticky navbar with brand logo (`b` ByteSpace).
- Quick navigation links (`Home`, `Courses`, `Creators`).
- Authentication action buttons: **Sign In** and **Join Us** (linked to dedicated pages).
- Shopping cart badge and mobile hamburger drawer menu for full mobile responsiveness.

### 2. Hero Section
- Dynamic electric blue grid background (`#1355FF`) with neon lime (`#CCFF00`) circular backdrop.
- High-definition cutout of student learning with laptop (`boy.png`).
- 3D vector accents: lime squiggles, white torus rings, and pyramids.
- Floating interactive badges:
  - **UI/UX Design** (200 Courses • 1000+ Students)
  - **Learning Progress 55%** with animated progress bar
  - **Happy Students 4.5 ★** with active student avatar stack
- Integrated course search bar.

### 3. Partner Logos Showcase
- High-visibility monochrome `Logoipsum` partner brand strip.

### 4. Featured Courses Grid ("Discover Your Passion, Build Your Skills")
- Interactive category filter pills (`Featured`, `Music`, `Drawing & Painting`, `Marketing`, `Animation`, `UI/UX Design`, etc.).
- 6 complete course cards using the exact Figma design thumbnails:
  1. **Learn Figma from Basic** (`card1.png`)
  2. **Build Digital Asset** (`card2.png`)
  3. **the Power of Big Data** (`card3.png`)
  4. **Balancing Productivity** (`card4.png`)
  5. **Mastering Money Management** (`card5.png`)
  6. **From Idea to Startup Success** (`card6.png`)
- Each card displays lesson count, duration, comment count, author attribution (`purepearl studio`), difficulty level, star rating, student avatar stack, and pricing (`$25/lifetime`).

### 5. Diverse Learning Paths
- 6 curated learning path categories (`Design`, `Development`, `IT & Software`, `Business`, `Marketing`, `Photography`).
- Styled with neon lime squircle icon containers with hover scaling micro-animations.

### 6. Dual Value Propositions
- **Student Growth Showcase ("Your Path to Professional Growth Starts Here!"):**
  - Key statistics: `12K` Students, `70+` Courses, `16` Creators.
  - Multi-layered graphic with background course card (`card1.png`), transparent student cutout (`boy.png`), and floating `55% Learning Progress` card.
- **Creator Management Showcase ("Create & Manage Courses Easily."):**
  - Key creator benefits list with blue checkmarks.
  - Multi-layered graphic with creator cutout (`girl.png`), floating `Total Revenue $120.29` card, `Year to Date $1,200.38` (+125 badge), and `Happy Students` card.

### 7. Creator Call to Action Banner
- Full-width CTA with 3D geometric vectors (torus, cylinder, cones, squiggles).
- Direct call-to-action button: **Join as Creator**.

### 8. Community Testimonials ("Discover What Our Community Is Saying")
- Two-column header layout.
- 3 community review cards arranged vertically matching the Figma specification:
  - **Sarah M.** (Enthusiastic Learner) with exact avatar `people1.png`
  - **James L.** (Lifelong Learner) with exact avatar `people2.png`
  - **Alex B.** (Inspired Creator) with exact avatar `people3.png`

### 9. Footer
- Newsletter subscription form with input validation.
- Comprehensive 3-column directory navigation (Courses, Categories, Creator Hub, Legal, Company Info).
- Copyright notice and legal policy links.

---

## 🔐 Authentication Pages (Bonus Credit)

Both auth pages replicate the exact 2-column layout from the Figma specification:

### 🔑 Login Page (`/login`)
- **Left Column:** Headline *"Sign in with ease"*, description, and a 3D collage consisting of `card2.png`, `card3.png`, lime `Happy Students` card, and 3D geometric shapes (torus, pyramid, white coiled ribbon).
- **Right Column:** Crisp white card container with *"Welcome Back"*, email & password inputs, right-aligned lime pill button, social logins (Facebook, Google), and a direct link to create an account.

### 📝 Signup / Register Page (`/signup`)
- **Left Column:** Headline *"Sign up and come in"*, description, and matching 3D visual collage.
- **Right Column:** *"Welcome to ByteSpace"* card with Full Name, Email, Password fields, right-aligned lime pill button (*"Continue"*), and a link to toggle back to login.

---

## 🛠️ Tech Stack & Architecture

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI library |
| **Vite 6** | Ultra-fast development server & bundler |
| **Tailwind CSS 3** | Utility-first CSS framework for custom palettes and responsive layouts |
| **Lucide React** | Modern, lightweight icon system |
| **Vercel** | CI/CD cloud hosting and deployment |

---

## 📂 Project Structure

```text
ByteSpace - Doin_tech/
├── README.md                 # Project documentation & live links
└── Frontend/
    ├── public/               # Public static assets
    ├── src/
    │   ├── assets/           # High-resolution cutouts, cards & avatars
    │   │   ├── boy.png       # Transparent hero/growth student cutout
    │   │   ├── girl.png      # Transparent creator cutout
    │   │   ├── card1.png     # Course 1: Learn Figma from Basic
    │   │   ├── card2.png     # Course 2: Build Digital Asset
    │   │   ├── card3.png     # Course 3: the Power of Big Data
    │   │   ├── card4.png     # Course 4: Balancing Productivity
    │   │   ├── card5.png     # Course 5: Mastering Money Management
    │   │   ├── card6.png     # Course 6: From Idea to Startup Success
    │   │   ├── people1.png   # Sarah M. testimonial avatar
    │   │   ├── people2.png   # James L. testimonial avatar
    │   │   └── people3.png   # Alex B. testimonial avatar
    │   ├── components/       # Modular UI components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── PartnerLogos.jsx
    │   │   ├── FeaturedCourses.jsx
    │   │   ├── LearningPaths.jsx
    │   │   ├── ValueProposition.jsx
    │   │   ├── CreatorCTA.jsx
    │   │   ├── Testimonials.jsx
    │   │   └── Footer.jsx
    │   ├── pages/            # Full-page auth views
    │   │   ├── Login.jsx
    │   │   └── Signup.jsx
    │   ├── data/
    │   │   └── mockData.js   # Courses, categories, and testimonials data
    │   ├── App.jsx           # Root layout & client-side route manager
    │   ├── index.css         # Global design tokens, gradients & grid styles
    │   └── main.jsx          # React DOM entry point
    ├── index.html            # HTML shell with viewport & typography
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prottoy123/ByteSpace---Doin-Tech-.git
   cd ByteSpace---Doin-Tech-/Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌿 Git & Branching Strategy

This project adheres strictly to standard Git workflows:
- All features developed on dedicated feature branch: `feat/landing-page`
- Pull Request created against `main` for review and merging
- Production builds automated via Vercel GitHub integration

---

## 📄 License

This project is created for evaluation and development purposes. All rights reserved &copy; 2026 ByteSpace.
