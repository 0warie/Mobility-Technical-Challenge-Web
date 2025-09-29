<template>
  <div>
    <button
      :aria-selected="selected"
      @click="onSelect"
      class="button"
      :class="buttonVariant({ selected })"
    >
      <span class="flag" aria-hidden="true">{{ getFlagEmoji(item.countryCode) }}</span>
      <span class="text font-bold">{{ item.city }}, {{ item.countryCode }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { getFlagEmoji } from '@/common/helpers/get-flag-emoji';
import type { SavedLocationModel } from '@/data/models/saved-location-model';
import { cva } from 'class-variance-authority';

const props = defineProps<{
  item: SavedLocationModel;
  selected?: boolean;
}>();

const emit = defineEmits<{
  (e: 'select', item: SavedLocationModel): void;
}>();

const onSelect = () => {
  emit('select', props.item);
};

const buttonVariant = cva('rounded-lg text-white py-6 px-4 flex flex-col basis-0 shrink grow', {
  variants: {
    selected: {
      false: 'bg-gray-600',
      true: 'bg-blue-muted',
    },
  },
  defaultVariants: {
    selected: false,
  },
});
</script>

<style lang="css" scoped>
.button:hover .text {
  text-decoration: underline;
}
</style>
