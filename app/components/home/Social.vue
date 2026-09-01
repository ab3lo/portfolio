<script setup lang="ts">
const socialMediaRegexMap = [
  { regex: /github\.com/, name: "GitHub", icon: "simple-icons:github" },
  { regex: /element\.io|matrix\.to/, name: "Element", icon: "simple-icons:element" },
  { regex: /slack\.com/, name: "Slack", icon: "simple-icons:slack" },
  { regex: /proton\.me|protonmail\.com/, name: "ProtonMail", icon: "simple-icons:protonmail" },
  { regex: /upwork\.com/, name: "Upwork", icon: "simple-icons:upwork" },
  { regex: /fiverr\.com/, name: "Fiverr", icon: "simple-icons:fiverr" },
];

const { socials } = useAppConfig();
const mappedSocials = Object.values(socials)
  .map((link) => {
    const foundSocial = socialMediaRegexMap.find((social) => social.regex.test(link));
    if (!foundSocial) return null;
    const { name, icon } = foundSocial;
    return { name, link, icon };
  })
  .filter(Boolean);
</script>

<template>
  <div class="my-7 flex items-center justify-center gap-6 sm:gap-10">
    <NuxtLink
      v-for="social in mappedSocials"
      :key="social.name"
      :to="social.link"
      target="_blank"
      class="flex items-center justify-center"
      :aria-label="'Go to ' + social.name + ' profile'"
    >
      <UIcon
        :name="social.icon"
        class="size-6 text-muted transition-all duration-300 hover:text-neutral-300"
        :alt="social.name + ' logo'"
        :aria-label="social.name + ' logo'"
      />
    </NuxtLink>
  </div>
</template>
