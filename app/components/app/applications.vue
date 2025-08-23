<template>
  <AppBlock title="Applications">
    <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
      <div v-for="app in apps" class="flex gap-4">
        <ULink :to="app.url" target="_blank">
          <NuxtImg
            preload
            :src="app.image"
            :alt="app.title"
            class="w-12 h-12 min-w-12 mix-h-12 object-cover"
          />
        </ULink>
        <div class="flex flex-col text-sm">
          <div class="flex items-center gap-2">
            <h4 class="text-xl font-semibold">
              {{ app.title }}
            </h4>
            <UBadge size="sm" variant="outline" class="w-fit">{{
              app.tag
            }}</UBadge>
          </div>
          <span class="text-muted">{{ app.description }}</span>
        </div>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
const { data: apps } = await useAsyncData("application", async () => {
  const data = await queryCollection("home").select("application").first();
  return data?.application ?? [];
});
</script>
