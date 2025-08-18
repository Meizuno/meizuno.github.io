<template>
  <Block v-if="items" title="Education">
    <div v-for="item in items" class="flex flex-col gap-4">
      <div class="flex gap-4">
        <ULink :to="item.link" target="_blank">
          <NuxtImg
            preload
            :src="item.image"
            alt="institution"
            class="w-12 h-12 min-w-12 mix-h-12 object-cover"
          />
        </ULink>
        <div class="flex flex-col text-sm">
          <h4 class="text-xl font-semibold">{{ item.institution }}</h4>
          <span>{{ item.degree }}</span>
          <span class="text-muted">
            {{ item.startFormatted }} - {{ item.endFormatted }}
          </span>
        </div>
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const { data: educations } = await useAsyncData("education", async () => {
  const data = await queryCollection("home").select("education").first();
  return data?.education ?? [];
});

const items = computed(() =>
  educations.value?.map((education) => ({
    ...education,
    startFormatted: formatDate(education.start),
    endFormatted: formatDate(education.end),
  }))
);
</script>
