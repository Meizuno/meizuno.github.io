<template>
  <Block v-if="items" title="Experience">
    <div class="flex flex-col gap-4">
      <div v-for="item in items" class="flex flex-col gap-4">
        <div class="flex gap-4">
          <ULink :to="item.link" target="_blank">
            <NuxtImg
              preload
              :src="item.image"
              :alt="item.company"
              width="60"
              height="60"
              class="h-fit"
            />
          </ULink>
          <div class="flex flex-col text-sm">
            <h4 class="text-xl font-semibold">{{ item.company }}</h4>
            <span class="text-muted"
              >{{ item.format }} • {{ item.duration }}</span
            >
            <span class="text-muted">{{ item.location }}</span>
          </div>
        </div>
        <div class="flex flex-col gap-8 ml-4">
          <div v-for="(role, index) in item.roles" class="relative flex gap-2">
            <USeparator
              v-if="index < item.roles.length - 1"
              orientation="vertical"
              size="sm"
              class="absolute left-1.75 top-7.5 h-full"
            />
            <UIcon name="i-icon-park-outline-dot" class="text-muted mt-1.5" />
            <div class="flex flex-col text-sm">
              <h5 class="text-lg font-medium">{{ role.title }}</h5>
              <span class="text-muted">
                {{ role.startFormatted }} - {{ role.endFormatted }} •
                {{ role.duration }}
              </span>
              <span class="text-muted">{{ role.format }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const { data: experiences } = await useAsyncData("experience", async () => {
  const data = await queryCollection("home").select("experience").first();
  return data?.experience ?? [];
});

const items = computed(() =>
  experiences.value?.map((experience) => ({
    ...experience,
    duration: getDuration(experience.start, experience.end),
    roles: experience.roles.map((role) => ({
      ...role,
      duration: getDuration(role.start, role.end),
      startFormatted: formatDate(role.start),
      endFormatted: formatDate(role.end),
    })),
  }))
);
</script>
