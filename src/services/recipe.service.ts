import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;

export const getRecipes = async (type: string, filter: string) => {
  try {
    let url = '';

    switch (type) {
      case 'list':
        url = `${API_BASE_URL}/search.php?s=`;
        break;
      case 'ingredient':
        url = `${API_BASE_URL}/filter.php?i=${filter}`;
        break;
      case 'country':
        url = `${API_BASE_URL}/filter.php?a=${filter}`;
        break;
      case 'category':
        url = `${API_BASE_URL}/filter.php?c=${filter}`;
        break;
      case 'info':
        url = `${API_BASE_URL}/lookup.php?i=${filter}`;
        break;
      default:
        throw new Error('Invalid filter type');
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from Recipe API');
  }
};
