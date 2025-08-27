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
    console.log(cheatSheet.body.value)
    return {
      label: cheatSheet.title,
      defaultOpen: true,
      icon: cheatSheet.icon,
      children: cheatSheet.body.value
        .filter((value) => value[0] === "h4")
        .map((value) => ({
          label: value[2],
          to: `/cheat-sheet#${value[1].id}`,
        })),
    };
  });
});
</script>
