<template>
  <AppBlock v-if="items" title="Projects">
    <div class="flex flex-col gap-4">
      <div v-for="item in items" :key="item.title" class="flex flex-col gap-4">
        <ULink :to="item.link" target="_blank" class="flex gap-4 text-default">
          <div class="h-fit py-1 dark:bg-neutral-50">
            <NuxtImg
              preload
              :src="item.image"
              alt="Project"
              class="w-16 h-12 min-w-16 min-h-12 object-cover"
            />
          </div>
          <div class="flex flex-col text-sm">
            <span class="text-xl font-semibold text-default">
              {{ item.title }}
            </span>
            <span class="app-soft">On GitHub for {{ item.duration }}</span>
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
import cv from "~/data/cv.json";

type GithubUser = {
  created_at: string;
  public_repos: number;
  html_url: string;
};

const projects = cv.projects;

const { data: ghUsers } = await useAsyncData<(GithubUser | null)[]>(
  "github-users",
  () =>
    Promise.all(
      projects.map((p) =>
        $fetch<GithubUser>(`https://api.github.com/users/${p.username}`, {
          headers: { Accept: "application/vnd.github+json" },
        }).catch(() => null)
      )
    ),
  { default: () => projects.map(() => null) }
);

const items = computed(() =>
  projects.map((project, i) => {
    const gh = ghUsers.value?.[i];
    const start = gh?.created_at?.slice(0, 7) ?? project.start;
    return {
      ...project,
      link: gh?.html_url ?? `https://github.com/${project.username}`,
      info: gh ? `Repositories: ${gh.public_repos}` : "",
      duration: getDuration(start, project.end),
    };
  })
);
</script>
