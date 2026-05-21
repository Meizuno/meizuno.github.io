<template>
  <AppBlock v-if="about" title="About me">
    <div class="text-base leading-relaxed text-justify app-soft">
      {{ about }}
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
import cv from "~/data/cv.json";

const about = cv.about;
</script>
