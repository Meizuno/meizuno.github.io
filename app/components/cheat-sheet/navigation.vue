<template>
  <UNavigationMenu
    orientation="vertical"
    :items="navigation"
    color="neutral"
    :ui="{
      linkLabel: 'text-muted hover:text-default',
      link: 'text-md',
      linkTrailing: 'ms-0 hidden'
    }"
  />
</template>

<script setup lang="ts">
const { data } = await useAsyncData("cheat-sheet", () => {
  return queryCollection("cheatSheet").all();
});
const navigation = computed(() => {
  return data.value?.map((item) => {
    return {
      label: item.title,
      defaultOpen: true,
      icon: item.icon,
      children: item.content.map((child) => {
        return {
          label: child.title,
          to: `/cheat-sheet#${child.reference}`,
        };
      }),
    };
  });
});
</script>
