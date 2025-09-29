import axios from 'axios';
import { useConfig } from '@/composables/config';
import type { SavedLocationResponseModel } from '../models/location';

const config = useConfig();

const apiAxios = axios.create({
  baseURL: config.api,
});

export class DataSource {
  async getSavedLocations() {
    const { data } = await apiAxios.get<SavedLocationResponseModel[]>('locations');

    return data.map(({ createdUtc, ...rest }) => ({
      ...rest,
      createdUtc: new Date(createdUtc),
    }));
  }
}
