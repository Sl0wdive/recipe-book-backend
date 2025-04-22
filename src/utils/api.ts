import axios from 'axios';

export const fetchFromAPI = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw new Error('API request failed');
  }
};
