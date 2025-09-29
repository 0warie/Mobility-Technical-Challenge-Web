import { WeatherDataSource } from '@/data/datasources/weather-datasource';
import type { SavedLocationModel } from '@/data/models/saved-location';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
  const datasource = new WeatherDataSource();

  const savedLocations = ref<SavedLocationModel[] | null>(null);

  //* Actions
  async function loadSavedLocations() {
    savedLocations.value = await datasource.getSavedLocations();
  }

  return {
    savedLocations,
    loadSavedLocations,
  };
});
