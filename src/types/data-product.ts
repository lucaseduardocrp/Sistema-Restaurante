import { DataCategory } from './data-category';
import { DataObservation } from './data-observation';

export interface DataProduct {
  id: string;
  name: string;
  price: number;
  banner: string;
  description: string | null;
  categories?: DataCategory[];
  observations?: DataObservation[];
}
