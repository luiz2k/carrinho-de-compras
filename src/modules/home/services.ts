import type { Product } from "../shared/types";

const API_URL = process.env.API_URL as string;

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL, {
    cache: "force-cache",
  });

  const data = response.json();

  return data;
};
