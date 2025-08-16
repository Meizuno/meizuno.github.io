<template>
  <Block title="Applications">
    <div class="grid grid-cols-2 gap-12">
      <div v-for="app in apps" class="flex gap-4">
        <ULink :to="app.url" target="_blank">
          <NuxtImg
            :src="app.image"
            :alt="app.title"
            width="50"
            height="50"
            class="h-fit"
          />
        </ULink>
        <div class="flex flex-col text-sm">
          <div class="flex items-center gap-2">
            <h4 class="text-xl font-semibold">
              {{ app.title }}
            </h4>
            <UBadge size="sm" variant="outline" class="w-fit">{{ app.tag }}</UBadge>
          </div>
          <span class="text-muted">{{ app.description }}</span>
        </div>
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const apps = ref([
  {
    title: "Andrii Hlushchenko",
    image: "/images/andrii.webp",
    description: "Car and bike rental at great prices",
    url: "https://andrii.devhost.uk/",
    tag: "Web",
  },
  {
    title: "Storage Disk",
    image: "/images/disk.webp",
    description: "Storage for my files",
    url: "https://disk.devhost.uk/",
    tag: "Web",
  },
  {
    title: "Text Book",
    image: "/images/text-book.png",
    description: "Mobile application for notes, supports Markdown",
    url: "https://apps.apple.com/cz/app/text-book-personal-notes/id6740556982",
    tag: "IOS",
  },
  {
    title: "OTP Genie",
    image: "/images/otp-genie.png",
    description: "Storage for my files",
    url: "https://apps.apple.com/cz/app/otp-genie/id6748459774",
    tag: "IOS",
  },
]);
</script>
