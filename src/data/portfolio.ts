import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  name: 'Deron Kao',
  title: 'Senior Software Engineer',
  location: 'Singapore',
  summary:
    'Full Stack Software Engineer with experience owning features end-to-end across React/Next.js, Python (FastAPI/Flask), and cloud-native architectures on AWS. Proven track record shipping production systems with SQL and Python, and driving projects from ideation to completion in fast-paced, ambiguous environments. Passionate about developer experience, edge computing, and building high-performance full-stack applications.',

  experiences: [
    {
      company: 'SPH Media',
      location: 'Singapore',
      period: 'May 2025 - Present',
      role: 'Senior Software Engineer',
      techStack: [
        'React',
        'Node.js',
        'TypeScript',
        'pnpm Monorepo',
        'AWS',
        'Java',
        'Docker',
        'Terraform',
      ],
      achievements: [
        'Architected and migrated fragmented microservices into a high-performance pnpm monorepo, consolidating Lambda functions, documentation, and testing suites into a unified workspace, enhancing code reusability and development speed by 40%.',
        'Successfully led the critical system migration of legacy Java services to Java 17, ensuring security compliance, long-term maintainability, and improved runtime performance.',
        'Resolved critical latency alerts for high-traffic AWS Lambda APIs by re-architecting OpenSearch queries and implementing aggressive caching strategies, significantly reducing API response times.',
        'Championed engineering excellence by refactoring legacy codebases and establishing rigorous CI/CD benchmarks using Terraform for predictable Infrastructure as Code (IaC) deployments.',
      ],
    },
    {
      company: 'Freelance Software Engineering',
      location: 'Remote',
      period: '2025 - Present',
      role: 'Full Stack Consultant',
      techStack: ['AWS Amplify', 'Lambda', 'DynamoDB', 'Cognito', 'S3 / CloudFront', 'Next.js'],
      achievements: [
        'E-commerce Transformation: Developed a fully serverless e-commerce platform for a prominent Taiwan-based F&B chain (Fried Chicken) using AWS Amplify, Lambda, and DynamoDB to support scalable retail operations.',
        'Security & Identity: Implemented secure user authentication and Role-Based Access Control (RBAC) via AWS Cognito, ensuring safe administrative access for order management and inventory control.',
        'Optimized Delivery: Deployed a responsive frontend via S3 and CloudFront, ensuring low-latency content delivery and stable performance during peak traffic periods.',
        'End-to-End Delivery: Managed the full SDLC for regional SMEs, translating complex business requirements into technical solutions that digitized traditional retail workflows.',
      ],
    },
    {
      company: 'GIC',
      location: 'Singapore',
      period: 'Oct 2024 - May 2025',
      role: 'Software Engineer',
      techStack: ['Python', 'GitHub Actions', 'Tableau', 'SQL'],
      achievements: [
        'Architected and automated CI/CD pipelines for enterprise visualization platforms using Python and GitHub Actions, significantly reducing manual deployment efforts and operational risks.',
        'Led the migration and integration of enterprise applications by developing REST API automation scripts, streamlining Tableau workbook operations across the organization.',
        'Provided Level 3 application support for critical enterprise systems (MS SQL, Oracle), ensuring high availability and conducting user training to facilitate system adoption.',
      ],
    },
    {
      company: 'Sift&Pick',
      location: 'Singapore',
      period: 'May 2022 - Jul 2024',
      role: 'Senior Software Engineer (Full Stack)',
      techStack: ['Next.js', 'React', 'GraphQL', 'SWR / TanStack Query', 'AWS', 'Python (FastAPI / Flask)', 'NX Monorepo'],
      achievements: [
        'Full-Stack Performance Optimization: Spearheaded the development of scalable features using Next.js, GraphQL, and SWR/TanStack Query for client-side data fetching on AWS; revamped the core homepage to significantly enhance UI/UX and SEO (30% Core Web Vitals improvement) in partnership with marketing.',
        'System Efficiency & Scalability: Engineered a multi-threaded image processing server using Python (FastAPI and Flask), reducing processing time by 30% and optimizing CPU utilization for high-volume traffic.',
        'Engineering Productivity & DevOps: Doubled team execution efficiency by integrating NX monorepo into the development workflow and automating manual deployment processes.',
        'Data-Driven Growth: Integrated comprehensive analytics suites (GA, GTM, Adobe Analytics, Meta Pixel) to enable data-driven decision-making for product features.',
        'Leadership & Mentorship: Mentored engineering interns to foster professional growth and delivered strategic technical insights during all-hands meetings to align engineering goals with business objectives.',
      ],
    },
    {
      company: 'PenguinSmart',
      location: 'Taiwan',
      period: 'Nov 2020 - Mar 2022',
      role: 'Software Engineer',
      techStack: ['Node.js', 'PostgreSQL', 'TypeScript', 'React.js', 'CI/CD'],
      achievements: [
        'Led end-to-end product development for a healthcare platform, architecting a scalable RESTful API with Node.js and PostgreSQL to support business growth.',
        'Engineered a secure payment infrastructure by integrating global gateways (Stripe, AliPay) and fortifying the system with data encryption against SQL injection and XSS vulnerabilities.',
        'Modernized deployment workflows by implementing automated CI/CD pipelines (CircleCI, BitBucket) on AWS, reducing manual deployment errors by 80% and accelerating release cycles.',
        'Collaborated closely with UX designers to deliver user-centric features and accessible interfaces using React.js and TypeScript.',
      ],
    },
  ],

  projects: [
    {
      title: 'Edge-Based Stock Monitoring System',
      description: 'A serverless financial data platform built on Cloudflare Workers, serving real-time stock data and computed fundamentals (e.g. FCF) to a frontend client.',
      techStack: ['Cloudflare Workers', 'D1 (SQL)', 'KV Storage', 'GitHub Actions'],
      achievements: [
        'Architected a serverless data pipeline using GitHub Actions for CI/CD and to sync daily stock data ingestion.',
        'Used Cloudflare D1 (SQL) to record holding snapshots and transaction history, and Cloudflare KV to cache high-value data constrained by third-party API rate limits.',
        'Implemented fixed-formula financial computations served to the frontend in real time via edge functions.',
      ]
    },
    {
      title: 'Drip Coffee Brew Timer',
      description: 'A minimalist, precision-focused brewing utility for specialty coffee enthusiasts.',
      techStack: ['Next.js', 'TypeScript', 'Cloudflare Pages'],
      achievements: [
        'Designed a high-performance, mobile-first web utility using Next.js and TypeScript, optimized for instantaneous load times on the edge via Cloudflare.',
        'Implemented precision timing logic and interactive UI components to guide users through complex brewing recipes.',
        'Focused on zero-latency user experience and minimalist design principles for real-world usability.',
      ]
    }
  ],

  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'React / Next.js', rating: 4 },
        { name: 'TypeScript', rating: 4 },
        { name: 'Tailwind CSS', rating: 4 },
        { name: 'SWR / TanStack Query', rating: 4 },
        { name: 'Redux', rating: 4 },
        { name: 'GraphQL', rating: 4 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Python (FastAPI / Flask)', rating: 4 },
        { name: 'Node.js', rating: 4 },
        { name: 'SQL (Production)', rating: 4 },
        { name: 'Java 17 / Spring', rating: 3 },
        { name: 'Cloudflare Workers (Edge)', rating: 4 },
        { name: 'AWS Lambda / Serverless', rating: 4 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS (Amplify, Cognito, S3, DynamoDB, Lambda)', rating: 4 },
        { name: 'Terraform / IaC', rating: 4 },
        { name: 'GitHub Actions / CI/CD', rating: 5 },
        { name: 'pnpm / NX Monorepo', rating: 5 },
        { name: 'Docker', rating: 4 },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'PostgreSQL / SQL', rating: 4 },
        { name: 'DynamoDB (NoSQL)', rating: 4 },
        { name: 'Cloudflare D1 / KV', rating: 4 },
        { name: 'OpenSearch', rating: 4 },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Collaboration', rating: 5 },
        { name: 'Problem Solving', rating: 5 },
        { name: 'Adaptability', rating: 4 },
        { name: 'Leadership & Mentorship', rating: 4 },
        { name: 'Communication', rating: 4 },
        { name: 'Stakeholder Management', rating: 4 },
      ],
    },
  ],

  education: [
    {
      institution: 'National Chiao Tung University',
      degree: 'Master of Computer Science',
      period: '2018 - 2020',
    },
    {
      institution: 'National Taiwan Normal University',
      degree: 'Bachelor of Mathematics',
      period: '2010 - 2014',
    },
  ],

  contact: {
    email: 'deron@el2k6xjp6.com',
    linkedin: 'https://linkedin.com/in/el2k6xjp6',
  },
};