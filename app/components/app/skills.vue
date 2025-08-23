<template>
  <AppBlock title="Skills">
    <div class="flex flex-col gap-6">
      <div v-for="(skill, index) in skills" :key="index" class="flex flex-col">
        <div class="flex justify-between text-muted">
          <ULink :to="skill.to" target="_blank" class="flex gap-1">
            <span class="font-semibold">{{ skill.label }}</span>
            <UIcon name="i-heroicons-outline-external-link" class="size-3" />
          </ULink>
          <span class="text-xs">{{ skill.value }}/{{ skill.max || 10 }}</span>
        </div>
        <UProgress v-model="skillValue[index]" :max="skill.max || 10" />
      </div>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
const { data: skills } = await useAsyncData("skills", async () => {
  const data = await queryCollection("home").select("skills").first();
  return data?.skills ?? [];
});

const skillValue = ref(skills.value?.map(() => 0) || []);

onMounted(() => {
  skillValue.value = skills.value?.map((skill) => skill.value) || [];
});
</script>
