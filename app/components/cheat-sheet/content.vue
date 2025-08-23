<template>
  <div class="flex flex-col gap-8">
    <div v-for="block in data">
      <AppBlock :id="block.reference" :title="block.title">
        <div class="flex flex-col gap-4">
          <div
            :id="item.reference"
            v-for="item in block.content"
            class="flex flex-col gap-4"
          >
            <h4 class="text-lg font-semibold">{{ item.title }}</h4>
            <div v-for="command in item.content" class="flex flex-col gap-2">
              <span class="text-muted">{{ command.description }}</span>
              <CheatSheetCodeBlock
                :code="command.command"
                :language="command.syntax"
              />
            </div>
          </div>
        </div>
      </AppBlock>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("cheat-sheet-content", () => {
  return queryCollection("cheatSheet").all();
});
</script>
