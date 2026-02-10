<template>
  <UContainer class="py-6 flex flex-col gap-4">
    <Transition name="fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div class="flex flex-col items-center gap-4 text-primary">
          <UIcon name="i-lucide-loader-2" class="animate-spin w-12 h-12" />
          <span class="text-lg font-medium">Generating PDF...</span>
        </div>
      </div>
    </Transition>

    <header
      class="app-shell p-5 md:p-6 flex flex-col md:flex-row justify-between gap-6"
    >
      <AppUser class="flex-1" />
      <USeparator class="block md:hidden" />
      <div class="flex-1 flex justify-end items-center">
        <div class="flex items-center gap-2">
          <UTooltip text="Download CV">
            <UButton
              icon="i-lucide-download"
              color="neutral"
              variant="ghost"
              size="xl"
              target="_blank"
              class="hover:bg-default rounded-full"
              @click="handleDownload"
            />
          </UTooltip>
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

const isLoading = ref(false);
async function handleDownload() {
  window.open("/yurii-myronov.pdf", "_blank");
}
</script>
