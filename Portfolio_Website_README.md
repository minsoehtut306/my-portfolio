# Portfolio Website – Min Soe Htut  

A modern personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, showcasing my professional journey, technical projects, and software development skills.  
This website acts as both a **digital résumé** and a **project showcase**, featuring animations, responsive design, and theme consistency.

---

## Overview  

This website was designed to present my **academic and professional experience**, along with highlights of my featured projects.  
It demonstrates hands-on expertise in **React, Next.js, Tailwind CSS**, and component-based UI development.

### Key Sections  
- **Home** – Hero introduction with my photo, about text, and quick navigation links.  
- **Journey** – Interactive timeline combining academic and work experience with dynamic highlights.  
- **Projects** – Grid layout featuring major projects with repository links.  
- **Skills** – Organized by technology stack with interactive icons and hover effects.  
- **Contact** – Clickable icons linking to email, LinkedIn, and GitHub.  

---

## Features  

- **Dark-themed design** with orange and sky-blue accent highlights.  
- **Fully responsive layout** across all devices.  
- **Animated interactions** with smooth hover and shadow transitions.  
- **Component-driven architecture** for scalability and maintainability.  
- **Icon integration** using Devicon and Iconify libraries.  
- **Optimized deployment** via Vercel with build-time rendering.  

---

## Tech Stack  

| Category | Tools & Frameworks |
|-----------|--------------------|
| **Frontend** | Next.js 15, React, TypeScript, Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons & UI** | Lucide React, Devicon, Iconify |
| **Deployment** | Vercel |
| **Version Control** | Git / GitHub |
| **Design Tools** | Figma, Canva |

---

## Project Structure  

```
portfolio/
├─ app/
│  ├─ layout.tsx          # Global layout and metadata
│  ├─ page.tsx            # Main homepage content
│  ├─ globals.css         # Tailwind and custom global styles
├─ components/
│  ├─ Navbar.tsx          # Navigation bar with sticky scroll effect
│  ├─ ProjectCard.tsx     # Reusable project card component
│  ├─ SkillIcons.tsx      # Icon grid for technical skills
│  ├─ TimelineItem.tsx    # Timeline cards for journey section
├─ public/
│  ├─ profile-body.png    # Profile image asset
│  ├─ MinSoeHtut_CV.pdf   # Resume for download button
├─ package.json
└─ README.md
```

---

## Setup & Run Locally  

### 1. Clone the Repository  
```bash
git clone https://github.com/minsoehtut306/Portfolio-Website.git
cd Portfolio-Website
```

### 2. Install Dependencies  
```bash
npm install
```

### 3. Run the Development Server  
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment  

This portfolio is optimized for deployment via **Vercel**.  

To deploy:  
1. Push your repository to **GitHub**.  
2. Go to [Vercel](https://vercel.com).  
3. Import your GitHub repository.  
4. Click **Deploy** — your site will be live in seconds.  

---

## Design Choices  

- **Primary Colors**  
  - Orange (`#fbbf24`) – Warm highlights and buttons  
  - Sky Blue (`#38bdf8`) – Accent for technical sections  
  - Neutral Gray (`#171717` / `#262626`) – Background and contrast  

- **Typography**  
  - **Poppins** (Google Font): consistent across all headings and text  
  - Weighted hierarchy for readability and visual balance  

- **Layout**  
  - Grid & Flexbox system for flexible scaling  
  - Rounded corners and drop shadows for depth  
  - Accent gradients for section dividers  

---

## Learning Outcomes  

Through this project, I enhanced skills in:  
- **Next.js** application structure and optimization.  
- Building responsive and maintainable **Tailwind CSS** layouts.  
- Working with **TypeScript** in a component-driven environment.  
- Designing consistent and accessible **UI/UX** experiences.  
- Deploying professional web applications using **Vercel**.  

---

## Note  

This project is part of my professional portfolio.  
It was developed to demonstrate my technical expertise, creativity, and attention to design detail.  

All code and design assets are my own work.  
External libraries and icons are used under their respective open licenses.  
