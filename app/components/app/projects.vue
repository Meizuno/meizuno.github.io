<template>
  <AppBlock v-if="items" title="Projects">
    <div class="flex flex-col gap-4">
      <div v-for="item in items" class="flex flex-col gap-4">
        <ULink :to="item.link" target="_blank" class="flex gap-4 text-default">
          <div class="h-fit py-1 dark:bg-neutral-50">
            <NuxtImg
              preload
              :src="item.image"
              alt="Project"
              class="w-16 h-12 min-w-16 mix-h-12 object-cover"
            />
          </div>
          <div class="flex flex-col text-sm">
            <span class="text-xl font-semibold text-default">
              {{ item.title }}
            </span>
            <span class="app-soft">Account: {{ item.duration }}</span>
            <span class="app-soft">{{ item.info }}</span>
          </div>
        </ULink>
        <div class="flex flex-col gap-8 ml-4">
          <div
            v-for="(project, index) in item.list"
            :key="index"
            class="relative flex gap-2"
          >
            <USeparator
              v-if="index < item.list.length - 1"
              orientation="vertical"
              type="dashed"
              size="sm"
              class="absolute left-3 top-11 h-3/4 my-auto"
            />
            <UIcon
              name="i-octicon-repo-16"
              class="size-7 min-h-7 min-w-7 app-soft mt-1.5"
            />
            <ULink
              :to="project.to"
              target="_blank"
              class="w-full flex flex-col text-sm"
            >
              <span class="text-default text-lg font-medium">
                {{ project.title }}
              </span>
              <span class="app-soft">{{ project.description }} </span>
              <span class="app-soft">{{ project.technologies }} </span>
            </ULink>
          </div>
        </div>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
type ProjectItem = {
  title: string;
  technologies: string;
  description: string;
  to: string;
};

type Project = {
  title: string;
  link: string;
  image: string;
  accountLink: string;
  start: string;
  end: string | null;
  info: string;
  list: ProjectItem[];
};

const projects: Project[] = [
  {
    title: "Meizuno",
    link: "https://github.com/",
    image: "/images/github.webp",
    accountLink: "https://github.com/Meizuno",
    start: "2018-12",
    end: null,
    info: "Repositories: 14",
    list: [
      {
        title: "Text Book",
        technologies: "Nuxt, Tauri",
        description: "Mobile application for notes, supports Markdown",
        to: "https://github.com/Meizuno/TextBook",
      },
      {
        title: "Authenticator",
        technologies: "Nuxt, Capacitor",
        description:
          "Generating OTPs (One-Time Passwords) and managing 2FA (Two-Factor Authentication)",
        to: "https://github.com/Meizuno/Authenticator",
      },
      {
        title: "Andrii",
        technologies: "Nuxt, Nuxt Content",
        description: "Client project using Nuxt Content",
        to: "https://github.com/Meizuno/Andrii",
      },
      {
        title: "Tic-Tak-Toe",
        technologies: "Python",
        description: "Game with GUI on Python with 'pygame' package",
        to: "https://github.com/Meizuno/TicTakToe",
      },
      {
        title: "Online Market",
        technologies: "Python, Django",
        description: "Web-market on framework Django",
        to: "https://github.com/Meizuno/online-market",
      },
    ],
  },
];

const items = computed(() =>
  projects?.map((project) => ({
    ...project,
    duration: getDuration(project.start, project.end),
  }))
);
</script>
