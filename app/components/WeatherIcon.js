import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCloud,
  faCloudRain,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} className="w-iconSize" />;
    case "Rain":
      return <FontAwesomeIcon icon={faCloudRain} className="w-iconSize" />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} className="w-iconSize" />;
    case "Thunderstorms":
      return <FontAwesomeIcon icon={faBolt} className="w-iconSize" />;
    case "Haze":
      return <FontAwesomeIcon icon={faSmog} className="w-iconSize" />;
  }
}
