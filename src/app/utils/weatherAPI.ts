const API_KEY = 'd2c32cae250aac0b012d28a407a55965';
const GEOCODING_URL = 'http://api.openweathermap.org/geo/1.0/direct';
const WEATHER_URL = 'https://api.openweathermap.org/data/3.0/onecall';

/* Fetch geocoding by city and country */
export function fetchGeocodingData(
  city: string,
  country: string
): Promise<Response> {
  return fetch(
    `${GEOCODING_URL}?q=${encodeURI(city)},${encodeURI(
      country
    )}&appid=${API_KEY}`
  );
}

/* Fetch current weather based on latitude and longitude */
export function fetchWeatherData(lat: number, lon: number): Promise<Response> {
  return fetch(
    `${WEATHER_URL}?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&units=metric&appid=${API_KEY}`
  );
}
