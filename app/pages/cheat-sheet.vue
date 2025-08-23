<template>
  <div class="h-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] xl:grid-cols-[2fr_5fr] gap-2">
    <div class="bg-muted py-2 px-4 lg:px-6 rounded">
      <div class="hidden lg:block sticky top-2">
        <CheatSheetNavigation />
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
          <CheatSheetNavigation />
        </template>
      </UCollapsible>
    </div>
    <div class="relative bg-muted py-2 px-4 lg:px-6 rounded">
      <CheatSheetContent />
    </div>
  </div>
</template>