<template>
  <div class="h-full grid md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_5fr] gap-2">
    <div
      class="bg-elevated py-2 px-4 lg:px-6 rounded flex flex-col gap-8 justify-between"
    >
      <AppSkills />
      <AppTechnologies />
      <AppLanguages />
      <AppContacts />
    </div>
    <div
      class="h-full bg-elevated rounded px-6 lg:px-12 py-4 flex flex-col gap-6 justify-between"
    >
      <div>
        <AppAbout />
      </div>
      <div class="h-fit grid lg:grid-cols-2 gap-6 lg:gap-12">
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
