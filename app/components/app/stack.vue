<template>
  <AppBlock title="Tech Stack">
    <div class="flex flex-col gap-4">
      <div
        v-for="group in stack"
        :key="group.category"
        class="flex flex-col gap-1.5"
      >
        <span class="app-kicker">{{ group.category }}</span>
        <div class="text-sm leading-relaxed">
          <template v-for="(item, i) in group.items" :key="item.label">
            <ULink
              :to="item.to"
              target="_blank"
              class="text-default font-medium hover:text-primary transition-colors"
              >{{ item.label }}</ULink
            ><span v-if="i < group.items.length - 1" class="app-soft"> · </span>
          </template>
        </div>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
import cv from "~/data/cv.json";

const stack = cv.stack;
</script>
