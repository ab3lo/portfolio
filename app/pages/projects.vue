<script setup lang="ts">
import { projects, type Project } from '~/data/portfolio'

const modalProject = ref<Project | null>(null)
const modalOpen = ref(false)

function openModal(project: Project) {
  modalProject.value = project
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      Projects
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      A selection of things I've built
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project
        @open-modal="openModal"
      />
    </div>
  </section>

  <ProjectModal
    :project="modalProject"
    :open="modalOpen"
    @close="closeModal"
  />
</template>
