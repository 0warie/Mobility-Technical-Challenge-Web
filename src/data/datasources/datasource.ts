import axios from 'axios';
import { useConfig } from '@/composables/config';
import type { LocationResponseModel } from '../models/location';

const config = useConfig();

const apiAxios = axios.create({
  baseURL: config.api,
});

export class DataSource {
  async getLocations() {
    const res = await apiAxios.get<LocationResponseModel[]>('locations');
    return res.data;
  }
}
