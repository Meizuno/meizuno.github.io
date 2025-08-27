<template>
  <div class="flex flex-col gap-8">
    <AppBlock v-for="cheatSheet in cheatSheets" :title="cheatSheet.title">
      <ContentRenderer :value="cheatSheet" />
    </AppBlock>
  </div>
</template>

<script setup lang="ts">
const cheatSheets = await queryCollection("cheatSheet").all();
</script>
