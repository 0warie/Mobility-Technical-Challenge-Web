<template>
  <section class="flex flex-col gap-4">
    <h3 class="text-2xl font-bold">Favorites</h3>
    <ul class="flex flex-row gap-3 flex-wrap">
      <li v-for="loc in locations" :key="loc.id">
        <favorite-location-item :city="loc.city" :country-code="loc.countryCode" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { DataSource } from '@/data/datasources/datasource';
import type { SavedLocationResponseModel } from '@/data/models/location';

const datasource = new DataSource();

const locations = ref<SavedLocationResponseModel[] | null>(null);

async function loadSaved() {
  locations.value = await datasource.getSavedLocations();
}
onMounted(loadSaved);
</script>
