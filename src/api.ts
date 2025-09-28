import axios from 'axios';
import { useConfig } from './composables/config';

const config = useConfig();

const apiAxios = axios.create({
  baseURL: config.api,
});

export class DataSource {
  async getLocations() {
    const res = await apiAxios.get('locations');
    return res.data;
  }
}
