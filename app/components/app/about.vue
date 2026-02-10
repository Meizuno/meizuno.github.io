<template>
  <AppBlock v-if="about" title="About me">
    <div class="font-semibold text-justify">
      {{ about }}
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
const about =
  "I am a full-stack web developer with experience in backend (Python, Django, FastAPI) and frontend (Vue.js, Nuxt). I enjoy building reliable and user-friendly applications -- from backend architecture to intuitive interfaces. Always eager to learn new technologies, I focus on teamwork and creating projects that deliver real value to users.";
</script>
