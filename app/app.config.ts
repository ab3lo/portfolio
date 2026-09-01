export default defineAppConfig({
  global: {
    meetingLink: "https://cal.com/hugorcd/15min",
    available: true,
  },
  profile: {
    name: "Abel Magswitch",
    job: "Software Engineer and Pentester",
    email: "1234@protonmail.com",
    phone: "(+33)90 1231000",
    picture: "https://avatars.githubusercontent.com/u/71938701?v=4",
  },
  socials: {
    github: "https://github.com/ab3lo",
    element: "https://matrix.to/#/@ab3lo:matrix.org",
    slack: "https://ab3lo-workspace.slack.com",
    protonmail: "https://proton.me/ab3lo",
    upwork: "https://www.upwork.com/freelancers/ab3lo",
    fiverr: "https://www.fiverr.com/ab3lo",
  },
  seo: {
    title: 'Ab3lo: Junior Software Engineer "Riggsware.dev',
    description:
      "Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD",
    url: "https://canvas.hrcd.fr",
  },
  ui: {
    colors: {
      primary: "emerald",
      neutral: "neutral",
    },
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
    button: {
      slots: {
        base: "cursor-pointer",
      },
      defaultVariants: {
        color: "neutral",
      },
    },
    input: {
      defaultVariants: {
        color: "neutral",
      },
    },
    textarea: {
      defaultVariants: {
        color: "neutral",
      },
    },
    icons: {
      loading: "lucide:loader",
    },
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
