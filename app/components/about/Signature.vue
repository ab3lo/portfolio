<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 90"
    width="260"
    class="signature"
    aria-label="Signature"
  >
    <text
      class="signature"
      x="50%"
      y="65%"
      text-anchor="middle"
      dominant-baseline="middle"
    >{{ profile.name }}</text>
  </svg>
</template>

<style scoped>
.signature {
  fill: #b8b8b8;
  font-family: var(--font-signature);
  filter: drop-shadow(0 0 12px rgba(184, 184, 184, 0.35));
}
.signature text {
  font-size: 52px;
}
</style>
