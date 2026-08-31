export interface Project {
  name: string;
  image: string;
  link: string;
  release: string;
  featured?: boolean;
  description?: string;
}

export const projects: Project[] = [
  {
    name: "Canvas",
    image: "/projects/canvas.webp",
    link: "https://canvas.hrcd.fr/",
    release: "2024",
    featured: true,
    description: "Portfolio template built with Nuxt and Tailwind.",
  },
  {
    name: "Helpr",
    image: "/projects/helpr.webp",
    link: "https://helpr.site/",
    release: "2024",
    featured: true,
    description: "SaaS designed to help developpers ship their products.",
  },
  {
    name: "HR Folio",
    image: "/projects/hr-folio.webp",
    link: "https://hr-folio.hrcd.fr/",
    release: "2024",
    description: "Personnal roadmap and resume.",
  },
  {
    name: "Laptopvalley",
    image: "/projects/maison-hochard.webp",
    link: "",
    release: "2023",
    description: "Online Latop vendor store,Built with Coolify and wordpress",
  },
  {
    name: "Mockline",
    image: "/projects/mockline.webp",
    link: "https://mockline.dev/",
    release: "2023",
    description: "Design env written in Go to encrypt your backup.",
  },
  {
    name: "NuxtLog",
    image: "/projects/nuxtlog.webp",
    link: "https://nuxtlog.com/",
    release: "2023",
    description: "Personal blogging platform and analytics.",
  },
  {
    name: "Shelve",
    image: "/projects/shelve.webp",
    link: "https://shelve.cloud/",
    release: "2022",
    description: "The first open-source cloud storage manager.",
  },
];

export interface StackItem {
  name: string;
  link: string;
  icon: string;
}

export const stack: StackItem[] = [
  { name: "Nuxt", link: "https://nuxt.com/", icon: "custom:nuxt" },
  { name: "Vue", link: "https://vuejs.org/", icon: "custom:vue" },
  { name: "Svelte", link: "https://svelte.dev/", icon: "custom:svelte" },
  { name: "Tailwind", link: "https://tailwindcss.com/", icon: "custom:tailwind" },
  { name: "PostgreSQL", link: "https://www.postgresql.org/", icon: "custom:postgresql" },
  { name: "SQLite", link: "https://www.sqlite.org/", icon: "custom:sqlite" },
  { name: "Python", link: "https://www.python.org/", icon: "custom:python" },
  { name: "Docker", link: "https://www.docker.com/", icon: "custom:docker" },
  { name: "Coolify", link: "https://coolify.io/", icon: "custom:coolify" },
  { name: "Go", link: "https://go.dev/", icon: "custom:go" },
  { name: "Excalidraw", link: "https://excalidraw.com/", icon: "custom:excalidraw" },
  { name: "Laravel", link: "https://laravel.com/", icon: "custom:laravel" },
  { name: "Motion", link: "https://motion.dev/", icon: "custom:motion" },
  { name: "Bun", link: "https://bun.sh/", icon: "custom:bun" },
  { name: "OpenCode", link: "https://opencode.ai/", icon: "custom:opencode" },
  { name: "MariaDB", link: "https://mariadb.org/", icon: "custom:mariadb" },
  { name: "Better Auth", link: "https://better-auth.com/", icon: "custom:betterauth" },
  { name: "Git/GitHub", link: "https://github.com/", icon: "custom:github" },
  { name: "Cloudflare", link: "https://www.cloudflare.com/", icon: "custom:cloudflare" },
  { name: "Shadcn/ui", link: "https://www.shadcn.ui", icon: "custom:shadcn/ui" },
];

export interface FaqGroup {
  title: string;
  questions: { label: string; content: string }[];
}

export const faq: FaqGroup[] = [
  {
    title: "Services",
    questions: [
      {
        label: "What services do you offer?",
        content:
          "I offer a range of services including web design, web development, site-auditing, and pentesting. I can also help with SEO and Video Editing.",
      },
      {
        label: "Do you use Ai?",
        content:
          "Yes, I believe despite the security nightmares incorporating Ai generated code brings about ,it can be benefical and productive when used with the right tools,context and constraints.",
      },
    ],
  },
  {
    title: "Process",
    questions: [
      {
        label: "How long does a project take?",
        content:
          "It's difficult to give an exact estimate, as each project is different, but the majority of my past work has taken between 2 weeks and 2 months.",
      },
      {
        label: "How do we get started?",
        content:
          "You can reach out me via the slack,fiverr or upwork to discuss your project and goals.",
      },
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: History[] = [
  {
    role: "Software Engineer",
    company: "Riggsware",
    period: "May 2026 — Present",
    description: "Building and Managing performant,high-volume Ecommerce Sites for Clients.",
  },
  {
    role: "Web-Development Certification",
    company: "Corvit Systems",
    period: "Feb — May 2026",
    description: "Completed an Extensive 3 month Full-Stack Web-Dev certification",
  },
  {
    role: "Bachelors in Software Eng.",
    company: "Islamia University of Bahwalpur",
    period: "Sep 2024 - Ongoing",
    description: "4th Semester Undergrad .",
  },
  {
    role: "Video Editor",
    company: "Freelance",
    period: "Apr 2022 — Jun 2024",
    description: "Editing Short-Form Entertainment content",
  },
];
