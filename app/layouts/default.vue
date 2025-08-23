<template>
  <UContainer class="py-2 flex flex-col gap-2">
    <header
      class="bg-muted p-4 rounded flex flex-col md:flex-row justify-between gap-4"
    >
      <AppUser class="flex-1"/>
      <USeparator class="block md:hidden" />
      <div class="flex-1 flex justify-between items-center">
        <UNavigationMenu
          :items="items"
          size="lg"
          :ui="{
            linkLabel: 'hidden sm:block truncate lg:text-xl',
            linkLeadingIcon: 'shrink-0 size-8',
            link: 'flex-col gap-2 lg:flex-row',
          }"
        />
        <div class="flex items-center">
          <UButton
            icon="i-lucide-download"
            color="neutral"
            variant="ghost"
            size="xl"
            @click="console.log('Download CV')"
            class="hover:bg-default"
          />
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
              :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
              color="neutral"
              variant="ghost"
              size="xl"
              class="hover:bg-default"
              @click="isDark = !isDark"
            />

            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>
      </div>
    </header>
    <main class="">
      <slot />
    </main>
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

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>
