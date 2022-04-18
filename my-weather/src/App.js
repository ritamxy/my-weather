import "./App.css";
import Header from "./components/Layout/Header";
import Cities from "./components/City/Cities";

function App() {
  const city = [
    {
      id: "c1",
      name: "Melbourne",
      temperature: 23,
    },
    {
      id: "c2",
      name: "Sydney",
      temperature: 25,
    },
    {
      id: "e3",
      name: "Brisbane",
      temperature: 30,
    },
  ];
  return (
    <div className="App">
      <Header />
      <Cities items={city} />
    </div>
  );
}

export default App;
