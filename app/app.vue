<script setup lang="ts">
import { Toaster } from 'vue-sonner'

const config = useAppConfig()

useSeoMeta({
  title: () => config.seo.title,
  description: () => config.seo.description,
  ogTitle: () => config.seo.title,
  ogDescription: () => config.seo.description,
  ogImage: () => `${config.seo.url}/og.webp`,
  ogType: 'website',
  ogUrl: () => config.seo.url,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <Html
    lang="en"
    class="font-geist text-[var(--ui-text)] transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <LayoutScrollToTop />
      <NuxtLayout>
        <UApp>
          <NuxtPage />
        </UApp>
      </NuxtLayout>
      <Toaster close-button />
      <DotPattern class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
    </Body>
  </Html>
</template>
