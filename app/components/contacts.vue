<template>
  <Block title="Contacts">
    <div class="grid grid-cols-3 gap-2">
      <UButton
        v-for="(contact, index) in contacts"
        :key="index"
        variant="subtle"
        color="neutral"
        :to="contact.to"
        target="_blank"
        class="w-full flex justify-center"
      >
        <UIcon :name="contact.icon" class="size-8" />
      </UButton>
    </div>
  </Block>
</template>

<script setup lang="ts">
const { data: contacts } = await useAsyncData("contact", async () => {
  const data = await queryCollection("home").select("contact").first();
  return data?.contact ?? [];
});
</script>
