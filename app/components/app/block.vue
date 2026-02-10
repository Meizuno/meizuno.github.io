<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <span class="app-kicker">Section</span>
      <h3 class="app-title font-semibold">{{ title }}</h3>
      <div class="app-divider" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
