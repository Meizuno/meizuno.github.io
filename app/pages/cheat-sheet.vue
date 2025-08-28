<template>
  <div
    class="h-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] xl:grid-cols-[2fr_5fr] gap-2"
  >
    <div class="bg-muted py-2 px-4 lg:px-6 rounded">
      <div class="hidden lg:block sticky top-2">
        <UNavigationMenu
          orientation="vertical"
          :items="navigation"
          color="neutral"
          :ui="{
            linkLabel: 'text-muted hover:text-default',
            link: 'text-md',
            linkTrailing: 'ms-0 hidden',
          }"
        />
      </div>
      <UCollapsible class="lg:hidden flex flex-col gap-2">
        <UButton
          label="Quick Navigation"
          color="neutral"
          variant="ghost"
          size="xl"
          trailing-icon="i-lucide-chevron-down"
          class="justify-between text-2xl font-semibold px-0"
        />

        <template #content>
          <UNavigationMenu
            orientation="vertical"
            :items="navigation"
            color="neutral"
            :ui="{
              linkLabel: 'text-muted hover:text-default',
              link: 'text-md',
              linkTrailing: 'ms-0 hidden',
            }"
          />
        </template>
      </UCollapsible>
    </div>
    <div class="bg-muted py-2 px-4 lg:px-6 rounded overflow-auto">
      <div class="flex flex-col">
        <div class="flex flex-col" v-for="cheatSheet in cheatSheets">
          <div>
            <h2 class="text-2xl font-semibold my-2 flex gap-2 items-center">
              <UIcon :name="cheatSheet.icon" />
              <span>{{ cheatSheet.title }}</span>
            </h2>
            <USeparator />
          </div>
          <ContentRenderer :value="cheatSheet" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cheatSheets = await queryCollection("cheatSheet").all();
const navigation = computed(() => {
  return cheatSheets.map((cheatSheet) => {
    return {
      label: cheatSheet.title,
      defaultOpen: true,
      icon: cheatSheet.icon,
      children: cheatSheet.body.toc!.links.map((link) => ({
        label: link.text,
        to: `/cheat-sheet#${link.id}`,
      })),
    };
  });
});
</script>
