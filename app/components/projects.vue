<template>
  <Block title="Projects">
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <ULink
          to="https://github.com/"
          target="_blank"
          class="h-fit py-1 bg-neutral-200 dark:bg-neutral-50"
        >
          <NuxtImg
            src="/images/github.webp"
            alt="GitHub"
            width="70"
            height="50"
          />
        </ULink>
        <div class="flex flex-col text-sm">
          <ULink
            to="https://github.com/Meizuno"
            target="_blank"
            class="text-xl font-semibold text-default"
          >
            Meizuno
          </ULink>
          <span class="text-muted">Account: {{ githubTime }}</span>
          <ULink
            to="https://github.com/Meizuno?tab=repositories"
            target="_blank"
            class="text-muted"
          >
            Repositories: {{ githubUser.public_repos }}
          </ULink>
        </div>
      </div>
      <div class="flex flex-col gap-8 ml-4">
        <div v-for="(item, index) in items" :key="index" class="flex gap-2">
          <UIcon
            name="i-octicon-repo-16"
            class="size-5 min-h-5 min-w-5 text-muted mt-1.5"
          />
          <div class="flex flex-col text-sm">
            <ULink
              :to="item.to"
              target="_blank"
              class="text-default text-lg font-medium"
            >
              {{ item.title }}
            </ULink>
            <span class="text-muted">{{ item.description }} </span>
            <span class="text-muted">{{ item.technologies }} </span>
          </div>
        </div>
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const items = ref([
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
]);

function getDuration(start: Date, end: Date = new Date()): string {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remMonths = (months % 12) + 1;

  let parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remMonths > 0) parts.push(`${remMonths} mo${remMonths > 1 ? "s" : ""}`);

  return parts.join(" ") || "Less than a month";
}

const githubTime = getDuration(new Date(2018, 12));

const githubUser: { public_repos: number } = await $fetch(
  "https://api.github.com/users/Meizuno"
);
</script>
