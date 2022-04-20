import "./MainCity.css";
import snowImage from "../../assets/snow-mountain.jpg";
import React, { useState, useEffect } from "react";
import { fetchCityDataByName } from "../../Utils";

const MainCity = () => {
  const [mainCity, setMainCity] = useState({ localtime: new Date() });

  useEffect(() => {
    const fetchMainCity = async () => {
      const cityName = "Toronto";

      const loadedMainCity = await fetchCityDataByName(cityName);

      setMainCity(loadedMainCity);
    };
    fetchMainCity();
  }, []);

  const city = mainCity.name;
  const temperature = mainCity.temperature;
  const climate = mainCity.climate;
  const localtime = mainCity.localtime.toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div className="snowMountain">
        <img src={snowImage} alt="" />
      </div>
      <h1 className="mainCityName">{city}</h1>
      <h1 className="localtime">{localtime}</h1>

      <span className="mainCityTemperature">
        <img className="climateIcon" src={climate} alt="" />
        <span>{temperature}°C</span>
      </span>
    </div>
  );
};

export default MainCity;
