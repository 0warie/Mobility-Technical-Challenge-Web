import axios from 'axios';
import { useConfig } from '@/composables/config';
import type { SavedLocationModel } from '../models/saved-location';

const config = useConfig();

const apiAxios = axios.create({
  baseURL: config.api,
});

export class DataSource {
  async getSavedLocations() {
    const { data } = await apiAxios.get<SavedLocationModel[]>('locations');

    return data.map(({ createdUtc, ...rest }) => ({
      ...rest,
      createdUtc: new Date(createdUtc),
    }));
  }
}
