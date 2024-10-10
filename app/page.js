import { fetchWeather } from "./utils/fetchWeather";
import WeatherApp from "./components/WeatherApp";

export default async function App({ city = "Seoul" }) {
  const data = await fetchWeather(city);
  return <WeatherApp city={city} data={data} />;
}
