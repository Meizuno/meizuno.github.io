<template>
  <div class="relative bg-default rounded">
    <div class="p-4 overflow-auto mr-12 border-s-2 border-primary">
      <pre><code v-html="highlightCode"></code></pre>
    </div>
    <div class="absolute top-2 right-2">
      <UTooltip
        :open="openTooltip"
        text="Copied!"
        :content="{
          align: 'center',
          side: 'left',
          sideOffset: 8,
        }"
      >
        <UButton
          :icon="copyIcon"
          variant="link"
          :color="colorIcon"
          class="cursor-pointer"
          @click="copy"
        />
      </UTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: "bash",
  },
});

const highlightCode = computed(() => {
  return hljs.highlight(props.code, { language: props.language }).value;
});

const copyIcon = ref("i-ph-copy-bold");
const colorIcon = ref<"neutral" | "primary">("neutral");
const openTooltip = ref(false);

const copy = () => {
  colorIcon.value = "primary";
  navigator.clipboard.writeText(props.code).then(() => {
    copyIcon.value = "i-ph-check-bold";
    openTooltip.value = true;
    setTimeout(() => {
      colorIcon.value = "neutral";
      copyIcon.value = "i-ph-copy-bold";
      openTooltip.value = false;
    }, 1500);
  });
};
</script>
