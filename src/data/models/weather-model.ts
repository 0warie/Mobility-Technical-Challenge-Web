export interface WeatherModel {
  cityId: number;
  city: string;
  countryCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  tempC: number;
  conditions: string;
  feelsLikeC: number;
  humidity: number;
  windKph: number;
  visibility: number;
}
