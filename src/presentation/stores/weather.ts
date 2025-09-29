import { WeatherDataSource } from '@/data/datasources/weather-datasource';
import type { SavedLocationModel } from '@/data/models/saved-location-model';
import type { WeatherModel } from '@/data/models/weather-model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
  const datasource = new WeatherDataSource();

  const savedLocations = ref<SavedLocationModel[] | null>(null);
  const selectedLocation = ref<WeatherModel | null>(null);

  //* Actions
  async function loadSavedLocations() {
    savedLocations.value = await datasource.getSavedLocations();
  }

  async function selectByCityId(id: number) {
    selectedLocation.value = await datasource.getWeatherById(id);
  }

  return {
    selectedLocation,
    savedLocations,
    loadSavedLocations,
    selectByCityId,
  };
});
