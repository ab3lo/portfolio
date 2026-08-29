<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <section class="relative pt-12">
    <div class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />

    <div class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      <div class="absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:blur-[200px]" />

      <HomeProfilePicture />

      <div class="z-20 flex flex-col items-center justify-center">
        <div class="font-geist">
          <h1 class="mx-auto max-w-3xl text-center text-3xl font-medium text-pretty lg:text-4xl">
            {{ profile.job }}
          </h1>
          <h2 class="mx-auto mt-4 max-w-xl text-center text-lg text-white/60 antialiased">
            {{ profile.name }} — building fast, beautiful experiences for the web.
          </h2>
        </div>

        <SettingsAvailability
          background
          class="mt-2"
        />

        <HomeSocial />

        <HomeCTA />

        <div class="mt-12 flex w-full max-w-3xl flex-col gap-4 lg:mt-16">
          <HomeProjects />
        </div>

        <Divider class="my-9" />

        <HomeFaq />
      </div>
    </div>
  </section>
</template>
