<template>
  <Block title="Skills">
    <div class="flex flex-col gap-6">
      <div v-for="(skill, index) in skills" :key="index" class="flex flex-col">
        <div class="flex justify-between text-muted">
          <ULink :to="skill.to" target="_blank" class="flex gap-1">
            <span class="font-semibold">{{ skill.label }}</span>
            <UIcon name="i-heroicons-outline-external-link" class="size-3" />
          </ULink>
          <span class="text-xs">{{ skill.value / 10 }}/{{ 100/10 }}</span>
        </div>
        <UProgress v-model="skill.value" />
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const skills = ref([
  {
    label: "Git",
    value: 90,
    to: "https://git-scm.com/",
    description: "GitHub, GitLab",
  },
  {
    label: "Python",
    value: 95,
    to: "https://www.python.org/",
    description: "Django, FastAPI",
  },
  {
    label: "Nuxt",
    value: 80,
    to: "https://nuxt.com/",
    description: "Nuxt UI",
  },
  {
    label: "Docker",
    value: 90,
    to: "https://www.docker.com/",
    description: "Docker Compose",
  },
  {
    label: "Capacitor",
    value: 70,
    to: "https://capacitorjs.com/",
    description: "IOS, Android",
  },
  {
    label: "Tauri",
    value: 60,
    to: "https://v2.tauri.app/",
    description: "IOS, Android, Windows",
  },
]);
</script>
