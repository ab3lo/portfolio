<script setup>
const projects = [
  { title: 'Project One', desc: 'A description of project one', tags: ['Vue', 'Nuxt', 'Tailwind'], href: '#' },
  { title: 'Project Two', desc: 'A description of project two', tags: ['React', 'Next.js', 'TypeScript'], href: '#' },
  { title: 'Project Three', desc: 'A description of project three', tags: ['Vue', 'Pinia', 'Vite'], href: '#' },
]
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-32">
    <div class="space-y-8">
      <div>
        <h1 class="text-6xl md:text-8xl font-medium tracking-tight leading-none">
          Hi, I'm <span class="text-neutral-400">Your Name</span>
        </h1>
        <p class="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl">
          I build things for the web. Currently focused on Vue, Nuxt, and modern frontend architecture.
        </p>
      </div>

      <div class="pt-16 border-t border-neutral-800">
        <h2 class="text-2xl font-medium mb-12">Selected Work</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article 
            v-for="project in projects" 
            :key="project.title" 
            class="border border-neutral-800 p-6 hover:border-neutral-700 transition relative group"
          >
            <h3 class="text-xl font-medium mb-2 group-hover:text-neutral-300 transition">{{ project.title }}</h3>
            <p class="text-neutral-500 text-sm mb-4 line-clamp-2">{{ project.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="text-xs px-2 py-1 border border-neutral-700 rounded"
              >{{ tag }}</span>
            </div>
            <a :href="project.href" class="absolute inset-0" aria-label="View project"></a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
