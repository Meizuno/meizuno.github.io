<template>
  <div
    class="font-[PT Serif,sans-serif] text-black bg-white max-w-[8.27in] mx-auto py-[0.3in] px-[0.6in] text-[11pt] leading-normal flex flex-col min-h-screen relative"
  >
    <header class="text-center">
      <h1 class="text-[24pt] font-bold m-0 mb-[4pt] leading-[1.15]">
        {{ cv.user.title }}
      </h1>
      <p class="text-sm m-0 mb-0.5 text-neutral-900">
        {{ cv.profile.location }}
      </p>
      <p class="text-sm m-0 mb-0.5 text-neutral-900">
        <template v-for="(c, i) in linkContacts" :key="c.to">
          <a :href="c.to" class="text-black underline underline-offset-2">{{
            c.display
          }}</a
          ><span v-if="i < linkContacts.length - 1"> | </span>
        </template>
      </p>
    </header>

    <section class="mt-[8pt]">
      <h2
        class="text-lg font-bold uppercase tracking-wider border-b border-black pb-0.5 m-0 mb-1.5"
      >
        Summary
      </h2>
      <p class="m-0 mb-[2pt] text-justify">{{ cv.about }}</p>
    </section>

    <section class="mt-[8pt]">
      <h2
        class="text-lg font-bold uppercase tracking-wider border-b border-black pb-0.5 m-0 mb-1.5"
      >
        Experience
      </h2>
      <div
        v-for="(role, ri) in flatRoles"
        :key="ri"
        class="flex justify-between gap-4 mb-1 last:mb-0"
      >
        <div class="flex-1 min-w-0">
          <div class="text-[12pt] font-bold">
            {{ role.title }} ·
            <a
              :href="role.exp.link"
              class="text-black underline underline-offset-2"
              >{{ role.exp.company }}</a
            >
          </div>
          <div class="text-sm italic text-neutral-700">
            {{ role.format }} · {{ role.exp.format }}
          </div>
        </div>
        <div class="text-right text-sm shrink-0">
          <div>
            {{ formatDate(role.start) }} – {{ formatDate(role.end) }}
          </div>
          <div class="italic text-neutral-700">{{ role.exp.location }}</div>
        </div>
      </div>
    </section>

    <section class="mt-[8pt]">
      <h2
        class="text-lg font-bold uppercase tracking-wider border-b border-black pb-0.5 m-0 mb-1.5"
      >
        Education
      </h2>
      <div
        v-for="edu in cv.educations"
        :key="edu.institution"
        class="flex justify-between gap-4 mb-1 last:mb-0"
      >
        <div class="flex-1 min-w-0">
          <div class="text-[12pt] font-bold">
            <a
              :href="edu.link"
              class="text-black underline underline-offset-2"
              >{{ edu.institution }}</a
            >
          </div>
          <div class="text-sm italic text-neutral-700">
            {{ edu.degree }}
          </div>
        </div>
        <div class="text-right text-sm shrink-0">
          <div>
            {{ formatDate(edu.start) }} – {{ formatDate(edu.end) }}
          </div>
          <div v-if="edu.incomplete" class="italic text-neutral-700">
            Incomplete
          </div>
        </div>
      </div>
    </section>

    <section class="mt-[8pt]">
      <h2
        class="text-lg font-bold uppercase tracking-wider border-b border-black pb-0.5 m-0 mb-1.5"
      >
        Skills
      </h2>
      <p v-for="group in cv.stack" :key="group.category" class="m-0 mb-1">
        <strong>{{ group.category }}:</strong>
        {{ group.items.map((i) => i.label).join(", ") }}
      </p>
    </section>

    <section class="mt-[8pt]">
      <h2
        class="text-lg font-bold uppercase tracking-wider border-b border-black pb-0.5 m-0 mb-1.5"
      >
        Projects
      </h2>
      <ul class="list-disc m-0 ml-[20pt] p-0">
        <li v-for="app in cv.applications" :key="app.title" class="mb-[4pt]">
          <strong
            ><a
              :href="app.url"
              class="text-black underline underline-offset-2"
              >{{ app.title }}</a
            ></strong
          >
          <span class="italic font-normal text-neutral-700 text-sm">
            · {{ app.tag }}</span
          >
          — {{ app.description }}
        </li>
      </ul>
    </section>

    <section class="mt-[8pt]">
      <h2
        class="text-lg font-bold uppercase tracking-wider border-b border-black pb-0.5 m-0 mb-1.5"
      >
        Languages
      </h2>
      <p class="m-0 mb-[2pt]">
        {{ cv.languages.map((l) => l.label).join(", ") }}
      </p>
    </section>

    <footer
      class="absolute bottom-[0.3in] inset-x-0 px-[0.6in] text-center text-xs italic text-neutral-600"
    >
      {{ cv.user.title }} · Last updated: {{ cv.profile.lastUpdated }}
    </footer>
  </div>
</template>

<script setup lang="ts">
import cvData from "~/data/cv.json";

definePageMeta({ layout: "blank" });

useHead({
  title: `${cvData.user.title} — CV`,
  meta: [{ name: "robots", content: "noindex" }],
});

const cv = cvData;

const linkContacts = computed(() =>
  cv.contacts
    .filter((c) => c.title !== "Profile")
    // ATS needs the email as visible text, so show the address; GitHub /
    // LinkedIn keep their short alias label (the link still carries the URL).
    .map((c) => ({
      to: c.to,
      display: c.to.startsWith("mailto:") ? c.to.replace(/^mailto:/, "") : c.title,
    })),
);

const flatRoles = computed(() =>
  cv.experiences.flatMap((exp) =>
    exp.roles.map((role) => ({ ...role, exp }))
  )
);
</script>
