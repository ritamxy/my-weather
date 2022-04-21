import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cities from "./components/City/Cities";
import MainCity from "./components/City/MainCity";
import CitySelector from "./components/CitySelector/CitySelector";

function App() {
  const [addCityIsShown, setAddCityIsShown] = useState(false);

  const showAddCityHandler = () => {
    setAddCityIsShown(true);
  };

  const hideAddCityHandler = () => {
    setAddCityIsShown(false);
  };

  return (
    <div className="App">
      <Header />
      <MainCity />
      <Cities onShowAddCity={showAddCityHandler} />
      {addCityIsShown && <CitySelector onClose={hideAddCityHandler} />}
    </div>
  );
}

export default App;
