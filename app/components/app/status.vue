<template>
  <AppBlock title="Status">
    <div class="flex flex-col gap-3 text-sm">
      <div class="flex items-center gap-2.5">
        <span class="flex size-5 shrink-0 items-center justify-center">
          <UIcon name="i-lucide-map-pin" class="size-4 text-primary" />
        </span>
        <span>{{ profile.location }}</span>
      </div>
      <div class="flex items-center gap-2.5">
        <span class="flex size-5 shrink-0 items-center justify-center">
          <UIcon name="i-lucide-clock" class="size-4 text-primary" />
        </span>
        <span>{{ profile.timezone }}</span>
      </div>
      <div class="flex items-center gap-2.5">
        <span class="flex size-5 shrink-0 items-center justify-center">
          <span class="relative flex size-2.5">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60"
            />
            <span class="relative inline-flex size-2.5 rounded-full bg-green-500" />
          </span>
        </span>
        <span>{{ profile.availability }}</span>
      </div>
      <div
        class="pt-3 mt-1 border-t border-(--app-border) grid grid-cols-2 gap-2 text-center"
      >
        <div class="flex flex-col gap-0.5">
          <span class="text-xl font-bold text-primary">{{ codingYears }}+</span>
          <span class="app-soft text-xs uppercase tracking-wider">Years coding</span>
        </div>
        <div class="flex flex-col gap-0.5">
          <span class="text-xl font-bold text-primary">{{ professionalYears }}+</span>
          <span class="app-soft text-xs uppercase tracking-wider">Years pro</span>
        </div>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
import cv from "~/data/cv.json";

const profile = cv.profile;

const yearsSince = (dateStr: string): number => {
  const [y, m] = dateStr.split("-").map(Number);
  const start = new Date(y!, (m ?? 1) - 1);
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  return Math.floor(months / 12);
};

const codingYears = yearsSince(cv.projects[0]!.start);
const professionalYears = yearsSince(cv.experiences[0]!.start);
</script>
