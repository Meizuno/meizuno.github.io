<template>
  <Block v-if="items" title="Projects">
    <div class="flex flex-col gap-4">
      <div v-for="item in items" class="flex flex-col gap-4">
        <div class="flex gap-4">
          <ULink
            :to="item.link"
            target="_blank"
            class="h-fit py-1 dark:bg-neutral-50"
          >
            <NuxtImg
              preload
              :src="item.image"
              alt="Project"
              class="w-16 h-12 min-w-16 mix-h-12 object-cover"
            />
          </ULink>
          <div class="flex flex-col text-sm">
            <ULink
              :to="item.accountLink"
              target="_blank"
              class="text-xl font-semibold text-default"
            >
              {{ item.title }}
            </ULink>
            <span class="text-muted">Account: {{ item.duration }}</span>
            <span class="text-muted">{{ item.info }}</span>
          </div>
        </div>
        <div class="flex flex-col gap-8 ml-4">
          <div
            v-for="(project, index) in item.list"
            :key="index"
            class="flex gap-2"
          >
            <UIcon
              name="i-octicon-repo-16"
              class="size-7 min-h-7 min-w-7 text-muted mt-1.5"
            />
            <div class="flex flex-col text-sm">
              <ULink
                :to="project.to"
                target="_blank"
                class="text-default text-lg font-medium"
              >
                {{ project.title }}
              </ULink>
              <span class="text-muted">{{ project.description }} </span>
              <span class="text-muted">{{ project.technologies }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Block>
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
