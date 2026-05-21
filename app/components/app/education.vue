<template>
  <AppBlock v-if="items" title="Education">
    <div v-for="item in items" :key="item.institution" class="flex flex-col gap-4">
      <ULink :to="item.link" target="_blank" class="flex gap-4 text-default">
        <NuxtImg
          preload
          :src="item.image"
          alt="institution"
          class="w-12 h-12 min-w-12 min-h-12 object-cover"
        />
        <div class="flex flex-col text-sm">
          <div class="flex items-center gap-2 flex-wrap">
            <h4 class="text-xl font-semibold">{{ item.institution }}</h4>
            <UBadge
              v-if="item.incomplete"
              size="sm"
              variant="outline"
              color="neutral"
            >Incomplete</UBadge>
          </div>
          <span>{{ item.degree }}</span>
          <span class="app-soft">
            {{ item.startFormatted }} - {{ item.endFormatted }}
          </span>
        </div>
      </ULink>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
import cv from "~/data/cv.json";

const items = computed(() =>
  cv.educations.map((education) => ({
    ...education,
    startFormatted: formatDate(education.start),
    endFormatted: formatDate(education.end),
  }))
);
</script>
