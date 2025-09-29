import type { Coordinates } from '@/common/types/coordinates';
import { LocationsDataSource } from '@/data/datasources/locations-datasource';
import { WeatherDataSource } from '@/data/datasources/weather-datasource';
import type { SavedLocationModel } from '@/data/models/saved-location-model';
import type { WeatherModel } from '@/data/models/weather-model';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
  const weatherDatasource = new WeatherDataSource();
  const locationsDataSource = new LocationsDataSource();

  const savedLocations = ref<SavedLocationModel[] | null>(null);
  const selectedLocation = ref<WeatherModel | null>(null);

  const selectedLocationSaved = computed(() =>
    savedLocations.value?.some((location) => location.cityId === selectedLocation.value?.cityId)
  );

  //* Actions
  async function loadSavedLocations() {
    savedLocations.value = await locationsDataSource.getSavedLocations();
  }

  async function _saveSelectedLocation() {
    if (!selectedLocation.value) return;

    const { city, countryCode, cityId } = selectedLocation.value;

    await locationsDataSource.saveLocation(city, countryCode, cityId);
    loadSavedLocations();
  }

  async function _deleteSavedLocation(id: number) {
    await locationsDataSource.deleteSavedLocation(id);
    loadSavedLocations();
  }

  async function selectedLocationSaveToggle() {
    if (!selectedLocation.value) return;

    // Ensure we have the latest saved list
    if (!savedLocations.value) {
      await loadSavedLocations();
    }

    const cityId = selectedLocation.value.cityId;
    const existing = savedLocations.value?.find((location) => location.cityId === cityId);

    if (existing) {
      await _deleteSavedLocation(existing.id);
    } else {
      await _saveSelectedLocation();
    }
  }

  async function selectByCityId(id: number) {
    selectedLocation.value = await weatherDatasource.getWeatherById(id);
  }

  async function selectByCoordinates(coordinates: Coordinates) {
    selectedLocation.value = await weatherDatasource.getWeatherByCoordinates(coordinates);
  }

  return {
    selectedLocation,
    selectedLocationSaved,
    savedLocations,
    loadSavedLocations,
    selectByCityId,
    selectByCoordinates,
    selectedLocationSaveToggle,
  };
});
