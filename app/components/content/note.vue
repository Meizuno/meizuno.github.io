<template>
  <div class="relative w-full my-4">
    <div
      class="p-4 text-sm font-medium rounded-lg info border border-dashed leading-6"
      :class="typeClasses[type]"
    >
      <UIcon :name="icon" class="align-sub size-5 mr-1.5" />
      <slot mdc-unwrap="p" />
    </div>
    <a
      v-if="isValidUrl()"
      :href="to"
      target="_blank"
      class="absolute top-0 w-full h-full rounded-lg border border-dashed border-transparent"
      :class="hoverClasses[type]"
    >
      <UIcon
        name="i-lucide-arrow-up-right"
        class="absolute top-2 right-2"
        :class="`text-${type}`"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<
      "info" | "warning" | "success" | "error" | "important"
    >,
    default: "info",
  },
  to: {
    type: String,
    default: "",
  },
});

const iconMap: Record<typeof props.type, string> = {
  info: "i-lucide-info",
  warning: "i-lucide-alert-triangle",
  success: "i-lucide-lightbulb",
  error: "i-lucide-circle-alert",
  important: "i-lucide-info",
};

const typeClasses: Record<typeof props.type, string> = {
  info: "bg-info/10 border-info/25 text-info",
  warning: "bg-warning/10 border-warning/25 text-warning",
  success: "bg-success/10 border-success/25 text-success",
  error: "bg-error/10 border-error/25 text-error",
  important: "bg-important/10 border-important/25 text-important",
};

const hoverClasses: Record<typeof props.type, string> = {
  info: "hover:border-info",
  warning: "hover:border-warning",
  success: "hover:border-success",
  error: "hover:border-error",
  important: "hover:border-important",
};

const icon = computed(() => iconMap[props.type]);
const isValidUrl = () => {
  try {
    new URL(props.to);
    return true;
  } catch (_) {
    return false;
  }
};
</script>
