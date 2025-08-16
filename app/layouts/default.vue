<template>
  <UContainer class="h-dvh py-2 overflow-hidden">
    <div
      class="h-full grid grid-rows-[auto_1fr] gap-2 overflow-auto scrollbar-none"
    >
      <header
        class="bg-muted h-fit p-4 rounded flex items-center justify-between"
      >
        <User />
        <UNavigationMenu :items="items" size="lg" />
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
  // {
  //   label: "Cheat Sheet",
  //   icon: "i-streamline-manual-book",
  //   to: "/cheat-sheet",
  // },
]);
</script>
