<template>
  <section class="flex flex-col gap-4">
    <h3 class="text-2xl font-bold">Favorites</h3>
    <ul class="flex flex-row gap-3 flex-wrap">
      <li v-for="location in savedLocations" :key="location.id">
        <favorite-location-item :item="location" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weather';
import { storeToRefs } from 'pinia';

const weather = useWeatherStore();
const { savedLocations } = storeToRefs(weather);

onMounted(weather.loadSavedLocations);
</script>
