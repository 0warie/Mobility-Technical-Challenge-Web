import { WeatherDataSource } from '@/data/datasources/weather-datasource';
import type { GeocodeModel } from '@/data/models/geocode-model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGeocodeStore = defineStore('geocode', () => {
  const weatherDatasource = new WeatherDataSource();

  const results = ref<GeocodeModel[] | null>(null);

  //* Actions
  async function directGeocode(query: string) {
    results.value = await weatherDatasource.getDirectGeocode(query);
  }

  function clearGeocode() {
    results.value = [];
  }

  return {
    results,
    directGeocode,
    clearGeocode,
  };
});
