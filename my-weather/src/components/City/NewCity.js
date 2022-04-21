import "./NewCity.css";

import React from "react";

function NewCity(props) {
  return (
    <div className="new-city">
      <button onClick={props.onShowAddCity}>Add A City</button>
    </div>
  );
}

export default NewCity;
