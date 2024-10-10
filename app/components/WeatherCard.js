import WeatherIcon from "./WeatherIcon";
import countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
export default function WeatherCard({
  city,
  currentTemp,
  humidity,
  windSpeed,
  weatherType,
  weather,
  country,
  cloudiness,
}) {
  const countryName = countries.getName(country, "en");
  const backgroundColor = `rgb(255, 200, ${Math.max(cloudiness * 2)}, 0.3)`;
  return (
    <div
      style={{ background: backgroundColor }}
      className="p-4 rounded-lg text-center flex flex-col gap-6 relative"
    >
      <div className="flex flex-col items-center">
        <p>{`${city}, ${countryName}`}</p>
        <p className="text-6xl font-bold mt-2">{`${currentTemp.toFixed(
          1
        )}°`}</p>

        <div className="flex gap-2">
          <WeatherIcon weatherType={weatherType} />
          <p className="w-fit">{weather}</p>
        </div>
        <div className="flex gap-4 text-gray-800">
          <p>L:90</p>
          <p>H:90</p>
        </div>
      </div>
      <div className="flex flex-col m-auto">
        <p className="w-fit">Cloudiness {`${cloudiness}%`}</p>
        <p className="w-fit">Humidity: {`${humidity}%`}</p>
        <p className="w-fit">Wind speed: {`${windSpeed}km/h`}</p>
      </div>
      {/* <div className="w-16 h-16 rounded-lg bg-cyan-100 absolute p-1 flex items-center justify-center">
       
      </div> */}
    </div>
  );
}
