import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import Cities from "./components/City/Cities";
import MainCity from "./components/Layout/MainCity";

function App() {
  const [cities, setCities] = useState([]);
  const [mainCity, setMainCity] = useState({ localtime: new Date() });

  const fetchCityDataByName = async (cityName) => {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=0f94d07029c14eaeb1155820221904&q=" +
        cityName
    );
    const responseData = await response.json();

    const loadedCity = {
      id: Math.random().toString(),
      name: responseData.location.name,
      climate: responseData.current.condition.icon,
      temperature: responseData.current.temp_c,
      localtime: new Date(responseData.location.localtime),
    };

    return loadedCity;
  };

  useEffect(() => {
    const fetchCities = async () => {
      const cityNames = ["London", "Sydney", "Melbourne"];
      const loadedCities = [];

      for (const name of cityNames) {
        const loadedCity = await fetchCityDataByName(name);
        loadedCities.push(loadedCity);
      }

      setCities(loadedCities);
    };

    fetchCities();

    const fetchMainCity = async () => {
      const cityName = "Toronto";

      const loadedMainCity = await fetchCityDataByName(cityName);
      setMainCity(loadedMainCity);
    };
    fetchMainCity();
  }, []);

  return (
    <div className="App">
      <Header />
      <MainCity mainCityWeather={mainCity} />
      <Cities items={cities} />
    </div>
  );
}

export default App;
