<template>
  <div class="relative bg-default rounded flex flex-col my-4">
    <UTabs
      color="neutral"
      variant="link"
      v-model="active"
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
        <CodeBlock :code="item.code" :language="item.language" />
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

const slots = useSlots();
const commands = computed(
  () =>
    slots
      .default?.()
      .filter((slot) => slot.props)
      .map((slot) => {
        return {
          file: slot.props!.filename || "Terminal",
          code: slot.props!.code,
          language: slot.props!.language,
          icon: fileIcon(slot.props!.language, slot.props!.filename),
        };
      }) ?? []
);

const fileIcon = (language: string, filename: string) => {
  switch (language) {
    case "python":
    case "py":
      return "i-vscode-icons-file-type-python";
    case "nuxt":
      return "i-vscode-icons-file-type-nuxt";
    case "yarn":
      return "i-vscode-icons-file-type-yarn";
    case "npm":
      return "i-vscode-icons-file-type-npm";
    case "ts": {
      if (filename === "nuxt.config.ts") {
        return "i-vscode-icons-file-type-nuxt";
      }
      return "i-vscode-icons-file-type-typescript";
    }
    case "css":
      return "i-vscode-icons-file-type-css";
    default:
      return "i-lucide-terminal";
  }
};

const active = ref("0");
const highlightCode = (code: string, language: string) => {
  return hljs.highlight(code, {
    language: language || "bash",
  }).value;
};

const copyIcon = ref("i-ph-copy-bold");
const colorIcon = ref<"neutral" | "primary">("neutral");
const openTooltip = ref(false);

const copy = () => {
  const code = commands.value[Number(active.value)]?.code || "";
  colorIcon.value = "primary";
  navigator.clipboard.writeText(code).then(() => {
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
