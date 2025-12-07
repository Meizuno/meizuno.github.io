<template>
  <AppBlock title="Applications">
    <div class="grid gap-6" :class="customClass">
      <div v-for="app in apps">
        <ULink :to="app.url" target="_blank" class="flex gap-4 text-default">
          <NuxtImg
            preload
            :src="app.image"
            :alt="app.title"
            class="w-12 h-12 min-w-12 mix-h-12 object-cover"
          />
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
        </ULink>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
defineProps({
  customClass: {
    type: String,
    default: "",
  },
});

const data = await queryCollection("home").select("application").first();
const apps = data?.application ?? [];
</script>
