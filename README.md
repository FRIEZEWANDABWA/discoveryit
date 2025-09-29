# Discovery IT Solutions - Comprehensive Cybersecurity Platform

A comprehensive cybersecurity platform built with **Jac language** + **Jaseci runtime** for backend logic and **Next.js** + **TypeScript** + **Tailwind CSS** for the frontend.

## 🏗️ Architecture

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS (marketing site, dashboard, admin UI)
- **Backend**: Jac language + Jaseci runtime (security workflows, access control, threat detection)
- **Data Model**: Graph-based (nodes/edges) - users, devices, services, incidents, policies
- **API Layer**: FastAPI Python server bridging frontend ↔ Jac backend

## 📁 Project Structure

```
DigitalIT/
├── web/                    # Next.js frontend
│   ├── app/                # Next.js 14 app routes
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── services/      # Services page
│   │   ├── contact/       # Contact page
│   │   ├── dashboard/     # Security dashboard
│   │   └── solutions/     # Solutions page
│   ├── components/         # React components
│   │   ├── navbar.tsx     # Navigation component
│   │   ├── footer.tsx     # Footer component
│   │   └── theme-provider.tsx # Theme provider
│   └── lib/               # Utilities
├── jac/                    # Jac code + Jaseci graphs
│   ├── data.jac           # Node & edge definitions
│   ├── walkers.jac        # Security walkers (auth, scans, policies)
│   ├── abilities.jac      # Reusable abilities
│   └── init.jac           # Platform initialization
├── services/               # Python API layer
│   └── api/               # FastAPI endpoints
│       └── main.py        # Main API server
└── infra/                 # Deployment configs
```

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+
- Jac language (`pip install jaclang`)
- Jaseci runtime (`pip install jaseci`)

### 1. Frontend Setup

```bash
cd web
npm install
npm run dev
```

### 2. Backend Setup

```bash
# Install API dependencies
cd services/api
pip install fastapi uvicorn

# Start API server
python main.py
```

### 3. Access the Platform

- **Frontend**: http://localhost:3000
- **API**: http://localhost:8001
- **API Docs**: http://localhost:8001/docs

## 🔐 Core Features

### Security Workflows (Jac)

- **Authentication**: Multi-factor auth with session management
- **Access Control**: Role-based policies with graph traversal
- **Network Scanning**: Automated device risk assessment
- **Threat Detection**: Log analysis and pattern matching
- **Incident Response**: Automated escalation and notifications

### Graph Data Model

**Nodes**: `user`, `device`, `service`, `policy`, `incident`, `network_zone`, `log_entry`

**Edges**: `owns`, `runs`, `controls`, `connected_to`, `violates`, `affects`, `belongs_to`

### API Endpoints

- `POST /api/auth/login` - User authentication
- `POST /api/auth/check-access` - Permission validation
- `GET /api/devices` - Device inventory
- `POST /api/devices/scan` - Security scanning
- `GET /api/incidents` - Security incidents
- `GET /api/threats/analyze` - Threat detection
- `POST /api/contact` - Contact form submission

## 🎨 Frontend Features

- **Dark/Light Mode**: System-aware theme switching (default: dark)
- **Responsive Design**: Mobile-first Tailwind CSS
- **Modern UI**: Clean, professional cybersecurity branding
- **Multiple Pages**: Home, About, Services, Contact, Dashboard, Solutions
- **Interactive Components**: Forms, navigation, theme toggle

## 📄 Pages

1. **Homepage** (`/`) - Platform overview with hero section, features, stats
2. **About** (`/about`) - Company story, mission, vision, values
3. **Services** (`/services`) - Detailed service offerings and process
4. **Contact** (`/contact`) - Contact form and company information
5. **Dashboard** (`/dashboard`) - Security metrics and monitoring
6. **Solutions** (`/solutions`) - Cybersecurity solutions overview

## 🔧 Development

### Frontend Development

```bash
cd web
npm run dev      # Development server
npm run build    # Build for production
npm run start    # Start production server
```

### API Development

```bash
cd services/api
python main.py   # Start API server with auto-reload
```

## 🚀 Deployment

### Static Export (Netlify/Vercel)

The frontend is configured for static export:

```bash
cd web
npm run build    # Generates static files in 'out' directory
```

### API Deployment

Deploy the FastAPI server to any Python hosting platform:
- Render
- Railway
- Heroku
- AWS Lambda

## 🎨 Design System

- **Primary Colors**: Blue shades for trust and security
- **Typography**: Inter font family
- **Components**: Consistent spacing, shadows, and transitions
- **Dark Mode**: Default theme with light mode option
- **Icons**: Lucide React icons throughout

## 📞 Contact Information

- **Email**: info@discoveryit.co.ke
- **Phone**: +254 700 000 000
- **Address**: Discovery Place, Waiyaki Way, Westlands, Nairobi, Kenya
- **Emergency**: +254 711 000 000 (24/7)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Discovery IT Solutions Limited** - Complete IT & Cybersecurity Solutions