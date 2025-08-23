<template>
  <div v-if="user" class="flex items-center gap-4">
    <NuxtImg
      preload
      :src="user.image"
      alt="Photo"
      class="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
    />
    <div class="flex flex-col">
      <h2 class="text-xl sm:text-2xl lg:text-2xl font-bold">{{ user.title }}</h2>
      <p class="text-muted text-xs sm:text-sm lg:text-md">
        {{ user.role }} at
        <ULink :to="user.companyUrl" target="_blank">{{ user.company }}</ULink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: user } = await useAsyncData("user", () => {
  return queryCollection("user").first();
});
</script>
