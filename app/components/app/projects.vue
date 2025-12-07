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
            <span class="text-muted">Account: {{ item.duration }}</span>
            <span class="text-muted">{{ item.info }}</span>
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
              class="size-7 min-h-7 min-w-7 text-muted mt-1.5"
            />
            <ULink
              :to="project.to"
              target="_blank"
              class="w-full flex flex-col text-sm"
            >
              <span class="text-default text-lg font-medium">
                {{ project.title }}
              </span>
              <span class="text-muted">{{ project.description }} </span>
              <span class="text-muted">{{ project.technologies }} </span>
            </ULink>
          </div>
        </div>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData("project", async () => {
  const data = await queryCollection("home").select("project").first();
  return data?.project ?? [];
});

const items = computed(() =>
  projects.value?.map((project) => ({
    ...project,
    duration: getDuration(project.start, project.end),
  }))
);
</script>
