<template>
  <AppBlock title="Applications">
    <div class="grid gap-x-6 gap-y-4" :class="customClass">
      <div v-for="app in apps" :key="app.title">
        <ULink :to="app.url" target="_blank" class="flex gap-4 text-default">
          <NuxtImg
            preload
            :src="app.image"
            :alt="app.title"
            class="w-12 h-12 min-w-12 min-h-12 object-cover"
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
            <span class="app-soft">{{ app.description }}</span>
          </div>
        </ULink>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
import cv from "~/data/cv.json";

defineProps({
  customClass: {
    type: String,
    default: "",
  },
});

const apps = cv.applications;
</script>
