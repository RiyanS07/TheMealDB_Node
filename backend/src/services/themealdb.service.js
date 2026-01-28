import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchFromMealDB = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;
  const response = await axios.get(url);
  return response.data;
};
