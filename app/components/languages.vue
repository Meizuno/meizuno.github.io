<template>
  <Block title="Languages">
    <div class="flex justify-around">
      <div
        v-for="(lang, index) in languages"
        :key="index"
        class="flex flex-col items-center gap-2 text-muted"
      >
        <svg
          :width="size"
          :height="size"
          :viewBox="`0 0 ${size} ${size}`"
          role="img"
        >
          <circle
            :cx="c"
            :cy="c"
            :r="r"
            stroke="var(--ui-bg-accented)"
            :stroke-width="stroke"
            fill="none"
          />
          <circle
            :cx="c"
            :cy="c"
            :r="r"
            stroke="var(--ui-primary)"
            :stroke-width="stroke"
            fill="none"
            stroke-linecap="butt"
            :stroke-dasharray="circ"
            :stroke-dashoffset="circ * (1 - lang.value / 100)"
            :transform="`rotate(-90 ${c} ${c})`"
          />
          <text
            :x="c"
            :y="c"
            text-anchor="middle"
            dominant-baseline="central"
            font-size="16"
            font-weight="bold"
            fill="var(--ui-primary)"
          >
            {{ lang.value }}
          </text>
        </svg>
        <span>{{ lang.label }}</span>
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const size = 60;
const stroke = 6;

const c = computed(() => size / 2);
const r = computed(() => size / 2 - stroke / 2);
const circ = computed(() => 2 * Math.PI * r.value);

const languages = ref([
  {
    label: "Ukrainian",
    value: 100,
  },
  {
    label: "English",
    value: 70,
  },
  {
    label: "Czech",
    value: 80,
  },
]);
</script>
