<template>
  <div class="flex items-center gap-4">
    <NuxtImg
      preload
      src="/photo.jpg"
      alt="Photo"
      class="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
    />
    <div class="flex flex-col">
      <h2 class="text-lg sm:text-xl lg:text-2xl font-bold">Web Developer</h2>
      <p class="text-muted text-xs sm:text-sm lg:text-md">
        Lead Programmer at
        <ULink to="https://www.dlubal.com">Dlubal Software</ULink>
      </p>
    </div>
  </div>
</template>
