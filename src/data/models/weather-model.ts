import type { Coordinates } from '@/common/types/coordinates';

export interface WeatherModel {
  cityId: number;
  city: string;
  countryCode: string;
  coordinates: Coordinates;
  icon: string;
  tempC: number;
  conditions: string;
  feelsLikeC: number;
  humidity: number;
  windKph: number;
  visibility: number;
}
