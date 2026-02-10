<template>
  <AppBlock title="Skills">
    <div class="flex flex-col gap-6">
      <div v-for="(skill, index) in skills" :key="index" class="flex flex-col">
        <div class="flex justify-between app-soft">
          <ULink :to="skill.to" target="_blank" class="flex gap-1">
            <span class="font-semibold">{{ skill.label }}</span>
            <UIcon name="i-heroicons-outline-external-link" class="size-3" />
          </ULink>
          <span class="text-xs">{{ skill.value }}/{{ skill.max || 10 }}</span>
        </div>
        <UProgress v-model="skillValue[index]" :max="skill.max || 10" />
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
type Skill = {
  label: string;
  value: number;
  max?: number;
  to: string;
  description?: string;
};

const skills: Skill[] = [
  {
    label: "Git",
    value: 9,
    max: 10,
    to: "https://git-scm.com/",
    description: "GitHub, GitLab",
  },
  {
    label: "Python",
    value: 9.5,
    max: 10,
    to: "https://www.python.org/",
    description: "Django, FastAPI",
  },
  {
    label: "Nuxt",
    value: 8,
    max: 10,
    to: "https://nuxt.com/",
    description: "Nuxt UI",
  },
  {
    label: "Docker",
    value: 9,
    max: 10,
    to: "https://www.docker.com/",
    description: "Docker Compose",
  },
  {
    label: "Capacitor",
    value: 7,
    to: "https://capacitorjs.com/",
    description: "IOS, Android",
  },
  {
    label: "Tauri",
    value: 6,
    max: 10,
    to: "https://v2.tauri.app/",
    description: "IOS, Android, Windows",
  },
];

const skillValue = ref(skills?.map(() => 0) || []);

onMounted(() => {
  skillValue.value = skills?.map((skill) => skill.value) || [];
});
</script>
