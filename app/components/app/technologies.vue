<template>
  <AppBlock title="Technologies">
    <div class="flex flex-col gap-4 text-muted font-semibold">
      <div
        v-for="(technology, index) in technologies"
        :key="index"
        class="flex gap-4 items-center"
      >
        <UIcon
          name="i-material-symbols-check"
          class="size-7 min-w-7 min-h-7 text-primary"
        />
        <span>{{ technology }}</span>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
const { data: technologies } = await useAsyncData("technologies", async () => {
  const data = await queryCollection("home").select("technologies").first();
  return data?.technologies ?? [];
});
</script>
