import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import Cities from "./components/City/Cities";

function App() {
  const [cities, setCities] = useState([]);

  const fetchCityDataByName = async (cityName) => {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=0f94d07029c14eaeb1155820221904&q=" +
        cityName
    );
    const responseData = await response.json();

    const loadedCity = {
      id: Math.random().toString(),
      name: responseData.location.name,
      climate: responseData.current.condition.text,
      temperature: responseData.current.temp_c,
    };

    console.log(responseData);

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
  }, []);

  return (
    <div className="App">
      <Header />
      <Cities items={cities} />
    </div>
  );
}

export default App;
