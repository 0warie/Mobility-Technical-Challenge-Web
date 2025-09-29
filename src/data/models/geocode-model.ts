import type { Coordinates } from '@/common/types/coordinates';

export interface GeocodeModel {
  name: string;
  country: string;
  coordinates: Coordinates;
}
