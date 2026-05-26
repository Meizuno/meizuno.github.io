<template>
  <UContainer class="py-4 flex flex-col gap-4">
    <header
      class="app-shell p-4 md:p-4 flex flex-col md:flex-row justify-between gap-4"
    >
      <AppUser class="flex-1" />
      <USeparator class="block md:hidden" />
      <div class="flex-1 flex justify-end items-center">
        <div class="flex items-center gap-2">
          <UDropdownMenu :items="downloadItems" :content="{ align: 'end' }">
            <UTooltip text="Download CV">
              <UButton
                icon="i-lucide-download"
                color="neutral"
                variant="ghost"
                size="xl"
                class="hover:bg-default rounded-full"
              />
            </UTooltip>
          </UDropdownMenu>
          <ClientOnly v-if="!colorMode?.forced">
            <UTooltip text="Switch theme">
              <UButton
                :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
                color="neutral"
                variant="ghost"
                size="xl"
                class="hover:bg-default rounded-full"
                @click="isDark = !isDark"
              />
            </UTooltip>

            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </UContainer>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

const downloadItems = [
  {
    label: "Visual CV",
    icon: "i-lucide-file-image",
    onSelect: () => window.open("/yurii-myronov.pdf", "_blank"),
  },
  {
    label: "ATS-friendly CV",
    icon: "i-lucide-file-text",
    onSelect: () => window.open("/yurii-myronov-ats.pdf", "_blank"),
  },
];
</script>
