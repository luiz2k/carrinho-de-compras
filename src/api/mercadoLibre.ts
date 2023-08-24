export default async function mercadoLibre() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=smarthphone', {
    next: { revalidate: 3600 },
  });
  const response = await data.json();

  return response.results;
}
