<template>
  <div class="app-shell p-4 md:p-6 h-full grid md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_5fr] gap-4">
    <div
      class="app-panel-muted py-4 px-4 lg:px-6 flex flex-col gap-8 justify-between"
    >
      <AppSkills />
      <AppTechnologies />
      <AppLanguages />
      <AppContacts />
    </div>
    <div
      class="h-full app-panel px-6 lg:px-10 py-5 flex flex-col gap-8 justify-between"
    >
      <div>
        <AppAbout />
      </div>
      <div class="h-fit grid lg:grid-cols-2 gap-6 lg:gap-10">
        <div class="flex flex-col justify-between gap-8">
          <AppExperience />
          <AppEducation />
        </div>
        <div>
          <AppProjects />
        </div>
      </div>
      <div>
        <AppApplications :custom-class="'md:grid-cols-2 lg:gap-12'" />
      </div>
    </div>
  </div>
</template>
