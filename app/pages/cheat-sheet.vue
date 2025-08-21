<template>
  <div class="h-full grid md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_5fr] gap-2">
    <div class="hidden md:block bg-muted py-2 px-4 lg:px-6 rounded">
      <CheatSheetNavigation />
    </div>
    <div class="bg-muted py-2 px-4 lg:px-6 rounded">
      <CheatSheetContent />
    </div>
  </div>
</template>
