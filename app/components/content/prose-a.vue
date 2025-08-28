<template>
  <span>
    <ULink active active-class="hover:font-semibold" :href="href" target="_blank">
      <slot />
    </ULink>
  </span>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
  },
});
</script>
