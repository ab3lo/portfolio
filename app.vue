<script setup>
const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-neutral-100 font-mono antialiased">
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav class="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" class="text-xl font-medium tracking-tight hover:opacity-70 transition">Portfolio</a>
        <ul class="flex gap-8 text-sm">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="hover:text-neutral-400 transition">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="pt-20">
      <NuxtPage />
    </main>

    <footer class="border-t border-neutral-800 py-12 px-6">
      <p class="text-center text-neutral-500 text-sm">Built with Nuxt 3 + Tailwind</p>
    </footer>
  </div>
</template>

<style>
* { scroll-behavior: smooth; }
</style>
