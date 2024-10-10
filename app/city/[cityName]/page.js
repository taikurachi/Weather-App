import WeatherApp from "@/app/components/WeatherApp";
import { fetchWeather } from "@/app/utils/fetchWeather";

export default async function City({ params }) {
  const city = params.cityName;
  const data = await fetchWeather(city);

  return <WeatherApp city={city} data={data} />;
}
