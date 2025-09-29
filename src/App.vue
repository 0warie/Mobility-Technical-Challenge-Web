<template>
  <div class="flex bg-grey-900 h-dvh text-white flex-col">
    <header class="bg-grey-800 p-[calc(1.25*1em)]"><branding-logo /></header>
    <main class="flex flex-col my-8 gap-6 px-[calc(1.25*1em)]">
      <weather-search />
      <selected-location />
      <favorite-locations />
    </main>
  </div>
</template>

<style scoped></style>
