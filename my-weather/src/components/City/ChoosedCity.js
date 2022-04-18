import "./ChoosedCity.css";

function ChoosedCity(props) {
  return (
    <div className="choosed-city">
      <div className="choosed-city__description">
        <h2>{props.name}</h2>
        <div className="choosed-city__temperature">{props.temperature}°C</div>
      </div>
    </div>
  );
}

export default ChoosedCity;
