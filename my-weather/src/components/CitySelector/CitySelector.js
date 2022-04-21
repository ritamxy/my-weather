import React from "react";
import "./CitySelector.css";
import Modal from "../UI/Modal";
import InputCityName from "../Input/Input";

const CitySelector = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <InputCityName onClose={props.onClose} />
    </Modal>
  );
};

export default CitySelector;
