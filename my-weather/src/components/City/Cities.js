import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ChoosedCity from "./ChoosedCity";
import "./Cities.css";
import NewCity from "./NewCity";
import { fetchCityDataByName } from "../../Utils";

function Cities(props) {
  const [cities, setCities] = useState([]);

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

  const currentCityList = cities.map((city) => (
    <ChoosedCity
      key={city.id}
      city={city.name}
      climate={city.climate}
      temp_c={city.temperature}
      localtime={city.localtime.toLocaleTimeString("en-AU", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    />
  ));

  return (
    <Card className="cities">
      {currentCityList}
      <NewCity onShowAddCity={props.onShowAddCity} />
    </Card>
  );
}

export default Cities;
