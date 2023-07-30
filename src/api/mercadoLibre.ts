export default async function mercadoLibre() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=smarthphone');
  const response = await data.json();

  return response.results;
}
