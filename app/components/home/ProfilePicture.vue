<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <div class="z-10 flex items-center justify-center">
    <SpotlightButton rounded>
      <div
        class="relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
      >
        <img
          :src="profile.picture!"
          width="96"
          height="96"
          loading="lazy"
          decoding="async"
          :alt="profile.name + ' Profile Picture'"
          class="size-24 rounded-full border-2 border-neutral-800/30 object-cover"
        >
      </div>
    </SpotlightButton>
  </div>
</template>
