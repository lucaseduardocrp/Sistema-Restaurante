import { BASE_URL } from '../api';

const API_URL = BASE_URL;

export const GET_PRODUCT = (productId: string) => {
  return {
    url: `${API_URL}/productManager/getProduct/${productId}`,
    options: {
      method: 'GET'
    }
  };
};
