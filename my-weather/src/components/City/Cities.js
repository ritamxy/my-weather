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
    />
  ));
  return (
    <div>
      <Card className="cities">{currentCityList}</Card>
    </div>
  );
}

export default Cities;
