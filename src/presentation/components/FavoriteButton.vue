<template>
  <button :title="buttonLabel" class="size-6 flex items-center justify-center">
    <component
      aria-hidden="true"
      :is="favourite ? starFilled : star"
      class="star"
      :class="{ selected: favourite }"
    />
    <span class="sr-only">{{ buttonLabel }}</span>
  </button>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '../stores/weather';

import star from '@/assets/icons/star.svg';
import starFilled from '@/assets/icons/star_fill.svg';
import { computed } from 'vue';

const weather = useWeatherStore();
const { selectedLocation, savedLocations } = storeToRefs(weather);

const favourite = computed(() =>
  savedLocations.value?.some((location) => location.cityId === selectedLocation.value?.cityId)
);

const buttonLabel = computed(() =>
  favourite.value ? 'Remove from favourites' : 'Add to favourites'
);
</script>
<style scoped>
button:hover .star,
.star.selected {
  fill: #e0af68;
}
</style>
