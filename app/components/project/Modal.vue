<script setup lang="ts">
import type { Project } from '~/data/portfolio'

const props = defineProps<{
  project: Project | null
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const expanded = ref(true)
const iframeLoaded = ref(false)

function close() {
  expanded.value = true
  emit('close')
}

function toggleExpand() {
  if (!props.project?.link) return
  iframeLoaded.value = false
  expanded.value = !expanded.value
}

function handleIframeLoad() {
  iframeLoaded.value = true
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) close()
}

useEventListener(document, 'keydown', handleKeydown)

function handleBackdropClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (target === e.currentTarget || target.classList.contains('modal-backdrop')) {
    close()
  }
}

function handleExpandedClick(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
}

watch(() => props.open, (val) => {
  if (val) {
    expanded.value = true
    iframeLoaded.value = false
  }
})

watch(expanded, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open && project"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8"
        @click="handleBackdropClick"
      >
        <div class="modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <Transition name="expand">
          <div
            v-if="expanded && project.link"
            class="expanded-window pointer-events-auto fixed z-10 flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl"
            @click="handleExpandedClick"
          >
            <div class="flex shrink-0 items-center gap-2 border-b border-white/10 bg-zinc-900/95 px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md">
              <div class="flex gap-1.5">
                <button
                  class="group/dot size-3 cursor-pointer rounded-full bg-red-500 transition-colors hover:brightness-110"
                  aria-label="Close preview"
                  @click="close"
                >
                  <span class="flex h-full items-center justify-center text-[8px] leading-none text-black/0 transition-colors group-hover/dot:text-black/80">
                    &#10005;
                  </span>
                </button>
                <button
                  class="group/dot size-3 cursor-pointer rounded-full bg-yellow-500 transition-colors hover:brightness-110"
                  aria-label="Minimize preview"
                  @click="toggleExpand"
                >
                  <span class="flex h-full items-center justify-center text-[8px] leading-none text-black/0 transition-colors group-hover/dot:text-black/80">
                    &#8722;
                  </span>
                </button>
                <button
                  class="group/dot size-3 cursor-pointer rounded-full bg-green-500 transition-colors hover:brightness-110"
                  aria-label="Minimize preview"
                  @click="close"
                >
                  <span class="flex h-full items-center justify-center text-[8px] leading-none text-black/0 transition-colors group-hover/dot:text-black/80">
                    &#43;
                  </span>
                </button>
              </div>
              <span class="ml-2 truncate text-sm text-white/60">{{ project.name }}</span>
            </div>

            <div class="relative min-h-0 flex-1 bg-zinc-950">
              <div v-if="!iframeLoaded" class="absolute inset-0 flex items-center justify-center">
                <div class="flex flex-col items-center gap-3">
                  <div class="size-8 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
                  <span class="text-sm text-white/40">Loading {{ project.name }}...</span>
                </div>
              </div>
              <iframe
                :src="project.link"
                :title="project.name + ' preview'"
                class="h-full w-full border-0 bg-zinc-950"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
                @load="handleIframeLoad"
              />
            </div>
          </div>
        </Transition>

        <Transition name="modal-content">
          <div
            v-if="!expanded"
            class="info-card pointer-events-auto relative z-10 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/95 shadow-2xl backdrop-blur-md"
            @click="handleExpandedClick"
          >
            <div class="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
              <div class="flex gap-1.5">
                <button
                  class="group/dot size-3 cursor-pointer rounded-full bg-red-500 transition-colors hover:brightness-110"
                  aria-label="Close"
                  @click="close"
                >
                  <span class="flex h-full items-center justify-center text-[8px] leading-none text-black/0 transition-colors group-hover/dot:text-black/80">
                    &#10005;
                  </span>
                </button>
                <button
                  v-if="project.link"
                  class="group/dot size-3 cursor-pointer rounded-full bg-yellow-500 transition-colors hover:brightness-110"
                  aria-label="Expand preview"
                  @click="toggleExpand"
                >
                  <span class="flex h-full items-center justify-center text-[8px] leading-none text-black/0 transition-colors group-hover/dot:text-black/80">
                    &#43;
                  </span>
                </button>
                <button
                  class="group/dot size-3 cursor-pointer rounded-full bg-green-500 transition-colors hover:brightness-110"
                  aria-label="Minimize"
                  @click="close"
                >
                  <span class="flex h-full items-center justify-center text-[8px] leading-none text-black/0 transition-colors group-hover/dot:text-black/80">
                    &#8722;
                  </span>
                </button>
              </div>
              <span class="ml-2 truncate text-sm text-white/60">{{ project.name }}</span>
            </div>

            <div class="p-4 sm:p-6">
              <h3 class="mb-2 text-lg font-semibold text-white">
                {{ project.name }}
              </h3>
              <p v-if="project.description" class="mb-3 text-sm leading-relaxed text-white/60">
                {{ project.description }}
              </p>
              <p class="mb-4 text-xs text-white/40">
                {{ project.release }}
              </p>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all hover:bg-white/10 hover:text-white"
                @click.stop
              >
                Visit Site
                <UIcon name="heroicons:arrow-top-right-on-square" class="size-3.5" />
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-content-enter-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-content-leave-active {
  transition: all 0.15s ease-in;
}

.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(8px);
}

.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(4px);
}

.expand-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.expand-leave-active {
  transition: all 0.2s ease-in;
}

.expand-enter-from {
  opacity: 0;
  transform: scale(0.92);
}

.expand-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.expanded-window {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.expand-enter-from .expanded-window,
.expand-leave-to .expanded-window {
  transform: translate(-50%, -50%) scale(0.92);
}

@media (max-width: 639px) {
  .expanded-window {
    width: 96vw;
    height: 80vh;
  }
}

@media (min-width: 640px) {
  .expanded-window {
    width: min(90vw, 1100px);
    height: min(82vh, 780px);
  }
}

.info-card {
  width: 100%;
  max-width: 420px;
  margin: 0 4px;
}
</style>
