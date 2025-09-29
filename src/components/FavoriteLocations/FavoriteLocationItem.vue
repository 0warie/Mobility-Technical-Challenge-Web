<template>
  <div>
    <button class="bg-grey-600 rounded-lg py-6 px-4 flex flex-col basis-0 shrink grow cursor-pointer button">
      <span class="flag" aria-hidden="true">{{ getFlagEmoji(countryCode) }}</span>
      <span class="text">{{ city }}, {{ countryCode }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { getFlagEmoji } from '@/common/helpers/get-flag-emoji';

defineProps<{
  city: string;
  countryCode: string;
}>();
</script>
<style lang="css" scoped>
.button:hover .text {
  text-decoration: underline;
}
</style>
