# EISHA LABS

### Developer Portfolio — Frontend • Full-Stack • AI Engineering

**EISHA LABS** is my personal developer portfolio, built to showcase selected projects, technical skills, and my ongoing journey toward **Full-Stack Development and AI Engineering**.

The portfolio brings together frontend applications, interactive web experiences, Python projects, and prompt-engineering work in one place.

---

## Overview

The portfolio includes:

* A developer-focused home page
* Dynamic project showcase
* Project filtering by category
* About section and technical direction
* Contact page with client-side form validation
* Responsive design across desktop, tablet, and mobile
* Shared navigation and footer across pages
* Interactive UI elements and subtle animations
* Dedicated GitHub links for showcased projects

---

## Featured Projects

| Project                         | Category           | Focus                             |
| ------------------------------- | ------------------ | --------------------------------- |
| **VEYRA**                       | Frontend           | Modern product landing page       |
| **AEROVA**                      | Frontend           | Live weather dashboard            |
| **SCRIBBLES**                   | Frontend           | Notes & productivity application  |
| **HUE**                         | Frontend           | E-commerce interface              |
| **NexaFlow**                    | Frontend           | Animated startup landing page     |
| **ELEMENTO**                    | Frontend           | E-commerce frontend               |
| **To-Do App**                   | Frontend           | Task management application       |
| **Flexbox & Grid Playground**   | Frontend           | CSS layout practice               |
| **LLM Information Extraction**  | Prompt Engineering | Structured information extraction |
| **Student Information Manager** | Python             | Student data management           |

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* React
* Vite
* Responsive Design
* CSS Animations

### Programming & AI

* Python
* Prompt Engineering
* Large Language Models
* Structured Output

### Tools

* Git
* GitHub
* VS Code
* Browser Developer Tools

---

## Design

EISHA LABS follows a **modern developer-oriented visual style** rather than a traditional corporate portfolio.

The interface uses:

* Dark UI
* Gradient accents
* Glassmorphism-inspired surfaces
* Responsive layouts
* Micro-interactions
* Developer-style visual elements
* Clean typography
* Project-specific visual identities

The goal is to keep the portfolio **technical, minimal, and visually distinctive** while maintaining readability and usability.

---

## Project Architecture

The application is structured using reusable React components and separate pages.

```text
EISHA-LABS/
│
├── public/
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## Dynamic Projects

Projects are maintained through a JavaScript data structure rather than being individually hardcoded into the page.

This makes the Projects section easier to maintain and allows new projects to be added without restructuring the UI.

```javascript
const projects = [
  {
    title: "VEYRA",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "...",
    live: "..."
  }
];
```

---

## Responsive Development

The portfolio is designed to adapt across:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive layouts, flexible typography, CSS Grid, Flexbox, and media queries are used to maintain usability across different screen sizes.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Eisha017/EISHA-LABS.git
```

Navigate into the project:

```bash
cd EISHA-LABS
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available through the local Vite development server.

---

## Development Direction

EISHA LABS represents more than a collection of frontend projects.

My current development direction is focused on progressing from:

**Frontend Development → Full-Stack Development → AI Engineering**

The portfolio will continue evolving as I build more complex applications, work with backend technologies, APIs, databases, and eventually integrate intelligent systems into real-world software.

---

## Author

**Eisha**

Computer Engineer
Frontend Developer → Full-Stack Developer → AI Engineer

---

## License

This project is created for personal portfolio and educational purposes.
