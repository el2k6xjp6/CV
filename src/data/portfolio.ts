import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  name: 'Deron Kao',
  title: 'Senior Software Engineer',
  location: 'Singapore',
  summary:
    'Software engineer with 6+ years building scalable web applications and cloud-native platforms with TypeScript, Node.js, React, and AWS. Owns high-traffic serverless APIs end to end, from performance tuning and monitoring to production validation. Drives engineering standards across teams through monorepo migrations, runtime upgrades, security remediation, and reusable CI/CD, plus automation such as LLM data pipelines and AI-assisted PR review.',

  experiences: [
    {
      company: 'SPH Media (via Base Camp Digital)',
      location: 'Singapore',
      period: 'May 2025 - Present',
      role: 'Senior Software Engineer',
      techStack: [
        'Node.js',
        'TypeScript',
        'React',
        'Java 17',
        'Python',
        'pnpm Monorepo',
        'AWS (Lambda, OpenSearch, Step Functions, API Gateway)',
        'Terraform',
        'GitHub Actions',
        'Docker'
      ],
      achievements: [
        'Owned and evolved a high-traffic serverless content delivery API (AWS Lambda, OpenSearch, TypeScript), building an extensible content transformation layer that converts CMS data into multiple partner formats, and validated it against production data to close gaps and improve output accuracy.',
        'Re-architected the codebase into a pnpm monorepo with a shared core library, removing duplicated logic and growing automated test coverage to about 1,000 unit tests.',
        'Fixed latency and timeout problems in production APIs by optimizing search queries, adding caching and parallel processing, and putting limits on third-party calls; added proactive monitoring and alerting.',
        'Built new services and internal tooling: a self-service reporting API, a data pipeline that prepares archive content for LLM use, an image watermarking pipeline, and an automated PR review pipeline for the team\'s repositories.',
        'Led security remediation across 20+ repositories, covering vulnerability fixes, a certificate incident response, and runtime upgrades to Java 17 and Node 24.',
        'Standardized CI/CD across the team with versioned, reusable GitHub Actions workflows and infrastructure as code (Terraform), making deployments faster and more consistent.',
      ],
    },
    {
      company: 'GIC (via Maltem Asia-Pacific)',
      location: 'Singapore',
      period: 'Oct 2024 - May 2025',
      role: 'Software Engineer (Contract)',
      techStack: ['Python', 'GitHub Actions', 'Tableau', 'MS SQL', 'Oracle'],
      achievements: [
        'Built and automated CI/CD pipelines for enterprise visualization platforms using Python and GitHub Actions, reducing manual deployment effort and operational risk.',
        'Led the migration and integration of enterprise applications by developing REST API automation scripts, streamlining Tableau workbook operations across the organization.',
        'Provided Level 3 application support for critical enterprise systems (MS SQL, Oracle), ensuring high availability and conducting user training to facilitate system adoption.',
      ],
    },
    {
      company: 'Sift&Pick',
      location: 'Singapore',
      period: 'May 2022 - Jul 2024',
      role: 'Senior Software Engineer (Full Stack)',
      techStack: ['Next.js', 'React', 'GraphQL', 'AWS', 'Python Flask', 'NX Monorepo'],
      achievements: [
        'Developed scalable features using Next.js and GraphQL on AWS, and partnered with marketing to revamp the core homepage, improving UI/UX, SEO, and Core Web Vitals scores by 30%.',
        'Engineered a multi-threaded image processing server using Python Flask, reducing processing time by 30% and optimizing CPU utilization under high-volume traffic.',
        'Introduced an NX monorepo into the development workflow and automated manual deployment processes, shortening release cycles.',
        'Integrated analytics suites (GA, GTM, Adobe Analytics, Meta Pixel) to enable data-driven product decisions.',
        'Mentored engineering interns, supporting their technical growth and onboarding.',
      ],
    },
    {
      company: 'PenguinSmart',
      location: 'Taiwan',
      period: 'Nov 2020 - Mar 2022',
      role: 'Software Engineer',
      techStack: ['Node.js', 'PostgreSQL', 'TypeScript', 'React.js', 'CircleCI', 'CI/CD'],
      achievements: [
        'Led end-to-end product development for a healthcare platform, architecting a scalable RESTful API with Node.js and PostgreSQL to support business growth.',
        'Engineered a secure payment infrastructure by integrating global gateways (Stripe, AliPay), secured with encryption at rest, parameterized queries, and input sanitization to prevent SQL injection and XSS.',
        'Modernized deployment workflows by implementing automated CI/CD pipelines (CircleCI, Bitbucket) on AWS, reducing manual deployment errors by 80% and accelerating release cycles.',
        'Collaborated closely with UX designers to deliver user-centric features and accessible interfaces using React.js and TypeScript.',
      ],
    },
  ],

  projects: [
    {
      title: 'Serverless E-commerce Platform (Freelance)',
      description: 'A serverless ordering and store management platform built for a Taiwan-based fried-chicken F&B chain.',
      techStack: ['AWS Amplify', 'Lambda', 'DynamoDB', 'Cognito', 'S3 / CloudFront', 'Next.js'],
      achievements: [
        'Built a fully serverless e-commerce platform using AWS Amplify, Lambda, and DynamoDB to support scalable retail operations.',
        'Implemented secure authentication and role-based access control (RBAC) with AWS Cognito for order management and inventory control.',
        'Deployed a responsive frontend via S3 and CloudFront for low-latency delivery and stable performance during peak traffic.',
        'Managed the full delivery lifecycle, translating business requirements into technical solutions that digitized the client\'s retail workflows.',
      ]
    },
    {
      title: 'Edge-Based Stock Monitoring System',
      description: 'A serverless financial data platform built on Cloudflare Workers for real-time stock analysis and tracking.',
      techStack: ['Cloudflare Workers', 'D1', 'KV Storage', 'GitHub Actions', 'Hugging Face'],
      achievements: [
        'Architected a serverless data pipeline using GitHub Actions to automate daily stock data ingestion into Cloudflare D1 (SQL).',
        'Implemented a low-latency caching layer using Cloudflare KV for frequently accessed market indicators.',
        'Integrated Hugging Face Inference API to provide real-time price trend insights directly on the edge.',
      ]
    },
    {
      title: 'Drip Coffee Brew Timer',
      description: 'A minimalist, precision-focused brewing utility for specialty coffee enthusiasts.',
      techStack: ['Next.js', 'TypeScript', 'Cloudflare Pages'],
      achievements: [
        'Designed a high-performance, mobile-first web utility using Next.js and TypeScript, optimized for fast load times on the edge via Cloudflare.',
        'Implemented precision timing logic and interactive UI components to guide users through complex brewing recipes.',
        'Kept the interface minimal and fast to load for real-world use while brewing.',
      ]
    }
  ],

  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'React/Next.js', rating: 4 },
        { name: 'TypeScript', rating: 4 },
        { name: 'GraphQL', rating: 4 },
        { name: 'Tailwind CSS', rating: 4 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', rating: 4 },
        { name: 'Python / Flask', rating: 4 },
        { name: 'Java / Spring', rating: 3 },
        { name: 'CF Workers', rating: 4 },
        { name: 'AWS Lambda', rating: 4 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS', rating: 4 },
        { name: 'Terraform', rating: 4 },
        { name: 'GitHub Actions', rating: 5 },
        { name: 'Monorepos', rating: 5 },
        { name: 'Docker', rating: 4 },
        { name: 'Observability', rating: 4 },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'PostgreSQL', rating: 4 },
        { name: 'DynamoDB', rating: 4 },
        { name: 'Cloudflare D1', rating: 4 },
        { name: 'OpenSearch', rating: 4 },
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
