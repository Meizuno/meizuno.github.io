<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="text-xl font-semibold my-2">{{ title }}</h3>
      <USeparator />
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
