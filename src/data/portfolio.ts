import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  name: 'Deron Kao',
  title: 'Senior Software Engineer',
  location: 'Singapore',
  summary:
    'Senior Software Engineer with 6+ years of experience building scalable web applications and cloud-native solutions. Currently driving platform optimization at SPH Media. Proven track record in improving system performance (reducing API latency, optimizing AWS resources) and boosting developer productivity through CI/CD and rigorous testing standards. Expert in React, Node.js, Python, and AWS architecture.',
  
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
        'Python',
        'AWS (Lambda, OpenSearch)',
        'Docker',
        'Terraform',
      ],
      achievements: [
        'Resolved critical latency alerts for high-traffic AWS Lambda APIs by re-architecting OpenSearch queries and implementing aggressive caching strategies, significantly improving API response times and system stability.',
        'Championed engineering excellence by refactoring legacy codebases and establishing comprehensive testing suites; increased test coverage substantially, ensuring safer deployments and fewer production regressions.',
        'Elevated Developer Experience (DX) by modularizing complex logic and integrating Infrastructure as Code (Terraform), streamlining the development workflow for the broader team.',
      ],
    },
    {
      company: 'GIC (via Maltem Asia-Pacific)',
      location: 'Singapore',
      period: 'Oct 2024 - May 2025',
      role: 'Software Engineer (Contract)',
      techStack: ['Python', 'GitHub Actions', 'Tableau', 'SQL'],
      achievements: [
        'Architected and automated CI/CD pipelines for enterprise visualization platforms using Python and GitHub Actions, reducing manual deployment efforts.',
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
        'Full-Stack Performance Optimization: Spearheaded the development of scalable features using Next.js, React.js, and GraphQL on AWS; revamped the core homepage to significantly enhance UI/UX, SEO, and web performance in partnership with the marketing team.',
        'System Efficiency & Scalability: Engineered a multi-threaded image processing server using Python Flask, successfully reducing processing time by 30% and optimizing CPU utilization for high-volume traffic.',
        'Engineering Productivity & DevOps: Doubled team execution efficiency by integrating NX monorepo into the development workflow and automating manual processes.',
        'Data-Driven Growth: Integrated comprehensive analytics suites (Google Analytics, GTM, Adobe Analytics, Meta Pixel) to enable data-driven decision-making for product features.',
        'Leadership & Mentorship: Mentored engineering interns to foster professional growth and delivered strategic technical insights during monthly all-hands meetings to align engineering goals with business objectives.',
      ],
    },
    {
      company: 'PenguinSmart',
      location: 'Taiwan',
      period: 'Nov 2020 - Mar 2022',
      role: 'Software Engineer',
      techStack: ['Node.js', 'PostgreSQL', 'TypeScript', 'React.js', 'CI/CD'],
      achievements: [
        'Led end-to-end product development for a healthcare platform, architecting a scalable RESTful API with Node.js, PostgreSQL, and TypeScript, directly supporting business growth targets.',
        'Engineered a secure payment infrastructure by integrating global gateways (Stripe, AliPay) and fortifying the system against SQL injection and XSS vulnerabilities.',
        'Modernized the deployment workflow by implementing automated CI/CD pipelines (CircleCI, BitBucket) on AWS, reducing manual deployment errors and accelerating release cycles.',
        'Developed a responsive frontend application using React.js and TypeScript, collaborating closely with UX designers to deliver user-centric features.',
      ],
    },
    {
      company: 'Yang Ming Tec Computer Inc.',
      location: 'Taiwan',
      period: 'Mar 2016 - Apr 2017',
      role: 'Software Engineer',
      techStack: ['.NET', 'Oracle'],
      achievements: [
        'Developed a comprehensive Medical ERP system for local hospitals using .NET, streamlining routine clinical operations and administrative workflows.',
        'Optimized database performance by managing and architecting complex schemas within an Oracle environment, ensuring high data integrity and efficient retrieval for medical records.',
      ],
    },
  ],
  
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', rating: 5 },
        { name: 'CSS3', rating: 5 },
        { name: 'JavaScript (ES6+)', rating: 5 },
        { name: 'TypeScript', rating: 5 },
        { name: 'React.js', rating: 5 },
        { name: 'Next.js', rating: 5 },
        { name: 'Redux', rating: 4 },
        { name: 'Tailwind CSS', rating: 4 },
        { name: 'GraphQL', rating: 4 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', rating: 5 },
        { name: 'Express', rating: 4 },
        { name: 'Python', rating: 4 },
        { name: 'Python Flask', rating: 4 },
        { name: 'Java', rating: 3 },
        { name: 'Spring Boot', rating: 3 },
        { name: 'GraphQL', rating: 4 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS (Lambda, OpenSearch, DynamoDB)', rating: 4 },
        { name: 'Docker', rating: 4 },
        { name: 'Terraform', rating: 4 },
        { name: 'CI/CD (GitHub Actions, CircleCI)', rating: 5 },
        { name: 'NX Monorepo', rating: 4 },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'PostgreSQL', rating: 4 },
        { name: 'SQL', rating: 4 },
        { name: 'MongoDB', rating: 3 },
        { name: 'Oracle', rating: 3 },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', rating: 5 },
        { name: 'Jest', rating: 4 },
        { name: 'Google Analytics', rating: 3 },
        { name: 'Tableau', rating: 3 },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Collaboration', rating: 4 },
        { name: 'Problem Solving', rating: 5 },
        { name: 'Adaptability', rating: 4 },
        { name: 'Leadership', rating: 4 },
        { name: 'Communication', rating: 4 },
        { name: 'Time Management', rating: 4 },
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
    email: 'el2k6xjp6@gmail.com',
    linkedin: 'https://linkedin.com/in/el2k6xjp6',
  },
};
