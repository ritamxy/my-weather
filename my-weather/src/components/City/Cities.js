import Card from "../UI/Card";
import ChoosedCity from "./ChoosedCity";
import "./Cities.css";

function Cities(props) {
  return (
    <div>
      <Card className="cities">
        <ChoosedCity
          name={props.items[0].name}
          temperature={props.items[0].temperature}
        />
        <ChoosedCity
          name={props.items[1].name}
          temperature={props.items[1].temperature}
        />
        <ChoosedCity
          name={props.items[2].name}
          temperature={props.items[2].temperature}
        />
      </Card>
    </div>
  );
}

export default Cities;
