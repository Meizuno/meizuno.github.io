<template>
  <div
    class="text-sm font-medium rounded-lg info border border-dashed leading-6 bg-important/10 border-important/25 hover:border-important"
  >
    <UCollapsible v-model:open="open" class="flex flex-col">
      <button class="p-4 flex justify-between text-important">
        <div>
          <UIcon name="i-lucide-circle-alert" class="align-sub size-5 mr-1.5" />
          <slot mdc-unwrap="p" />
        </div>
        <UIcon
          name="i-lucide-chevron-down"
          class="align-sub size-5 transition-transform duration-200"
          :class="{ 'rotate-180': open }"
        />
      </button>

      <template #content>
        <div class="px-4 pb-4">
          <CodeBlock :code="code" :language="'bash'" />
        </div>
      </template>
    </UCollapsible>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  source: {
    type: String,
    required: true,
  },
});

const open = ref(false);
const code = ref("");
onMounted(async () => {
  try {
    const response = await fetch(props.source);
    if (!response.ok) throw new Error("Failed to fetch file");
    code.value = await response.text();
  } catch (err) {
    console.error(err);
  }
});
</script>
