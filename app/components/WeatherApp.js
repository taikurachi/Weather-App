import Header from "./Header";
import WeatherCard from "./WeatherCard";

export default function WeatherApp({ city, data }) {
  console.log(data);
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex flex-col gap-4 p-6">
        <Header />
        <WeatherCard
          city={city}
          country={data.sys.country}
          weather={data.weather[0].main}
          icon={data.weather[0].icon}
          currentTemp={data.main.temp}
          humidity={data.main.humidity}
          windSpeed={data.wind.speed}
          weatherType={data.weather[0].main}
          cloudiness={data.clouds.all}
        />
      </div>
    </div>
  );
}
