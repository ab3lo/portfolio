<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 8,
  },
})
</script>

<template>
  <NuxtLink
    to="/"
    class="flex shrink-0 items-center"
    aria-label="Go back to home page"
  >
    <UIcon name="custom:ab3lo" :class="`size-${size}`" />
  </NuxtLink>
</template>