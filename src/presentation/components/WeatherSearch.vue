<template>
  <div class="flex flex-col">
    <form class="flex flex-row w-full" @submit.prevent="onSearch">
      <input
        type="text"
        placeholder="Search City"
        v-model="search"
        class="bg-white py-1 px-3 max-w-[400px] text-black flex grow -outline-offset-4 rounded-l-lg"
        :class="{ 'rounded-b-none!': showDropdown }"
      />
      <button type="submit" @click="onSearch" class="px-3 bg-grey-700 rounded-r-lg">Search</button>
    </form>
    <div class="relative">
      <div
        v-if="showDropdown"
        class="bg-white rounded-b-lg absolute text-black w-[400px] overflow-hidden"
      >
        <ul>
          <li v-for="(result, index) in results" :key="index">
            <button
              @click="onSelect(result)"
              class="h-10 w-full hover:bg-grey-100 flex items-center px-3"
            >
              {{ result.name }}, {{ result.country }} {{ getFlagEmoji(result.country) }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeocodeStore } from '../stores/geocode';
import { computed } from 'vue';
import { getFlagEmoji } from '@/common/helpers/get-flag-emoji';
import { ref } from 'vue';
import type { GeocodeModel } from '@/data/models/geocode-model';
import { useWeatherStore } from '../stores/weather';

const geocode = useGeocodeStore();
const weather = useWeatherStore();
const { results } = storeToRefs(geocode);

const search = ref('');

const showDropdown = computed(() => {
  return results.value && results.value.length > 0;
});

const onSearch = () => {
  if (search.value.length <= 1) {
    geocode.clearGeocode();
    return;
  }
  geocode.directGeocode(search.value);
};

const onSelect = async (result: GeocodeModel) => {
  await weather.selectByCoordinates(result.coordinates);
  geocode.clearGeocode();
  search.value = '';
};
</script>
