<template>
  <div v-if="user" class="flex items-center gap-4">
    <NuxtImg
      preload
      :src="user.image"
      alt="Photo"
      class="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover border border-[var(--app-border)] shadow-sm"
    />
    <div class="flex flex-col">
      <span class="app-kicker">Portfolio</span>
      <h2 class="text-2xl md:text-3xl font-semibold">{{ user.title }}</h2>
      <p class="app-soft text-md">
        {{ user.role }} at
        <ULink :to="user.companyUrl" target="_blank">{{ user.company }}</ULink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = {
  title: "Yurii Myronov",
  role: "Lead Developer",
  company: "Dlubal Software",
  companyUrl: "https://www.dlubal.com",
  image: "/photo.webp",
};
</script>
