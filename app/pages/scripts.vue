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
    </div>
  </div>
</template>

<script setup lang="ts">
const scripts = await queryCollection("scripts").all();
const navigation = computed(() => {
  return scripts.map((script) => {
    return {
      label: script.title,
      defaultOpen: true,
      icon: script.icon,
      children: script.body.toc!.links.map((link) => ({
        label: link.text,
        to: `/scripts#${link.id}`,
      })),
    };
  });
});
</script>
