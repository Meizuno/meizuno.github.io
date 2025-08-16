<template>
  <Block title="Education">
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <ULink to="https://www.vut.cz/" target="_blank">
          <NuxtImg
            src="/images/vut.jpg"
            alt="VUT"
            width="60"
            height="60"
            class="h-fit"
          />
        </ULink>
        <div class="flex flex-col text-sm">
          <h4 class="text-xl font-semibold">
            Brno University of Technology (Incomplete)
          </h4>
          <span>Faculty of Information Technology</span>
          <span class="text-muted">Sep 2020 - Aug 2024</span>
        </div>
      </div>
      <div class="flex gap-4">
        <ULink to="https://kntu.net.ua/" target="_blank">
          <NuxtImg
            src="/images/kntu.jpeg"
            alt="KNTU"
            width="60"
            height="60"
            class="h-fit"
          />
        </ULink>
        <div class="flex flex-col text-sm">
          <h4 class="text-xl font-semibold">
            Kherson National Technical University
          </h4>
          <span>Bachelor of Technology - BTech</span>
          <span class="text-muted">Sep 2017 - Jun 2021</span>
        </div>
      </div>
    </div>
  </Block>
</template>
