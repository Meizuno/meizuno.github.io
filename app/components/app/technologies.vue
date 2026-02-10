<template>
  <AppBlock title="Technologies">
    <div class="flex flex-col gap-4 app-soft font-semibold">
      <div
        v-for="(technology, index) in technologies"
        :key="index"
        class="flex gap-4 items-center"
      >
        <UIcon
          name="i-material-symbols-check"
          class="size-7 min-w-7 min-h-7 text-primary"
        />
        <span>{{ technology }}</span>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
const technologies: string[] = [
  "GitHub/GitLab (CI/CD, Actions)",
  "Django, FastAPI",
  "Javascript / Typescript",
  "Nuxt UI (Vue, Tailwind)",
  "Docker (Swarm, Compose, Volumes)",
  "Tauri (IOS, Android, Windows)",
];
</script>
