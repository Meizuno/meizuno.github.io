<template>
  <div class="flex items-center gap-4">
    <NuxtImg
      preload
      src="/photo.jpg"
      alt="Photo"
      class="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover"
      sizes="100vw sm:200px md:300px lg:400px"
    />
    <div class="flex flex-col">
      <h2 class="text-xl sm:text-2xl font-bold">Web Developer</h2>
      <p class="text-muted text-sm sm:text-md">
        Lead Programmer at
        <ULink to="https://www.dlubal.com">Dlubal Software</ULink>
      </p>
    </div>
  </div>
</template>
