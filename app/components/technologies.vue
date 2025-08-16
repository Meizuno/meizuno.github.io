<template>
  <Block title="Technologies">
    <div class="flex flex-col gap-4 text-muted font-semibold">
      <div
        v-for="(technology, index) in technologies"
        :key="index"
        class="flex gap-4 items-center"
      >
        <UIcon name="i-material-symbols-check" class="size-7 text-primary" />
        <span>{{ technology }}</span>
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const technologies = ref([
  "GitHub/GitLab (CI/CD, Actions)",
  "Django, FastAPI",
  "Javascript / Typescript",
  "Nuxt UI (Vue, Tailwind)",
  "Docker (Network, Compose, Volumes)",
  "Tauri (IOS, Android, Windows)",
]);
</script>
