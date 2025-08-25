<template>
  <div class="max-w-5xl min-w-5xl p-2 mx-auto flex justify-center items-center">
    <div class="aspect-[210/297] w-[934px] min-w-[934px] overflow-clip">
      <div class="h-full w-full flex flex-col gap-2">
        <header
          class="bg-muted rounded py-2 px-6 flex justify-between items-center"
        >
          <AppUser />
          <div class="w-1/2 grid grid-cols-2 gap-2">
            <div v-for="contact in contacts">
              <UButton
                :label="contact.title"
                :icon="contact.icon"
                :to="contact.to"
                color="neutral"
                variant="outline"
                class="hover:bg-default w-full"
              />
            </div>
          </div>
        </header>
        <main class="flex-1 grid grid-cols-[2fr_5fr] gap-2">
          <div class="bg-muted rounded flex flex-col justify-between py-2 px-6">
            <AppSkills />
            <AppTechnologies />
            <AppLanguages />
            <AppContacts />
          </div>
          <div
            class="h-full bg-muted rounded flex flex-col justify-between py-2 px-6"
          >
            <div>
              <AppAbout />
            </div>
            <div class="h-fit grid grid-cols-2 gap-6 lg:gap-12">
              <div class="flex flex-col justify-between">
                <AppExperience />
                <AppEducation />
              </div>
              <div>
                <AppProjects />
              </div>
            </div>
            <div>
              <AppApplications :custom-class="'md:grid-cols-2 md:gap-12'" />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const contacts = ref([
  {
    title: "GitHub",
    icon: "i-mdi-github",
    to: "https://github.com/Meizuno",
  },
  {
    title: "LinkedIn",
    icon: "i-mdi-linkedin",
    to: "https://www.linkedin.com/in/yurii-myronov-694b99249/",
  },
  {
    title: "Email",
    icon: "i-material-symbols-mail",
    to: "mailto:yuramiron16@gmail.com",
  },
  {
    title: "Profile",
    icon: "i-streamline-web",
    to: "https://meizuno.github.io/",
  }
]);
</script>
