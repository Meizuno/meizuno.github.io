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
    <CodeBlock :code="code" :language="language" />
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

const fileIcon = computed(() => {
  switch (props.language) {
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
      if (props.filename === "nuxt.config.ts") {
        return "i-vscode-icons-file-type-nuxt";
      }
      return "i-vscode-icons-file-type-typescript";
    }
    case "css":
      return "i-vscode-icons-file-type-css";
    case "html": {
      if (props.filename?.endsWith(".vue")) {
        return "i-vscode-icons-file-type-vue";
      }
      return "i-vscode-icons-file-type-html";
    }
    case "powershell":
      return "i-vscode-icons-file-type-powershell";
    default:
      return "i-lucide-terminal";
  }
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
