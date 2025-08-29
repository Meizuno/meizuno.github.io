<template>
  <div class="relative flex flex-col my-4">
    <div
      class="flex bg-elevated dark:bg-accented dark:inset-shadow-md rounded-t-lg gap-1 py-1 px-2"
    >
      <div class="flex gap-1 px-3 py-2 items-center text-sm">
        <UIcon :name="fileIcon" class="size-5" />
        <span>{{ filename }}</span>
      </div>
    </div>
    <div class="px-4 py-2 bg-default overflow-auto border-s-2 border-primary">
      <pre><code v-html="html"></code></pre>
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
    default: "",
  },
  language: {
    type: String,
    default: "bash",
  },
  filename: {
    type: String,
  },
});

const html = computed(() => {
  return hljs.highlight(props.code, {
    language: props.language,
  }).value;
});

const fileIcon = computed(
  () => {
    if (props.language === "bash") {
      return "i-lucide-terminal"
    }

    return `i-vscode-icons-file-type-${props.language}`
  }
);

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
