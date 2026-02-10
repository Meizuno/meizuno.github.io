<template>
  <AppBlock title="Applications">
    <div class="grid gap-6" :class="customClass">
      <div v-for="app in apps">
        <ULink :to="app.url" target="_blank" class="flex gap-4 text-default">
          <NuxtImg
            preload
            :src="app.image"
            :alt="app.title"
            class="w-12 h-12 min-w-12 mix-h-12 object-cover"
          />
          <div class="flex flex-col text-sm">
            <div class="flex items-center gap-2">
              <h4 class="text-xl font-semibold">
                {{ app.title }}
              </h4>
              <UBadge size="sm" variant="outline" class="w-fit">{{
                app.tag
              }}</UBadge>
            </div>
            <span class="app-soft">{{ app.description }}</span>
          </div>
        </ULink>
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
defineProps({
  customClass: {
    type: String,
    default: "",
  },
});

const apps = [
  {
    title: "Andrii Hlushchenko",
    image: "/images/andrii.webp",
    description: "Car rental at great prices",
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
];
</script>
