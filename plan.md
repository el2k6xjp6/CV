Project Plan: Deron Kao - Senior Software Engineer Portfolio

1. Role & Objective

Role: You are a Senior Frontend Engineer and UX Specialist with expertise in Next.js (App Router), TypeScript, and Tailwind CSS.
Objective: Build a high-performance, accessible, and minimalist portfolio website for "Deron Kao", a Senior Software Engineer targeting Big Tech companies in Singapore.
Tone: Professional, engineering-focused, clean, and performance-oriented.

2. Tech Stack & Tools

Framework: Next.js 14+ (App Router)

Language: TypeScript (Strict Mode)

Styling: Tailwind CSS

Package Manager: pnpm

Deployment: Cloudflare Pages

Icons: Lucide React

Animation: Framer Motion (Subtle, professional animations only)

Font: Inter or Geist Sans (System UI look)

3. Architecture & Clean Code Guidelines (MANDATORY)

Directory Structure:

src/app: Page routes.

src/components: Reusable UI components (Atomic design principles).

src/data: Static data files (Single Source of Truth for text).

src/lib: Utility functions.

Code Quality:

DRY (Don't Repeat Yourself): Extract repeating UI patterns into components (e.g., Section, Badge, Card).

Type Safety: No any. Define interfaces for all data structures (e.g., Experience, Skill).

Server Components: Use React Server Components (RSC) by default. Use "use client" only for interactive leaves.

Performance: Optimize images, fonts, and script loading. Aim for Lighthouse 100.

Accessibility: Use semantic HTML (<main>, <section>, <article>, <header>) and ensure proper ARIA labels.

Responsive Design: Mobile-first approach using Tailwind's sm:, md:, lg: prefixes.

Visual Density & "Anti-Emptiness" Strategies (NEW):

Background Texture: Use subtle SVG dot patterns or grid backgrounds in the Hero section to prevent the "empty whitespace" feeling.

Visual Hierarchy: Use font-bold and darker text colors (e.g., text-slate-900 dark:text-white) for headings, and lighter grays for body text to create depth.

Section Differentiation: Alternate background colors between sections (e.g., White for Hero -> Slate-50/Zinc-900 for Experience) to define structure.

4. Content Source of Truth (Copy Exact Text)

A. Professional Summary

"Senior Software Engineer with 6+ years of experience building scalable web applications and cloud-native solutions. Currently driving platform optimization at SPH Media. Proven track record in improving system performance (reducing API latency, optimizing AWS resources) and boosting developer productivity through CI/CD and rigorous testing standards. Expert in React, Node.js, Python, and AWS architecture."

B. Experience Data (Chronological Order)

1. SPH Media (Singapore | May 2025 – Present)

Role: Senior Software Engineer

Tech Stack: React, Node.js, TypeScript, Python, AWS (Lambda, OpenSearch), Docker, Terraform

Key Achievements:

Resolved critical latency alerts for high-traffic AWS Lambda APIs by re-architecting OpenSearch queries and implementing aggressive caching strategies, significantly improving API response times and system stability.

Championed engineering excellence by refactoring legacy codebases and establishing comprehensive testing suites; increased test coverage substantially, ensuring safer deployments and fewer production regressions.

Elevated Developer Experience (DX) by modularizing complex logic and integrating Infrastructure as Code (Terraform), streamlining the development workflow for the broader team.

2. GIC (via Maltem Asia-Pacific) (Singapore | Oct 2024 – May 2025)

Role: Software Engineer (Contract)

Tech Stack: Python, GitHub Actions, Tableau, SQL

Key Achievements:

Architected and automated CI/CD pipelines for enterprise visualization platforms using Python and GitHub Actions, reducing manual deployment efforts.

Led the migration and integration of enterprise applications by developing REST API automation scripts, streamlining Tableau workbook operations across the organization.

Provided Level 3 application support for critical enterprise systems (MS SQL, Oracle), ensuring high availability and conducting user training to facilitate system adoption.

3. Sift&Pick (Singapore | May 2022 – Jul 2024)

Role: Senior Software Engineer (Full Stack)

Tech Stack: Next.js, React, GraphQL, AWS, Python Flask, NX Monorepo

Key Achievements:

Full-Stack Performance Optimization: Spearheaded the development of scalable features using Next.js, React.js, and GraphQL on AWS; revamped the core homepage to significantly enhance UI/UX, SEO, and web performance in partnership with the marketing team.

System Efficiency & Scalability: Engineered a multi-threaded image processing server using Python Flask, successfully reducing processing time by 30% and optimizing CPU utilization for high-volume traffic.

Engineering Productivity & DevOps: Doubled team execution efficiency by integrating NX monorepo into the development workflow and automating manual processes.

Data-Driven Growth: Integrated comprehensive analytics suites (Google Analytics, GTM, Adobe Analytics, Meta Pixel) to enable data-driven decision-making for product features.

Leadership & Mentorship: Mentored engineering interns to foster professional growth and delivered strategic technical insights during monthly all-hands meetings to align engineering goals with business objectives.

4. PenguinSmart (Taiwan | Nov 2020 – Mar 2022)

Role: Software Engineer

Tech Stack: Node.js, PostgreSQL, TypeScript, React.js, CI/CD

Key Achievements:

Led end-to-end product development for a healthcare platform, architecting a scalable RESTful API with Node.js, PostgreSQL, and TypeScript, directly supporting business growth targets.

Engineered a secure payment infrastructure by integrating global gateways (Stripe, AliPay) and fortifying the system against SQL injection and XSS vulnerabilities.

Modernized the deployment workflow by implementing automated CI/CD pipelines (CircleCI, BitBucket) on AWS, reducing manual deployment errors and accelerating release cycles.

Developed a responsive frontend application using React.js and TypeScript, collaborating closely with UX designers to deliver user-centric features.

5. Yang Ming Tec Computer Inc. (Taiwan | Mar 2016 – Apr 2017)

Role: Software Engineer

Tech Stack: .NET, Oracle

Key Achievements:

Developed a comprehensive Medical ERP system for local hospitals using .NET, streamlining routine clinical operations and administrative workflows.

Optimized database performance by managing and architecting complex schemas within an Oracle environment, ensuring high data integrity and efficient retrieval for medical records.

C. Skills Data

Languages: TypeScript, JavaScript (ES6+), Python, Java, SQL

Frontend: React.js, Next.js, Redux, HTML5, CSS3, Tailwind CSS

Backend: Node.js, Express, Python Flask, GraphQL, Spring Boot

Cloud & DevOps: AWS (Lambda, OpenSearch, DynamoDB), Docker, Terraform, CI/CD (GitHub Actions, CircleCI)

Tools: Git, NX Monorepo, Jest, Google Analytics

D. Education Data

National Chiao Tung University: Master of Computer Science (2018 – 2020)

National Taiwan Normal University: Bachelor of Mathematics (2010 – 2014)

5. Implementation Steps (Prompt Chain)

Step 1: Setup & Types

Create src/types/index.ts defining Experience, Skill, Education interfaces.

Create src/data/portfolio.ts and populate it with the "Content Source of Truth" data above.

Step 2: Core Components

Create a reusable Section component (standard padding/container).

Create an ExperienceCard component that takes an Experience object.

Visual Enhancement: Add a continuous vertical line (border-left) connecting the cards to visualize the timeline and fill empty space on the left.

Requirement: Display the Tech Stack as small badges/chips with subtle background colors (e.g., bg-blue-100/50 text-blue-700).

Step 3: Page Layout (Single Page Application style)

Header: Sticky nav with "Deron Kao" (font-bold, tracking-tight) and links. Add a blur effect (backdrop-blur-md).

Hero Section:

Typography: Use Massive text for role (text-5xl md:text-7xl font-extrabold tracking-tighter).

Texture: Add a CSS radial-gradient or a subtle "Grid Pattern" SVG background to add depth without clutter.

Layout: Center align text with a max-width container to keep focus tight.

Experience Section: Map through the data and render ExperienceCards. Ensure generous but structured margin between items.

Skills Section:

Layout: Use a Bento Grid (CSS Grid) layout instead of a simple list. Group skills into visually distinct boxes (Frontend, Backend, Cloud) with light borders to fill the horizontal space.

Footer: Simple copyright and social links (LinkedIn, Email).

Step 4: Styling & Polish

Use a monochromatic color scheme (Slate/Zinc) with a subtle accent color (e.g., Indigo or Blue) for links/buttons.

Ensure Dark Mode support (using next-themes).

Micro-Interactions: Add hover effects to cards (scale-105 or shadow-lg) to make the UI feel "alive".