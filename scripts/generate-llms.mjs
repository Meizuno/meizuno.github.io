import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Generate public/llms.txt — a concise, machine-readable profile for AI agents
// (the llms.txt convention, https://llmstxt.org/). Source of truth is the same
// app/data/cv.json the site renders from, so run this whenever the CV changes
// (npm run llms). Output is served at https://meizuno.github.io/llms.txt.

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const cv = JSON.parse(readFileSync(resolve(root, "app/data/cv.json"), "utf-8"));
const outputPath = resolve(root, "public/llms.txt");

const year = (ym) => (ym ? String(ym).slice(0, 4) : "");
const range = (start, end) => `${year(start)}–${end ? year(end) : "present"}`;

// Map a 0–100 self-rating to a proficiency word.
const proficiency = (value) => {
  if (value >= 100) return "native";
  if (value >= 90) return "advanced";
  if (value >= 75) return "professional";
  if (value >= 50) return "intermediate";
  return "basic";
};

const lines = [];
const push = (...l) => lines.push(...l);

// Header: name + one-line summary (the about text as a blockquote).
push(`# ${cv.user.title}`, "");
push(`> ${cv.about}`, "");

// At-a-glance facts.
push(
  `- Role: ${cv.user.role} at ${cv.user.company} (${cv.user.companyUrl})`,
  `- Location: ${cv.profile.location} — ${cv.profile.timezone}`,
  `- Availability: ${cv.profile.availability}`,
  `- GitHub: https://github.com/${cv.profile.githubUsername}`,
  `- Website: https://meizuno.github.io`,
  "",
);

// Stack, one line per category.
push("## Stack", "");
for (const group of cv.stack) {
  push(`- ${group.category}: ${group.items.map((i) => i.label).join(", ")}`);
}
push("");

// Experience, newest role first per company.
push("## Experience", "");
for (const exp of cv.experiences) {
  const roles = exp.roles
    .map((r) => `${r.title} (${range(r.start, r.end)})`)
    .join(", ");
  push(`- ${exp.company}, ${exp.location} — ${roles}`);
}
push("");

// Education.
push("## Education", "");
for (const edu of cv.educations) {
  const note = edu.incomplete ? ", incomplete" : "";
  push(`- ${edu.institution} — ${edu.degree} (${range(edu.start, edu.end)}${note})`);
}
push("");

// Projects: the detailed project list plus standalone applications, deduped by URL.
push("## Projects", "");
const seen = new Set();
for (const project of cv.projects) {
  for (const item of project.list ?? []) {
    if (seen.has(item.to)) continue;
    seen.add(item.to);
    push(`- [${item.title}](${item.to}) — ${item.description} (${item.technologies})`);
  }
}
for (const app of cv.applications) {
  if (seen.has(app.url)) continue;
  seen.add(app.url);
  push(`- [${app.title}](${app.url}) — ${app.description}`);
}
push("");

// Languages, one line.
push("## Languages", "");
push(`- ${cv.languages.map((l) => `${l.label} (${proficiency(l.value)})`).join(", ")}`, "");

// Contact.
push("## Contact", "");
for (const c of cv.contacts) {
  const value = c.to.replace(/^mailto:/, "");
  push(`- ${c.title}: ${value}`);
}
push("");

push(`_Last updated: ${cv.profile.lastUpdated}_`, "");

writeFileSync(outputPath, lines.join("\n"), "utf-8");
console.log("✅ llms.txt generated:", outputPath);
