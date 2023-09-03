/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DataObservation {
  id: string;
  name: string;
  banner: string;
  description: string | null;
  products?: any[];
}
