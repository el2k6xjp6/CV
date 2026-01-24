# Deron Kao - Senior Software Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-performance, minimalist portfolio website for Deron Kao, Senior Software Engineer. Built with modern web technologies and optimized for performance, accessibility, and SEO.

## ✨ Features

- 🚀 **Next.js 16.1.4** with App Router for optimal performance
- 🎨 **Responsive Design** with Tailwind CSS v4
- 🌙 **Dark/Light Mode** with system preference detection
- 📱 **Mobile-First** approach with perfect mobile experience
- ⚡ **Static Generation** for lightning-fast loading
- 🎭 **Smooth Animations** with Framer Motion
- 📄 **PDF Export** functionality for resume download
- 🔍 **SEO Optimized** with Open Graph metadata
- ♿ **Accessibility** compliant with semantic HTML
- 🎯 **TypeScript** for type safety and better DX

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.1.4** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5.0** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Geist Font** - Modern typography

### Development Tools
- **ESLint** - Code linting
- **pnpm** - Fast package manager
- **next-themes** - Theme management

### Deployment
- **Cloudflare Pages** - CDN and hosting
- **Static Generation** - Pre-rendered pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/deron-portfolio.git
cd deron-portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
deron-portfolio/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ExperienceCard.tsx
│   │   ├── Section.tsx
│   │   ├── SkillsGrid.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/             # Static data files
│   │   └── portfolio.ts  # Portfolio content
│   └── types/            # TypeScript type definitions
│       └── index.ts
├── public/               # Static assets
└── package.json         # Dependencies and scripts
```

## 🏗️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Code Quality

This project follows strict code quality standards:

- **TypeScript Strict Mode** - No `any` types allowed
- **ESLint** - Code linting and formatting
- **Atomic Design** - Component organization
- **DRY Principle** - No code duplication
- **Semantic HTML** - Accessibility first

### Component Guidelines

- Use Server Components by default
- Client Components only for interactivity
- Proper TypeScript interfaces for all props
- Responsive design with mobile-first approach

## 🚀 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - **Build command**: `pnpm build`
   - **Build output directory**: `out`
   - **Root directory**: `/`

3. Add environment variables (if needed):
   - No environment variables required for basic deployment

### Manual Deployment

```bash
# Build the project
pnpm build

# The static files will be in the `out` directory
# Deploy the `out` directory to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Test on multiple devices and browsers
- Ensure accessibility compliance
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

---

Built with ❤️ by Deron Kao
