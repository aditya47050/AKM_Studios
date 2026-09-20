export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Web Application" | "Mobile Application" | "Developer Tool" | "Cloud Platform";
  platform: string;
  status: "Active / Production" | "In Active Development" | "Deployed & Maintained";
  description: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string;
}

export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    description: string;
    level: string;
  }[];
}

export const COMPANY_INFO = {
  name: "AKM Studios",
  tagline: "Building Digital Products That Make an Impact",
  industry: "Software Development & Digital Products",
  businessType: "Software & Technology Studio",
  email: "contact@akmstudios.com",
  inquiryEmail: "inquiries@akmstudios.com",
  location: {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    formatted: "Pune, Maharashtra, India",
  },
  yearEstablished: 2024,
  copyrightYear: 2026,
};

export const SERVICES: ServiceItem[] = [
  {
    id: "mobile-dev",
    slug: "mobile",
    title: "Mobile Application Development",
    shortDescription: "Native-grade iOS and Android mobile solutions built with React Native and modern mobile architectures.",
    description: "We architect, build, and deploy multi-platform mobile applications tailored for performance, fluid touch interactions, and seamless offline-first capabilities.",
    deliverables: [
      "Cross-platform iOS & Android engineering",
      "Native device API integration (Camera, Biometrics, Sensors)",
      "State synchronization and offline caching",
      "App Store & Google Play release pipelines",
    ],
    techStack: ["React Native", "TypeScript", "Redux Toolkit", "Expo", "Firebase Mobile SDK"],
    iconName: "Smartphone",
  },
  {
    id: "web-dev",
    slug: "web",
    title: "Web Application Development",
    shortDescription: "Robust, high-throughput web applications with modern single-page and server-rendered architectures.",
    description: "From enterprise portals to responsive web apps, we deliver scalable web systems designed with strict type safety, SEO compliance, and sub-second load times.",
    deliverables: [
      "Full-stack web application engineering",
      "Server-side rendering (SSR) & Static Site Generation (SSG)",
      "RESTful API and GraphQL client consumption",
      "Enterprise authentication and authorization flows",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    iconName: "Globe",
  },
  {
    id: "react-dev",
    slug: "react",
    title: "React & React Native Development",
    shortDescription: "Specialized front-end engineering using component-driven design systems and optimized state management.",
    description: "Deep expertise in the React ecosystem. We construct scalable component libraries, accessible interfaces, and performant user flows across web and mobile platforms.",
    deliverables: [
      "Modular design system & component library implementation",
      "Complex state management and performance tuning",
      "Cross-platform code sharing (Web & Mobile)",
      "Automated unit and integration testing setup",
    ],
    techStack: ["React", "React Native", "TypeScript", "Tailwind CSS", "Jest / React Testing Library"],
    iconName: "Code2",
  },
  {
    id: "software-dev",
    slug: "software",
    title: "Custom Software Development",
    shortDescription: "Bespoke business software, data pipelines, and internal tools engineered for operational efficiency.",
    description: "We build custom software systems that automate manual workflows, synchronize business data, and integrate third-party services into unified workflows.",
    deliverables: [
      "Custom workflow automation engines",
      "Internal tools and operational dashboards",
      "Database schema modeling and indexing",
      "Third-party API connectors and webhooks",
    ],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    iconName: "Cpu",
  },
  {
    id: "uiux-implementation",
    slug: "uiux",
    title: "UI/UX Implementation",
    shortDescription: "Pixel-perfect translation of interface designs into clean, accessible, and responsive production code.",
    description: "Bridging the gap between design and production code. We ensure design system fidelity, rigorous accessibility (WCAG) compliance, and smooth micro-interactions.",
    deliverables: [
      "Figma-to-React/Next.js code translation",
      "Responsive layout engineering across all breakpoints",
      "Interactive states, smooth animations, and transitions",
      "Accessibility (a11y) audits and enhancements",
    ],
    techStack: ["Tailwind CSS", "CSS Modules", "Framer Motion", "Radix UI / Headless UI"],
    iconName: "Layout",
  },
  {
    id: "cloud-backend",
    slug: "cloud",
    title: "Cloud & Backend Integration",
    shortDescription: "Scalable backend services, cloud storage, serverless functions, and secure database architectures.",
    description: "We design resilient backend infrastructures using modern cloud platforms. Our solutions feature automated scaling, robust data protection, and high uptime.",
    deliverables: [
      "REST & GraphQL API design and implementation",
      "Serverless function deployment and event processing",
      "Cloud database provisioning and replication",
      "Continuous Integration & Continuous Deployment (CI/CD)",
    ],
    techStack: ["Node.js", "Firebase", "AWS Lambda", "AWS S3", "GitHub Actions"],
    iconName: "Cloud",
  },
  {
    id: "digital-product",
    slug: "digital-product",
    title: "Digital Product Development",
    shortDescription: "End-to-end software product lifecycle execution from architecture specification to production release.",
    description: "Comprehensive software engineering for digital products. We partner through technical discovery, architecture design, phased sprint development, and production rollout.",
    deliverables: [
      "Technical architecture documentation & roadmap",
      "MVP scoping and rapid phased development",
      "Production deployment and telemetry monitoring",
      "Post-launch technical maintenance and iterations",
    ],
    techStack: ["Full Stack JavaScript/TypeScript", "Next.js", "React Native", "Cloud Infrastructure"],
    iconName: "Layers",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "pulse-sync",
    title: "PulseSync Web Platform",
    category: "Web Application",
    platform: "Web (Desktop & Mobile Responsive)",
    status: "Active / Production",
    description: "A centralized operational dashboard and data aggregation portal designed for real-time telemetry, structured reporting, and multi-tenant access control.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Chart.js"],
    keyFeatures: [
      "Role-based authentication with granular permission layers",
      "Real-time event processing and status streaming",
      "Exportable analytical data reports in PDF/CSV formats",
      "Optimized server-side rendering for low-latency views",
    ],
    architectureHighlights: "Built with Next.js App Router and optimized API route handlers, backed by a modular relational data layer and automated telemetry.",
  },
  {
    id: "strata-mobile",
    title: "Strata Mobile Suite",
    category: "Mobile Application",
    platform: "iOS & Android (Cross-Platform)",
    status: "Active / Production",
    description: "A cross-platform mobile utility built for field data capture, offline document synchronization, and biometric-secured workflow approvals.",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "SQLite", "Firebase"],
    keyFeatures: [
      "Offline-first SQLite local caching with automatic cloud sync",
      "Biometric authentication (FaceID and Fingerprint)",
      "Native camera module integration for document capture",
      "Custom responsive design system tailored for mobile touch ergonomics",
    ],
    architectureHighlights: "Decoupled domain logic running via TypeScript core with React Native bridge abstraction for native hardware access.",
  },
  {
    id: "cloud-nexus-api",
    title: "CloudNexus Integration Hub",
    category: "Cloud Platform",
    platform: "Cloud Infrastructure / Serverless",
    status: "Deployed & Maintained",
    description: "A middleware service engine orchestrating multi-channel webhook ingestion, schema validation, and secure dispatch between internal tools and cloud databases.",
    technologies: ["Node.js", "AWS Lambda", "Amazon S3", "TypeScript", "Redis"],
    keyFeatures: [
      "Event-driven serverless architecture handling high concurrency",
      "Cryptographic payload signature validation",
      "Asynchronous retry queues with dead-letter monitoring",
      "Comprehensive cloud logging and health check endpoints",
    ],
    architectureHighlights: "Deployed on AWS infrastructure with auto-scaling serverless triggers and Redis caching for distributed rate limiting.",
  },
  {
    id: "stencil-kit",
    title: "Stencil Component Engine",
    category: "Developer Tool",
    platform: "Web / NPM Package Ecosystem",
    status: "In Active Development",
    description: "An internal front-end design system and reusable component foundation used across AKM Studios' web engineering projects to ensure UI consistency.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    keyFeatures: [
      "Strict WCAG AA accessibility compliance out of the box",
      "Zero-runtime CSS overhead with Tailwind design tokens",
      "Comprehensive TypeScript interfaces and intellisense support",
      "Theme customization engine with dark mode support",
    ],
    architectureHighlights: "Tree-shakeable ESM module structure built with strict TypeScript compiler options and automated visual regression testing.",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Frontend & Web Technologies",
    description: "Modern web tools focused on performance, search engine accessibility, and fluid user interactions.",
    items: [
      { name: "React", description: "Declarative, component-based user interface engineering", level: "Primary Framework" },
      { name: "Next.js", description: "Full-stack React framework with SSR, SSG, and API route support", level: "Production Core" },
      { name: "TypeScript", description: "Static typing for large-scale application safety and maintainability", level: "Studio Standard" },
      { name: "Tailwind CSS", description: "Utility-first design system engine for pixel-perfect styling", level: "Design System" },
      { name: "HTML5 / Modern CSS", description: "Semantic markup, CSS Grid/Flexbox, and accessibility standards", level: "Foundation" },
    ],
  },
  {
    category: "Mobile Application Ecosystem",
    description: "Cross-platform and native-integrated toolsets for high-performance iOS and Android apps.",
    items: [
      { name: "React Native", description: "Cross-platform mobile development with native compilation", level: "Mobile Core" },
      { name: "Expo", description: "Toolchain and runtime services for accelerated mobile workflows", level: "Tooling" },
      { name: "Mobile Device APIs", description: "Camera, geolocation, storage, and push notification integrations", level: "Native Bridge" },
    ],
  },
  {
    category: "Backend & Runtime Environments",
    description: "Scalable server environments, REST/GraphQL API services, and enterprise business logic.",
    items: [
      { name: "Node.js", description: "High-throughput asynchronous JavaScript/TypeScript runtime", level: "Server Core" },
      { name: "Express & REST APIs", description: "Structured endpoint architectures and middleware pipelines", level: "API Layer" },
      { name: "Authentication / JWT", description: "OAuth2, JWT tokens, and secure role-based session handling", level: "Security" },
    ],
  },
  {
    category: "Cloud, Databases & Infrastructure",
    description: "Resilient cloud infrastructure, managed database solutions, and distributed storage.",
    items: [
      { name: "Firebase", description: "Realtime databases, authentication, and cloud messaging", level: "Backend-as-a-Service" },
      { name: "AWS (Amazon Web Services)", description: "S3, Lambda, CloudFront, and EC2 cloud orchestration", level: "Cloud Infrastructure" },
      { name: "PostgreSQL / SQLite", description: "Relational data structures, ACID transactions, and indexing", level: "Data Storage" },
    ],
  },
  {
    category: "DevOps, Version Control & Quality",
    description: "Engineering rigor, continuous integration, and automated deployment pipelines.",
    items: [
      { name: "Git & GitHub", description: "Distributed version control, branch protection, and code review", level: "Version Control" },
      { name: "GitHub Actions / CI/CD", description: "Automated linting, test suites, and deployment workflows", level: "Automation" },
      { name: "ESLint & Prettier", description: "Code quality enforcement and automated style consistency", level: "Code Quality" },
    ],
  },
];
