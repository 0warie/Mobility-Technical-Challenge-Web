import axios from 'axios';
import { useConfig } from '@/composables/config';
import type { SavedLocationModel } from '../models/saved-location-model';

const config = useConfig();

const apiAxios = axios.create({
  baseURL: config.api,
});

export class LocationsDataSource {
  async getSavedLocations() {
    const { data } = await apiAxios.get<SavedLocationModel[]>('locations');

    return data.map(({ createdUtc, ...rest }) => ({
      ...rest,
      createdUtc: new Date(createdUtc),
    }));
  }

  async saveLocation(city: string, country: string, cityId: number) {
    await apiAxios.post<SavedLocationModel[]>('locations', {
      city,
      country,
      cityId,
    });
  }

  async deleteSavedLocation(id: number) {
    await apiAxios.delete<SavedLocationModel[]>(`locations/${id}`);
  }
}
