<template>
  <div class="p-4 grid gap-4">
    <aside>
      <h3>Saved</h3>
      <ul>
        <li class="bg-" v-for="loc in locations" :key="loc.id">
          <button>{{ loc.city }} ({{ loc.countryCode }})</button>
          {{ loc }}
        </li>
      </ul>
    </aside>
  </div>
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
