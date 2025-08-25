<template>
  <div class="relative bg-default rounded flex flex-col">
    <UTabs
      color="neutral"
      variant="link"
      :items="commands"
      label-key="file"
      :ui="{
        trigger: [
          commands.length > 1
            ? 'data-[state=active]:not-disabled:bg-default'
            : '',
        ],
      }"
    >
      <template #content="{ item }">
        <div class="px-4 py-2 overflow-auto">
          <pre><code v-html="highlightCode(item.code, item.language)"></code></pre>
        </div>
      </template>
    </UTabs>

    <div class="absolute top-1.5 right-1.5">
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
  commands: {
    type: Array as () => Array<{
      file: string;
      icon: string;
      code: string;
      language: string;
    }>,
    default: () => [],
  },
});

const activeCommand = ref(
  props.commands.length > 0
    ? props.commands[0]
    : { file: "", icon: "", code: "", language: "bash" }
);

const highlightCode = (code: string, language: string) => {
  return hljs.highlight(code, {
    language: language || "bash",
  }).value;
};

const copyIcon = ref("i-ph-copy-bold");
const colorIcon = ref<"neutral" | "primary">("neutral");
const openTooltip = ref(false);

const copy = () => {
  colorIcon.value = "primary";
  navigator.clipboard.writeText(activeCommand.value?.code || "").then(() => {
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
