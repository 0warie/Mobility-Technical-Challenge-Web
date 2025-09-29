<template>
  <button @click="onClick" :title="buttonLabel" class="size-6 flex items-center justify-center">
    <component
      aria-hidden="true"
      :is="selectedLocationSaved ? starFilled : star"
      class="star"
      :class="{ selected: selectedLocationSaved }"
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
const { selectedLocationSaved } = storeToRefs(weather);

const buttonLabel = computed(() =>
  selectedLocationSaved.value ? 'Remove from favourites' : 'Add to favourites'
);

const onClick = () => {
  weather.selectedLocationSaveToggle();
};
</script>
<style scoped>
button:hover .star,
.star.selected {
  fill: #e0af68;
}
</style>
