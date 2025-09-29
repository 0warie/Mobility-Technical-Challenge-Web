<template>
  <div>
    <button @click="onSelect" class="bg-grey-600 rounded-lg py-6 px-4 flex flex-col basis-0 shrink grow cursor-pointer button">
      <span class="flag" aria-hidden="true">{{ getFlagEmoji(item.countryCode) }}</span>
      <span class="text">{{ item.city }}, {{ item.countryCode }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { getFlagEmoji } from '@/common/helpers/get-flag-emoji';
import type { SavedLocationModel } from '@/data/models/saved-location';

const props = defineProps<{
  item: SavedLocationModel;
}>();

const emit = defineEmits<{
  (e: 'select', id: number): void;
}>();

const onSelect = () => {
  emit('select', props.item.cityId);
};
</script>

<style lang="css" scoped>
.button:hover .text {
  text-decoration: underline;
}
</style>
