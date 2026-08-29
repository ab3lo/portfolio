<script setup>
const tech = [
  'Vue.js', 'Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Vue Router',
  'Vite', 'ESLint', 'Prettier', 'Git', 'GitHub Actions', 'Node.js',
  'npm', 'pnpm', 'Yarn', 'Webpack', 'Rollup', 'Vitest', 'Playwright',
  'Cypress', 'Storybook', 'Unocss', 'Radix Vue', 'Headless UI', 'Zod',
  'TanStack Query', 'Axios', 'Fetch API', 'WebSockets', 'Server-Sent Events',
  'Docker', 'Kubernetes', 'Vercel', 'Netlify', 'Cloudflare Pages', 'AWS',
  'Supabase', 'Firebase', 'Prisma', 'Drizzle ORM', 'PostgreSQL', 'MySQL',
  'MongoDB', 'Redis', 'GraphQL', 'REST API', 'tRPC', 'WebRTC', 'WebGL',
  'Three.js', 'GSAP', 'Framer Motion', 'Anime.js', 'Lottie', 'Canvas API',
  'SVG', 'Web Components', 'Shadow DOM', 'Custom Elements', 'HTML5', 'CSS3',
  'CSS Grid', 'Flexbox', 'Container Queries', 'Cascade Layers', 'CSS Variables',
  'PostCSS', 'Autoprefixer', 'Lightning CSS', 'SWC', 'esbuild', 'Turbopack',
  'Rome', 'Biome', 'Oxlint', 'TypeScript', 'JSDoc', 'TSDoc', 'API Extractor',
  'Changesets', 'Semantic Release', 'Conventional Commits', 'Husky', 'lint-staged',
  'Commitlint', 'Release It', 'Standard Version', 'Auto Changelog', 'Keep a Changelog'
]

const duplicated = [...tech, ...tech, ...tech]
const speed = 50 // pixels per second
</script>

<template>
  <div class="overflow-hidden border-y border-neutral-800 bg-neutral-900/50" aria-label="Tech stack">
    <div class="flex whitespace-nowrap animate-marquee" :style="`--duration: ${duplicated.length * 120 / speed}s`">
      <span v-for="(item, i) in duplicated" :key="i" class="flex-shrink-0 px-6 py-3 text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors border-r border-neutral-800">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
