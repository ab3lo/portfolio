<script setup lang="ts">
const { profile } = useAppConfig()

const pictureUrl = computed(() => {
  try {
    const u = new URL(profile.picture ?? '')
    if (u.hostname.endsWith('githubusercontent.com') || u.hostname.startsWith('avatars.')) {
      u.searchParams.set('size', '96')
    }
    return u.toString()
  }
  catch {
    return profile.picture!
  }
})
</script>

<template>
  <div class="z-10 flex items-center justify-center">
    <SpotlightButton rounded>
      <div
        class="relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
      >
        <img
          :src="pictureUrl"
          width="96"
          height="96"
          :fetchpriority="'high'"
          decoding="async"
          :alt="profile.name + ' Profile Picture'"
          class="size-24 rounded-full border-2 border-neutral-800/30 object-cover"
        >
      </div>
    </SpotlightButton>
  </div>
</template>
