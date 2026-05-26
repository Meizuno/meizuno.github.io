<template>
  <div class="ats">
    <header class="ats-header">
      <h1>{{ cv.user.title }}</h1>
      <p class="ats-meta">
        {{ cv.user.role }} at
        <a :href="cv.user.companyUrl">{{ cv.user.company }}</a>
        · {{ cv.profile.location }}
      </p>
      <p class="ats-meta">
        <template v-for="(c, i) in linkContacts" :key="c.title">
          <a :href="c.to">{{ c.title }}</a><span v-if="i < linkContacts.length - 1"> · </span>
        </template>
      </p>
    </header>

    <section>
      <h2>Summary</h2>
      <p>{{ cv.about }}</p>
    </section>

    <section>
      <h2>Experience</h2>
      <div v-for="exp in cv.experiences" :key="exp.company" class="ats-item">
        <h3>
          <a :href="exp.link">{{ exp.company }}</a>
          — {{ exp.location }}
          <span class="ats-dates"
            >({{ formatDate(exp.start) }} – {{ formatDate(exp.end) }})</span
          >
        </h3>
        <ul>
          <li v-for="role in exp.roles" :key="role.title">
            <strong>{{ role.title }}</strong>
            ({{ formatDate(role.start) }} – {{ formatDate(role.end) }}, {{ role.format }})
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Education</h2>
      <p
        v-for="edu in cv.educations"
        :key="edu.institution"
        class="ats-edu-line"
      >
        <strong><a :href="edu.link">{{ edu.institution }}</a></strong>
        — {{ edu.degree }}
        <span class="ats-dates">
          ({{ formatDate(edu.start) }} – {{ formatDate(edu.end) }}<span v-if="edu.incomplete">, Incomplete</span>)
        </span>
      </p>
    </section>

    <section>
      <h2>Skills</h2>
      <p v-for="group in cv.stack" :key="group.category" class="ats-skill-line">
        <strong>{{ group.category }}:</strong>
        {{ group.items.map((i) => i.label).join(", ") }}
      </p>
    </section>

    <section>
      <h2>Projects</h2>
      <ul class="ats-project-list">
        <li v-for="app in cv.applications" :key="app.title">
          <strong><a :href="app.url">{{ app.title }}</a></strong>
          <span class="ats-dates"> · {{ app.tag }}</span>
          — {{ app.description }}
        </li>
      </ul>
    </section>

    <section>
      <h2>Languages</h2>
      <p>{{ cv.languages.map((l) => l.label).join(", ") }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import cvData from "~/data/cv.json";

definePageMeta({ layout: "blank" });

useHead({
  title: `${cvData.user.title} — CV (ATS)`,
  meta: [{ name: "robots", content: "noindex" }],
});

const cv = cvData;

const linkContacts = computed(() =>
  cv.contacts.filter((c) => c.title !== "Profile")
);
</script>

<style scoped>
.ats {
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  background: #fff;
  max-width: 8.27in;
  margin: 0 auto;
  padding: 0.55in 0.6in;
  font-size: 11.5pt;
  line-height: 1.5;
  min-height: 11.69in;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.ats-header h1 {
  font-size: 24pt;
  font-weight: 700;
  margin: 0 0 4pt 0;
  line-height: 1.15;
}

.ats-meta {
  font-size: 11pt;
  margin: 0 0 1pt 0;
  color: #1a1a1a;
}

.ats section {
  margin-top: 14pt;
}

.ats h2 {
  font-size: 13pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1pt solid #000;
  padding-bottom: 2pt;
  margin: 0 0 7pt 0;
}

.ats h3 {
  font-size: 12pt;
  font-weight: 700;
  margin: 0 0 2pt 0;
}

.ats-item {
  margin-bottom: 8pt;
}

.ats-item:last-child {
  margin-bottom: 0;
}

.ats-dates {
  font-style: italic;
  font-weight: normal;
  color: #444;
  font-size: 10.5pt;
}

.ats p {
  margin: 0 0 2pt 0;
}

.ats ul {
  list-style: disc;
  margin: 0 0 0 20pt;
  padding: 0;
}

.ats li {
  margin-bottom: 3pt;
}

.ats a {
  color: #000;
  text-decoration: none;
}

.ats-header a,
.ats h3 a,
.ats-edu-line a,
.ats-project-list a {
  text-decoration: underline;
  text-underline-offset: 2pt;
}

.ats-edu-line,
.ats-skill-line {
  margin-bottom: 3pt;
}

.ats-project-list li {
  margin-bottom: 4pt;
}
</style>
