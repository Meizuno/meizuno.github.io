<template>
  <AppBlock title="Contacts">
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
  </AppBlock>
</template>

<script setup lang="ts">
const contacts = [
  {
    icon: "i-mdi-github",
    to: "https://github.com/Meizuno",
  },
  {
    icon: "i-mdi-linkedin",
    to: "https://www.linkedin.com/in/yurii-myronov-694b99249/",
  },
  {
    icon: "i-material-symbols-mail",
    to: "mailto:yuramiron16@gmail.com",
  },
];
</script>
