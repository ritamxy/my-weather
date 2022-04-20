import Card from "../UI/Card";
import ChoosedCity from "./ChoosedCity";
import "./Cities.css";

function Cities(props) {
  const currentCityList = props.items.map((item) => (
    <ChoosedCity
      key={item.id}
      city={item.name}
      climate={item.climate}
      temp_c={item.temperature}
      localtime={item.localtime.toLocaleTimeString("en-AU", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    />
  ));
  return <Card className="cities">{currentCityList}</Card>;
}

export default Cities;
