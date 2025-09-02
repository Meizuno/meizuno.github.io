<template>
  <div class="bg-muted py-2 px-4 lg:px-6 rounded">
    <div class="flex flex-col" v-for="script in scripts">
      <div>
        <h2 class="text-2xl font-semibold my-2 flex gap-2 items-center">
          <UIcon :name="script.icon" />
          <span>{{ script.title }}</span>
        </h2>
        <USeparator />
      </div>
      <ContentRenderer :value="script" />
    </div>
  </div>
</template>

<script setup lang="ts">
const scripts = await queryCollection("scripts").all();
</script>
