<template>
  <Block title="Applications">
    <div class="grid grid-cols-2 gap-12">
      <div v-for="app in apps" class="flex gap-4">
        <ULink :to="app.url" target="_blank">
          <NuxtImg
            :src="app.image"
            :alt="app.title"
            width="50"
            height="50"
            class="h-fit"
          />
        </ULink>
        <div class="flex flex-col text-sm">
          <div class="flex items-center gap-2">
            <h4 class="text-xl font-semibold">
              {{ app.title }}
            </h4>
            <UBadge size="sm" variant="outline" class="w-fit">{{ app.tag }}</UBadge>
          </div>
          <span class="text-muted">{{ app.description }}</span>
        </div>
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const { data: apps } = await useAsyncData("application", async () => {
  const data = await queryCollection("home").select("application").first();
  return data?.application ?? [];
});
</script>
