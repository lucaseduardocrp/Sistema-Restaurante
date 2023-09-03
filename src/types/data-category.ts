import { DataProduct } from './data-product';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DataCategory {
  id?: string;
  name: string;
  banner: string;
  products?: DataProduct[];
}
