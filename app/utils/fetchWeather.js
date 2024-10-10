export async function fetchWeather(city) {
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;
  const request = await fetch(queryURL);
  const data = await request.json();
  return data;
}
