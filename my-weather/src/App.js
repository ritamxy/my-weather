import "./App.css";
import React from "react";
import Header from "./components/Layout/Header";
import Cities from "./components/City/Cities";
import MainCity from "./components/City/MainCity";

function App() {
  return (
    <div className="App">
      <Header />
      <MainCity />
      <Cities />
    </div>
  );
}

export default App;
