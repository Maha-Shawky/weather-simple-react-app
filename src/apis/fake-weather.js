//TODO this url should be read from configuratio
const baseUrl = 'https://my-json-server.typicode.com/Maha-Shawky/json-placeholder';

export async function getWeather(city) {
   const url = `${baseUrl}/weather/${city.toLowerCase()}`;
   const response = await fetch(url);
   return response.json(); 
}