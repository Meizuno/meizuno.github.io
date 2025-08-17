<template>
  <div class="h-full grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-2">
    <div class="bg-muted py-2 px-4 lg:px-6 rounded flex flex-col gap-8 justify-between">
      <Skills />
      <Technologies />
      <Languages />
      <Contacts />
    </div>
    <div
      class="h-full bg-muted rounded px-6 lg:px-12 py-4 flex flex-col gap-12 justify-between"
    >
      <div>
        <About />
      </div>
      <div class="h-fit grid lg:grid-cols-2 gap-6 lg:gap-12">
        <div class="flex flex-col justify-between gap-8">
          <Experience />
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
