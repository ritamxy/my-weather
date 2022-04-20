import "./MainCity.css";
import snowImage from "../../assets/snow-mountain.jpg";

const MainCity = (props) => {
  const city = props.mainCityWeather.name;
  const temperature = props.mainCityWeather.temperature;
  const climate = props.mainCityWeather.climate;
  return (
    <div>
      <div className="snowMountain">
        <img src={snowImage} alt="" />
      </div>
      <h1 className="mainCityName">{city}</h1>

      <span className="mainCityTemperature">
        <img className="climateIcon" src={climate} alt="" />
        {temperature}°C
      </span>
    </div>
  );
};

export default MainCity;