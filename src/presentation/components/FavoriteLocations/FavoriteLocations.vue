<template>
  <section class="flex flex-col gap-4">
    <h3 class="text-2xl font-bold">Favorites</h3>
    <ul class="flex flex-row gap-3 flex-wrap">
      <li v-for="location in savedLocations" :key="location.id">
        <favorite-location-item :selected="location.cityId === selectedLocation?.cityId" @select="onSelect" :item="location" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useWeatherStore } from '@/presentation/stores/weather';
import { storeToRefs } from 'pinia';
import type { SavedLocationModel } from '@/data/models/saved-location-model';

const weather = useWeatherStore();
const { savedLocations, selectedLocation } = storeToRefs(weather);

const onSelect = (location: SavedLocationModel) => {
  weather.selectByCityId(location.cityId);
};

onMounted(weather.loadSavedLocations);
</script>
