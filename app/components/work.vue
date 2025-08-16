<template>
  <Block title="Experience">
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <ULink to="https://www.dlubal.com" target="_blank">
          <NuxtImg
            src="/images/dlubal.jpeg"
            alt="Dlubal"
            width="60"
            height="60"
            class="h-fit"
          />
        </ULink>
        <div class="flex flex-col text-sm">
          <h4 class="text-xl font-semibold">Dlubal Software</h4>
          <span class="text-muted">Full-time • {{ dlubalTime }}</span>
          <span class="text-muted">Prague, Czechia</span>
        </div>
      </div>
      <div class="flex flex-col gap-8 ml-4">
        <div
          v-for="(item, index) in computedItems"
          :key="index"
          class="relative flex gap-2"
        >
          <USeparator
            v-if="index < items.length - 1"
            orientation="vertical"
            size="sm"
            class="absolute left-1.75 top-7.5 h-full"
          />
          <UIcon name="i-icon-park-outline-dot" class="text-muted mt-1.5" />
          <div class="flex flex-col text-sm">
            <h5 class="text-lg font-medium">{{ item.title }}</h5>
            <span class="text-muted">
              {{ item.startFormatted }} - {{ item.endFormatted }} •
              {{ item.duration }}
            </span>
            <span class="text-muted">{{ item.format }}</span>
          </div>
        </div>
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: "Lead Programmer",
    start: new Date(2025, 0),
    end: undefined,
    format: "Hybrid",
  },
  {
    title: "Backend Developer",
    start: new Date(2023, 6),
    end: new Date(2025, 0),
    format: "On-site",
  },
]);

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

const getDuration = (start: Date, end: Date = new Date()): string => {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remMonths = (months % 12);

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remMonths > 0) parts.push(`${remMonths} mo${remMonths > 1 ? "s" : ""}`);

  return parts.join(" ") || "Less than a month";
}

const computedItems = computed(() =>
  items.value.map((item) => ({
    ...item,
    startFormatted: formatDate(item.start),
    endFormatted: item.end ? formatDate(item.end) : "Present",
    duration: getDuration(item.start, item.end),
  }))
);

const dlubalTime = getDuration(new Date(2023, 6));
</script>
