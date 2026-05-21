<template>
  <AppBlock title="Contacts">
    <div class="grid grid-cols-3 gap-2">
      <UButton
        v-for="contact in items"
        :key="contact.title"
        variant="subtle"
        color="neutral"
        :to="contact.to"
        target="_blank"
        class="w-full flex justify-center border border-(--app-border)"
      >
        <UIcon :name="contact.icon" class="size-8" />
      </UButton>
    </div>
  </AppBlock>
</template>

<script setup lang="ts">
import cv from "~/data/cv.json";

const items = cv.contacts.filter((c) => c.title !== "Profile");
</script>
