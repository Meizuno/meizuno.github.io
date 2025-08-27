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
const cheatSheets = await queryCollection("cheatSheet").all();
const navigation = computed(() => {
  return cheatSheets.map((cheatSheet) => {
    return {
      label: cheatSheet.title,
      defaultOpen: true,
      icon: cheatSheet.icon,
      children: cheatSheet.body.toc!.links
        .map((link) => ({
          label: link.text,
          to: `/cheat-sheet#${link.id}`,
        })),
    };
  });
});
</script>
