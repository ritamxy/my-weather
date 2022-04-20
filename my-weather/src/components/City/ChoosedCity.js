import "./ChoosedCity.css";

function ChoosedCity(props) {
  return (
    <div className="choosed-city">
      <div className="choosed-city__description">
        <h2>{props.city}</h2>
        <img src={props.climate} alt="" />
        <div className="choosed-city__temperature">{props.temp_c}°C</div>
      </div>
    </div>
  );
}

export default ChoosedCity;
