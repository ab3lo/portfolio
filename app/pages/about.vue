<script setup lang="ts">
import { stack, experiences } from '~/data/portfolio'
const { profile } = useAppConfig()
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20 text-[var(--ui-text-toned)]">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      About
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      {{ profile.name }} — {{ profile.job }}
    </h2>
    <Divider class="mb-8 mt-2" />

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <AboutProfilePicture />
      <div class="relative flex flex-col gap-3 sm:ml-4">
        <h3 class="text-lg">
          Intro
        </h3>
        <div class="flex flex-col gap-4 text-primary">
          <p>
            I'm a developer passionate about building fast, beautiful and accessible
            experiences for the web. I love turning ideas into polished products.
          </p>
          <p>
            I work mainly with the Vue / Nuxt ecosystem, and I care deeply about design,
            performance and developer experience.
          </p>
        </div>
        <AboutSignature class="absolute -bottom-24 right-0 hidden w-40 sm:block" />
        <AboutSignature class="black absolute -bottom-24 -right-2 w-32 sm:hidden" />
      </div>
    </div>

    <Divider class="my-8" />

    <div class="flex flex-col gap-6">
      <h3 class="text-white-shadow font-newsreader italic text-3xl">
        Experience
      </h3>
      <ul class="flex flex-col gap-4">
        <li
          v-for="exp in experiences"
          :key="exp.role + exp.company"
          class="flex flex-col gap-1 border-l border-white/10 pl-4"
        >
          <span class="font-medium text-white/90">
            {{ exp.role }} — {{ exp.company }}
          </span>
          <span class="text-sm text-muted">
            {{ exp.period }}
          </span>
          <p class="text-sm text-[var(--ui-text-toned)]">
            {{ exp.description }}
          </p>
        </li>
      </ul>
    </div>

    <Divider class="my-8" />

    <div class="flex flex-col gap-3">
      <div class="mb-6 flex flex-col gap-1">
        <h3 class="text-white-shadow font-newsreader italic text-3xl">
          Stack
        </h3>
        <p>
          Tools and technologies I enjoy working with.
        </p>
      </div>
      <div class="flex flex-wrap gap-4">
        <SpotlightCard
          v-for="item in stack"
          :key="item.name"
          white
        >
          <NuxtLink
            :to="item.link"
            target="_blank"
            :aria-label="item.name + ' link'"
            class="flex gap-2 p-6"
          >
            <UIcon
              :name="item.icon"
              class="size-9"
              :font-controlled="false"
              :alt="item.name + ' logo'"
            />
          </NuxtLink>
        </SpotlightCard>
      </div>
    </div>
  </section>
</template>
