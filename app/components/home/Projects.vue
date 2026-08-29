<script setup lang="ts">
import { projects } from '~/data/portfolio'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <h3 class="font-newsreader italic text-white-shadow text-xl">
      Selected Work
    </h3>
    <div class="flex w-full flex-col gap-4">
      <NuxtLink
        v-for="project in projects.filter(p => p.featured)"
        :key="project.name"
        role="link"
        class="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-neutral-900"
        :to="project.link"
        :aria-label="'go to ' + project.name + ' project website'"
        target="_blank"
      >
        <span class="whitespace-nowrap font-medium">
          {{ project.name }}
        </span>
        <div class="mx-2 h-[0.1px] w-full bg-muted" />
        <span class="whitespace-nowrap text-muted">
          {{ project.release }}
        </span>
      </NuxtLink>
    </div>
    <NuxtLink to="/projects">
      <span class="font-newsreader italic text-white-shadow cursor-pointer">
        See more
      </span>
    </NuxtLink>
  </div>
</template>
