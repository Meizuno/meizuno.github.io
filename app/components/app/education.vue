<template>
  <AppBlock v-if="items" title="Education">
    <div v-for="item in items" class="flex flex-col gap-4">
      <ULink :to="item.link" target="_blank" class="flex gap-4 text-default">
        <NuxtImg
          preload
          :src="item.image"
          alt="institution"
          class="w-12 h-12 min-w-12 mix-h-12 object-cover"
        />
        <div class="flex flex-col text-sm">
          <h4 class="text-xl font-semibold">{{ item.institution }}</h4>
          <span>{{ item.degree }}</span>
          <span class="text-muted">
            {{ item.startFormatted }} - {{ item.endFormatted }}
          </span>
        </div>
      </ULink>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
type Education = {
  institution: string;
  degree: string;
  link: string;
  image: string;
  start: string;
  end: string | null;
};

const educations: Education[] = [
  {
    institution: "Brno University of Technology (Incomplete)",
    degree: "Faculty of Information Technology",
    link: "https://www.vut.cz/",
    image: "/images/vut.jpg",
    start: "2020-09",
    end: "2024-08",
  },
  {
    institution: "Kherson National Technical University",
    degree: "Bachelor of Technology - BTech",
    link: "https://kntu.net.ua/",
    image: "/images/kntu.jpeg",
    start: "2017-09",
    end: "2021-06",
  },
];

const items = computed(() =>
  educations?.map((education) => ({
    ...education,
    startFormatted: formatDate(education.start),
    endFormatted: formatDate(education.end),
  }))
);
</script>
