import axios from 'axios';
import { useConfig } from '@/composables/config';
import type { WeatherModel } from '../models/weather-model';
import type { GeocodeModel } from '../models/geocode-model';

const config = useConfig();

const apiAxios = axios.create({
  baseURL: config.api,
});

export class WeatherDataSource {
  async getWeatherById(cityId: number) {
    const { data } = await apiAxios.get<WeatherModel>(`weather/current-by-id?cityId=${cityId}`);

    return data;
  }

  async getDirectGeocode(query: string) {
    const { data } = await apiAxios.get<GeocodeModel>(`geocode/direct?q=${query}`);

    return data;
  }
}
