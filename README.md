<div align="center">

![StartupLaunch AI](https://img.shields.io/badge/🚀-StartupLaunch_AI-0ea5e9?style=for-the-badge&labelColor=0f172a&color=0ea5e9)
![React](https://img.shields.io/badge/React_19-61dafb?style=for-the-badge&logo=react&logoColor=white&labelColor=0f172a)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=0f172a)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=0f172a)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white&labelColor=0f172a)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=0f172a)
![OpenRouter](https://img.shields.io/badge/GPT--4o__mini-10a37f?style=for-the-badge&logo=openai&logoColor=white&labelColor=0f172a)

<br/>

**Validate any startup idea in minutes with a team of 7 specialized AI agents.**

Get market analysis, competitor intel, brand strategy, revenue modeling, marketing plan, and a pitch deck — all powered by AI and presented in a stunning glassmorphism UI.

<br/>

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **7 AI Agents** | Planner, Market, Competitor, Branding, Revenue, Marketing, and Pitch agents run sequentially |
| 📊 **Scoring System** | Automated 0–100 score based on market growth, competition, revenue metrics, and margins |
| 📋 **7-Tab Report** | Deep-dive into each analysis section with dedicated views |
| 🔍 **History & Search** | Browse past reports, filter by score tier (high/medium/low), full-text search |
| 🌙 **Dark/Light Mode** | System-aware theme switching with smooth transitions and localStorage persistence |
| ✨ **Glassmorphism UI** | Custom glass design system with backdrop-blur, gradient borders, and glow effects |
| 🎬 **Framer Motion** | Page transitions, scroll-triggered animations, animated tab indicators, layout morphs |
| 📱 **Fully Responsive** | Mobile-first with hamburger nav, responsive grids, and adaptive layouts |
- 📄 **Export Reports** — Download full reports as text files
- 🔔 **Toast Notifications** — Context-based notification system with 4 variants and auto-dismiss

---

## 🏗️ Architecture

```
startuplaunchai/
├── src/                          # React Frontend
│   ├── components/
│   │   ├── ui/                   # Button, Card, Input, Select, Badge, Tabs, Skeleton, Dialog, Toast
│   │   ├── charts/               # RadialGauge, StatCard, CompetitorBar
│   │   ├── agents/               # AgentPipeline (visual 7-step progress)
│   │   ├── report/               # ReportSection wrapper
│   │   └── layout/               # AppLayout, Navbar, Footer
│   ├── pages/                    # Landing, Generate, Dashboard, Report, History, Settings, NotFound
│   ├── context/                  # AppContext (useReducer state management)
│   ├── services/                 # API client (startupApi)
│   ├── data/                     # Dummy data, agent configs, industries/countries lists
│   └── types/                    # JSDoc typedefs
│
├── server/                       # Express Backend
│   ├── agents/                   # 7 AI agents + aggregator
│   ├── config/                   # MongoDB + OpenRouter config
│   ├── controllers/              # Generate, Report, History, Export
│   ├── middleware/                # Error handling, 404 catch
│   ├── models/                   # Mongoose schemas (Project, Report)
│   ├── routes/                   # API routes
│   └── services/                 # AI service (retry logic) + orchestrator
│
├── public/                       # Favicon (SVG), icon sprites
├── railway.json                  # Railway deployment config
└── vite.config.js                # Vite + React + Tailwind plugins
```

---

## 🧠 How It Works

```
User Input (Idea + Industry + Country)
         │
         ▼
┌─────────────────────┐
│  1. Planner Agent    │  ← Analyzes idea structure & domains
│  2. Market Agent     │  ← TAM / SAM / SOM + growth + trends
│  3. Competitor Agent │  ← Maps 3-5 competitors with threat analysis
│  4. Branding Agent   │  ← Name, tagline, colors, tone
│  5. Revenue Agent    │  ← Model, pricing, ARR/MRR/LTV/CAC projections
│  6. Marketing Agent  │  ← Channels, budgets, expected outcomes
│  7. Pitch Agent      │  ← Problem / Solution / Market / Traction / Ask
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│    Aggregator Agent  │  ← Combines results, derives strengths/risks
│    Score: 0-100     │  ← Deterministic scoring algorithm
└─────────────────────┘
         │
         ▼
    📊 Report + Score → Stored in MongoDB → Displayed in UI
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **MongoDB Atlas** account (or local MongoDB)
- **OpenRouter** API key — [get one here](https://openrouter.ai/keys)

### 1. Clone the repository

```bash
git clone https://github.com/Shubham-997800/startuplaunchai.git
cd startuplaunchai
```

### 2. Setup the backend

```bash
cd server
cp .env.example .env      # fill in your keys
npm install
```

```env
# server/.env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/startuplaunchai
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxx
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### 3. Setup the frontend

```bash
cd ..                     # back to project root
npm install
```

### 4. Run in development

Open **two terminals**:

```bash
# Terminal 1 — Backend (port 5000)
cd server && npm run dev

# Terminal 2 — Frontend (port 5173)
npm run dev
```

The Vite dev server automatically proxies `/api` requests to `localhost:5000`.

---

## 📦 Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| React 19 | UI library with latest concurrent features |
| React Router 7 | Client-side routing with nested layouts |
| Tailwind CSS 4 | Utility-first styling with CSS-first config |
| Framer Motion 12 | Animations — page transitions, scroll triggers, layout morphs |
| Lucide React | Consistent icon library (50+ icons) |
| Vite 8 | Lightning-fast HMR and optimized builds |
| Oxlint | Fast Rust-based linting with React rules |

### Backend

| Technology | Purpose |
|------------|---------|
| Express 4 | HTTP framework with middleware pipeline |
| Mongoose 8 | MongoDB ODM with schema validation |
| OpenRouter + GPT-4o-mini | AI inference — 7 agents with retry logic |
| Helmet | HTTP security headers |
| Morgan | Request logging |
| CORS | Cross-origin policy enforcement |

---

## 🎨 Design System

The UI is built on a custom **glassmorphism** design system:

```css
/* Core glass effect */
.glass {
  background: rgba(15, 23, 42, 0.80);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(51, 65, 85, 0.50);
}

/* Gradient text */
.text-gradient {
  background: linear-gradient(90deg, #38bdf8, #0ea5e9, #2dd4bf);
  -webkit-background-clip: text;
  background-clip: text;
}
```

**Color palette:**
- **Brand** — Sky blue (`#0ea5e9`) primary actions and accents
- **Frost** — Teal (`#2dd4bf`) secondary highlights
- **Surface** — Slate scale for backgrounds and text with full dark/light mode support

**Typography:** Inter (300–700) for UI, JetBrains Mono (400–700) for code/data.

---

## 📡 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/generate` | Submit startup idea → triggers 7-agent pipeline |
| `GET` | `/api/history` | List last 50 reports (sorted by date) |
| `GET` | `/api/report/:id` | Fetch full report by project ID |
| `GET` | `/api/project/:id` | Fetch project metadata |
| `DELETE` | `/api/report/:id` | Delete a report |
| `POST` | `/api/export/pdf` | Export report as text file |

### Example Request

```bash
curl -X POST http://localhost:5000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "idea": "AI-powered meal planning app for gym enthusiasts",
    "industry": "Health & Fitness",
    "country": "United States"
  }'
```

---

## 🚢 Deployment

### Railway (Backend)

The project includes a `railway.json` config ready to deploy:

```json
{
  "build": { "builder": "NIXPACKS", "buildCommand": "cd server && npm install" },
  "deploy": {
    "startCommand": "cd server && node server.js",
    "healthcheckPath": "/api/health",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

> **Note:** Deploy the backend to Railway (or any Node.js host) and serve the frontend separately via Vercel, Netlify, or similar.

---

## 🔧 Available Scripts

### Frontend
| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with API proxy |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Oxlint linter |

### Backend
| Script | Description |
|--------|-------------|
| `cd server && npm run dev` | Start with Node.js `--watch` for auto-restart |
| `cd server && npm start` | Production server |

---

## ⚙️ Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `MONGODB_URI` | ✅ | — | MongoDB Atlas connection string |
| `OPENROUTER_API_KEY` | ✅ | — | OpenRouter API key |
| `PORT` | ❌ | `5000` | Backend server port |
| `NODE_ENV` | ❌ | `development` | Environment mode |
| `CORS_ORIGIN` | ❌ | `http://localhost:5173` | Allowed frontend origin |

---

## 📁 Project Structure Highlights

| Path | What It Does |
|------|-------------|
| `server/agents/*.js` | 7 specialized AI agents with custom system prompts |
| `server/services/orchestrator.js` | Sequential agent pipeline + aggregator scoring logic |
| `server/services/aiService.js` | OpenRouter API wrapper with 3x retry + exponential backoff |
| `src/components/ui/` | 9 reusable UI components (Button, Card, Input, Select, Badge, Tabs, Skeleton, Dialog, Toast) |
| `src/components/charts/RadialGauge.jsx` | Animated SVG circular gauge with color-coded scoring |
| `src/context/AppContext.jsx` | Global state via useReducer (project, report, history, theme) |
| `src/pages/Report.jsx` | 7-tab report viewer with full analysis sections |
| `src/pages/Generate.jsx` | Idea input form + real-time animated agent pipeline |

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="built">

**Built with ❤️ by [Shubham](https://github.com/Shubham-997800)**

</div>
