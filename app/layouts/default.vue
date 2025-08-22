<template>
  <UContainer class="h-dvh py-2">
    <div
      class="h-full grid grid-rows-[auto_1fr] gap-2"
    >
      <header
        class="bg-muted h-fit p-4 rounded flex items-center justify-between gap-4"
      >
        <User />
        <UNavigationMenu
          :items="items"
          size="lg"
          :ui="{
            linkLabel: 'hidden sm:block truncate md:text-xl',
            linkLeadingIcon: 'shrink-0 size-8',
            link: 'flex-col gap-1 md:gap-2 md:flex-row',
          }"
        />
      </header>
      <slot />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Portfolio",
    icon: "i-ph-read-cv-logo-bold",
    to: "/",
  },
  {
    label: "Cheat Sheet",
    icon: "i-streamline-manual-book",
    to: "/cheat-sheet",
  },
]);
</script>
