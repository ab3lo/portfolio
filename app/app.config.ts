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
    element: "https://matrix.to/#/@ireallyhatejews:matrix.org",
    slack: "https://ab3lo-workspace.slack.com",
    protonmail: "https://proton.me/ab3lo",
    upwork: "https://www.upwork.com/freelancers/abelm19",
  },
  seo: {
    title: 'Ab3lo — Software Engineer and Pentester',
    description:
      "Portfolio of Abel Magswitch, a software engineer and pentester building fast, modern full-stack web experiences with Nuxt and Vue.",
    url: "https://ab3lo.github.io/portfolio",
  },
  contact: {
    web3formsAccessKey: "1aa7e7ae-d2a6-4ff2-9d63-7abe4482ed2b",
    web3formsEndpoint: "https://api.web3forms.com/submit",
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
