import { BASE_URL } from '../api';

const API_URL = BASE_URL;

export const GET_CATEGORIES = () => {
  return {
    url: `${API_URL}/productManager/getAllCategories`,
    options: {
      method: 'GET'
    }
  };
};
