import { PRODUCTS_API_URL } from "../../constants";

export const getProducts = () => {
  return fetch(PRODUCTS_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
};