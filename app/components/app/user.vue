<template>
  <div v-if="user" class="flex items-center gap-3">
    <NuxtImg
      preload
      :src="user.image"
      alt="Photo"
      class="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover border border-(--app-border) shadow-sm"
    />
    <div class="flex flex-col gap-1">
      <span class="app-kicker">Portfolio</span>
      <h2 class="text-xl md:text-2xl font-semibold">{{ user.title }}</h2>
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
