import axios from "axios";

export const USERS_DATA =
  "https://64b61566f3dbab5a95c7de74.mockapi.io/userData";

export const getProducts = async (options: string = '') => {
  try {
    const { data } = await axios.get(
      `https://64b61566f3dbab5a95c7de74.mockapi.io/productsApi${options}`
    );
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
