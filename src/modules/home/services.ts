import type { Product } from "./types";

const API_URL = process.env.API_URL as string;

// Obtem todos os produtos
export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL, {
    cache: "force-cache",
  });

  const data = await response.json();

  return data.products;
};
