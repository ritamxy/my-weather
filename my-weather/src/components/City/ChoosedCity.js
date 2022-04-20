import "./ChoosedCity.css";

function ChoosedCity(props) {
  return (
    <div className="choosed-city">
      <div className="choosed-city__description">
        <h2>{props.city}</h2>
        <h3>{props.climate}</h3>
        <div className="choosed-city__temperature">{props.temp_c}°C</div>
      </div>
    </div>
  );
}

export default ChoosedCity;
