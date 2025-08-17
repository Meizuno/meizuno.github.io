<template>
  <Block v-if="about" title="About me">
    <div class="font-semibold">
      {{ about }}
    </div>
  </Block>
</template>

<script setup lang="ts">
const { data: about } = await useAsyncData("about", async () => {
  const data = await queryCollection("home").select("about").first();
  return data?.about ?? "";
});
</script>
