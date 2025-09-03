<template>
  <div class="bg-default overflow-auto border-s-2 border-primary">
    <pre
      class="inline-block min-w-full py-2 px-4"
    ><code v-html="html"></code></pre>
  </div>
</template>

<script setup lang="ts">
import hljs from "highlight.js";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  }
});

const html = computed(() => {
  return hljs.highlight(props.code, {
    language: props.language,
  }).value;
});
</script>
