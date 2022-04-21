import React, { useState } from "react";
import "./Input.css";

const InputCityName = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  return (
    <form>
      <div className="new-city__controls">
        <div className="new-city__control">
          <label>City Name</label>
          <input
            type="text"
            placeholder="Please enter here"
            value={enteredName}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-city__actions">
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default InputCityName;
