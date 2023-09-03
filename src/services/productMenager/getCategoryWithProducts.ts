import { BASE_URL } from '../api';

const API_URL = BASE_URL;

export const GET_PRODUCTS_BY_CATEGORY_ID = (categoryId: string) => {
  return {
    url: `${API_URL}/productManager/getAllCategories/${categoryId}`,
    options: {
      method: 'GET'
    }
  };
};
