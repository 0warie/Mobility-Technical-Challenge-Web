import axios from 'axios';
import { useConfig } from '@/composables/config';
import type { SavedLocationModel } from '../models/saved-location-model';
import type { WeatherModel } from '../models/weather-model';

const config = useConfig();

const apiAxios = axios.create({
  baseURL: config.api,
});

export class WeatherDataSource {
  async getSavedLocations() {
    const { data } = await apiAxios.get<SavedLocationModel[]>('locations');

    return data.map(({ createdUtc, ...rest }) => ({
      ...rest,
      createdUtc: new Date(createdUtc),
    }));
  }

  async getWeatherById(cityId: number) {
    const { data } = await apiAxios.get<WeatherModel>(`weather/current-by-id?cityId=${cityId}`);

    return data;
  }
}
