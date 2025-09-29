<template>
  <section aria-live="polite">
    <div class="flex flex-col gap-4" v-if="selectedLocation">
      <div class="flex flex-row gap-2 items-center">
        <h3 class="text-2xl font-bold">
          {{ selectedLocation.city }}, {{ selectedLocation.countryCode }}
        </h3>
        <favorite-button />
      </div>
      <span class="text-3xl pl-2 font-medium">{{ selectedLocation.tempC }}°C</span>
      <div class="flex flex-col gap-1">
        <span class="font-bold"
          >Feels like {{ selectedLocation.feelsLikeC }}°C.
          {{ sentenceCase(selectedLocation.conditions) }}.</span
        >
        <ul class="border-l-2 border-cyan px-4 flex flex-row flex-wrap max-w-[300px] gap-x-4">
          <li>Humidity: {{ selectedLocation.humidity }}%</li>
          <li>Wind: {{ Math.round(selectedLocation.windKph) }}m/s</li>
          <li>Visibility: {{ selectedLocation.visibility / 1000 }}km</li>
        </ul>
      </div>
    </div>
    <div v-else class="h-[160px] flex items-center content-center">Loading...</div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '../stores/weather';
import { sentenceCase } from 'change-case';

const weather = useWeatherStore();
const { selectedLocation } = storeToRefs(weather);
</script>
