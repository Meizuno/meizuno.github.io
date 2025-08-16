<template>
  <div class="h-full grid grid-cols-[1fr_3fr] gap-2">
    <div class="bg-muted py-2 px-6 rounded flex flex-col gap-8 justify-between">
      <Skills />
      <Technologies />
      <Languages />
      <Contacts />
    </div>
    <div
      class="h-full bg-muted rounded px-12 py-4 flex flex-col gap-12 justify-between"
    >
      <div>
        <About />
      </div>
      <div class="h-fit grid grid-cols-2 gap-12">
        <div class="flex flex-col justify-between gap-8">
          <Work />
          <Education />
        </div>
        <div>
          <Projects />
        </div>
      </div>
      <div>
        <Applications />
      </div>
    </div>
  </div>
</template>
